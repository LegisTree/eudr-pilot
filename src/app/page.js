import Image from "next/image";
import Hero from "../components/Hero";
import Card from "../components/Card";
import TwoColumnBlock from "@/components/TwoColumnBlock";
import { cards, block } from "../data/content";

export default function Home() {
  console.log(block);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
      <div className="flex flex-col md:flex-row justify-between mx-24">
        <Card cardData={cards.card1}></Card>
        <Card cardData={cards.card2}></Card>
      </div>
      <TwoColumnBlock blockData={block.block1}></TwoColumnBlock>
    </div>
  );
}
