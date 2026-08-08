import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import EngineeringBackground from "../../../components/effects/EngineeringBackground";

const Projects = () => {
  return (
    <Section className="bg-[#0B0B0B]">
      <EngineeringBackground>
        <Container>

          <span className="uppercase tracking-[0.2em] flex justify-center text-yellow text-xl">
              FEATURED PROJECTS
          </span> 
          <div className="max-w-3xl">
    

            <h2 className="mt-6 text-5xl font-black">
              Engineering Excellence
              <br />
              In Every Detail.
            </h2>

            <p className="mt-5 text-white/70 leading-8">
              Every project reflects our commitment to structural precision,
              technical expertise and exceptional craftsmanship.
            </p>
          </div>

          <div className="mt-10 columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </Container>
      </EngineeringBackground>
    </Section>
  );
};

export default Projects;