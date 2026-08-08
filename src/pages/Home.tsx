import About from "../sections/home/About/About";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/home/Services/Services";
import Projects from "../sections/home/Projects/Projects";


const Home = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Hero />

      <About />
          
      <Services />

      <Projects />
    </>
  );
};

export default Home;