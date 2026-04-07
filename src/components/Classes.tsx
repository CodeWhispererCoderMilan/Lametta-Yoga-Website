import Image from "next/image";
import { Lang } from "@/types";

const t = {
  de: {
    heading: "KLASSEN",
    classes: [
      {
        type: "Im Studio",
        schedule: "Dienstag 18:00–19:00",
        title: "Yoga Klassen",
        description:
          "Wöchentliche Yogastunden für alle Levels — von Anfänger bis\nerfahrene Yogini. Verschiedene Stile, bewusste\nAtemführung, gezielte Haltungen.",
      },
      {
        type: "Online",
        schedule: "Jederzeit buchbar",
        title: "Online Kurs",
        description:
          "Yogakurse als einmaliger Kauf — in deinem eigenen Tempo, wann und wo du willst. Kein Abo, kein Druck.",
      },
    ],
    cta: "Buchen",
  },
  en: {
    heading: "CLASSES",
    classes: [
      {
        type: "At the Studio",
        schedule: "Tuesday 18:00–19:00",
        title: "Yoga Classes",
        description:
          "Weekly yoga classes for all levels — beginner to\nexperienced yogini. Various styles, conscious\nbreathwork, and targeted postures.",
      },
      {
        type: "Online",
        schedule: "Book anytime",
        title: "Online Course",
        description:
          "Yoga courses as a one-time purchase — go at your own pace, whenever and wherever you want. No subscription, no pressure.",
      },
    ],
    cta: "Book",
  },
};

export default function Classes({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section id="klassen" className="pb-28 bg-black overflow-hidden">

      {/* Heading */}
      <h2
        className="font-extrabold uppercase leading-none text-[#F9DFC5] pl-10"
        style={{ fontSize: "clamp(3.5rem, 12.6vw, 11rem)", marginTop: "-0.15em" }}
      >
        {c.heading}
      </h2>
      <div className="w-64 h-[1.5px] bg-[var(--pink)] mt-0 mb-12 ml-52" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Asymmetric cards — online card starts lower, both bottoms align */}
        <div className="grid md:grid-cols-3 gap-4 items-stretch">

          {/* Studio card — large, photo background */}
          <div className="md:col-span-2 relative overflow-hidden min-h-[480px] flex flex-col justify-end rounded-2xl">
            <Image
              src="/images/stephanie_with_group.jpg"
              alt="Yoga Studio Class"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col gap-3">
              <div>
                <span
                  className="text-xs uppercase tracking-widest text-white"
                  style={{ background: "var(--pink)", padding: "0.15em 0.4em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
                >
                  {c.classes[0].type}
                </span>
              </div>
              <h3 className="text-3xl font-bold leading-snug">
                <span
                  className="text-white"
                  style={{ background: "var(--teal)", padding: "0.1em 0.3em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone", lineHeight: "1.7", display: "inline" }}
                >
                  {c.classes[0].title}
                </span>
              </h3>
              <p className="text-sm leading-relaxed">
                <span
                  className="text-white"
                  style={{ background: "var(--teal)", padding: "0.15em 0.4em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone", lineHeight: "1.9", display: "inline", whiteSpace: "pre-line" }}
                >
                  {c.classes[0].description}
                </span>
              </p>
              <div>
                <span
                  className="text-white text-xs uppercase tracking-widest"
                  style={{ background: "var(--pink)", padding: "0.15em 0.4em", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
                >
                  {c.classes[0].schedule}
                </span>
              </div>
            </div>
          </div>

          {/* Online card — cream, starts lower via top spacer, bottom aligns with studio */}
          <div className="md:col-span-1 flex flex-col">
            <div className="flex-1 bg-[var(--warm-beige)] flex flex-col gap-4 p-8 rounded-2xl">
              <span className="text-xs uppercase tracking-widest text-white w-fit px-2 py-0.5 bg-[var(--pink)]">
                {c.classes[1].type}
              </span>
              <h3 className="text-3xl font-bold text-black">{c.classes[1].title}</h3>
              <p className="text-black/70 text-sm flex-1">{c.classes[1].description}</p>
              <p className="text-[var(--pink)] text-xs uppercase tracking-widest font-semibold">{c.classes[1].schedule}</p>
            </div>
          </div>

        </div>

        {/* Single book button below both cards */}
        <div className="flex justify-end mt-10 pr-4">
          <a
            href="#buchen"
            className="inline-block px-20 py-7 bg-[var(--pink)] text-white uppercase tracking-widest text-xl rounded-full hover:opacity-90 transition-opacity font-bold"
          >
            {c.cta}
          </a>
        </div>

      </div>
    </section>
  );
}
