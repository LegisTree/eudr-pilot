import Image from "next/image";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  const cards = {
    card1: {
      title: "Kaart 1",
      text: "Hier een korte tekst over het eerste handelingsperspectief. Zo tadaa.",
      imgSource: "/images/tree.jpg",
      buttonText: "Klik hier",
      buttonLink: "./about",
    },
    card2: {
      title: "Kaart 2",
      text: "Hier een korte tekst over het tweede handelingsperspectief. Zo tadaa. Deze tekst is wel wat langer. Hier een korte tekst over het tweede handelingsperspectief. Zo tadaa. Deze tekst is wel wat langer. Hier een korte tekst over het tweede handelingsperspectief. Zo tadaa. Deze tekst is wel wat langer. Hier een korte tekst over het tweede handelingsperspectief. Zo tadaa. Deze tekst is wel wat langer.",
      imgSource: "/images/tree.jpg",
      buttonText: "Nee, klik hier",
      buttonLink: "./eudr",
    },
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
      <div className="flex flex-col md:flex-row justify-between mx-24">
        <Card cardData={cards.card1}></Card>
        <Card cardData={cards.card2}></Card>
      </div>
    </div>
  );
}
