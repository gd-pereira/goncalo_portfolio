function ThreadLabel({ children }) {
  return (
    <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/30 font-light">{children}</p>
  );
}

function ThreadBlock({ label, children }) {
  if (!children) return null;
  return (
    <div className="flex flex-col">
      {label ? <ThreadLabel>{label}</ThreadLabel> : null}
      {children}
    </div>
  );
}

function Body({ children }) {
  return (
    <p className="text-[15px] md:text-[16px] text-[#C4C4C8] leading-[1.85] md:leading-[1.9] font-light">
      {children}
    </p>
  );
}

export default function CaseStudyThread({ study }) {
  const { overview, built, challenges, learnings } = study;

  return (
    <div className="flex flex-col gap-9 md:gap-11">
      {overview ? (
        <ThreadBlock label="Überblick">
          <div className="flex flex-col gap-5 md:gap-6">
            {overview.motivation ? <Body>{overview.motivation}</Body> : null}
            {overview.started ? <Body>{overview.started}</Body> : null}
            {overview.goal ? <Body>{overview.goal}</Body> : null}
          </div>
        </ThreadBlock>
      ) : null}

      {built?.length ? (
        <ThreadBlock label="Was gebaut wurde">
          <ul className="flex flex-col gap-3.5">
            {built.map((item) => (
              <li
                key={item}
                className="text-[15px] md:text-[16px] text-[#C4C4C8] leading-[1.85] font-light pl-4 border-l border-[rgba(255,255,255,0.08)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </ThreadBlock>
      ) : null}

      {challenges?.length ? (
        <ThreadBlock label="Herausforderungen">
          <div className="flex flex-col gap-7 md:gap-8">
            {challenges.map((item) => (
              <div key={item.title} className="flex flex-col gap-2.5">
                <h3 className="text-[17px] md:text-[18px] text-white font-light tracking-[-0.3px] leading-snug">
                  {item.title}
                </h3>
                <Body>{item.body}</Body>
              </div>
            ))}
          </div>
        </ThreadBlock>
      ) : null}

      {learnings?.length ? (
        <ThreadBlock label="Learnings">
          <ul className="flex flex-col gap-3.5">
            {learnings.map((item) => (
              <li
                key={item}
                className="text-[15px] md:text-[16px] text-[#C4C4C8] leading-[1.85] font-light pl-4 border-l border-[rgba(255,255,255,0.08)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </ThreadBlock>
      ) : null}
    </div>
  );
}
