"use client";

import { useCallback, useEffect, useState } from "react";

export default function CaseStudyMedia({ screenshots, label = "Medien" }) {
  const [index, setIndex] = useState(0);
  const total = screenshots?.length ?? 0;

  const go = useCallback(
    (next) => {
      if (!total) return;
      setIndex((current) => (current + next + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (total < 2) return undefined;

    const onKey = (event) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  if (!total) return null;

  const shot = screenshots[index];

  return (
    <section className="w-full border-t border-[rgba(255,255,255,0.05)] pt-10 md:pt-12">
      <div className="mb-5 md:mb-6 flex items-center justify-between gap-4">
        <h2 className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-white/35 font-light">
          {label}
        </h2>
        {total > 1 ? (
          <span className="text-[13px] text-white/30 font-light tracking-wide tabular-nums">
            {index + 1} / {total}
          </span>
        ) : null}
      </div>

      <figure className="flex flex-col gap-4">
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-[0_24px_40px_rgba(0,0,0,0.6)] bg-[#111]">
          <img
            key={shot.src + index}
            src={shot.src}
            alt={shot.alt}
            className="w-full h-full object-cover object-center brightness-[0.65] contrast-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Vorheriges Bild"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(10,10,10,0.65)] text-white/70 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Nächstes Bild"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(10,10,10,0.65)] text-white/70 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
              >
                →
              </button>
            </>
          ) : null}
        </div>

        {shot.caption ? (
          <figcaption className="text-[14px] md:text-[15px] text-white/40 font-light leading-relaxed">
            {shot.caption}
          </figcaption>
        ) : null}
      </figure>

      {total > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Bildauswahl">
          {screenshots.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Bild ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white/50" : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
