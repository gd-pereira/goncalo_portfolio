export const terminumCaseStudy = {
  slug: "terminum",
  title: "Terminum",
  year: "2026",
  technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
  liveUrl: "https://terminum.ch",
  liveLabel: "Live ansehen",
  eyebrow: "Hauptprojekt",
  oneLiner:
    "Eine vollständige SaaS-Management-Plattform für Barbershops — von Buchungen bis Website-Builder.",
  overview: {
    motivation:
      "Viele Barbershops jonglieren noch mit WhatsApp, Excel und einer veralteten Website. Ich wollte eine Plattform bauen, die den Alltag eines Shops wirklich abbildet: Termine, Team, Services und eine Buchungsseite, die sich wie ein Produkt anfühlt — nicht wie ein Formular-Bausatz.",
    started:
      "Gestartet Ende 2025 als Nebenprojekt mit dem Ziel, ein echtes Multi-Tenant-SaaS zu verstehen — nicht nur eine Demo-UI. Der Fokus lag früh auf Auth, Datenmodell und einem Admin-Dashboard, das im Alltag hält.",
    goal:
      "Ein Shop soll sich in Minuten onboarden, Buchungen live verwalten und eine eigene Buchungswebsite ausspielen können — inklusive Zahlungen über Stripe und einem zentralen Admin für den Betreiber.",
  },
  built: [
    "Multi-Tenant Admin-Dashboard für Shops (Übersicht, Termine, Team, Services, Produkte, Analytics)",
    "Integrierter Website-Builder für kundenorientierte Buchungsseiten",
    "Auth, Rollen und Onboarding-Flows für neue Shops",
    "Stripe-Integration für Abos und Zahlungsflüsse (Test- und Live-Kontext)",
    "Supabase als Backend für Auth, Datenbank und Realtime-nahe Workflows",
  ],
  screenshots: [
    {
      src: "/projects/terminum_preview.png",
      alt: "Terminum Admin-Dashboard Übersicht",
      caption: "Admin-Dashboard — Überblick, Kennzahlen und nächste Termine",
    },
    {
      src: "/projects/terminum_preview.png",
      alt: "Terminum Buchungen und Kalender",
      caption: "Buchungs- und Kalenderflüsse — Platzhalter; weitere Screenshots folgen",
    },
    {
      src: "/projects/terminum_preview.png",
      alt: "Terminum Website-Builder",
      caption: "Website-Builder für die öffentliche Buchungsseite — Platzhalter",
    },
    {
      src: "/projects/terminum_preview.png",
      alt: "Terminum Onboarding",
      caption: "Onboarding und Shop-Setup — Platzhalter",
    },
  ],
  challenges: [
    {
      title: "Multi-Tenant ohne Chaos",
      body: "Jeder Shop braucht Isolation bei Daten, Auth und Einstellungen. Das Datenmodell und die Row-Level-Security mussten von Anfang an mitgedacht werden — nachträgliche Trennung wäre teuer geworden.",
    },
    {
      title: "Produkt-UI statt Feature-Liste",
      body: "Ein Dashboard mit vielen Modulen wirkt schnell überladen. Die Herausforderung war, Dichte zuzulassen, ohne Orientierung zu verlieren: klare Hierarchie, ruhige Typografie und Flows, die einem realen Shop-Alltag folgen.",
    },
    {
      title: "Builder + Runtime",
      body: "Der Website-Builder muss editierbar und gleichzeitig performant ausgeliefert werden. Trennung zwischen Editor-Erfahrung und der öffentlichen Buchungsseite war entscheidend für Stabilität und Wartbarkeit.",
    },
    {
      title: "Zahlungen und Vertrauen",
      body: "Stripe bringt echte Produktkomplexität: Testmodus, Webhooks, Fehlerzustände. Ziel war, Zahlungsflüsse so zu integrieren, dass Shops den Status verstehen — ohne die Admin-Oberfläche zu verkomplizieren.",
    },
  ],
  learnings: [
    "Scope früh schneiden: ein starkes Onboarding und ein klares Kern-Dashboard schlagen zehn halbfertige Module.",
    "Multi-Tenant und Auth sind Architekturentscheidungen — nicht „später dazu“.",
    "Gutes SaaS fühlt sich im Alltag ruhig an: wenige klare Pfade statt maximaler Optionen.",
    "Echte Integrationen (Stripe, E-Mail, Domains) erzwingen Produktqualität früher als reine UI-Demos.",
  ],
  backLabel: "Projekte",
  contactTease: "Fragen zum Projekt?",
  contactLabel: "Kontakt",
};
