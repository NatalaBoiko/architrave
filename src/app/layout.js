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
    "Архітектура, проектування будівель, споруд та індивідуальних житлових будинків Україна. Проектна документація, Архітектурні рішення, Проект будинку. АРХІТРАВ",
  keywords: [
    "Архітектурні рішення",
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
      "Потрібен проект особняка, будинку чи споруди? - Переходьте на сайт!",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Творча майстерня АРХІТРАВ",
    images: [
      {
        url: "/opengraph-image-400x300.jpg",
        type: "image/jpg",
        width: 400,
        height: 300,
        alt: "АРХІТРАВ",
      },
      {
        url: "/twitter-image-800x600.jpg",
        type: "image/jpg",
        width: 800,
        height: 600,
        alt: "АРХІТРАВ",
      },
      {
        url: "/opengraph-image-1200x630.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "АРХІТРАВ",
      },
    ],
    locale: "uk-UA",
    type: "website",
  },
  author: "Творча майстерня АРХІТРАВ",
  generator: "Творча майстерня АРХІТРАВ",
  applicationName: "АРХІТРАВ",
  referrer: "origin-when-cross-origin",
  creator: "Творча майстерня АРХІТРАВ",
  publisher: "Творча майстерня АРХІТРАВ",
  appLinks: {
    ios: {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      app_name: "АРХІТРАВ",
    },
    android: {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      package: process.env.NEXT_PUBLIC_BASE_URL,
      app_name: "АРХІТРАВ",
    },
    web: {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      should_fallback: true,
    },
  },
  assets: [process.env.NEXT_PUBLIC_BASE_URL],
};

const dataSchema = [
  {
    id: "Organization",
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Творча майстерня АРХІТРАВ",
    image: "/favicon-16x16.png",
    description: "Проектування будівель та споруд Україна",
    image: "/favicon-32x32.png",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    logo: "/apple-icon.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+380503738460",
      email: "ppnaz@ukr.net",
    },
  },
  {
    id: "LocalBusiness",
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Творча майстерня АРХІТРАВ",
    image: "/архітрав.jpg",
    telephone: "+380503738460",
    email: "ppnaz@ukr.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Манюха, 19",
      addressLocality: "м. Івано-Франківськ",
    },
  },
];

export default function RootLayout({ children }) {
  const jsonLd = dataSchema.map((el) => el);

  return (
    <html lang="uk-UA">
      <body className={koho.className}>
        <SiteProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Header />
          <main>{children}</main>
          <DynamicFooter caveat={caveat} />
          <DynamicPopUp>
            <DynamicApplication />
          </DynamicPopUp>
        </SiteProvider>
      </body>
    </html>
  );
}
