import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
