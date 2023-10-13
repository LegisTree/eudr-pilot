import Link from "next/link";
import Image from "@/components/Image";

export default function Header() {
  return (
    <header className="flex flex-row justify-between py-4 px-6 bg-white border-b-slate-100 border-b-[1px]">
      <div className="m-4 font-bold text-xl">
        <Link href="/">LegisTree</Link>
      </div>
      <nav className="p-4">
        <Link
          href="/eudr"
          className="px-6 pb-2 font-semibold hover:border-b-2 hover:border-b-green-500"
        >
          EUDR
        </Link>
        <Link
          href="/tool"
          className="px-6 pb-2 font-semibold hover:border-b-2 hover:border-b-green-500"
        >
          Tool
        </Link>
        <Link
          href="/about"
          className="px-6 pb-2  font-semibold hover:border-b-2 hover:border-b-green-500"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
