import { portfolioContent } from "../content/portfolioContent";

export default function Hero() {
  const { hero } = portfolioContent;

  return (
    <section
      id="start"
      className="relative flex min-h-[calc(100dvh-80px)] w-full flex-col justify-center overflow-hidden px-4 py-10 sm:px-6 md:px-10 md:py-16 lg:px-[140px] lg:py-20"
    >
      {/* Desktop Glow */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block animate-pulse-glow"
        style={{
          background:
            "radial-gradient(54% 40% at 50% 44%, rgba(255, 255, 255, 0.15) 0%, rgba(210, 210, 210, 0.12) 22%, rgba(140, 140, 140, 0.08) 42%, rgba(10, 10, 10, 0) 72%)",
        }}
      />
      {/* Mobile Glow */}
      <div
        className="pointer-events-none absolute inset-0 block md:hidden animate-pulse-glow"
        style={{
          background:
            "radial-gradient(78vw 36vh at 50% 42%, rgba(255, 255, 255, 0.12) 0%, rgba(190, 190, 190, 0.1) 24%, rgba(120, 120, 120, 0.06) 44%, rgba(10, 10, 10, 0) 74%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[923px] flex-col items-center gap-8 overflow-visible fade-in-up fade-in-up-delay-1 md:gap-[44px]">
        <div className="h-auto w-full overflow-visible">
          <h1
            className="w-full max-w-[100vw] pb-4 text-center font-sans text-[38px] font-normal leading-[1.08] sm:text-[48px] sm:leading-[1.1] md:pb-6 md:text-[72px] md:leading-[1.12] lg:w-[880px] lg:pl-[6px] lg:text-[104px] lg:leading-[1.08]"
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
