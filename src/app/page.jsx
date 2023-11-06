// import ToTopBtn from "@/components/ToTopBtn/ToTopBtn";
// import About from "@/sections/About/About";
// import Contacts from "@/sections/Contacts/Contacts";
// import Gallery from "@/sections/Gallery/Gallery";
// import Hero from "@/sections/Hero/Hero";
// import Suggestions from "@/sections/Suggestions/Suggestions";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/sections/Hero/Hero"));
const DynamicAbout = dynamic(() => import("@/sections/About/About"));
const DynamicSuggestions = dynamic(() =>
  import("@/sections/Suggestions/Suggestions")
);
const DynamicGallery = dynamic(() => import("@/sections/Gallery/Gallery"));
const DynamicContacts = dynamic(() => import("@/sections/Contacts/Contacts"));
const DynamicToTopBtn = dynamic(() => import("@/components/ToTopBtn/ToTopBtn"));

export default function Home() {
  return (
    <>
      <DynamicHero />
      <DynamicAbout />
      <DynamicSuggestions />
      <DynamicGallery />
      <DynamicContacts />
      <DynamicToTopBtn />
    </>
  );
}
