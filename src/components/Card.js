import Link from "next/link";
import Image from "./Image";

export default function Card({ cardData }) {
  return (
    <div className="group flex relative rounded flex-col items-center w-full md:w-5/12 min-h-96  m-8 h-[360px] xl:h-[400px] overflow-hidden">
      <span className="overflow-hidden text-center relative w-full h-1/2">
        <Image
          src={cardData.imgSource}
          alt={cardData.imgAlt}
          additionalClasses="rounded-t-lg duration-300 ease-in group-hover:brightness-100 group-hover:scale-110 max-w-none max-h-none brightness-90 overflow-hidden"
        ></Image>
      </span>
      <span className="flex flex-col items-center h-1/2 mt-4 gap-2 overflow-hidden">
        <span className="h-3/4 flex flex-col items-center text-center">
          <h3 className="block font-bold line-clamp-2">{cardData.title}</h3>
          <p className="line-clamp-3 ">{cardData.text}</p>
        </span>

        <span className="h-1/4">
          <Link className="btn-blue" href={cardData.buttonLink}>
            {cardData.buttonText}
          </Link>
        </span>
      </span>
    </div>
  );
}
