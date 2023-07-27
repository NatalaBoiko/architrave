import "./globals.scss";
import { KoHo, Caveat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";

const koho = KoHo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Architrave",
  description:
    "Архітекртура, проектування будівель, споруд та індивідуальних житлових будинків.",
  alternates: {
    canonical: "https://www.architrave.online/",
  },
};

{
  /* <link rel='canonical' href='... the page URL ...' /> */
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={koho.className}>
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer caveat={caveat} />
        </SiteProvider>
      </body>
    </html>
  );
}
