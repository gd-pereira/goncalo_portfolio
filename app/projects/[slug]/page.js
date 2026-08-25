import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CaseStudyView from "../../components/case-study/CaseStudyView";
import { getCaseStudyBySlug, getCaseStudySlugs } from "../../content/caseStudies";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Projekt nicht gefunden" };
  }

  return {
    title: `${study.title} | Gonçalo Pereira`,
    description: study.oneLiner,
    openGraph: {
      title: `${study.title} | Gonçalo Pereira`,
      description: study.oneLiner,
      type: "article",
      locale: "de_CH",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="w-full max-w-[1322px] bg-[#0a0a0a] font-sans mx-auto overflow-hidden min-h-screen">
      <Navigation />
      <div className="fade-in-up fade-in-up-delay-1">
        <CaseStudyView study={study} />
      </div>
      <Footer />
    </main>
  );
}
