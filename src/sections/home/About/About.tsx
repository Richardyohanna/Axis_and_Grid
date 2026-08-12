import RevealImage from "../../../components/effects/RevealImage";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import EngineeringBackground from "../../../components/effects/EngineeringBackground";

const About = () => {
  return (
    <Section className="bg-[#0B0B0B]">
    <EngineeringBackground>
      <Container>
          <h2 className="uppercase w-full mb-6 text-4xl font-bold tracking-[0.2em] flex justify-center text-yellow">
              WHO WE ARE
          </h2>
        <div className="grid gap-24 lg:grid-cols-2 items-center">

          
          <AboutContent />

         <RevealImage>
          <AboutImage />
         </RevealImage>
          

        </div>

      </Container>
    </EngineeringBackground>
    </Section>
  );
};

export default About;