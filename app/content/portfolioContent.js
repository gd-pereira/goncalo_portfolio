export const portfolioContent = {
  navigation: {
    brand: "Gonçalo Pereira",
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
    items: {
      frontend: {
        title: "Frontend",
        description: "Komponentenbasierte Architektur mit React und Next.js. Interfaces die responsive und performant sind.",
      },
      backend: {
        title: "Backend",
        description: "Skalierbare APIs mit Node.js. Python für Datenverarbeitung und Automatisierung.",
      },
      database: {
        title: "Datenbank",
        description: "Strukturierung komplexer Datensätze mit SQL. Optimierte Queries und Relationen.",
      },
      approach: {
        title: "Ansatz",
        description: "Strukturierte Arbeitsweise. Sauberer Code. Von der Konzeption bis zum Deployment.",
      },
    },
  },
  projects: {
    heading: "Ausgewählte Projekte",
    items: [
      {
        number: "01",
        title: "Terminum",
        url: "https://terminum.ch",
        description:
          "Eine vollständige SaaS-Management-Plattform für Barbershops. Inklusive integriertem Website-Builder für Kundenbuchungen und zentralem Admin-Dashboard.",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
        year: "2026",
      },
      {
        number: "02",
        title: "The Global Scale",
        url: "https://the-global-scale.vercel.app/",
        description: "Ein datengetriebenes Charity-Projekt, das globale Einkommensungleichheit veranschaulicht. Entwickelt, um durch greifbare Lebensstandard-Vergleiche Spenden für gemeinnützige Zwecke zu generieren.",
        technologies: ["React", "Javascript", "Vite", "CSS"],
        year: "2025",
      },
      {
        number: "03",
        title: "Le Baromètre du Cœur ",
        url: "https://le-barometre-du-coeur.vercel.app/",
        description: "Ein interaktives Quiz, das als Spassprojekt zum Valentinstag während eines Sprachaufenthalts in Frankreich für die Schule entwickelt wurde. Die App berechnet den Herz-Score der Nutzer durch spielerische Fragen und dynamische Auswertungen.",
        technologies: ["React", "TypeScript", "Vite", "CSS"],
        year: "2025",
      },
    ],
  },
  contact: {
    headingLines: ["Lass uns", "zusammenarbeiten"],
    intro: "Ob Projektanfrage oder technischer Austausch, ich freue mich auf deine Nachricht.",
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
      responseTime: {
        label: "Antwortzeit",
        value: "Innerhalb von 24 Stunden",
      },
    },
  },
};
