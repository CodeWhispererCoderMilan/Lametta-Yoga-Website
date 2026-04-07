import Image from "next/image";
import { Lang } from "@/types";

const cta = {
  de: "Klasse buchen",
  en: "Book a class",
};

export default function Hero({ lang, burgerLayout }: { lang: Lang; burgerLayout?: boolean }) {
  return (
    <section id="hoi" className="relative w-full h-[100vh] md:h-[90vh] overflow-hidden">
      <Image
        src="/images/realhi.jpg"
        alt="La Metta Yoga"
        fill
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      <div
        className="absolute z-10"
        style={burgerLayout
          ? { bottom: "2.5rem", left: "50%", transform: "translateX(-50%)" }
          : { top: "50%", right: "20%", transform: "translateY(-50%)" }
        }
      >
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
