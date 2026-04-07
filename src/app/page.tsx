"use client";

import { useState, useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import LangToggle from "@/components/LangToggle";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import { Lang } from "@/types";

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const [navVisible, setNavVisible] = useState(true);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [burgerLayout, setBurgerLayout] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav lang={lang} visible={navVisible} onBurgerChange={setBurgerOpen} onBurgerLayout={setBurgerLayout} />
      <LangToggle lang={lang} setLang={setLang} navVisible={navVisible} burgerOpen={burgerOpen} />
      <main>
        <Hero lang={lang} burgerLayout={burgerLayout} />
        <Philosophy lang={lang} />
        <Classes lang={lang} />
        <Testimonials lang={lang} />
        <Booking lang={lang} />
      </main>
      <Footer />
    </>
  );
}
