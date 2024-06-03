import { useQuery } from "@tanstack/react-query";
import { Card } from "./types/card";
import { CardsSchema } from "./schemas/card";
import CardComponent from "./components/Card";

function App() {
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

  if (isLoading) return <p>Data is loading...</p>;

  if (isFetching) return <p>Data is fetching...</p>;

  if (error) {
    console.error(error);
    return <p>There was an error when fetching your data.</p>;
  }

  return (
    <main className="w-screen flex flex-row flex-wrap justify-between bg-gradient-to-b from-primary-gradient to-white gap-[32px]">
      {data?.map((card: Card) => (
        <CardComponent
          key={card.id}
          card={{
            ...card,
            category: card.category.replace(/\s+/g, '-')
          }}
        />
      ))}
    </main>
  );
}

export default App;