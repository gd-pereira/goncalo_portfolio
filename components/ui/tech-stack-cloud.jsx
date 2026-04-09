import { cn } from "@/lib/utils";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const techIcons = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiPython, name: "Python" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiTypescript, name: "TypeScript" },
];

export function TechStackCloud({ className }) {
  // Duplicate the icons multiple times to ensure the row is long enough for ultrawide screens
  const repeatedIcons = [...techIcons, ...techIcons, ...techIcons, ...techIcons, ...techIcons, ...techIcons];

  return (
    <div
      className={cn(
        "w-full overflow-hidden py-8 [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]",
        className
      )}
    >
      {/* Self-contained CSS animation to avoid modifying tailwind.config.ts globally.
        We translate by -50% because the array is duplicated evenly.
      */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex w-max animate-infinite-scroll items-center gap-10 md:gap-14">
        {repeatedIcons.map((Tech, idx) => (
          <div
            key={idx}
            className="flex cursor-default items-center justify-center text-white/60 transition-opacity duration-300 hover:opacity-100 opacity-60"
          >
            <Tech.icon
              className="pointer-events-none h-10 w-10 md:h-14 md:w-14"
              aria-label={Tech.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
