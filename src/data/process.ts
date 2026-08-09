export const process = [
  {
    number: "01",

    title: "Site Visit & Consultation",

    description:
      "Understanding project requirements and assessing the site before preparing a detailed quotation.",
  },

  {
    number: "02",

    title: "Planning & Mobilization",

    description:
      "Project planning, scheduling, procurement and mobilization of materials and workforce.",
  },

  {
    number: "03",

    title: "Construction",

    description:
      "Execution under professional engineering supervision with regular milestone updates.",
  },

  {
    number: "04",

    title: "Inspection & Handover",

    description:
      "Quality assurance, project inspection and successful handover to the client.",
  },
];

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  reference: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "site-visit",
    number: "01",
    title: "Site Visit & Quote",
    description:
      "We assess the site and provide an itemized Bill of Quantities before any work begins.",
    reference: "AX-01",
  },
  {
    id: "mobilization",
    number: "02",
    title: "Mobilization",
    description:
      "Materials are sourced, the site is prepared, and a clear construction schedule is agreed with the client.",
    reference: "AX-02",
  },
  {
    id: "construction",
    number: "03",
    title: "Construction",
    description:
      "Construction proceeds under professional site supervision with milestone check-ins and controlled execution.",
    reference: "AX-03",
  },
  {
    id: "handover",
    number: "04",
    title: "Handover",
    description:
      "Final inspection, snag-list closeout, and formal handover of the completed project.",
    reference: "AX-04",
  },
];