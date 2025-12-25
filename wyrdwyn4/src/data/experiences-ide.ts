export interface ExperienceItem {
  company: string;
  role: string;
  periods: string[];
  color: "blue" | "green" | "yellow" | "red" | "purple" | "orange" | "teal" | "indigo" | "pink";
  link: string;
  type: "workterm" | "additional";
}

export const WORK_TERMS: ExperienceItem[] = [
  {
    company: "Nasdaq Verafin",
    role: "AI & Automation Developer Intern",
    periods: ["Sep. 2025 - Present"],
    color: "red",
    link: "/work/nasdaq-verafin/ai-and-automation-developer-intern",
    type: "workterm"
  },
  {
    company: "Nasdaq Verafin",
    role: "Datalake Developer Intern",
    periods: ["Jan. 2025 - Aug. 2025", "May. 2024 - Aug. 2024"],
    color: "green",
    link: "/work/nasdaq-verafin/datalake-developer-intern",
    type: "workterm"
  },
  {
    company: "SDP-GP",
    role: "Data Analytics & Project Control Intern",
    periods: ["Sep. 2023 - Dec. 2023"],
    color: "yellow",
    link: "/work/sdp-gp/data-analytics-and-project-control-intern",
    type: "workterm"
  },
  {
    company: "Memorial University of Newfoundland",
    role: "Robotics Research Intern",
    periods: ["Jan. 2023 - May. 2023"],
    color: "blue",
    link: "/work/memorial-university-of-newfoundland/robotics-research-intern",
    type: "workterm"
  }
];

export const ADDITIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Valiant Aerotech",
    role: "Software Team Lead",
    periods: ["Sep. 2024 - Present"],
    color: "purple",
    link: "/work/valiant-aerotech/software-team-lead",
    type: "additional"
  },
  {
    company: "Memorial University of Newfoundland",
    role: "Scientific Computing Research Assistant",
    periods: ["Sep. 2024 - Feb. 2025"],
    color: "orange",
    link: "/work/memorial-university-of-newfoundland/scientific-computing-research-assistant",
    type: "additional"
  },
  {
    company: "SiftMed",
    role: "Data Quality Specialist",
    periods: ["May. 2024 - Aug. 2024"],
    color: "teal",
    link: "/work/siftmed/data-quality-specialist",
    type: "additional"
  },
  {
    company: "Memorial University of Newfoundland",
    role: "Data Quality Assurance Analyst",
    periods: ["May. 2023 - Sep. 2023"],
    color: "indigo",
    link: "/work/memorial-university-of-newfoundland/data-quality-assurance-analyst",
    type: "additional"
  },
  {
    company: "Memorial University of Newfoundland",
    role: "ISWEP Research Assistant",
    periods: ["Jun. 2022 - Sep. 2022"],
    color: "pink",
    link: "/work/memorial-university-of-newfoundland/iswep-research-assistant",
    type: "additional"
  }
];

export const EXPERIENCE = [...WORK_TERMS, ...ADDITIONAL_EXPERIENCE];