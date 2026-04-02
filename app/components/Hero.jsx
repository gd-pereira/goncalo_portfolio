export default function Hero() {
  return (
    <section className="relative h-[931.333px] w-full overflow-hidden px-[200px] py-[214px] mt-[17px] mb-[17px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(934.8px 658.55px at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(192, 192, 192, 0.515) 25%, rgba(160, 160, 160, 0.7575) 37.5%, rgba(128, 128, 128, 0.9) 50%, rgba(0, 0, 0, 0) 65%)",
        }}
      />

      <div className="relative z-10 flex w-[923px] flex-col items-center gap-[44px]">
        <div className="h-[402px] w-full">
          <h1
            className="w-[910px] pl-[6px] text-center font-sans text-[120px] font-normal leading-[133px] tracking-[-3.5px]"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            <span className="block">Interface</span>
            <span className="block">trifft auf</span>
            <span className="block">solide Logik</span>
          </h1>
        </div>

        <button className="h-[57.833px] w-[256.521px] rounded-full border-[0.667px] border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-[32.667px]">
          <span className="flex items-center gap-[10px] text-[14.5px] font-normal leading-[22.5px] tracking-[-0.225px] text-white">
            Meine Projekte ansehen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 3.33333V12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.6667 8L8 12.6667L3.33333 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
