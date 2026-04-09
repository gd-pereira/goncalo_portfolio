import { portfolioContent } from "../content/portfolioContent";

export default function Hero() {
  const { hero } = portfolioContent;

  return (
    <section id="start" className="relative min-h-[70svh] md:min-h-[100svh] lg:min-h-[931px] w-full overflow-visible px-2 sm:px-6 lg:px-[200px] py-12 md:py-20 lg:py-[214px] flex flex-col justify-center mt-[17px] mb-[17px]">
      {/* Desktop Glow (Original) */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block animate-pulse-glow"
        style={{
          background:
            "radial-gradient(934.8px 658.55px at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(192, 192, 192, 0.515) 25%, rgba(160, 160, 160, 0.7575) 37.5%, rgba(128, 128, 128, 0.9) 50%, rgba(0, 0, 0, 0) 65%)",
        }}
      />
      {/* Mobile Glow */}
      <div
        className="pointer-events-none absolute inset-0 block md:hidden animate-pulse-glow"
        style={{
          background:
            "radial-gradient(75vw 30vh at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(192, 192, 192, 0.515) 25%, rgba(160, 160, 160, 0.7575) 37.5%, rgba(128, 128, 128, 0.9) 50%, rgba(0, 0, 0, 0) 65%)",
        }}
      />

      <div className="relative z-10 flex w-full lg:w-[923px] flex-col items-center gap-8 md:gap-[44px] overflow-visible fade-in-up fade-in-up-delay-1 mt-12 md:mt-0">
        <div className="h-auto w-full overflow-visible">
          <h1
            className="w-full max-w-[100vw] lg:w-[880px] pl-0 lg:pl-[6px] pb-3 text-center font-sans text-[38px] sm:text-[48px] md:text-[72px] lg:text-[114px] font-normal leading-[1.08] sm:leading-[1.1] md:leading-[1.15] lg:leading-[132px] tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-3.5px]"
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
          className="group rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.03)] px-5 py-2.5 md:px-8 md:py-4 inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] hover:scale-[1.02]"
        >
          <span className="flex items-center gap-2 md:gap-3 text-[13px] md:text-[16px] font-normal leading-[20px] md:leading-[22.5px] tracking-wide text-white">
            {hero.cta}
            <svg 
              className="transition-transform duration-300 ease-in-out group-hover:translate-y-1 w-3 h-3 md:w-4 md:h-4"
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
