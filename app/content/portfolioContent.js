export const portfolioContent = {
  navigation: {
    brand: "Gonçalo Pereira",
    ariaLabel: "Hauptnavigation",
    links: {
      start: "Start",
      projects: "Projekte",
      about: "Über mich",
      contact: "Kontakt",
    },
  },
  hero: {
    lines: ["Interface", "trifft auf", "solide Logik"],
    cta: "Meine Projekte ansehen",
    ctaHref: "#projects",
  },
  about: {
    heading: "Ich entwickle Web-Anwendungen, die technisch solide sind und sich gut anfühlen.",
    copy: "Hi, ich bin Gonçalo. Wenn ich nicht gerade an performanten Web-Anwendungen schraube, findest du mich meistens im Gym. Für mich haben Training und Programmieren viel gemeinsam: Beides erfordert Disziplin, Ausdauer und den Willen, immer besser zu werden. Ein gutes Workout ist für mich der perfekte mentale Ausgleich, um danach mit klarem Kopf und frischen Ideen die nächsten Code-Probleme zu lösen.",
  },
  projects: {
    heading: "Ausgewählte Projekte",
    moreLabel: "Weitere Projekte",
    actions: {
      thread: "Thread lesen",
      live: "Live ansehen",
    },
    items: [
      {
        title: "Terminum",
        slug: "terminum",
        href: "/projects/terminum",
        url: "https://terminum.ch",
        previewLabel: "Projektvorschau",
        image: "/projects/terminum_preview.png",
        description:
          "Eine vollständige SaaS-Management-Plattform für Barbershops. Inklusive integriertem Website-Builder für Kundenbuchungen und zentralem Admin-Dashboard.",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
        year: "2026",
        featured: true,
        featuredLabel: "Hauptprojekt",
        threadEnabled: true,
      },
      {
        title: "The Global Scale",
        slug: "the-global-scale",
        href: "/projects/the-global-scale",
        url: "https://the-global-scale.vercel.app/",
        previewLabel: "Projektvorschau",
        image: "/projects/global_scale_preview.png",
        description:
          "Eine Web-App, die zeigt, wie ungleich Einkommen weltweit verteilt sind. Über einfache Vergleiche zum eigenen Lebensstandard soll Lust entstehen, für gute Zwecke zu spenden.",
        technologies: ["React", "Javascript", "Vite", "CSS"],
        year: "2025",
        threadEnabled: false,
      },
      {
        title: "Le Baromètre du Cœur ",
        slug: "le-barometre-du-coeur",
        href: "/projects/le-barometre-du-coeur",
        url: "https://le-barometre-du-coeur.vercel.app/",
        previewLabel: "Projektvorschau",
        image: "/projects/barometre_preview.png",
        description:
          "Ein kleines Valentins-Quiz aus meinem Sprachaufenthalt in Frankreich, für die Schule gebaut, eher zum Spass. Am Ende gibt’s einen Herz-Score aus ein paar Fragen.",
        technologies: ["React", "TypeScript", "Vite", "CSS"],
        year: "2025",
        threadEnabled: false,
      },
    ],
  },
  contact: {
    headingLines: ["Kontaktieren", "Sie mich"],
    fallbackHeading: "Get in touch",
    links: {
      email: "goncalo.dinis.spe@gmail.com",
      emailHref: "mailto:goncalo.dinis.spe@gmail.com",
      github: "GitHub",
      githubHref: "https://github.com/gd-pereira",
      linkedIn: "LinkedIn",
      linkedInHref: "https://www.linkedin.com/in/gon%C3%A7alo-pereira-3026643b8/",
    },
    details: {
      location: {
        label: "Standort",
        value: "Zürich, Schweiz",
      },
    },
  },
};
