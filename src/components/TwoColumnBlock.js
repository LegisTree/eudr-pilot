import Link from "next/link";
import Image from "./Image";

export default function TwoColumnBlock(blockData) {
  const content = blockData.blockData;

  const rowOrder = content.reversed ? "md:flex-row-reversed" : "md:flex-row";
  return (
    <div className={`flex ${rowOrder} w-full flex-col w-full min-h-[20rem]`}>
      <div className="image w-full md:w-1/3 p-4 pl-24">
        <Image
          src={content.imgSource}
          alt={content.imgAlt}
          additionalClasses=""
        />
      </div>
      <div className="text w-full md:w-2/3 p-4 pl-24 relative">
        {content.title && <h3 className="">{content.title}</h3>}
        <p>Hallo hier wat tekst</p>
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
