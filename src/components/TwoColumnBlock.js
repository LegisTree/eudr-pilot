export default function TwoColumnBlock(blockData) {
  const rowOrder = blockData.reversed ? "flex-row-reversed" : "flex-row";
  return (
    <div className={`flex ${rowOrder} w-full`}>
      <div className="image w-full md:w-1/3">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={blockData.imgSource}
          alt={blockData.imgAlt}
          width="100%"
          height="auto"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="text w-full md:w-2/3">
        {blockData.title && <h3>{blockData.title}</h3>}
        <p>Hallo hier wat tekst</p>
        {blockData.buttonLink && (
          <Link className="btn-blue" href={blockData.buttonLink}>
            {blockData.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
