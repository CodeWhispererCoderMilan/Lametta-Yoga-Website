"use client";

import { useEffect } from "react";
import { Lang } from "@/types";

const headings = { de: "BUCHEN", en: "BOOKING" };

export default function Booking({ lang }: { lang: Lang }) {
  useEffect(() => {
    if (document.getElementById("schedulista-widget-script-00")) return;
    const script = document.createElement("script");
    script.id = "schedulista-widget-script-00";
    script.src = "https://www.schedulista.com/schedule/lamettayoga/widget.js";
    document.body.appendChild(script);
  }, []);

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
            allowtransparency="true"
            frameBorder={0}
            scrolling="no"
            width="100%"
            height="900px"
          />
        </div>
      </div>

    </section>
  );
}
