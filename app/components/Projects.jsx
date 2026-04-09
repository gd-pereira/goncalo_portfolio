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
  const iconProps = { className: "w-[22px] h-[22px] transition-colors duration-300 group-hover/icon:text-white group-hover/icon:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": techName };
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
      return <span className="text-xs text-white/40 tracking-widest uppercase transition-colors duration-300 group-hover/icon:text-white">{techName}</span>;
  }
};

export default function Projects() {
  const { projects } = portfolioContent;

  return (
    <section className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] content-stretch flex flex-col items-center pb-[120px] pt-[103.667px] px-[85px] relative w-full overflow-hidden">
      
      {/* Subtle global depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] rounded-full pointer-events-none animate-pulse-glow z-0" style={{ animationDuration: '10s' }} />

      <div className="content-stretch flex flex-col gap-[80px] items-start relative w-[1152px] z-10">
        {/* Heading */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full mb-[32px]">
          <p className="font-sans font-light leading-[79.2px] not-italic relative shrink-0 text-[72px] text-white tracking-[-1.44px] whitespace-nowrap">
            {projects.heading}
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col w-full relative">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="group relative border-b border-[rgba(255,255,255,0.05)] py-[80px] flex items-center justify-between w-full transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(255,255,255,0.02)] px-[80px] -mx-[80px] rounded-3xl overflow-hidden"
            >

              {/* Middle Container (Text & Image) */}
              <div className="flex-1 relative flex items-center justify-start h-full min-h-[260px]">
                {/* Title & Desc */}
                <div className="flex flex-col gap-[20px] w-[380px] z-20 transition-transform duration-500 ease-in-out translate-x-[120px] group-hover:-translate-x-[30px] mr-[60px]">
                  <div className="text-[40px] text-white font-light tracking-[-1px] leading-tight transition-colors duration-300">
                    {project.title}
                  </div>
                  <p className="text-[16px] text-white/50 leading-[2] font-light max-w-[380px]">
                    {project.description}
                  </p>
                </div>

                {/* Hover Reveal Real Image Container */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} ${project.previewLabel}`}
                  className="absolute right-[-110px] top-1/2 -translate-y-1/2 w-[420px] h-[260px] rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto overflow-hidden z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] bg-[#111]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} ${project.previewLabel}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </a>
              </div>

              {/* Technologies Badges & Year */}
              <div className="flex flex-col items-end shrink-0 w-[240px] gap-8 z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-[20px] ml-[60px]">
                <div className="flex gap-[16px] flex-wrap justify-end max-w-[340px] text-white/40">
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
          ))}
        </div>
      </div>
    </section>
  );
}