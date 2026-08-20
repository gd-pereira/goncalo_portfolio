import Link from "next/link";
import { getTechIcon } from "../TechIcon";
import { portfolioContent } from "../../content/portfolioContent";
import CaseStudyActions from "./CaseStudyActions";

export default function CaseStudyHero({ study }) {
  const author = portfolioContent.navigation.brand;

  return (
    <header className="w-full flex flex-col gap-6 md:gap-7">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-[14px] text-white/40 font-light tracking-wide transition-opacity duration-300 hover:text-white/70 w-fit"
      >
        <span aria-hidden="true">←</span>
        {study.backLabel}
      </Link>

      <div className="flex flex-col gap-5 border-b border-[rgba(255,255,255,0.05)] pb-8 md:pb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] md:text-[14px] text-white/40 font-light">
          <span className="text-white/70">{author}</span>
          <span className="text-white/20" aria-hidden="true">
            ·
          </span>
          {study.eyebrow ? <span>{study.eyebrow}</span> : null}
          {study.eyebrow ? (
            <span className="text-white/20" aria-hidden="true">
              ·
            </span>
          ) : null}
          <span className="tracking-widest text-white/30">{study.year}</span>
        </div>

        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] text-white font-light tracking-[-0.5px] md:tracking-[-1px] leading-[1.15]">
          {study.title}
        </h1>

        <p className="text-[16px] md:text-[17px] text-[#A1A1AA] leading-[1.75] font-light">
          {study.oneLiner}
        </p>

        <div className="flex gap-[12px] flex-wrap text-white/60 pt-1">
          {study.technologies.map((tech) => (
            <div key={tech} className="group/icon relative cursor-default" title={tech}>
              {getTechIcon(tech)}
            </div>
          ))}
        </div>

        <CaseStudyActions study={study} />
      </div>
    </header>
  );
}
