export interface HighlightItem {
  text: string;
  tooltipText: string;
  link?: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  duration: string;
  description: string;
  highlights?: HighlightItem[];
  suffix?: string;
}

export interface NavLink {
  href: string;
  text: string;
}

export const SITE_TITLE = "Ryan Folio © 2025";

export const SITE_DESCRIPTION = "My portfolio, © 2025 - forever";

export const NAME = "Ryan Chung";

export const SITE_MAP: NavLink[] = [
  { href: "/", text: "Home" },
  { href: "/blog", text: "Blog" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Royal Bank of Canada",
    companyUrl: "https://rbc.com",
    duration: "12 months",
    description: "Developed, maintained, and productionized",
    highlights: [
      {
        text: "online banking & payments features",
        tooltipText:
          "Bill payments, Pay employees and vendors, International money transfers, and Payment history",
      },
      {
        text: "scalable caching and AI/ML platforms",
        tooltipText:
          "Cache-as-a-Service for client information, Intent-based NLU stack search & dynamic UI generation",
      },
    ],
    suffix: "for over 10 million monthly users.",
  },
  {
    company: "Decipad",
    companyUrl: "https://decipad.com",
    duration: "8 months",
    description:
      "Extended data notebook app to poll user-configured endpoints and convert to Apache Arrow, improved multi-user distributed text editing performance, and added RBAC-based notebook publishing.",
  },
  {
    company: "Software Consultancy",
    companyUrl: "",
    duration: "13 months",
    description: "Modernized websites and databases for businesses like",
    highlights: [
      {
        text: "Em and A Pen in 2022",
        tooltipText: "Click to see the Em and a Pen website",
        link: "https://www.emandapen.com/",
      },
      {
        text: "Calgary College of TCM and Acupuncture in 2023",
        tooltipText: "Click to see the CCTCMA website",
        link: "https://www.cctcma.com",
      },
    ],
    suffix: "for a combined audience of 10,000 annual visitors.",
  },
];
