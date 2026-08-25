export const terminumCaseStudy = {
  slug: "terminum",
  title: "Terminum",
  year: "2026",
  technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
  liveUrl: "https://terminum.ch",
  liveLabel: "Live ansehen",
  demoUrl: null,
  demoLabel: "Demo ausprobieren",
  demoSoonLabel: "Demo, bald verfügbar",
  eyebrow: "Hauptprojekt",
  oneLiner:
    "Mein erstes grosses SaaS: Eine Plattform, die den kompletten Alltag von Barbershops abdeckt, von der Buchung bis zur eigenen Website.",
  overview: {
    motivation:
      "Ehrlich gesagt war der stärkste Antrieb für Terminum ganz simpel: Ich wollte endlich ein richtig grosses, echtes Projekt anfangen. Es ging mir anfangs gar nicht zwingend um das 'Was' oder 'Warum', sondern primär darum, zu lernen, wie man mit einer Codebase in dieser Grössenordnung überhaupt umgeht. Dass es dann Barbershops wurden, kam erst danach. Ich habe mir verschiedene Branchen angeschaut und gemerkt, dass dort viele noch komplett analog arbeiten oder Tausende von Franken für 0815-Websites zahlen. Da wusste ich, dass dies das perfekte reale Problem für mein Projekt sein wird.",
    started:
      "Ich habe im März 2026 mit dem Projekt gestartet. Mein Fokus lag darauf, ein Multi-Tenant Projekt in der Praxis zu verstehen und nicht immer nur kleine, wertlose Projekte zu bauen. Ehrlicherweise hätte ich so früh in meiner Laufbahn ein Projekt, das dieses Ausmass annimmt, nicht ohne KI hinbekommen. Sie war ein extrem starkes Werkzeug, um Architektur-Entscheidungen zu treffen und effizienter zu arbeiten, mir war aber bewusst, dass ich trotzdem immer verstehen musste was die KI für einen Code rausspuckte, obwohl ich eigentlich immer nur gezielt am prompten war. Das hat mir enorm geholfen, auch wenn ich manche Komponenten trotzdem dreimal komplett neu geschrieben habe, bis ich wirklich zufrieden war.",
    goal:
    "Die Grundidee wuchs schnell zu einem kompletten Betriebssystem für den Shop heran. Ein Barber meldet sich an, richtet seine Services ein und verwaltet alle Termine zentral. Auch das Team wird eingebunden, sodass die Mitarbeiter sich einloggen und selbst managen können. Das absolute Highlight ist aber der integrierte Website-Builder, ähnlich wie bei WordPress, aber speziell auf Barbershops zugeschnitten und von KI unterstützt, damit die eigene Landingpage in Minuten steht. Wenn der Shop möchte, können seine Kunden die Termine direkt bei der Buchung online bezahlen. Auch wird einen der grössten Pain Points der Branche gelöst: sogenannte No-Shows. So bekommen die Barber trotzdem ihr Geld, wenn jemand einfach nicht auftaucht. Dieser Geldfluss läuft über Stripe Connect direkt zum Barber. Das habe ich extra so integriert, damit ich das Geld der Endkunden nie berühre und rechtlich komplett auf der sicheren Seite bin. Dafür durchlaufen die Shops direkt in der App ein eigenes ausführliches Stripe-Onboarding. Zusammen mit dem Admin-Dashboard nimmt die Plattform dem Betreiber am Ende wirklich die komplette Verwaltung ab.",
  },
  screenshots: [
    {
      src: "/projects/terminum_services.png",
      alt: "Terminum Service-Katalog mit Preisen und Dauer",
      caption: "Services: Katalog mit Preisen, Dauer und Bearbeitung",
    },
    {
      src: "/projects/terminum_bookings.png",
      alt: "Terminum Buchungsübersicht mit Statusfiltern und Kundentabelle",
      caption: "Buchungen: Statusfilter, Teamzuweisung und schnelle Aktionen",
    },
    {
      src: "/projects/terminum_team.png",
      alt: "Terminum Team-Einladung mit Rollenauswahl",
      caption: "Team: Einladung mit Rollen (Nur Lesen / Vollzugriff)",
    },
    {
      src: "/projects/terminum_builder.png",
      alt: "Terminum Website-Builder mit Live-Vorschau und Hero-Editor",
      caption: "Website-Builder: Sections, Live-Preview und Publish",
    },
    {
      src: "/projects/terminum_analytics.png",
      alt: "Terminum Analysen-Übersicht mit KPIs und Trendchart",
      caption: "Analysen: Umsatz, Buchungen und Kundentrends im Überblick",
    },
  ],
  challenges: [
    {
      title: "Kundendaten",
      body: "Jeder Shop braucht absolute Isolation bei den Daten. Als mir richtig bewusst wurde, dass ich hier bald echte Geschäftsdaten verwalte, hatte ich enormen Respekt davor. Die Row-Level-Security (RLS) in Supabase absolut wasserdicht zu machen, hat den Launch zwar verzögert, war mir aber wichtig. (Terminum ist heute leider immer noch nicht live...)",
    },
    {
      title: "Der Kampf mit dem Perfektionismus",
      body: "Mein grösstes Hindernis war ich oft selbst. Aus dem Drang heraus, alles perfekt zu machen, habe ich UI-Elemente und Features immer wieder redesignt, bevor die v1 überhaupt stand. Die Balance zu finden, wann etwas bereit für den Release ist, war ein extrem wichtiges Learning für mich, was ich definitiv in zukünftigen Projekten anwenden werde.",
    },
    {
      title: "Builder und Runtime",
      body: "Der Website-Builder musste im Editor einfach zu bedienen sein, aber als Live-Seite pfeilschnell laden. Hier hat mir KI sehr dabei geholfen, meine State-Management-Probleme im Code schneller zu fixen.",
    },
    {
      title: "Zahlungen und Vertrauen",
      body: "Stripe in eine App einzubauen bedeutet echte Komplexität durch Testmodi, Webhooks und Fehlerzustände. Das Ziel war es, diese Zahlungsflüsse so fehlerfrei abzufangen, dass die Nutzer der Plattform blind vertrauen können. Hier bin ich also heute noch doppelt und dreifach so vorsichtig, einfach damit ja keine Fehler passieren.",
    },
  ],
  closing: [
    "Terminum ist für mich bis heute das Projekt, an dem ich am meisten gewachsen bin. Gerade aus den Herausforderungen ziehe ich meine Learnings.",
    "Genau mit diesem zielstrebigem Mindset arbeite ich weiter, bis die v1 wirklich live geht und die ersten Shops an Bord sind.",
  ],
  interviewTease: "Aber mehr dazu im Bewerbungsgespräch ;)",
  backLabel: "Projekte",
  contactTease: "Fragen zum Projekt?",
  contactLabel: "Kontakt",
};