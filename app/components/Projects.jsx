import { portfolioContent } from "../content/portfolioContent";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiSupabase, 
  SiStripe,
  SiReact,
  SiJavascript,
  SiVite,
  SiCss,
  SiNodedotjs,
  SiPostgresql
} from "react-icons/si";

const getTechIcon = (techName) => {
  const iconProps = { className: "w-[18px] h-[18px] md:w-[22px] md:h-[22px] opacity-60 transition-opacity duration-300 group-hover/icon:opacity-100", "aria-label": techName };
  switch (techName.toLowerCase()) {
    case 'next.js':
      return <SiNextdotjs {...iconProps} />;
    case 'typescript':
      return <SiTypescript {...iconProps} />;
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;
    case 'supabase':
      return <SiSupabase {...iconProps} />;
    case 'stripe':
      return <SiStripe {...iconProps} />;
    case 'react':
      return <SiReact {...iconProps} />;
    case 'javascript':
      return <SiJavascript {...iconProps} />;
    case 'vite':
      return <SiVite {...iconProps} />;
    case 'node.js':
      return <SiNodedotjs {...iconProps} />;
    case 'sql':
      return <SiPostgresql {...iconProps} />;
    case 'css':
      return <SiCss {...iconProps} />;
    default:
      return <span className="text-xs text-white/60 tracking-widest uppercase opacity-60 transition-opacity duration-300 group-hover/icon:opacity-100">{techName}</span>;
  }
};

export default function Projects() {
  const { projects } = portfolioContent;

  return (
    <section className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] content-stretch flex flex-col items-center pb-14 md:pb-[112px] pt-14 md:pt-[112px] px-4 sm:px-6 lg:px-[85px] relative w-full overflow-hidden md:overflow-visible">
      
      {/* Subtle global depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full pointer-events-none animate-pulse-glow z-0" style={{ animationDuration: '10s' }} />

      <div className="content-stretch flex flex-col gap-12 md:gap-[64px] items-start relative w-full lg:w-[1152px] z-10">
        {/* Heading */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full mb-12 md:mb-[32px]">
          <p className="font-sans font-light leading-[1.1] md:leading-[79.2px] not-italic relative shrink-0 text-[32px] sm:text-[36px] md:text-[56px] lg:text-[72px] text-white tracking-[-1px] md:tracking-[-1.44px]">
            {projects.heading}
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col w-full relative">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="group relative border-b border-[rgba(255,255,255,0.05)] py-12 md:py-[64px] flex flex-col md:flex-row items-start md:items-center md:justify-between w-full transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(255,255,255,0.02)] px-0 md:px-[80px] mx-0 md:-mx-[80px] rounded-none md:rounded-3xl overflow-hidden md:overflow-visible"
            >
              {/* Mobile: image first */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${project.previewLabel}`}
                className="relative w-full aspect-video rounded-xl overflow-hidden z-10 shadow-[0_24px_40px_rgba(0,0,0,0.6)] bg-[#111] md:hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.title} ${project.previewLabel}`}
                  className="w-full h-full object-cover object-center brightness-[0.6] contrast-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
              </a>

              {/* Content */}
              <div className="mt-8 md:mt-0 w-full flex-1 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
                <div className="flex flex-col gap-6 md:gap-[20px] w-full md:w-[380px] z-20 transition-transform duration-500 ease-in-out md:translate-x-[120px] md:group-hover:-translate-x-[30px]">
                  <div className="text-[24px] sm:text-[28px] md:text-[40px] text-white font-light tracking-[-0.5px] md:tracking-[-1px] leading-tight transition-colors duration-300">
                    {project.title}
                  </div>
                  <p className="text-[15px] md:text-[16px] text-[#A1A1AA] leading-[1.8] md:leading-[2] font-light max-w-full md:max-w-[380px]">
                    {project.description}
                  </p>
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

              {/* Desktop-only hover image */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${project.previewLabel}`}
                className="hidden md:block absolute md:right-[260px] top-1/2 -translate-y-1/2 w-[420px] h-[260px] rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto overflow-hidden z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-[#111]"
              >
                <img
                  src={project.image}
                  alt={`${project.title} ${project.previewLabel}`}
                  className="w-full h-full object-cover object-center brightness-[0.55] contrast-110 transition-all duration-500 group-hover:brightness-[0.8] group-hover:contrast-125"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}