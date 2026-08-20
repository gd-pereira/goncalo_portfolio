import Link from "next/link";
import { portfolioContent } from "../content/portfolioContent";
import { getTechIcon } from "./TechIcon";

function ProjectActions({ project, actions, align = "start" }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${
        align === "end" ? "justify-start md:justify-end" : "justify-start"
      }`}
    >
      <Link
        href={project.href}
        className="text-[13px] md:text-[14px] text-white/70 font-light tracking-wide animated-underline transition-colors hover:text-white"
      >
        {actions.thread}
      </Link>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] md:text-[14px] text-white/45 font-light tracking-wide animated-underline transition-colors hover:text-white/80"
      >
        {actions.live} →
      </a>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioContent;
  const { actions } = projects;
  const featured = projects.items.find((item) => item.featured);
  const secondary = projects.items.filter((item) => !item.featured);

  return (
    <section className="content-stretch flex flex-col items-center pb-14 md:pb-[112px] pt-14 md:pt-[112px] px-4 sm:px-6 lg:px-[85px] relative w-full overflow-hidden md:overflow-visible">
      
      {/* Subtle global depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full pointer-events-none animate-pulse-glow z-0" style={{ animationDuration: '10s' }} />

      <div className="content-stretch flex flex-col gap-12 md:gap-[64px] items-start relative w-full lg:w-[1152px] z-10">
        {/* Heading */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full mb-12 md:mb-[32px]">
          <p className="font-sans font-light leading-[1.1] md:leading-[79.2px] not-italic relative shrink-0 text-[32px] sm:text-[36px] md:text-[56px] lg:text-[72px] text-white tracking-[-1px] md:tracking-[-1.44px]">
            {projects.heading}
          </p>
        </div>

        <div className="flex flex-col w-full relative">
          {featured && (
            <div className="group relative w-full rounded-2xl md:rounded-3xl p-0 md:p-10 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:bg-[rgba(255,255,255,0.02)]">
              <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-14">
                <Link
                  href={featured.href}
                  aria-label={`${featured.title} — ${actions.thread}`}
                  className="relative w-full md:w-[58%] aspect-[16/10] rounded-xl overflow-hidden shadow-[0_24px_40px_rgba(0,0,0,0.6)] bg-[#111] shrink-0"
                >
                  <img
                    src={featured.image}
                    alt={`${featured.title} ${featured.previewLabel}`}
                    className="w-full h-full object-cover object-center brightness-[0.65] contrast-110 transition-all duration-500 group-hover:brightness-[0.85] group-hover:contrast-125"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
                </Link>

                <div className="flex flex-col justify-between gap-10 w-full md:w-[42%] md:py-2">
                  <div className="flex flex-col gap-4 md:gap-5">
                    {featured.featuredLabel && (
                      <span className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-white/35 font-light">
                        {featured.featuredLabel}
                      </span>
                    )}
                    <Link
                      href={featured.href}
                      className="text-[28px] sm:text-[32px] md:text-[48px] text-white font-light tracking-[-0.5px] md:tracking-[-1px] leading-tight transition-opacity hover:opacity-80 w-fit"
                    >
                      {featured.title}
                    </Link>
                    <p className="text-[15px] md:text-[16px] text-[#A1A1AA] leading-[1.8] md:leading-[1.9] font-light max-w-full md:max-w-[360px]">
                      {featured.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex gap-[12px] flex-wrap text-white/60">
                        {featured.technologies.map((tech) => (
                          <div key={tech} className="group/icon relative cursor-default" title={tech}>
                            {getTechIcon(tech)}
                          </div>
                        ))}
                      </div>
                      <span className="text-[14px] text-white/30 font-light tracking-widest shrink-0">
                        {featured.year}
                      </span>
                    </div>
                    <ProjectActions project={featured} actions={actions} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {featured && secondary.length > 0 && (
            <div className="flex items-center gap-4 md:gap-5 py-8 md:py-10">
              <span className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-white/30 font-light shrink-0">
                {projects.moreLabel}
              </span>
              <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" aria-hidden="true" />
            </div>
          )}

          {secondary.map((project) => (
            <div
              key={project.title}
              className="group relative border-b border-[rgba(255,255,255,0.05)] py-12 md:py-[64px] flex flex-col md:flex-row items-start md:items-center md:justify-between w-full transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(255,255,255,0.02)] px-0 md:px-[80px] mx-0 md:-mx-[80px] rounded-none md:rounded-3xl overflow-hidden md:overflow-visible"
            >
              {/* Mobile: image first → thread */}
              <Link
                href={project.href}
                aria-label={`${project.title} — ${actions.thread}`}
                className="relative w-full aspect-video rounded-xl overflow-hidden z-10 shadow-[0_24px_40px_rgba(0,0,0,0.6)] bg-[#111] md:hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.title} ${project.previewLabel}`}
                  className="w-full h-full object-cover object-center brightness-[0.6] contrast-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
              </Link>

              {/* Content */}
              <div className="mt-8 md:mt-0 w-full flex-1 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
                <div className="flex flex-col gap-6 md:gap-[20px] w-full md:w-[380px] z-20 transition-transform duration-500 ease-in-out md:translate-x-[120px] md:group-hover:-translate-x-[30px]">
                  <Link
                    href={project.href}
                    className="text-[24px] sm:text-[28px] md:text-[40px] text-white font-light tracking-[-0.5px] md:tracking-[-1px] leading-tight transition-opacity hover:opacity-80 w-fit"
                  >
                    {project.title}
                  </Link>
                  <p className="text-[15px] md:text-[16px] text-[#A1A1AA] leading-[1.8] md:leading-[2] font-light max-w-full md:max-w-[380px]">
                    {project.description}
                  </p>
                  <ProjectActions project={project} actions={actions} />
                </div>

                <div className="flex flex-col md:items-end shrink-0 w-full md:w-[240px] gap-6 md:gap-8 z-20 transition-transform duration-500 ease-in-out md:group-hover:translate-x-[20px]">
                  <div className="flex gap-[12px] flex-wrap justify-start md:justify-end max-w-full md:max-w-[340px] text-white/60">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="group/icon relative cursor-default"
                        title={tech}
                      >
                        {getTechIcon(tech)}
                      </div>
                    ))}
                  </div>
                  <span className="text-[14px] text-white/30 font-light tracking-widest">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Desktop-only hover image → thread */}
              <Link
                href={project.href}
                aria-label={`${project.title} — ${actions.thread}`}
                className="hidden md:block absolute md:right-[260px] top-1/2 -translate-y-1/2 w-[420px] h-[260px] rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto overflow-hidden z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-[#111]"
              >
                <img
                  src={project.image}
                  alt={`${project.title} ${project.previewLabel}`}
                  className="w-full h-full object-cover object-center brightness-[0.55] contrast-110 transition-all duration-500 group-hover:brightness-[0.8] group-hover:contrast-125"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
