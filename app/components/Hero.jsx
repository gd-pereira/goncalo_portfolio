import { portfolioContent } from "../content/portfolioContent";

export default function Hero() {
  const { hero } = portfolioContent;

  return (
    <section id="start" className="relative h-[931.333px] w-full overflow-visible px-[200px] py-[214px] mt-[17px] mb-[17px]">
      <div
        className="pointer-events-none absolute inset-0 animate-pulse-glow"
        style={{
          background:
            "radial-gradient(934.8px 658.55px at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(192, 192, 192, 0.515) 25%, rgba(160, 160, 160, 0.7575) 37.5%, rgba(128, 128, 128, 0.9) 50%, rgba(0, 0, 0, 0) 65%)",
        }}
      />

      <div className="relative z-10 flex w-[923px] flex-col items-center gap-[44px] overflow-visible fade-in-up fade-in-up-delay-1">
        <div className="h-auto w-full overflow-visible">
          <h1
            className="w-[880px] pl-[6px] pb-3 text-center font-sans text-[114px] font-normal leading-[132px] tracking-[-3.5px]"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            <span className="block">{hero.lines[0]}</span>
            <span className="block">{hero.lines[1]}</span>
            <span className="block">{hero.lines[2]}</span>
          </h1>
        </div>

        <a
          href={hero.ctaHref}
          className="group rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] px-8 py-4 inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] hover:scale-[1.02]"
        >
          <span className="flex items-center gap-3 text-[16px] font-normal leading-[22.5px] tracking-wide text-white">
            {hero.cta}
            <svg 
              className="transition-transform duration-300 ease-in-out group-hover:translate-y-1" 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <path d="M8 3.33333V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.6667 8L8 12.6667L3.33333 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
