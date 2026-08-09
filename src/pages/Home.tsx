import About from "../sections/home/About/About";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/home/Services/Services";
import Projects from "../sections/home/Projects/Projects";
import Process from "../sections/home/Process/Process";
import useParallax from "../hooks/useParallax";
// import WhyUs from "../sections/home/WhyUs/WhyUs";
import useHeroAnimation from "../hooks/useHeroAnimation";
import { useRef} from "react";
import ContactCTA from "../sections/home/ContactCTA/ContactCTA";

const Home = () => {

    const imageRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
  
    useParallax(imageRef,120);
    useHeroAnimation({
    title: titleRef,
    content: contentRef,
  });

  return (
    <>

      <Hero />

      <About />
          
      <Services />

      <Projects />

      <Process />
{/* 
      <WhyUs />*/}

      <ContactCTA /> 
    </>
  );
};

export default Home;