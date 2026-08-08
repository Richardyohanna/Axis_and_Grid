import Container from "../../components/ui/Container";

import Section from "../../components/ui/Section";

const About = () => {
  return (
    <Section className="bg-[#111] relative overflow-hidden">

      <Container>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          Left

          Right

        </div>

      </Container>

    </Section>
  );
};

export default About;