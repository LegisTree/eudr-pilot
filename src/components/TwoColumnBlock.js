import Link from "next/link";
import Image from "./Image";

export default function TwoColumnBlock({ blockData }) {
  const content = blockData;

  const rowOrder = content.reversed ? "md:flex-row-reversed" : "md:flex-row";
  return (
    <div className={`flex ${rowOrder} w-full flex-col w-full min-h-[20rem]`}>
      <div className="image w-full md:w-1/2 lg:w-1/3 p-4 md:pl-24">
        <Image
          src={content.imgSource}
          alt={content.imgAlt}
          additionalClasses=""
        />
      </div>
      <div className="text w-full min-h-10rem md:w-1/2 lg:w-2/3 p-4 pl-4 md:pl-24 relative">
        <div className="mb-16">
          {content.title && <h3 className="">{content.title}</h3>}
          <p>{content.text}</p>
        </div>

        {content.buttonLink && (
          <Link
            className="btn-blue absolute bottom-8"
            href={content.buttonLink}
          >
            {content.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
