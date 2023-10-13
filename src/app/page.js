import Hero from "../components/Hero";
import Card from "../components/Card";
import TwoColumnBlock from "@/components/TwoColumnBlock";
import { cards, block } from "../data/content";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
      <div className="flex flex-col md:flex-row justify-between w-full mx-24">
        <div className="w-full md:w-1/2 flex flex-row justify-center align-center">
          <Card cardData={cards.card1}></Card>
        </div>
        <div className="w-full md:w-1/2 flex flex-row justify-center align-center">
          <Card cardData={cards.card2}></Card>
        </div>
      </div>
      <TwoColumnBlock blockData={block.block1}></TwoColumnBlock>
    </div>
  );
}
