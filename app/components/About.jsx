import { portfolioContent } from "../content/portfolioContent";

export default function About() {
  const { about } = portfolioContent;

  return (
    <section className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] w-full px-[213px] pt-[117px] pb-[116.333px] relative flex justify-center">
      <div className="relative shrink-0 w-[896px]">
        <div className="w-full flex flex-col gap-[64px] items-start">
          
          <div className="w-[768px]">
            <p className="font-sans font-light leading-[1.1] text-[72px] text-white tracking-[-1.44px]">
              {about.heading}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-[48px] gap-y-[64px] w-full pt-[20px]">
            
            <div className="flex flex-col gap-[20px] items-start">
              <svg className="w-7 h-7 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
              </svg>
              <div className="flex flex-col gap-[12px] w-full">
                <p className="font-sans font-medium leading-[20px] text-[14px] text-white/40 tracking-[2.8px] uppercase">
                  {about.items.frontend.title}
                </p>
                <p className="font-sans font-light leading-relaxed text-[16px] text-white/60 max-w-[420px]">
                  {about.items.frontend.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] items-start">
              <svg className="w-7 h-7 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
              </svg>
              <div className="flex flex-col gap-[12px] w-full">
                <p className="font-sans font-medium leading-[20px] text-[14px] text-white/40 tracking-[2.8px] uppercase">
                  {about.items.backend.title}
                </p>
                <p className="font-sans font-light leading-relaxed text-[16px] text-white/60 max-w-[345px]">
                  {about.items.backend.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] items-start">
              <svg className="w-7 h-7 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
              </svg>
              <div className="flex flex-col gap-[12px] w-full">
                <p className="font-sans font-medium leading-[20px] text-[14px] text-white/40 tracking-[2.8px] uppercase">
                  {about.items.database.title}
                </p>
                <p className="font-sans font-light leading-relaxed text-[16px] text-white/60 max-w-[345px]">
                  {about.items.database.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] items-start">
              <svg className="w-7 h-7 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              <div className="flex flex-col gap-[12px] w-full">
                <p className="font-sans font-medium leading-[20px] text-[14px] text-white/40 tracking-[2.8px] uppercase">
                  {about.items.approach.title}
                </p>
                <p className="font-sans font-light leading-relaxed text-[16px] text-white/60 max-w-[383px]">
                  {about.items.approach.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
