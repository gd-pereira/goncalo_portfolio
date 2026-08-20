import { terminumCaseStudy } from "./terminum";
import { theGlobalScaleCaseStudy } from "./the-global-scale";
import { leBarometreDuCoeurCaseStudy } from "./le-barometre-du-coeur";

const caseStudies = [
  terminumCaseStudy,
  theGlobalScaleCaseStudy,
  leBarometreDuCoeurCaseStudy,
];

export function getAllCaseStudies() {
  return caseStudies;
}

const PUBLISHED_SLUGS = new Set(["terminum"]);

export function getCaseStudyBySlug(slug) {
  if (!PUBLISHED_SLUGS.has(slug)) {
    return null;
  }

  return caseStudies.find((study) => study.slug === slug) ?? null;
}

export function getCaseStudySlugs() {
  return caseStudies
    .map((study) => study.slug)
    .filter((slug) => PUBLISHED_SLUGS.has(slug));
}
