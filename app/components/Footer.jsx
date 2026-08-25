import Link from "next/link";
import { legalContent } from "../content/legalContent";

export default function Footer() {
  const { footer } = legalContent;

  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.05)] px-4 py-8 sm:px-6 md:py-10 lg:px-[85px]">
      <div className="mx-auto flex w-full max-w-[1152px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-[13px] font-light tracking-wide text-white/30">
          {footer.copyright}
        </p>
        <Link
          href="/datenschutz"
          className="font-sans text-[13px] font-light tracking-wide text-white/40 transition-colors hover:text-white/80"
        >
          {footer.datenschutz}
        </Link>
      </div>
    </footer>
  );
}
