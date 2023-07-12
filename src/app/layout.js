import "./globals.scss";
import { Inter, KoHo } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const koho = KoHo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Architrave",
  description:
    "Архітекртура, проектування будівель, споруд та індивідуальних житлових будинків.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={koho.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}