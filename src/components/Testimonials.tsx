import { Lang } from "@/types";

const reviews = {
  de: [
    {
      name: "Anna M.",
      text: "Stefanies Stunden sind eine Oase der Ruhe. Ich gehe jede Woche und merke, wie sich mein Körper und mein Kopf verändern.",
      stars: 5,
    },
    {
      name: "Lea K.",
      text: "Ich habe noch nie so einen guten Yin-Kurs erlebt. Der Online-Workshop hat sich angefühlt wie live dabei zu sein.",
      stars: 5,
    },
    {
      name: "Nina R.",
      text: "Endlich ein Angebot ohne Abo-Zwang. Ich buche, wenn es mir passt — das ist genau richtig für mich.",
      stars: 5,
    },
  ],
  en: [
    {
      name: "Anna M.",
      text: "Stefanie's classes are an oasis of calm. I go every week and notice how my body and mind are changing.",
      stars: 5,
    },
    {
      name: "Lea K.",
      text: "I have never experienced such a good yin class. The online workshop felt just like being there live.",
      stars: 5,
    },
    {
      name: "Nina R.",
      text: "Finally an offer without a subscription. I book when it suits me — that's exactly right for me.",
      stars: 5,
    },
  ],
};

const headings = {
  de: "STIMMEN",
  en: "REVIEWS",
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[var(--pink)]">★</span>
      ))}
    </div>
  );
}

export default function Testimonials({ lang }: { lang: Lang }) {
  const r = reviews[lang];
  return (
    <section className="pb-28 bg-[var(--warm-beige)] overflow-hidden">

      {/* Heading — full bleed, flush left */}
      <h2
        className="font-extrabold uppercase leading-none text-black pl-10"
        style={{ fontSize: "clamp(3.5rem, 12.6vw, 11rem)", marginTop: "-0.15em" }}
      >
        {headings[lang]}
      </h2>
      <div className="w-64 h-[1.5px] bg-[var(--teal)] mt-0 mb-12 ml-52" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {r.map((rev) => (
            <div key={rev.name} className="bg-[var(--background)] p-8">
              <Stars count={rev.stars} />
              <p className="text-black/80 text-base mb-6 leading-relaxed">
                &ldquo;{rev.text}&rdquo;
              </p>
              <p className="text-sm uppercase tracking-widest text-black/50">
                — {rev.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
