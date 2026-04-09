"use client";

import { useState, useEffect } from "react";
import { portfolioContent } from "../content/portfolioContent";

export default function Navigation() {
  const { navigation } = portfolioContent;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      <header className="w-full border-b-[0.667px] border-[rgba(255,255,255,0.05)] border-solid px-6 md:px-[69px] relative z-[60]">
        <div className="h-[80px] w-full flex items-center justify-center">
          <div className="w-full max-w-[1184px] flex items-center justify-between">
            <div className="h-[24px] relative">
              <p className="whitespace-nowrap text-[16px] leading-[24px] tracking-[-0.4px] text-white font-sans font-light">
                {navigation.brand}
              </p>
            </div>

            <nav className="hidden md:flex h-[20px] items-center gap-[36px]" aria-label={navigation.ariaLabel}>
              <a href="#start" className="h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
                <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light">
                  {navigation.links.start}
                </span>
              </a>
              <a href="#projects" className="h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
                <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light">
                  {navigation.links.projects}
                </span>
              </a>
              <a href="#about" className="h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
                <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light">
                  {navigation.links.about}
                </span>
              </a>
              <a href="#contact" className="h-[20px] opacity-60 transition-opacity duration-300 hover:opacity-100">
                <span className="block whitespace-nowrap text-[14px] leading-[20px] text-white font-sans font-light">
                  {navigation.links.contact}
                </span>
              </a>
            </nav>

            <button 
              className={`md:hidden flex flex-col justify-center items-center w-8 h-8 z-[60] text-white space-y-1.5 transition-opacity duration-200 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[1px] bg-white transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-[1px] bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-6 h-[1px] bg-white transition-transform duration-300 ease-in-out ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-screen inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="fixed top-6 right-6 z-[110] inline-flex h-10 w-10 items-center justify-center text-white/80 transition-colors duration-200 hover:text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-10" aria-label="Mobile Navigation">
          <a href="#start" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[32px] text-white font-sans font-light">{navigation.links.start}</span>
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[32px] text-white font-sans font-light">{navigation.links.projects}</span>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[32px] text-white font-sans font-light">{navigation.links.about}</span>
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[32px] text-white font-sans font-light">{navigation.links.contact}</span>
          </a>
        </nav>
      </div>
    </>
  );
}
