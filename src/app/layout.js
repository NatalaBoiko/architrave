import "./globals.scss";
import { KoHo, Caveat } from "next/font/google";
import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";
// import PopUp from "@/components/PopUp/PopUp";
// import Application from "@/components/PopUp/Application/Application";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("@/components/Footer/Footer"));
const DynamicPopUp = dynamic(() => import("@/components/PopUp/PopUp"));
const DynamicApplication = dynamic(() =>
  import("@/components/PopUp/Application/Application")
);

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Творча майстерня АРХІТРАВ",
  description:
    "Архітекртура, проектування будівель, споруд та індивідуальних житлових будинків Україна. Проектна документація, Архітектурні решення, Проект будинку. АРХІТРАВ",
  keywords: [
    "Архітектурні решення",
    "Розробка ескізного проєкту",
    "Генплан",
    "Будинок багатоцільового призначення",
    "Проектна документація",
    "Архітектура споруд",
    "Проект будинку",
    "АРХІТРАВ",
  ],
  themeColor: "#171717",
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SC,
  },
  openGraph: {
    title: "Творча майстерня АРХІТРАВ",
    description:
      "Хочете дізнатись про стадії проектування будинків, будівель і споруд? - Переходьте!",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Творча майстерня АРХІТРАВ",
    locale: "en_GB",
    type: "website",
  },
  author: "Творча майстерня АРХІТРАВ",
  generator: "Творча майстерня АРХІТРАВ",
  applicationName: "Творча майстерня АРХІТРАВ",
  referrer: "origin-when-cross-origin",
  creator: "Творча майстерня АРХІТРАВ",
  publisher: "Творча майстерня АРХІТРАВ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={koho.className}>
        <SiteProvider>
          <Header />
          <main>{children}</main>
          {/* <Footer caveat={caveat} /> */}
          <DynamicFooter caveat={caveat} />
          {/* <PopUp> */}
          <DynamicPopUp>
            {/* <Application /> */}
            <DynamicApplication />
          </DynamicPopUp>
          {/* </PopUp> */}
        </SiteProvider>
      </body>
    </html>
  );
}
