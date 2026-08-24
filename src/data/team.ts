// import team1 from "../assets/team/Managing Director.png";
import manager from "../assets/team/Engr. Ezekiel Aiso.png";
import operations from "../assets/team/Engr. Alfred Eric.jpeg";
import general from "../assets/team/Arc. Grace A. Aiso.jpeg";
import technical from "../assets/team/Engr. Maren Jonah.jpeg";
import arc from "../assets/team/Arc. Israel Titus.jpeg";
import quantity from "../assets/team/Shado Peacemaker Tibile.png";
import management from "../assets/team/Engr. Peter A. Musa.png";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  qualifications: string[];
  experience: string;
  company: string;
   bio: string;
  expertise: string[];
  affiliations?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Engr. Ezekiel Aiso",
    role: "Managing Director",
    image: manager,

    qualifications: [
      "B.Eng Civil Engineering",
      "COREN Registered",
    ],

    experience: "12+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "A civil engineering professional with experience in construction management, site supervision and the delivery of residential, commercial and civil engineering projects.",

    expertise: [
      "Civil Engineering",
      "Construction Management",
      "Site Supervision",
      "Project Coordination",
    ],

    affiliations: [
      "Council for the Regulation of Engineering in Nigeria",
      "Nigerian Society of Engineers",
    ],
  },

  {
    id: 2,
    name: "Arc. Grace A. Aiso",
    role: "General Manager",

    image: general,

    qualifications: [
      "B.Eng Engineering",
      "Project Management",
    ],

    experience: "8+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "Construction and project management professional focused on coordinating project activities, resources, schedules and site operations.",

    expertise: [
      "Project Management",
      "Construction Planning",
      "Site Coordination",
      "Quality Control",
    ],

    affiliations: [],
  },

  {
    id: 3,
    name: "Engr. Maren Jonah",
    role: "Technical Director",

    image: technical,

    qualifications: [
      "B.Eng Civil Engineering",
    ],

    experience: "6+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "Civil engineering professional responsible for technical site coordination, construction supervision and ensuring that project activities follow approved engineering requirements.",

    expertise: [
      "Site Engineering",
      "Structural Works",
      "Construction Supervision",
      "Technical Inspection",
    ],

    affiliations: [],
  },

  {
    id: 4,
    name: "Engr. Alfred Eric",
    role: "Operations Manager",

    image: operations,

    qualifications: [
      "B.Tech Quantity Surveying",
    ],

    experience: "7+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "Quantity surveying professional responsible for cost planning, measurement, procurement support and financial control throughout the construction process.",

    expertise: [
      "Cost Management",
      "Bill of Quantities",
      "Procurement",
      "Contract Administration",
    ],

    affiliations: [],
  },

   {
    id: 5,
    name: "Arc. Israel Titus",
    role: "Senior architect",

    image: arc,

    qualifications: [
      "B.Tech Quantity Surveying",
    ],

    experience: "7+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "Quantity surveying professional responsible for cost planning, measurement, procurement support and financial control throughout the construction process.",

    expertise: [
      "Cost Management",
      "Bill of Quantities",
      "Procurement",
      "Contract Administration",
    ],

    affiliations: [],
  },

  {
    id: 6,
    name: "Shado Peacemaker Tibile",
    role: "Quantity Surveyor NIQS (Probational)",

    image: quantity,

    qualifications: [
      "B.Tech Quantity Surveying",
    ],

    experience: "7+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "Quantity surveying professional responsible for cost planning, measurement, procurement support and financial control throughout the construction process.",

    expertise: [
      "Cost Management",
      "Bill of Quantities",
      "Procurement",
      "Contract Administration",
    ],

    affiliations: [],
  },
  {
    id: 7,
    name: "Engr. Peter A. Musa",
    role: "Operations and management",

    image: management,

    qualifications: [
      "B.Tech Quantity Surveying",
    ],

    experience: "7+ Years Experience",

    company: "Axis & Grid Engineering & Construction",

    bio: "Quantity surveying professional responsible for cost planning, measurement, procurement support and financial control throughout the construction process.",

    expertise: [
      "Cost Management",
      "Bill of Quantities",
      "Procurement",
      "Contract Administration",
    ],

    affiliations: [],
  },
];