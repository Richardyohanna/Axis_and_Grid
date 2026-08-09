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
    image: hero,
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