import AboutHero from "../sections/About/AboutHero/AboutHero";
import CompanyOverview from "../sections/About/CompanyOverview/CompanyOverview";
import EngineeringApproach from "../sections/About/EngineeringApproach/EngineeringApproach";
import CoreValues from "../sections/About/CoreValues/CoreValues";
import Compliance from "../sections/About/Compliance/Compliance";
// import AboutCTA from "../sections/AboutCTA/AboutCTA";
import MeetOurTeam from "../sections/About/MeetOurTeam/MeetOurTeam";

const About = () => {
  return (
    <>
      <AboutHero />

      <CompanyOverview />

      <EngineeringApproach />

      <CoreValues />

      <MeetOurTeam />

      <Compliance />


      {/* <AboutCTA /> */}
    </>
  );
};

export default About;