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

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug) ?? null;
}

export function getCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
