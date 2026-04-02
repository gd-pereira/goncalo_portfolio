import { portfolioContent } from "../content/portfolioContent";

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

  return (
    <section className="w-full border-t border-[#1a1a1a] pt-[120px] px-[85px] pb-[160px] flex justify-center">
      <div className="w-[1152px] flex flex-col gap-[120px]">
        {/* Top area with Email CTA */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[20px] text-white/50 font-sans font-light tracking-wider uppercase mb-4">
            {contact?.headingLines?.join(" ")}
          </h2>
          <div>
            {emailLink ? (
              <a 
                href={emailLink.href} 
                className="text-[56px] md:text-[72px] text-white font-light tracking-[-2px] animated-underline self-start leading-tight inline-block"
              >
                {emailLink.label}
              </a>
            ) : (
              <p className="text-[56px] md:text-[72px] text-white font-light tracking-[-2px] leading-tight">
                Get in touch
              </p>
            )}
          </div>
          <p className="max-w-[440px] text-[18px] leading-relaxed text-white/60 font-sans font-light mt-6">
            {contact?.intro || ""}
          </p>
        </div>

        {/* Bottom Details Grid */}
        <div className="grid grid-cols-2 gap-x-[64px] w-full border-t border-[#1a1a1a] pt-[48px]">
          <div className="flex flex-row gap-[48px] items-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-[18px] leading-[28px] text-white/40 font-sans font-light transition-opacity duration-300 hover:text-white/100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-[64px] justify-start">
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
