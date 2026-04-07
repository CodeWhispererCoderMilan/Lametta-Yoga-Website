"use client";

import { Lang } from "@/types";

const headings = { de: "BUCHEN", en: "BOOK" };

export default function Booking({ lang }: { lang: Lang }) {
  return (
    <section id="buchen" className="pb-28 bg-black overflow-hidden">

      {/* Heading */}
      <h2
        className="font-extrabold uppercase leading-none text-[#F9DFC5] pl-10"
        style={{ fontSize: "clamp(3.5rem, 12.6vw, 11rem)", marginTop: "-0.15em" }}
      >
        {headings[lang]}
      </h2>
      <div className="w-64 h-[1.5px] bg-[var(--pink)] mt-0 mb-12 ml-52" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Light wrapper sized to fit the widget */}
        <div className="bg-[var(--warm-beige)] rounded-2xl overflow-hidden p-6">
          <iframe
            id="schedulista-widget-00"
            src="https://www.schedulista.com/schedule/lamettayoga?mode=widget"
            allowTransparency={true}
            frameBorder={0}
            scrolling="no"
            width="100%"
            height="900px"
          />
          <script
            id="schedulista-widget-script-00"
            type="text/javascript"
            src="https://www.schedulista.com/schedule/lamettayoga/widget.js"
          />
        </div>
      </div>

    </section>
  );
}
