import team1 from "../assets/team/Managing Director.png";

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
    name: "Team Member Name",
    role: "Civil Engineer / Managing Director",
    image: team1,

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
    name: "Team Member Name",
    role: "Project Manager",

    image: team1,

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
    name: "Team Member Name",
    role: "Site Engineer",

    image: team1,

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
    name: "Team Member Name",
    role: "Quantity Surveyor",

    image: team1,

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