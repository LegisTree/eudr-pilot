import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between p-8 bg-white">
      <div className="p-4 ">
        <Link href="/">Logo</Link>
      </div>
      <nav className="p-4">
        <Link href="/eudr" className="p-4">
          EUDR
        </Link>
        <Link href="/tool" className="p-4">
          Tool
        </Link>
        <Link href="/about" className="p-4">
          About
        </Link>
      </nav>
    </header>
  );
}
