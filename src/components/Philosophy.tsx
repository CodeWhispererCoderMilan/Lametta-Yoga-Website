import Image from "next/image";
import { Lang } from "@/types";

const t = {
  de: {
    heading: "MEINE STORY",
    shortText: "Hi! Ich bin Stefanie, deine Yoga-Lehrerin. Komm wie du bist — ich begleite dich auf deinem Weg.",
    body: [
      "Meine Familie nannte mich als Kind «Lametta», nach dem funkelnden Weihnachtsschmuck, welcher den Christbaum zum Strahlen bringt.",
      "Genau dieses Strahlen und dieses Gefühl der Freude und Leichtigkeit möchte ich dir weitergeben!",
    ],
    img: "/images/about_me.jpg",
  },
  en: {
    heading: "MY STORY",
    shortText: "Hi! I'm Stefanie, your yoga instructor. Come as you are — I'll guide you every step of the way.",
    body: [
      "As a child, my family called me 'lametta', named after the sparkling Christmas decorations that make the tree shine.",
      "Exactly this radiance and feeling of joy and lightness is what I want to pass on to you!",
    ],
    img: "/images/about_me.jpg",
  },
};

export default function Philosophy({ lang }: { lang: Lang }) {
  const c = t[lang];
  return (
    <section id="philosophie" className="pb-28 bg-[var(--background)] overflow-hidden">

      {/* Heading — full bleed, flush left */}
      <h2
        className="font-extrabold uppercase leading-none text-black pl-10"
        style={{ fontSize: "clamp(3.5rem, 12.6vw, 11rem)", marginTop: "-0.15em" }}
      >
        {c.heading}
      </h2>
      <div className="w-64 h-[1.5px] bg-[var(--teal)] mt-0 mb-12 ml-52" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">

        {/* Left — long text */}
        <div>
          {c.body.map((p, i) => (
            <p key={i} className="text-black text-2xl font-bold mb-5 leading-snug">{p}</p>
          ))}
        </div>

        {/* Right — image with highlighted text bleeding out on the left */}
        <div className="relative aspect-[4/5] ml-[30%] md:ml-0">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src={c.img}
              alt="Stefanie"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute top-10 -left-[35%] max-w-[75%]">
            <p
              className="text-white text-xl font-bold leading-snug"
              style={{
                display: "inline",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
                background: "var(--teal)",
                padding: "0.2em 0.5em",
                lineHeight: "1.8",
              }}
            >
              {c.shortText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
