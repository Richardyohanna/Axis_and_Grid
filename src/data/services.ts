
import civilWork from "../assets/services/Civil Works.png";
import commercialContruction from "../assets/services/Commercial Construction.png";
import projectSupervision from "../assets/services/Project Supervision.png";
import renovation from "../assets/services/Renovation.png";
import residential from "../assets/services/Residential Construction.png";
import subcontracting from "../assets/services/Subcontracting.png";

export const services = [
  {
    id: "01",

    title: "Residential Construction",

    description:
      "New residential developments, luxury homes, extensions and complete building solutions from planning to finishing.",

    icon: "home",
  },

  {
    id: "02",

    title: "Commercial Construction",

    description:
      "Office buildings, retail developments, warehouses and commercial facilities delivered with precision.",

    icon: "building",
  },

  {
    id: "03",

    title: "Civil Engineering",

    description:
      "Drainage systems, roads, pavements, fencing, infrastructure works and site development.",

    icon: "bridge",
  },

//   {
//     id: "04",

//     title: "Project Supervision",

//     description:
//       "Professional project management ensuring quality control, timelines and cost efficiency.",

//     icon: "clipboard",
//   },

//   {
//     id: "05",

//     title: "Renovation & Fit-Out",

//     description:
//       "Modern renovation, structural upgrades and interior transformation for residential and commercial spaces.",

//     icon: "hammer",
//   },

//   {
//     id: "06",

//     title: "Procurement & Subcontracting",

//     description:
//       "Coordinated sourcing of materials and specialist subcontractors under one project management team.",

//     icon: "truck",
//   },
];




export type Service = {
  number: string;
  code: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  scope: string[];
  suitableFor: string[];
};

export const servicesMain: Service[] = [
  {
    number: "01",
    code: "RES-01",
    title: "Residential Construction",
    shortDescription:
      "New builds and extensions for homeowners and landlords.",
    description:
      "Axis & Grids manages residential construction from initial site preparation through structural works, building services and final finishes. Our approach focuses on coordinated execution, professional supervision and clear communication throughout the project.",
    image: residential,
    scope: [
      "New residential buildings",
      "Building extensions",
      "Site preparation",
      "Structural construction",
      "Final finishes",
    ],
    suitableFor: ["Homeowners", "Property developers", "Landlords"],
  },
  {
    number: "02",
    code: "COM-02",
    title: "Commercial Construction",
    shortDescription:
      "Offices, retail units and warehouses built to specification.",
    description:
      "We deliver commercial construction projects with structured coordination between the client, contractors, suppliers and site teams. Projects are managed around scope, schedule, quality and cost control.",
    image: commercialContruction,
    scope: [
      "Office construction",
      "Retail spaces",
      "Warehouse construction",
      "Site coordination",
      "Construction management",
    ],
    suitableFor: ["Business owners", "Developers", "Commercial property owners"],
  },
    {
    number: "03",
    code: "CIV-03",
    title: "Civil Works",
    shortDescription:
      "Fencing, access roads, drainage and paving for construction sites.",
    description:
      "Our civil works support the infrastructure surrounding a building or development. This includes site access, drainage, paving and other external construction works required for a functional and properly prepared site.",
    image: civilWork,
    scope: [
      "Access roads",
      "Drainage",
      "Paving",
      "Fencing",
      "External site works",
    ],
    suitableFor: ["Developers", "Property owners", "Construction projects"],
  },
  {
    number: "04",
    code: "REN-04",
    title: "Renovation & Fit-out",
    shortDescription:
      "Structural upgrades, remodeling and interior fit-outs.",
    description:
      "Our renovation and fit-out services transform existing spaces while considering their current structure, services and intended use. We coordinate construction activities to minimise disruption and maintain control over the project.",
    image: renovation,
    scope: [
      "Building renovations",
      "Structural upgrades",
      "Remodeling",
      "Interior fit-outs",
      "Space improvements",
    ],
    suitableFor: ["Homeowners", "Commercial property owners", "Landlords"],
  },

  {
    number: "05",
    code: "SUP-05",
    title: "Project Supervision",
    shortDescription:
      "Professional construction management and site supervision.",
    description:
      "For developers and clients who require an experienced presence on site, our project supervision service provides structured oversight of construction activities, progress and coordination.",
    image: projectSupervision,
    scope: [
      "Site supervision",
      "Progress monitoring",
      "Contractor coordination",
      "Milestone inspections",
      "Construction reporting",
    ],
    suitableFor: ["Property developers", "Private clients", "Investors"],
  },
  {
    number: "06",
    code: "PRC-06",
    title: "Procurement & Subcontracting",
    shortDescription:
      "Coordinated procurement and specialist subcontractor management.",
    description:
      "We coordinate material procurement and specialist subcontractors so that different construction disciplines can operate under one structured point of contact.",
    image: subcontracting,
    scope: [
      "Material procurement",
      "Supplier coordination",
      "Electrical subcontracting",
      "Mechanical subcontracting",
      "Plumbing subcontracting",
    ],
    suitableFor: ["Developers", "Main contractors", "Property owners"],
  },
];