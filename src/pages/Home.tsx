import About from "../sections/home/About/About";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/home/Services/Services";
import Projects from "../sections/home/Projects/Projects";

import useParallax from "../hooks/useParallax";

import useHeroAnimation from "../hooks/useHeroAnimation";
import { useRef} from "react";


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
      {/* <Navbar /> */}

      {/* Background Image */}
      {/* <RevealImage>
        <img
          ref={imageRef}
          src={heroImage}
          alt="Engineering Project"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </RevealImage> */}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Blueprint Grid */}
      {/* <GridOverlay className="opacity-40" /> */}
      <Hero />

      <About />
          
      <Services />

      <Projects />
    </>
  );
};

export default Home;