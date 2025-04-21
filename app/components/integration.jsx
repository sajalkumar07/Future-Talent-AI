import React from "react";
import { CheckCircle, Network } from "lucide-react";

const CompatibleSystems = [
  "Workday",
  "Oracle HCM",
  "ADP",
  "Lever",
  "SAP SuccessFactors",
  "BambooHR",
  "Greenhouse",
  "Taleo",
  "PeopleSoft UltiPro",
  "UltiPro",
];

const IntegrationBenefits = [
  "Seamless data synchronization",
  "Automated workflow triggers",
  "Custom-tailored to your organization",
  "Role-based access controls",
  "Real-time analytics and reporting",
  "API-driven integration architecture",
];

const Integration = () => {
  // Split the CompatibleSystems array into two columns
  const leftColumnSystems = CompatibleSystems.slice(
    0,
    Math.ceil(CompatibleSystems.length / 2)
  );
  const rightColumnSystems = CompatibleSystems.slice(
    Math.ceil(CompatibleSystems.length / 2)
  );

  return (
    <div className="flex justify-center items-center flex-col py-10 ">
      <div className="flex flex-col justify-center items-center gap-4 max-w-2xl mb-12 px-4">
        <h1 className="text-4xl font-bold text-center">
          Seamless <span className="text-[#7e69aa]">HRMS Integration</span>
        </h1>
        <p className="text-lg text-center text-gray-600">
          Our platform integrates with your existing HRMS systems to seamlessly
          adapt to your organizational talent matrix.
        </p>
      </div>

      <div className="flex justify-center max-w-7xl px-4 gap-6 flex-row">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex-1">
          <div className="flex flex-col h-full space-y-4">
            <div className="space-y-4">
              <div className=" text-[#7e69aa]">
                <Network size={40} />
              </div>
              <div className="space-y-2">
                {" "}
                <h2 className="text-2xl font-semibold mb-2">
                  Compatible Systems
                </h2>
                <p className="text-gray-600 mb-4">
                  Our solution integrates with all major HRMS platforms,
                  ensuring a smooth transition and enhanced functionality.
                </p>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="flex-1 space-y-2">
                {leftColumnSystems.map((system, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#7e69aa] mr-2"></div>
                    <span className="text-gray-700">{system}</span>
                  </div>
                ))}
              </div>

              <div className="flex-1 space-y-2">
                {rightColumnSystems.map((system, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#7e69aa] mr-2"></div>
                    <span className="text-gray-700">{system}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex-1">
          <div className="flex flex-col h-full space-y-4">
            <div className="space-y-4">
              <div className=" text-[#7e69aa]">
                <CheckCircle size={40} />
              </div>
              <div className="space-y-2">
                {" "}
                <h2 className="text-2xl font-semibold ">
                  Integration Benefits
                </h2>
                <p className="text-gray-600 ">
                  Our intelligent integration approach ensures you get the most
                  out of your existing systems.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {IntegrationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-[#7e69aa] mr-2" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
