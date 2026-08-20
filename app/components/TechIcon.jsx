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
  SiPostgresql,
} from "react-icons/si";

export function getTechIcon(techName) {
  const iconProps = {
    className:
      "w-[18px] h-[18px] md:w-[22px] md:h-[22px] opacity-60 transition-opacity duration-300 group-hover/icon:opacity-100",
    "aria-label": techName,
  };
  switch (techName.toLowerCase()) {
    case "next.js":
      return <SiNextdotjs {...iconProps} />;
    case "typescript":
      return <SiTypescript {...iconProps} />;
    case "tailwind":
      return <SiTailwindcss {...iconProps} />;
    case "supabase":
      return <SiSupabase {...iconProps} />;
    case "stripe":
      return <SiStripe {...iconProps} />;
    case "react":
      return <SiReact {...iconProps} />;
    case "javascript":
      return <SiJavascript {...iconProps} />;
    case "vite":
      return <SiVite {...iconProps} />;
    case "node.js":
      return <SiNodedotjs {...iconProps} />;
    case "sql":
      return <SiPostgresql {...iconProps} />;
    case "css":
      return <SiCss {...iconProps} />;
    default:
      return (
        <span className="text-xs text-white/60 tracking-widest uppercase opacity-60 transition-opacity duration-300 group-hover/icon:opacity-100">
          {techName}
        </span>
      );
  }
}
