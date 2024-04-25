import React from "react";
import Carousel from "../components/Carousel";
import Tabs from "../components/Tabs";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";



const Index = () => {
  return (
    <div>
      <Carousel />
      <div className=" bg-slate-100 p-10 rounded-2xl">
        <p className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl  font-bold">
          All the skills you need in one place
        </p>
        <p className="my-3 xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm">
        From critical skills to technical topics, EduPrime supports your
          professional development.
        </p>
      </div>
      <Tabs />
      <Pricing />
      <Footer />
      
      
    </div>
  );
};

export default Index;
