import Link from "next/link";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyThread from "./CaseStudyThread";
import CaseStudyMedia from "./CaseStudyMedia";
import CaseStudyActions from "./CaseStudyActions";

export default function CaseStudyView({ study }) {
  return (
    <article className="w-full px-4 sm:px-6 lg:px-[85px] pb-16 md:pb-[112px] pt-8 md:pt-12 fade-in-up">
      <div className="w-full max-w-[680px] mx-auto flex flex-col gap-10 md:gap-12">
        <CaseStudyHero study={study} />

        <CaseStudyThread study={study} />

        <CaseStudyMedia screenshots={study.screenshots} label="Medien" />

        <footer className="border-t border-[rgba(255,255,255,0.05)] pt-8 md:pt-10 flex flex-col gap-5">
          <CaseStudyActions study={study} />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href="/#projects"
              className="text-[14px] text-white/35 font-light tracking-wide transition-opacity hover:text-white/65 w-fit"
            >
              ← {study.backLabel}
            </Link>
            {study.contactTease ? (
              <p className="text-[14px] text-white/30 font-light">
                {study.contactTease}{" "}
                <Link href="/#contact" className="text-white/55 hover:text-white/85 transition-colors animated-underline">
                  {study.contactLabel}
                </Link>
              </p>
            ) : null}
          </div>
        </footer>
      </div>
    </article>
  );
}
