import { portfolioContent } from "../content/portfolioContent";

export default function Contact() {
  const { contact } = portfolioContent;

  return (
    <section className="w-full border-t-[0.667px] border-[rgba(255,255,255,0.05)] border-solid pt-[0.667px] px-[85px] pb-[446.667px]">
      <div className="w-[1152px]">
        <div className="flex flex-col gap-[80px] w-full">
          <div className="w-full">
            <h2 className="text-[72px] leading-[79.2px] tracking-[-1.44px] text-white font-sans font-light whitespace-pre-line">
              {contact.headingLines[0]}{"\n"}
              {contact.headingLines[1]}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-[64px] h-[245px] w-full">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[48px]">
                <p className="w-[437px] text-[20px] leading-[32.5px] text-white font-sans font-light">
                  {contact.intro}
                </p>

                <div className="flex flex-col gap-[24px] h-[132px]">
                  <a href={contact.links.emailHref} className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light transition-opacity duration-300 hover:opacity-80">
                    {contact.links.email}
                  </a>
                  <a href={contact.links.githubHref} target="_blank" rel="noreferrer" className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light transition-opacity duration-300 hover:opacity-80">
                    {contact.links.github}
                  </a>
                  <a href={contact.links.linkedInHref} target="_blank" rel="noreferrer" className="h-[28px] opacity-40 text-[18px] leading-[28px] text-white font-sans font-light transition-opacity duration-300 hover:opacity-80">
                    {contact.links.linkedIn}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] opacity-40">
              <div className="flex flex-col gap-[8px] h-[44px]">
                <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                  {contact.details.availability.label}
                </p>
                <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                  {contact.details.availability.value}
                </p>
              </div>

              <div className="flex flex-col gap-[8px] h-[44px]">
                <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                  {contact.details.location.label}
                </p>
                <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                  {contact.details.location.value}
                </p>
              </div>

              <div className="flex flex-col gap-[8px] h-[44px]">
                <p className="h-[16px] opacity-60 text-[12px] leading-[16px] tracking-[2.4px] uppercase text-white font-sans font-medium">
                  {contact.details.responseTime.label}
                </p>
                <p className="h-[20px] text-[14px] leading-[20px] text-white font-sans font-light">
                  {contact.details.responseTime.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
