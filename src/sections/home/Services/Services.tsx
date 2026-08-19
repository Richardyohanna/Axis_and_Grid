import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

import { services } from "../../../data/services";
import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate();

  return (
    <Section className="">
      
      <Container>

        <SectionHeading />

        <div className="mt-10 grid gap-8 md:grid-cols-2  xl:grid-cols-3">

          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => {
                navigate(`/services/${service.id}`);
              }}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
};

export default Services;