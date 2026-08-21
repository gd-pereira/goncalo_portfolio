import { terminumCaseStudy } from "./terminum";

const caseStudies = [terminumCaseStudy];

export function getAllCaseStudies() {
  return caseStudies;
}

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug) ?? null;
}

export function getCaseStudySlugs() {
  return caseStudies.map((study) => study.slug);
}
