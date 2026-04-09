import { portfolioContent } from "../content/portfolioContent";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const { contact } = portfolioContent;
  const detailItems = [
    contact?.details?.availability,
    contact?.details?.location,
    contact?.details?.responseTime,
  ].filter((item) => item?.label && item?.value);

  const contactLinks = [
    {
      href: contact?.links?.emailHref,
      label: contact?.links?.email,
      external: false,
    },
    {
      href: contact?.links?.githubHref,
      label: contact?.links?.github,
      external: true,
    },
    {
      href: contact?.links?.linkedInHref,
      label: contact?.links?.linkedIn,
      external: true,
    },
  ].filter((link) => link.href && link.label);

  const emailLink = contactLinks.find((link) => !link.external && link.label?.includes('@'));
  const socialLinks = contactLinks.filter((link) => link.external || !link.label?.includes('@'));
  const socialIcons = {
    GitHub: FaGithub,
    LinkedIn: FaLinkedinIn,
  };

  return (
    <section className="w-full border-t border-[#1a1a1a] pt-14 md:pt-[112px] px-4 sm:px-6 lg:px-[85px] pb-14 md:pb-[112px] flex justify-center">
      <div className="w-full max-w-[1152px] flex flex-col gap-[48px] md:gap-[96px]">
        {/* Top area with Email CTA */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] text-white/50 font-sans font-light tracking-wider uppercase mb-4">
            {contact?.headingLines?.join(" ")}
          </h2>
          <div>
            {emailLink ? (
              <a 
                href={emailLink.href} 
                className="text-2xl sm:text-3xl md:text-[60px] lg:text-[72px] [overflow-wrap:anywhere] text-white font-extralight tracking-[-0.5px] md:tracking-[-2px] animated-underline self-start leading-tight inline-block"
              >
                {emailLink.label}
              </a>
            ) : (
              <p className="text-2xl sm:text-3xl md:text-[60px] lg:text-[72px] [overflow-wrap:anywhere] text-white font-extralight tracking-[-0.5px] md:tracking-[-2px] leading-tight">
                {contact?.fallbackHeading}
              </p>
            )}
          </div>
          <p className="max-w-[440px] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-white/60 font-sans font-light mt-6">
            {contact?.intro || ""}
          </p>
        </div>

        {/* Bottom Details Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-y-12 md:gap-x-[64px] w-full border-t border-[#1a1a1a] pt-[48px]">
          <div className="flex flex-row gap-[48px] items-start">
            {socialLinks.map((link) => (
              (() => {
                const Icon = socialIcons[link.label];

                return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="inline-flex h-13 w-13 items-center justify-center text-white/40 outline-none ring-0 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
                aria-label={link.label}
                title={link.label}
              >
                {Icon ? <Icon className="h-7 w-7" aria-hidden="true" /> : null}
              </a>
                );
              })()
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-[64px] justify-start">
            {detailItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-[12px] opacity-40">
                <p className="text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium opacity-60">
                  {item.label}
                </p>
                <p className="text-[14px] leading-[20px] text-white font-sans font-light">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
