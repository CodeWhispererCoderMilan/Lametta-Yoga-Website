import Image from "next/image";
import { Lang } from "@/types";

const cta = {
  de: "Klasse buchen",
  en: "Book a class",
};

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section id="hoi" className="relative w-full h-[85vh] md:h-[70vh] overflow-hidden">
      <Image
        src="/images/realhi.jpg"
        alt="La Metta Yoga"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/3 md:left-auto md:translate-x-0 md:right-[25%] z-10">
        <a
          href="#buchen"
          className="inline-block whitespace-nowrap px-16 py-6 bg-[var(--pink)] text-white uppercase tracking-widest text-xl rounded-full hover:opacity-90 transition-opacity font-bold"
        >
          {cta[lang]}
        </a>
      </div>
    </section>
  );
}
