import { portfolioContent } from "../content/portfolioContent";

export default function Navigation() {
  const { navigation } = portfolioContent;

  return (
    <header className="w-full border-b-[0.667px] border-[rgba(255,255,255,0.05)] border-solid pb-[0.667px] px-[69px]">
      <div className="h-[80px] w-full flex items-center justify-between">
        <div className="w-[1184px] flex items-center justify-between">
          <div className="h-[24px] w-[112.281px] relative">
            <p className="absolute left-0 top-[-1px] whitespace-nowrap text-[16px] leading-[24px] tracking-[-0.4px] text-white font-sans font-light">
              {navigation.brand}
            </p>
          </div>

          <nav className="w-[240.323px] h-[20px] flex items-center gap-[48px]" aria-label="Main">
            <a href="#about" className="w-[39.146px] h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
              <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light pt-[0.33px]">
                {navigation.links.about}
              </span>
            </a>
            <a href="#projects" className="w-[53.01px] h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
              <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light pt-[0.33px]">
                {navigation.links.projects}
              </span>
            </a>
            <a href="#contact" className="w-[52.167px] h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
              <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light pt-[0.33px]">
                {navigation.links.contact}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
