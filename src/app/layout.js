import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "../components/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "LegisTree | EUDR software",
  description: "Make the EUDR your own",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header></Header>
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
