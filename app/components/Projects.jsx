import { portfolioContent } from "../content/portfolioContent";

export default function Projects() {
  const { projects } = portfolioContent;

  return (
    <section className="border-[rgba(255,255,255,0.05)] border-solid border-t-[0.667px] content-stretch flex flex-col items-center pb-[103px] pt-[103.667px] px-[85px] relative w-full">
      <div className="content-stretch flex flex-col gap-[80px] items-start relative w-[1152px]">
        {/* Heading */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full mb-[24px]">
          <p className="font-sans font-light leading-[79.2px] not-italic relative shrink-0 text-[72px] text-white tracking-[-1.44px] whitespace-nowrap">
            {projects.heading}
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col w-full">
          {projects.items.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative border-b border-[#1a1a1a] py-[64px] flex items-center w-full transition-colors duration-300 hover:bg-[rgba(255,255,255,0.01)] px-8 -mx-8 rounded-2xl"
            >
              {/* Number */}
              <div className="w-[100px] text-white/20 text-[12px] font-light">
                {project.number}
              </div>
              
              {/* Title & Desc */}
              <div className="flex flex-col gap-[20px] w-[450px] z-20">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[36px] text-white font-light tracking-[-0.9px] leading-[43.2px] hover:text-white/70 transition-colors duration-300"
                >
                  {project.title}
                </a>
                <p className="text-[16px] text-white opacity-50 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges & Year */}
              <div className="flex flex-col items-end flex-1 gap-6 z-20">
                <div className="flex gap-2 flex-wrap justify-end max-w-[320px]">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-full px-3 py-1.5 bg-[rgba(255,255,255,0.05)] text-[10px] text-white/60 uppercase tracking-widest border border-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-[12px] text-white opacity-20 font-light">
                  {project.year}
                </span>
              </div>

              {/* Hover Reveal Image (Mockup Placeholder) */}
              <div className="absolute right-[28%] top-1/2 -translate-y-1/2 w-[320px] h-[200px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none overflow-hidden blur-[4px] group-hover:blur-0 translate-x-8 group-hover:translate-x-0 z-10 flex items-center justify-center shadow-2xl backdrop-blur-md">
                <span className="text-white/20 text-[10px] uppercase tracking-[3px]">
                  Preview Mockup
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}