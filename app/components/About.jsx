export default function About() {
  return (
    <div className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] w-full px-[213px] pt-[117px] pb-[116.333px] relative">
      <div className="relative shrink-0 w-[896px]">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
            <div className="h-[426px] relative shrink-0 w-[768px]">
              <p className="absolute font-sans font-light leading-[79.2px] left-0 not-italic text-[72px] text-white top-[-0.67px] tracking-[-1.44px] w-[713px]">
                Ich entwickle Web-Anwendungen, die technisch solide sind und sich gut anfühlen.
              </p>
            </div>
            <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[208px] relative shrink-0 w-full">
              <div className="col-start-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0">
                <div className="content-stretch flex flex-col gap-[16px] h-[88px] items-start relative shrink-0 w-full">
                  <div className="h-[20px] opacity-40 relative shrink-0 w-full">
                    <p className="absolute font-sans font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px] tracking-[2.8px] uppercase whitespace-nowrap">
                      Frontend
                    </p>
                  </div>
                  <div className="h-[52px] opacity-60 relative shrink-0 w-full">
                    <p className="absolute font-sans font-light leading-[26px] left-0 not-italic text-[16px] text-white top-[-0.67px] w-[420px]">
                      Komponentenbasierte Architektur mit React und Next.js. Interfaces die responsive und performant sind.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[88px] items-start relative shrink-0 w-full">
                  <div className="h-[20px] opacity-40 relative shrink-0 w-full">
                    <p className="absolute font-sans font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px] tracking-[2.8px] uppercase whitespace-nowrap">
                      Backend
                    </p>
                  </div>
                  <div className="h-[52px] opacity-60 relative shrink-0 w-full">
                    <p className="absolute font-sans font-light leading-[26px] left-0 not-italic text-[16px] text-white top-[-0.67px] w-[303px]">
                      Skalierbare APIs mit Node.js. Python für Datenverarbeitung und Automatisierung.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-start-2 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0">
                <div className="content-stretch flex flex-col gap-[16px] h-[88px] items-start relative shrink-0 w-full">
                  <div className="h-[20px] opacity-40 relative shrink-0 w-full">
                    <p className="absolute font-sans font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px] tracking-[2.8px] uppercase whitespace-nowrap">
                      Datenbank
                    </p>
                  </div>
                  <div className="h-[52px] opacity-60 relative shrink-0 w-full">
                    <p className="absolute font-sans font-light leading-[26px] left-0 not-italic text-[16px] text-white top-[-0.67px] w-[345px]">
                      Strukturierung komplexer Datensätze mit SQL. Optimierte Queries und Relationen.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[88px] items-start relative shrink-0 w-full">
                  <div className="h-[20px] opacity-40 relative shrink-0 w-full">
                    <p className="absolute font-sans font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px] tracking-[2.8px] uppercase whitespace-nowrap">
                      Ansatz
                    </p>
                  </div>
                  <div className="h-[52px] opacity-60 relative shrink-0 w-full">
                    <p className="absolute font-sans font-light leading-[26px] left-0 not-italic text-[16px] text-white top-[-0.67px] w-[383px]">
                      Strukturierte Arbeitsweise. Sauberer Code. Von der Konzeption bis zum Deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
