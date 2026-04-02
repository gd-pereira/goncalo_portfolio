export default function Contact() {
  return (
    <section className="w-full border-t-[0.667px] border-[rgba(255,255,255,0.05)] border-solid pt-[0.667px] px-[85px] pb-[446.667px]">
      <div className="w-[1152px]">
        <div className="flex flex-col gap-[80px] w-full">
          <div className="w-full">
            <h2 className="text-[72px] leading-[79.2px] tracking-[-1.44px] text-white font-sans font-light whitespace-pre-line">
              Lass uns{"\n"}zusammenarbeiten
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-[64px] h-[245px] w-full">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[48px]">
                <p className="w-[437px] text-[20px] leading-[32.5px] text-white font-sans font-light">
                  Ob Projektanfrage oder technischer Austausch – ich freue mich auf deine Nachricht.
                </p>

                <div className="flex flex-col gap-[24px] h-[132px]">
                  <a href="mailto:kontakt@example.com" className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light">
                    kontakt@example.com
                  </a>
                  <a href="#" className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light">
                    GitHub
                  </a>
                  <a href="#" className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] opacity-40">
              <div className="flex flex-col gap-[8px] h-[44px]">
                <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                  Verfügbarkeit
                </p>
                <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                  Offen für Freelance-Projekte
                </p>
              </div>

              <div className="flex flex-col gap-[8px] h-[44px]">
                <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                  Standort
                </p>
                <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                  Schweiz
                </p>
              </div>

              <div className="flex flex-col gap-[8px] h-[44px]">
                <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                  Antwortzeit
                </p>
                <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                  Innerhalb von 24 Stunden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
