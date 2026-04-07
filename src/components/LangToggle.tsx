"use client";

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

export default function LangToggle({
  lang,
  setLang,
  navVisible,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  navVisible: boolean;
}) {
  const toggle = () => setLang(lang === "de" ? "en" : "de");

  return (
    <button
      onClick={toggle}
      title={lang === "de" ? "Switch to English" : "Wechsle zu Deutsch"}
      className="fixed top-[105px] right-6 z-40 w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/50 hover:scale-110 hover:ring-white/80 active:scale-90"
      style={{
        transform: navVisible ? "translateY(0)" : "translateY(-160px)",
        transition: "transform 0.3s ease, scale 0.15s ease",
      }}
    >
      {lang === "de" ? <FlagDE /> : <FlagGB />}
    </button>
  );
}
