import Link from "next/link";
import Navigation from "./components/Navigation";

export default function NotFound() {
  return (
    <main className="w-full max-w-[1322px] bg-[#0a0a0a] font-sans mx-auto overflow-hidden min-h-screen">
      <Navigation />
      <div className="flex flex-col items-start gap-6 px-4 sm:px-6 lg:px-[85px] py-20 md:py-28 max-w-[1152px] mx-auto fade-in-up">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/35 font-light">404</p>
        <h1 className="text-[36px] md:text-[48px] text-white font-light tracking-[-1px] leading-tight">
          Seite nicht gefunden
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#A1A1AA] font-light leading-[1.8] max-w-[480px]">
          Dieses Projekt existiert nicht — oder der Link ist veraltet.
        </p>
        <Link
          href="/#projects"
          className="text-[14px] text-white/50 font-light tracking-wide transition-opacity hover:text-white/80"
        >
          ← Zurück zu Projekte
        </Link>
      </div>
    </main>
  );
}
