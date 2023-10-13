export default function Image({ src, alt, additionalClasses }) {
  return (
    <span>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`}
        alt={alt}
        width="100%"
        height="auto"
        className={`object-cover object-center h-full w-full  ${additionalClasses}`}
      />
    </span>
  );
}
