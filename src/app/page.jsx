// import Image from "next/image";
import ToTopBtn from "@/components/ToTopBtn/ToTopBtn";
import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Gallery from "@/sections/Gallery/Gallery";
import Hero from "@/sections/Hero/Hero";
import Suggestions from "@/sections/Suggestions/Suggestions";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suggestions />
      <Gallery />
      <Contacts />
      <ToTopBtn />
    </>
  );
}
