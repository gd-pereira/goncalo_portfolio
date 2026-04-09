export const portfolioContent = {
  navigation: {
    brand: "Gonçalo Pereira",
    ariaLabel: "Hauptnavigation",
    links: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
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
    items: [
      {
        title: "Terminum",
        url: "https://terminum.ch",
        previewLabel: "Projektvorschau",
        image: "/projects/terminum_preview.png",
        description:
          "Eine vollständige SaaS-Management-Plattform für Barbershops. Inklusive integriertem Website-Builder für Kundenbuchungen und zentralem Admin-Dashboard.",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
        year: "2026",
      },
      {
        title: "The Global Scale",
        url: "https://the-global-scale.vercel.app/",
        previewLabel: "Projektvorschau",
        image: "/projects/global_scale_preview.png",
        description: "Ein datengetriebenes Charity-Projekt, das globale Einkommensungleichheit veranschaulicht. Entwickelt, um durch greifbare Lebensstandard-Vergleiche Spenden für gemeinnützige Zwecke zu generieren.",
        technologies: ["React", "Javascript", "Vite", "CSS"],
        year: "2025",
      },
      {
        title: "Le Baromètre du Cœur ",
        url: "https://le-barometre-du-coeur.vercel.app/",
        previewLabel: "Projektvorschau",
        image: "/projects/barometre_preview.png",
        description: "Ein interaktives Quiz, das als Spassprojekt zum Valentinstag während eines Sprachaufenthalts in Frankreich für die Schule entwickelt wurde. Die App berechnet den Herz-Score der Nutzer durch spielerische Fragen und dynamische Auswertungen.",
        technologies: ["React", "TypeScript", "Vite", "CSS"],
        year: "2025",
      },
    ],
  },
  contact: {
    headingLines: ["Kontaktieren", "Sie mich"],
    intro: "Ob Projektanfrage oder technischer Austausch, ich freue mich auf deine Nachricht.",
    fallbackHeading: "Get in touch",
    links: {
      email: "goncalo.dinis.spe@gmail.com",
      emailHref: "mailto:goncalo.dinis.spe@gmail.com",
      github: "GitHub",
      githubHref: "https://github.com/gd-pereira",
      linkedIn: "LinkedIn",
      linkedInHref: "https://www.linkedin.com/",
    },
    details: {
      location: {
        label: "Standort",
        value: "Zürich, Schweiz",
      },
    },
  },
};
