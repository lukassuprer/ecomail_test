import { useQuery } from "@tanstack/react-query";
import { Card } from "./types/card";
import { CardsSchema } from "./schemas/card";
import CardComponent from "./components/Card";
import { useState, useEffect } from "react";
import TopSectionLarge from "./components/TopSectionLarge";
import TopSectionSmall from "./components/TopSectionSmall";

/**
 * Main App component to display the card components
 * 
 * @returns Main App component
 */

function App() {
  // State to store card data fetched from the API
  const [cardData, setCardData] = useState<Card[]>([]);
  // State to control the number of cards displayed initially and after "Load more"
  const [displayCount, setDisplayCount] = useState(6);
  // State to track the currently active button ('best' or 'worst')
  const [activeButton, setActiveButton] = useState<'best' | 'worst'>('best');
  const numberOfCardsToLoad = 6; // Number of cards to load each time "Load more" is clicked

  // Function to handle sorting of cards based on the selected rating ('best' or 'worst')
  const ratingButton = (rating: 'best' | 'worst') => {
    const sortedData = [...cardData].sort((a, b) => {
      return rating === 'best' ? b.rating.rate - a.rating.rate : a.rating.rate - b.rating.rate;
    });
    setCardData(sortedData);
    setActiveButton(rating);
  };

  // Function to load more cards when "Load more" button is clicked
  const loadMoreCards = () => {
    setDisplayCount(prevCount => prevCount + numberOfCardsToLoad);
  };

  const API_URL = process.env.API_URL; // API URL from environment variables

  if (!API_URL) {
    throw new Error("API_URL is not defined. Please set it in your environment variables.");
  }

  // Function to fetch cards from the API and validate the response data
  const getCards = () =>
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => CardsSchema.parse(data));

  // React Query hook to fetch and cache card data
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  // Effect to set the card data state when data is fetched successfully
  useEffect(() => {
    if (data && cardData.length === 0) {
      setCardData(data);
    }
  }, [data, cardData.length]);

  // Render loading, fetching, or error states
  if (isLoading) return <p>Data is loading...</p>;
  if (isFetching) return <p>Data is fetching...</p>;
  if (error) {
    console.error(error);
    return <p>There was an error when fetching your data.</p>;
  }

  return (
    <main className="w-full flex flex-row flex-wrap bg-gradient-to-b from-primary-gradient to-white xl:px-[0px] lg:px-[60px] px-[28px]">
      {/* Render screen top section for large devices */}
      <TopSectionLarge ratingButton={ratingButton} activeButton={activeButton} />
      {/* Render screen top section for small devices */}
      <TopSectionSmall ratingButton={ratingButton} activeButton={activeButton} />
      {/* Render card components */}
      <div className="w-full flex flex-row flex-wrap lg:justify-between justify-center gap-[32px]">
        {cardData.slice(0, displayCount).map((card: Card) => (
          <CardComponent
            key={card.id}
            card={{ ...card, category: card.category.replace(/\s+/g, '-') }}
          />
        ))}
      </div>
      {/* Load more button */}
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
