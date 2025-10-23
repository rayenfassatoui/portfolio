import { DATA } from "@/data/resume";

export function getWorkData(language: "en" | "fr") {
  return language === "fr" && DATA.workFr ? DATA.workFr : DATA.work;
}

export function getEducationData(language: "en" | "fr") {
  return DATA.education;
}

export function getProjectsData(language: "en" | "fr") {
  return DATA.projects;
}