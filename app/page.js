export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0a0a0a] relative overflow-hidden font-sans">
      <div
        className="absolute w-[1322px] h-[931px] max-w-full max-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(934.8px 658.55px at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(192, 192, 192, 0.515) 25%, rgba(160, 160, 160, 0.7575) 37.5%, rgba(128, 128, 128, 1) 50%, rgba(0, 0, 0, 0) 60%)'
        }}
      />

      <div className="flex flex-col gap-[44px] items-center justify-center relative z-10 w-full max-w-[923px] px-4">
        <h1
          className="text-center font-normal leading-[1.1] md:leading-[133px] tracking-[-3.5px] text-[13vw] md:text-[130px] whitespace-pre-wrap max-w-full"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent"
          }}
        >
          Interface{'\n'}trifft auf solide Logik
        </h1>

        <button
          className="flex items-center gap-[10px] px-[32px] py-[16px] rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm"
        >
          <span className="font-normal text-[15px] text-white tracking-[-0.225px]">
            Meine Projekte ansehen
          </span>
          <div className="w-[16px] h-[16px] flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3.33333V12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.6667 8L8 12.6667L3.33333 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
