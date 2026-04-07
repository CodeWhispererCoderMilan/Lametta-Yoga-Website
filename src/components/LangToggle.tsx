"use client";

import { useState, useEffect, useRef } from "react";
import { Lang } from "@/types";

function FlagDE() {
  return (
    <svg
      viewBox="0 0 5 3"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <rect width="5" height="1" y="0" fill="#000000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const SIZE   = 48;  // circle diameter
const GAP    = 12;  // gap below navbar when fully out
const SLIVER = 6;   // px visible below navbar when hidden (for hover target)

const topFor = (navH: number, vis: "hidden" | "peek" | "out") => ({
  hidden: navH - SIZE + SLIVER,
  peek:   navH - SIZE / 2,
  out:    navH + GAP,
}[vis]);

export default function LangToggle({
  lang,
  setLang,
  navVisible,
  burgerOpen,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  navVisible: boolean;
  burgerOpen: boolean;
}) {
  const [navH, setNavH]     = useState(93);
  const [topDur, setTopDur] = useState("0s");
  const [vis, setVis]       = useState<"hidden" | "peek" | "out">("out");

  const prevNavH    = useRef(93);
  const isHovering  = useRef(false);
  const stayOut     = useRef(true);
  const stayTimer   = useRef<ReturnType<typeof setTimeout>>();

  // Track navbar height
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const initial = Math.round(header.getBoundingClientRect().height);
    setNavH(initial);
    prevNavH.current = initial;
    requestAnimationFrame(() => setTopDur("0.15s"));

    // Start fully visible, retract after 3 s
    stayTimer.current = setTimeout(() => {
      stayOut.current = false;
      if (!isHovering.current) setVis("hidden");
    }, 3000);

    const ro = new ResizeObserver(([entry]) => {
      const h = Math.round(entry.contentRect.height);
      if (h === prevNavH.current) return;
      const growing = h > prevNavH.current;
      setTopDur(growing ? "0.45s" : "0.15s");
      prevNavH.current = h;
      setNavH(h);
      if (growing) setTimeout(() => setTopDur("0.15s"), 500);
    });

    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Come fully out when burger dropdown opens, retract when it closes
  useEffect(() => {
    if (burgerOpen) {
      setVis("out");
    } else {
      if (!isHovering.current && !stayOut.current) setVis("hidden");
    }
  }, [burgerOpen]);

  const retract = () => {
    if (!stayOut.current && !burgerOpen) setVis("hidden");
  };

  const top = !navVisible ? -(SIZE + 20) : topFor(navH, vis);

  return (
    <button
      onMouseEnter={() => {
        isHovering.current = true;
        if (vis !== "out") setVis("peek");
      }}
      onMouseLeave={() => {
        isHovering.current = false;
        retract();
      }}
      onClick={() => {
        setLang(lang === "de" ? "en" : "de");
        setVis("out");
        // Stay fully out for 1.2 s after clicking before retracting
        stayOut.current = true;
        clearTimeout(stayTimer.current);
        stayTimer.current = setTimeout(() => {
          stayOut.current = false;
          if (!isHovering.current && !burgerOpen) setVis("hidden");
        }, 1200);
      }}
      title={lang === "de" ? "Switch to English" : "Wechsle zu Deutsch"}
      className="fixed right-6 z-40 w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/50 hover:ring-white/80"
      style={{
        top,
        transition: `top ${topDur} ease`,
      }}
    >
      {lang === "de" ? <FlagDE /> : <FlagGB />}
    </button>
  );
}
