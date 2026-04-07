"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Lang } from "@/types";

const t = {
  de: [
    { label: "HOI",     href: "#hoi" },
    { label: "STORY",   href: "#philosophie" },
    { label: "KLASSEN", href: "#klassen" },
    { label: "STIMMEN", href: "#stimmen" },
    { label: "BUCHEN",  href: "#buchen" },
  ],
  en: [
    { label: "HI",      href: "#hoi" },
    { label: "STORY",   href: "#philosophie" },
    { label: "CLASSES", href: "#klassen" },
    { label: "REVIEWS", href: "#stimmen" },
    { label: "BOOKING", href: "#buchen" },
  ],
};

// links[0]=HOI(a)  links[1]=STORY(b)  links[2]=KLASSEN(c)  links[3]=STIMMEN(d)  links[4]=BUCHEN(e)
// s = social icons grid area (state 4 only)
const AREAS = {
  s2: '"b c d e" "a . . ."',  // HOI under STORY
  s3: '"b d e" "a c ."',       // + KLASSEN under STIMMEN
  s4: '"b d e" "a c s"',       // + socials (s) under BUCHEN (e)
};

// Header chrome = px-8(32) + logo(60) + gap(16) + gap(16) + px-8(32) = 156px
// This is the space occupied by everything except the measured probe content.
const CHROME = 156;

function YouTubeIcon({ size = 44 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ size = 44 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

const linkCls = "font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150 leading-none text-[44px]";
const iconLinkCls = "text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150";

function NavLink({ link, area, onClick }: { link: { label: string; href: string }; area?: string; onClick?: () => void }) {
  return (
    <a href={link.href} className={linkCls} style={area ? { gridArea: area } : undefined} onClick={onClick}>
      {link.label}
    </a>
  );
}

function SocialIcons({ gap = "gap-4" }: { gap?: string }) {
  return (
    <div className={`flex items-center ${gap}`}>
      <a href="https://www.youtube.com/@lamettayoga" target="_blank" rel="noopener noreferrer" className={iconLinkCls} aria-label="YouTube">
        <YouTubeIcon />
      </a>
      <a href="https://www.instagram.com/lamettayoga" target="_blank" rel="noopener noreferrer" className={iconLinkCls} aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="https://www.tiktok.com/@lamettayoga" target="_blank" rel="noopener noreferrer" className={iconLinkCls} aria-label="TikTok">
        <TikTokIcon />
      </a>
    </div>
  );
}

// Three fixed-size squares standing in for social icons in measurement probes
function IconProxy() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div style={{ width: 44, height: 44 }} />
      <div style={{ width: 40, height: 40 }} />
      <div style={{ width: 40, height: 40 }} />
    </div>
  );
}

const ga = (i: number) => String.fromCharCode(97 + i); // 0→a, 1→b, ...

const gridStyle = (areas: string, cols: number): React.CSSProperties => ({
  display: "grid",
  gridTemplateAreas: areas,
  gridTemplateColumns: `repeat(${cols}, auto)`,
  columnGap: "2rem",
});

export default function Nav({
  lang,
  visible,
  onBurgerChange,
  onBurgerLayout,
}: {
  lang: Lang;
  visible: boolean;
  onBurgerChange?: (open: boolean) => void;
  onBurgerLayout?: (isBurger: boolean) => void;
}) {
  const [state, setState] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [open, setOpen] = useState(false);

  const toggleBurger = () => {
    const next = !open;
    setOpen(next);
    onBurgerChange?.(next);
  };
  const links = t[lang];

  // One probe per nav state — rendered off-screen to measure natural content width
  const p1 = useRef<HTMLDivElement>(null);
  const p2 = useRef<HTMLDivElement>(null);
  const p3 = useRef<HTMLDivElement>(null);
  const p4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function check() {
      const avail = document.documentElement.clientWidth - CHROME;
      const [w1, w2, w3, w4] = [p1, p2, p3, p4].map(r => r.current?.offsetWidth ?? Infinity);
      const next = (
        w1 <= avail ? 1
        : w2 <= avail ? 2
        : w3 <= avail ? 3
        : w4 <= avail ? 4
        : 5
      ) as 1 | 2 | 3 | 4 | 5;
      setState(next);
      onBurgerLayout?.(next === 5);
    }
    const ro = new ResizeObserver(check);
    ro.observe(document.documentElement);
    check();
    return () => ro.disconnect();
  }, [links]);

  useEffect(() => {
    if (state !== 5 && open) {
      setOpen(false);
      onBurgerChange?.(false);
    }
  }, [state]);

  return (
    <>
      {/*
        Measurement probes — fixed 500px above the viewport, invisible.
        Each one represents the full right-side content of a nav state at its
        natural width so we can compare against available space before any clipping.
      */}
      <div
        aria-hidden
        style={{
          position: "fixed", top: -500, left: 0,
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          visibility: "hidden", pointerEvents: "none",
        }}
      >
        {/* Probe 1 – all 5 links in a row + social icons */}
        <div ref={p1} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "2rem" }}>
            {links.map(l => (
              <span key={l.href} className={linkCls} style={{ whiteSpace: "nowrap" }}>{l.label}</span>
            ))}
          </div>
          <IconProxy />
        </div>

        {/* Probe 2 – state-2 grid + social icons */}
        <div ref={p2} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={gridStyle(AREAS.s2, 4)}>
            {links.map((l, i) => (
              <span key={l.href} className={linkCls} style={{ gridArea: ga(i), whiteSpace: "nowrap" }}>{l.label}</span>
            ))}
          </div>
          <IconProxy />
        </div>

        {/* Probe 3 – state-3 grid + social icons */}
        <div ref={p3} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={gridStyle(AREAS.s3, 3)}>
            {links.map((l, i) => (
              <span key={l.href} className={linkCls} style={{ gridArea: ga(i), whiteSpace: "nowrap" }}>{l.label}</span>
            ))}
          </div>
          <IconProxy />
        </div>

        {/* Probe 4 – state-4 grid with social icons in area "s" under BUCHEN */}
        <div ref={p4} style={gridStyle(AREAS.s4, 3)}>
          {links.map((l, i) => (
            <span key={l.href} className={linkCls} style={{ gridArea: ga(i), whiteSpace: "nowrap" }}>{l.label}</span>
          ))}
          <div style={{ gridArea: "s", display: "flex", gap: "1rem" }}>
            <div style={{ width: 44, height: 44 }} />
            <div style={{ width: 40, height: 40 }} />
            <div style={{ width: 40, height: 40 }} />
          </div>
        </div>
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--warm-beige)] transition-transform duration-300"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className="w-full pl-8 pr-2 min-h-[93px] flex items-center gap-4">
          {/* Logo */}
          <a href="#hoi" className="shrink-0">
            <Image src="/images/Logo/Lamettayoga.svg" alt="La Metta Yoga" width={90} height={90} className="h-[60px] w-auto" />
          </a>
          <div className="flex-1" />

          {/* State 1: all 5 links in one row */}
          {state === 1 && (
            <nav className="flex items-center gap-8 shrink-0">
              {links.map(l => <NavLink key={l.href} link={l} />)}
            </nav>
          )}

          {/* State 2: HOI under STORY */}
          {state === 2 && (
            <nav className="shrink-0 py-4" style={gridStyle(AREAS.s2, 4)}>
              {links.map((l, i) => <NavLink key={l.href} link={l} area={ga(i)} />)}
            </nav>
          )}

          {/* State 3: HOI under STORY + KLASSEN under STIMMEN */}
          {state === 3 && (
            <nav className="shrink-0 py-4" style={gridStyle(AREAS.s3, 3)}>
              {links.map((l, i) => <NavLink key={l.href} link={l} area={ga(i)} />)}
            </nav>
          )}

          {/* State 4: same + social icons under BUCHEN */}
          {state === 4 && (
            <nav className="shrink-0 py-4" style={gridStyle(AREAS.s4, 3)}>
              {links.map((l, i) => <NavLink key={l.href} link={l} area={ga(i)} />)}
              <div style={{ gridArea: "s" }} className="flex items-center">
                <SocialIcons />
              </div>
            </nav>
          )}

          {/* Social icons for states 1–3 (in state 4 they live inside the grid) */}
          {state <= 3 && (
            <div className="shrink-0"><SocialIcons /></div>
          )}

          {/* State 5: burger button */}
          {state === 5 && (
            <button
              className="flex flex-col gap-[5px] p-1 shrink-0"
              onClick={toggleBurger}
              aria-label="Menu"
            >
              <span className={`block w-6 h-[1px] bg-[var(--foreground)] transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block w-6 h-[1px] bg-[var(--foreground)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[1px] bg-[var(--foreground)] transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          )}
        </div>

      </header>

      {/* Burger dropdown — outside <header> so the header stays 93px tall,
          keeping the language circle visible below it */}
      {state === 5 && open && (
        <nav
          className="fixed left-0 right-0 z-40 bg-[var(--warm-beige)] border-t border-[var(--foreground)]/10 px-6 py-6 flex flex-col items-center gap-5 transition-transform duration-300"
          style={{ top: 93, transform: visible ? "translateY(0)" : "translateY(-100%)" }}
        >
          {links.map(l => (
            <NavLink key={l.href} link={l} onClick={() => setOpen(false)} />
          ))}
          <div className="pt-4 w-full flex justify-center gap-6">
            <a href="https://www.youtube.com/@lamettayoga" target="_blank" rel="noopener noreferrer" className={iconLinkCls} aria-label="YouTube">
              <YouTubeIcon size={22} />
            </a>
            <a href="https://www.instagram.com/lamettayoga" target="_blank" rel="noopener noreferrer" className={iconLinkCls} aria-label="Instagram">
              <InstagramIcon size={22} />
            </a>
            <a href="https://www.tiktok.com/@lamettayoga" target="_blank" rel="noopener noreferrer" className={iconLinkCls} aria-label="TikTok">
              <TikTokIcon size={20} />
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
