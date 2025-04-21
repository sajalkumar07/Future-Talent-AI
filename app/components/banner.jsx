import React from "react";
import { ArrowRight } from "lucide-react";

const banner = () => {
  return (
    <div className="w-full bg-[#7e69aa] flex justify-center items-center p-12">
      <section className="flex-col justify-center items-center flex">
        <div className="text-center  p-14 space-y-4  ">
          <h1 className="text-4xl text-white font-semibold">
            Ready to Transform Your Recruitment Process?
          </h1>
          <p className=" text-white">
            Join forward-thinking companies that are optimizing their hiring
            with our Al-powered
            <br /> recruitment solution.
          </p>
        </div>
        <div className="flex gap-8">
          <button className="bg-white text-[#7e69aa] px-8 py-3 rounded-md flex items-center justify-center cursor-pointer group">
            Schedule a Demo
            <ArrowRight className="ml-2 h-4 w-4 duration-300 group-hover:translate-x-1" />
          </button>
          <button className="border  p-2 rounded-md text-[#7e69aa] w-40 cursor-pointer bg-white">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default banner;
