import React from "react";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import Timer from "../components/Timer";
import ModulesList from "../components/ModulesList";
import WhoCanJoin from "../components/WhoCanJoin";
import PriceBlock from "../components/PriceBlock";
import FAQAccordion from "../components/FAQAccordion";
import Testimonials from "../components/Testimonials";
import CTARegister from "../components/CTARegister";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProblemSolution />
      <Timer />
      <ModulesList />
      <WhoCanJoin />
      <PriceBlock />
      <FAQAccordion />
      <Testimonials />
      <CTARegister />
    </div>
  );
};

export default Home;
