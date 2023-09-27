import Link from "next/link";
import Image from "next/image";

export default function Card({ cardData }) {
  return (
    <div className="flex-col  min-h-96  mb-4 h-[360px] xl:h-[400px] overflow-hidden">
      <div className="w-3/4 h-1/3">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={cardData.imgSource}
          alt="tree"
          width="100%"
          height="auto"
          className="object-cover object-center h-full w-full rounded-t-lg duration-300 ease-in group-hover:brightness-100 group-hover:scale-110 max-w-none max-h-none brightness-90 overflow-hidden"
        />
      </div>
      <h3>{cardData.title}</h3>
      <p>{cardData.text}</p>
      <Link className="btn-blue" href={cardData.buttonLink}>
        {cardData.buttonText}
      </Link>
    </div>
  );
}
