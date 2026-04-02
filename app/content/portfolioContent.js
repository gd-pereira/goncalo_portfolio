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
        title: "E-Commerce Platform",
        description:
          "Eine vollständige E-Commerce-Lösung mit React, Node.js und PostgreSQL. Inklusive Payment-Integration und Admin-Dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        year: "2024",
      },
      {
        number: "02",
        title: "Task Management App",
        description: "Kollaborative Projektmanagement-Anwendung mit Echtzeit-Updates und Team-Funktionen.",
        technologies: ["Next.js", "Python", "MongoDB", "WebSockets"],
        year: "2024",
      },
      {
        number: "03",
        title: "Analytics Dashboard",
        description: "Datenvisualisierungs-Dashboard für Business Intelligence mit interaktiven Charts und Reports.",
        technologies: ["React", "TypeScript", "SQL", "D3.js"],
        year: "2023",
      },
    ],
  },
  contact: {
    headingLines: ["Lass uns", "zusammenarbeiten"],
    intro: "Ob Projektanfrage oder technischer Austausch – ich freue mich auf deine Nachricht.",
    links: {
      email: "kontakt@example.com",
      emailHref: "mailto:kontakt@example.com",
      github: "GitHub",
      githubHref: "https://github.com/",
      linkedIn: "LinkedIn",
      linkedInHref: "https://www.linkedin.com/",
    },
    details: {
      availability: {
        label: "Verfügbarkeit",
        value: "Offen für Freelance-Projekte",
      },
      location: {
        label: "Standort",
        value: "Schweiz",
      },
      responseTime: {
        label: "Antwortzeit",
        value: "Innerhalb von 24 Stunden",
      },
    },
  },
};
