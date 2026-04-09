import { portfolioContent } from "../content/portfolioContent";
import { TechStackCloud } from "@/components/ui/tech-stack-cloud";


export default function About() {
  const { about } = portfolioContent;

  return (
    <section className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] w-full px-[48px] pt-[117px] pb-[116.333px] relative">
      <div className="relative mx-auto w-full max-w-[896px]">
        <div className="w-full flex flex-col gap-[32px] items-start">
          <div className="w-[768px]">
            <p className="font-sans font-light leading-[1.1] text-[72px] text-white tracking-[-1.44px]">
              {about.heading}
            </p>
          </div>

          <p className="max-w-[760px] font-sans text-[18px] md:text-[20px] font-light leading-[1.7] text-white/60 whitespace-pre-line">
            {about.copy}
          </p>
        </div>

        <div className="mt-12 border-t border-[rgba(255,255,255,0.05)] pt-16 -mx-[48px] px-[48px]">
          <TechStackCloud className="w-[calc(100%+96px)] -mx-[48px] px-[48px] md:px-[64px]" />
        </div>
      </div>
    </section>
  );
}
