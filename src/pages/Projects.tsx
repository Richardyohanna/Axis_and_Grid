// import ProjectsHero from "../sections/Projects/ProjectsHero/ProjectsHero";
import ProjectFilters from "../sections/Projects/ProjectFilters/ProjectFilters";
import ProjectsGrid from "../sections/Projects/ProjectsGrid/ProjectsGrid";
// import ProjectsCTA from "../sections/Projects/ProjectsCTA/ProjectsCTA";
import ContactCTA from "../sections/home/ContactCTA/ContactCTA";

import type { ProjectCategory}  from "../data/projects";
import { projectsMain } from "../data/projects";
import { useState } from "react";

const Project = () => {

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsMain
      : projectsMain.filter(
          (project) => project.category === activeCategory
        );

  return <>
      {/* <ProjectsHero /> */}

      <ProjectFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProjectsGrid projects={filteredProjects} />
      <ContactCTA /> 
      {/* <ProjectsCTA /> */}
  </>;
};

export default Project;