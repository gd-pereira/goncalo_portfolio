import { portfolioContent } from "../content/portfolioContent";
import { TechStackCloud } from "@/components/ui/tech-stack-cloud";


export default function About() {
  const { about } = portfolioContent;

  return (
    <section className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] w-full px-4 sm:px-6 md:px-12 pt-14 md:pt-[112px] pb-14 md:pb-[112px] relative">
      <div className="relative mx-auto w-full max-w-full lg:max-w-[896px]">
        <div className="w-full flex flex-col gap-[40px] items-start">
          <div className="w-full lg:w-[768px]">
            <p className="font-sans font-light leading-[1.1] text-[32px] sm:text-[36px] md:text-[56px] lg:text-[72px] text-white tracking-[-1px] md:tracking-[-1.44px]">
              {about.heading}
            </p>
          </div>

          <p className="max-w-[760px] font-sans text-[18px] md:text-[20px] font-light leading-[1.7] text-white/60 whitespace-pre-line">
            {about.copy}
          </p>
        </div>

        <div className="mt-16 border-t border-[rgba(255,255,255,0.05)] pt-16">
          <TechStackCloud className="w-full px-0 md:px-[64px]" />
        </div>
      </div>
    </section>
  );
}
