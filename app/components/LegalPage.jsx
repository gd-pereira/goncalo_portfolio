import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { legalContent } from "../content/legalContent";

export default function LegalPage() {
  const { datenschutz } = legalContent;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1322px] flex-col overflow-hidden bg-[#0a0a0a] font-sans">
      <Navigation />
      <article className="mx-auto w-full max-w-[560px] flex-1 px-4 py-16 sm:px-6 md:py-24 lg:px-[85px]">
        <h1 className="mb-8 font-sans text-[36px] font-light leading-tight tracking-[-1px] text-white md:text-[48px]">
          {datenschutz.title}
        </h1>
        <div className="flex flex-col gap-5">
          {datenschutz.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-[15px] font-light leading-[1.75] text-white/55 md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
          <p className="font-sans text-[15px] font-light leading-[1.75] text-white/55 md:text-[16px]">
            Fragen:{" "}
            <a
              href="mailto:goncalo.dinis.spe@gmail.com"
              className="text-white/75 animated-underline transition-colors hover:text-white"
            >
              goncalo.dinis.spe@gmail.com
            </a>
          </p>
        </div>
        <div className="mt-14 border-t border-[rgba(255,255,255,0.05)] pt-8">
          <Link
            href="/"
            className="font-sans text-[14px] font-light tracking-wide text-white/40 transition-colors hover:text-white/75"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
