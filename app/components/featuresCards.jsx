import React from "react";
import { Funnel, Brain, Users, FileText } from "lucide-react";

const Cards = [
  {
    icon: (
      <FileText
        className="bg-purple-100 text-[#7e69aa] rounded-full px-2"
        size={40}
      />
    ),
    title: "Al-Generated Job Descriptions",
    description:
      "Create compelling job descriptions based on latest global trends across domains, tailored to your organizational needs.",
  },
  {
    icon: (
      <Users
        className="bg-purple-100 text-[#7e69aa] rounded-full px-2"
        size={40}
      />
    ),
    title: "Candidate Sourcing",
    description:
      "Identify and invite suitable candidates across job boards including LinkedIn, Upwork, Monster, Naukri, and Fiverr.",
  },
  {
    icon: (
      <Brain
        className="bg-purple-100 text-[#7e69aa] rounded-full px-2"
        size={40}
      />
    ),
    title: "Comprehensive Assessment",
    description:
      "Assess candidates for CV fitment, psychometrics, skill proficiency, and situational knowledge with Al precision.",
  },
  {
    icon: (
      <Funnel
        className="bg-purple-100 text-[#7e69aa] rounded-full px-2"
        size={40}
      />
    ),
    title: "Intelligent Filtering",
    description:
      "Filter the best matches for final human HR rounds, optimizing your candidate selection process.",
  },
];

const FeaturesCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 max-w-2xl mb-12">
        <h1 className="text-4xl font-bold">
          Comprehensive Al Recruitment Suite
        </h1>
        <p className="text-lg text-center text-gray-600">
          Our platform handles the entire recruitment process, from job
          description to final candidate selection.
        </p>
      </div>
      <div className="grid grid-cols-4  gap-6 w-full max-w-7xl py-6">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-xl rounded-2xl p-6 border border-gray-200 h-64"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
            <p className="text-sm text-gray-600 flex-grow overflow-hidden">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCards;
