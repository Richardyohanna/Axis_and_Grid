export interface WhyUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  reference: string;
}

export const whyUsItems: WhyUsItem[] = [
  {
    id: "supervision",
    number: "01",
    title: "Professional Supervision",
    description:
      "Construction work proceeds under professional site supervision with structured milestone check-ins.",
    reference: "SUP-01",
  },
  {
    id: "cost-control",
    number: "02",
    title: "Transparent Cost Control",
    description:
      "Clients receive an itemized Bill of Quantities before work begins, providing clarity around project costs.",
    reference: "CST-02",
  },
  {
    id: "end-to-end",
    number: "03",
    title: "End-to-End Delivery",
    description:
      "Projects are managed from site assessment and mobilization through construction, inspection and final handover.",
    reference: "DEL-03",
  },
  {
    id: "coordination",
    number: "04",
    title: "Technical Coordination",
    description:
      "Electrical, mechanical and plumbing subcontractors can be coordinated under one point of contact.",
    reference: "TEC-04",
  },
];