import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ioannis Lamprou",
  DESCRIPTION: "AI researcher specializing in Large Language Models, Natural Language Processing and Machine Learning at Technical University of Crete, Greece.",
  AUTHOR: "Ioannis Lamprou",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "My professional experience in AI research and development.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Research Projects",
  DESCRIPTION: "Recent research projects and publications in AI and cybersecurity.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Experience",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "glamprou26@protonmail.com",
    HREF: "mailto:glamprou26@protonmail.com",
  },
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "jlamprou",
    HREF: "https://github.com/jlamprou"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ioannis-lamprou",
    HREF: "https://www.linkedin.com/in/ioannis-lamprou-478b1b223/",
  },
]