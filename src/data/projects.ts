// export const projects = [
//   {
//     id: 1,

//     title: "Luxury Residential Development",

//     location: "Abuja",

//     category: "Residential",

//     image: "/projects/project1.png",
//   },

//   {
//     id: 2,

//     title: "Commercial Office Complex",

//     location: "Lagos",

//     category: "Commercial",

//     image: "/projects/project2.png",
//   },

//   {
//     id: 3,

//     title: "Drainage Infrastructure",

//     location: "Jos",

//     category: "Civil",

//     image: "/projects/project3.png",
//   },
// ];

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import hero from "../assets/images/hero/hero.png";
import renovation from "../assets/services/Renovation.png";

import res1 from "../assets/projects/res1.jpeg";
import res2 from "../assets/projects/res2.jpeg";
import res3 from "../assets/projects/res3.jpeg";
import res4 from "../assets/projects/res4.jpeg";
import res5 from "../assets/projects/res5.jpeg";
import res6 from "../assets/projects/res6.jpeg";
import res7 from "../assets/projects/res7.jpeg";
import res8 from "../assets/projects/res8.jpeg";
import res9 from "../assets/projects/res9.jpeg";
import res10 from "../assets/projects/res10.jpeg";
import res11 from "../assets/projects/res11.jpeg";
import res12 from "../assets/projects/res12.jpeg";
import res13 from "../assets/projects/res13.jpeg";

export const projects = [
  {
    id: 1,
    title: "Luxury Residential Development",
    category: "Residential",
    location: "Abuja",
    year: "2026",
    image: project1,
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Lagos",
    year: "2025",
    image: project2,
    featured: false,
    size: "small",
  },
  {
    id: 3,
    title: "Drainage Infrastructure",
    category: "Civil",
    location: "Jos",
    year: "2025",
    image: project3,
    featured: false,
    size: "small",
  },
  {
    id: 4,
    title: "Bridge Construction",
    category: "Infrastructure",
    location: "Kaduna",
    year: "2024",
    image: project4,
    featured: true,
    size: "large",
  },
];



export const heroFeaturedProjects = [

  {
    id: 1,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Lagos",
    year: "2025",
    image: res1,
    featured: false,
    size: "small",
  },
  {
    id: 2,
    title: "Drainage Infrastructure",
    category: "Civil",
    location: "Jos",
    year: "2025",
    image: project3,
    featured: false,
    size: "small",
  },
  {
    id: 3,
    title: "Bridge Construction",
    category: "Infrastructure",
    location: "Kaduna",
    year: "2024",
    image: project4,
    featured: true,
    size: "large",
  },
];


export type ProjectCategory =
  | "All"
  | "Residential"
  | "Commercial"
  | "Civil"
  | "Renovation";

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  year: string;
  status: "Completed" | "Ongoing";
  description: string;
  image: string;
  featured?: boolean;
}

export const projectsMain: Project[] = [
  {
    id: 1,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "Lagos, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Commercial construction project involving structural works, site coordination and finishing activities.",
    image: project2,
    featured: false,
  },

  {
    id: 2,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res1,
    featured: false,
  },

  {
    id: 3,
    title: "Site Infrastructure Works",
    category: "Civil",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Civil works including external site development, drainage, access and related infrastructure.",
    image: project3,
  },

  {
    id: 4,
    title: "Residential Renovation",
    category: "Renovation",
    location: "Abuja, Nigeria",
    year: "2024",
    status: "Completed",
    description:
      "Renovation and improvement works carried out on an existing residential property.",
    image: renovation,
  },
  
    {
    id: 5,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res2,
    featured: false,
  },

  {
    id: 6,
    title: "Commercial Building",
    category: "Commercial",
    location: "FCT, Nigeria",
    year: "2024",
    status: "Ongoing",
    description:
      "Commercial building project currently progressing through structured construction stages.",
    image: hero,
    featured: false,
  },

  {
    id: 7,
    title: "External Civil Works",
    category: "Civil",
    location: "Abuja, Nigeria",
    year: "2024",
    status: "Completed",
    description:
      "External construction works supporting access, drainage and site functionality.",
    image: project4,
  },

    {
    id: 8,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res3,
    featured: false,
  },

    {
    id: 9,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res4,
    featured: false,
  },

    {
    id: 10,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res5,
    featured: false,
  },

    {
    id: 11,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res6,
    featured: false,
  },

    {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res7,
    featured: false,
  },
      {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res8,
    featured: false,
  },
      {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res9,
    featured: false,
  },
      {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res10,
    featured: false,
  },
      {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res11,
    featured: false,
  },
      {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res12,
    featured: false,
  },
      {
    id: 12,
    title: "Residential Development",
    category: "Residential",
    location: "Abuja, Nigeria",
    year: "2025",
    status: "Completed",
    description:
      "Residential construction delivered through coordinated structural, building and finishing works.",
    image: res13,
    featured: false,
  },
];