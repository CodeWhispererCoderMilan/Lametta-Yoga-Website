import Image from "next/image";
import { Lang } from "@/types";

const t = {
  de: {
    label: "Shop",
    heading: "Yoga für\nden Alltag.",
    body: "Tolle Produkte für deine Yogapraxis und den Alltag. Dabei achte ich besonders auf Nachhaltigkeit, Fairness und Natürlichkeit.",
    items: [
      "Yogataschen",
      "Haargummis & Augenkissen",
      "Nachhaltig & fair produziert",
      "Für Yoginis & den Alltag",
    ],
    cta: "Zum Shop",
  },
  en: {
    label: "Shop",
    heading: "Yoga for\neveryday life.",
    body: "Amazing products for your yoga practice and everyday life. The aspects of sustainability, fairness, and authenticity are particularly important to me.",
    items: [
      "Yoga bags",
      "Hair ties & eye pillows",
      "Sustainably & fairly produced",
      "For yoginis & everyday life",
    ],
    cta: "Visit shop",
  },
};

export default function Online({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section id="online" className="py-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="uppercase tracking-widest text-[var(--accent)] text-sm mb-6">{c.label}</p>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-snug whitespace-pre-line">{c.heading}</h2>
          <p className="text-[var(--foreground)]/80 text-lg mb-6">{c.body}</p>
          <ul className="space-y-3 mb-10 text-[var(--foreground)]/80">
            {c.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--pink)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#buchen"
            className="inline-block px-6 py-3 bg-[var(--pink)] text-white uppercase tracking-widest text-sm rounded-full hover:opacity-90 transition-opacity"
          >
            {c.cta}
          </a>
        </div>

        {/* Photo */}
        <div className="aspect-[4/5] relative rounded-sm overflow-hidden order-first md:order-last">
          <Image
            src="/images/566A7711.jpeg"
            alt="Shop"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
