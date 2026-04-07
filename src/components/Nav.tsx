"use client";

import { useState } from "react";
import Image from "next/image";
import { Lang } from "@/types";

const t = {
  de: [
    { label: "HOI", href: "#hoi" },
    { label: "MEINE STORY", href: "#philosophie" },
    { label: "KLASSEN", href: "#klassen" },
    { label: "STIMMEN", href: "#stimmen" },
    { label: "BUCHEN", href: "#buchen" },
  ],
  en: [
    { label: "HI", href: "#hoi" },
    { label: "MY STORY", href: "#philosophie" },
    { label: "CLASSES", href: "#klassen" },
    { label: "REVIEWS", href: "#stimmen" },
    { label: "BOOK", href: "#buchen" },
  ],
};

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export default function Nav({ lang, visible }: { lang: Lang; visible: boolean }) {
  const [open, setOpen] = useState(false);
  const links = t[lang];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--warm-beige)] transition-transform duration-300"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      <div className="w-full px-8 h-[93px] flex items-center">
        {/* Logo */}
        <a href="#hoi" className="shrink-0">
          <Image
            src="/images/Logo/Lamettayoga.svg"
            alt="La Metta Yoga"
            width={90}
            height={90}
            className="h-[60px] w-auto"
          />
        </a>

        {/* Spacer — pushes nav links to the right */}
        <div className="flex-1" />

        {/* Desktop: nav links + social icons */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[44px] font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150 leading-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="https://www.youtube.com/@lamettayoga" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150" aria-label="YouTube">
            <YouTubeIcon />
          </a>
          <a href="https://www.instagram.com/lamettayoga" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.tiktok.com/@lamettayoga" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150" aria-label="TikTok">
            <TikTokIcon />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-[1px] bg-[var(--foreground)] transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[1px] bg-[var(--foreground)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1px] bg-[var(--foreground)] transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[var(--warm-beige)] border-t border-[var(--foreground)]/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[44px] font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--pink)] transition-colors duration-150 leading-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
