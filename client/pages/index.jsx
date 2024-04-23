import React from "react";
import Carousel from "../components/Carousel";
import Tabs from "../components/Tabs";



const Index = () => {
  return (
    <div>
      <Carousel />
      <div className="mt-5 bg-slate-100 p-10 rounded-2xl">
        <p className="text-4xl font-bold">
          All the skills you need in one place
        </p>
        <p className="my-3 text-xl">
        From critical skills to technical topics, EduPrime supports your
          professional development.
        </p>
      </div>
      <Tabs />
      
      
    </div>
  );
};

export default Index;
