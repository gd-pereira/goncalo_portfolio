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

  return (
    <section className="w-full border-t-[0.667px] border-[rgba(255,255,255,0.05)] border-solid pt-[0.667px] px-[85px] pb-[446.667px]">
      <div className="w-[1152px]">
        <div className="flex flex-col gap-[80px] w-full">
          <div className="w-full">
            <h2 className="text-[72px] leading-[79.2px] tracking-[-1.44px] text-white font-sans font-light whitespace-pre-line">
              {contact?.headingLines?.[0] || ""}{"\n"}
              {contact?.headingLines?.[1] || ""}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-[64px] h-[245px] w-full">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[48px]">
                <p className="w-[437px] text-[20px] leading-[32.5px] text-white font-sans font-light">
                  {contact?.intro || ""}
                </p>

                <div className="flex flex-col gap-[24px] h-[132px]">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light transition-opacity duration-300 hover:opacity-80"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] opacity-40">
              {detailItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-[8px] min-h-[44px]">
                  <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                    {item.label}
                  </p>
                  <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
