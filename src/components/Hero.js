import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[20rem]">
      <div className="flex flex-col items-center w-full md:w-1/2 p-4 pl4 md:pl-12 lg:pl-24">
        <div className="pl-4">
          <h1>Do you know if your product is legal by EU law?</h1>
          <p className="text-xl">
            All info and help you need for complying to EUDR.
          </p>
          <ul className="list-disc ml-8 mt-8 text-lg">
            <li>Easy tool to comply</li>
            <li>Assured of up-to-date data</li>
            <li>Integrations with all the data you need</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-full relative flex flex-row justify-center">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/tree.jpg`}
            alt="tree"
            width="100%"
            height="auto"
            className="object-cover object-center h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
