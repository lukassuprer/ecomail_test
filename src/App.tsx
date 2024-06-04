import { useQuery } from "@tanstack/react-query";
import { Card } from "./types/card";
import { CardsSchema } from "./schemas/card";
import CardComponent from "./components/Card";
import { useState, useEffect } from "react";
import TopSectionLarge from "./components/TopSectionLarge";
import TopSectionSmall from "./components/TopSectionSmall";

function App() {
  const [cardData, setCardData] = useState<Card[]>([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [activeButton, setActiveButton] = useState<'best' | 'worst'>('best');
  const numberOfCardsToLoad = 6;

  const ratingButton = (rating: string) => {
    let sortedData = [];
    if (rating === 'best') {
      // Sort by rating.rate from best to worst
      sortedData = [...cardData].sort((a, b) => b.rating.rate - a.rating.rate);
    } else {
      // Sort by rating.rate from worst to best
      sortedData = [...cardData].sort((a, b) => a.rating.rate - b.rating.rate);
    }
    setCardData(sortedData);
    setActiveButton(rating as 'best' | 'worst');
  };

  const loadMoreCards = () => {
    setDisplayCount(prevCount => prevCount + numberOfCardsToLoad);
  };

  const API_URL = process.env.API_URL;

  if (!API_URL) {
    throw new Error("API_URL is not defined. Please set it in your environment variables.");
  }

  const getCards = () =>
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        return CardsSchema.parse(data);
      });

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  useEffect(() => {
    if (data && cardData.length === 0) {
      setCardData(data);
    }
  }, [data]);

  if (isLoading) return <p>Data is loading...</p>;

  if (isFetching) return <p>Data is fetching...</p>;

  if (error) {
    console.error(error);
    return <p>There was an error when fetching your data.</p>;
  }

  return (
    <main className="w-full flex flex-row flex-wrap justify-between bg-gradient-to-b from-primary-gradient to-white xl:px-[0px] lg:px-[60px] px-[28px]">
      <TopSectionLarge ratingButton={ratingButton} activeButton={activeButton} />
      <TopSectionSmall ratingButton={ratingButton} activeButton={activeButton} />
      <div className="w-full flex flex-row flex-wrap lg:justify-between gap-[32px]">
        {cardData.slice(0, displayCount).map((card: Card) => (
          <CardComponent
            key={card.id}
            card={{
              ...card,
              category: card.category.replace(/\s+/g, '-')
            }}
          />
        ))}
      </div>
      {displayCount < cardData.length && (
        <div className="w-full flex justify-center py-[120px] rounded-[6px]">
          <button className="font-bold bg-secondary-button text-primary-text rounded-[6px] px-[20px] py-[10px]" onClick={loadMoreCards}>
            Načíst další
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
