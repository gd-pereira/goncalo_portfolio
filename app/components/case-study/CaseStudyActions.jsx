export default function CaseStudyActions({ study }) {
  const hasDemoSlot = study.demoUrl != null || study.demoSoonLabel;

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        href={study.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] md:text-[15px] text-white/70 font-light tracking-wide animated-underline transition-colors hover:text-white"
      >
        {study.liveLabel} →
      </a>

      {hasDemoSlot ? (
        study.demoUrl ? (
          <a
            href={study.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] md:text-[15px] text-white/70 font-light tracking-wide animated-underline transition-colors hover:text-white"
          >
            {study.demoLabel} →
          </a>
        ) : (
          <span
            className="text-[14px] md:text-[15px] text-white/25 font-light tracking-wide cursor-default"
            title="Demo folgt in Kürze"
          >
            {study.demoSoonLabel}
          </span>
        )
      ) : null}
    </div>
  );
}
