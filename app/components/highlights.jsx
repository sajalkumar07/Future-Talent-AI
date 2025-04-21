import React from "react";
import { Globe } from "lucide-react";

const Languages = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Arabic",
  "Portuguese",
  "Russian",
  "Italian",
  "Dutch",
  "Korean",
  "Swedish",
  "Polish",
  "Turkish",
  "Vietnamese",
  "Thai",
  "Indonesian",
  "Malay",
];

const Highlights = () => {
  return (
    <div className="py-20">
      <section className="flex justify-between items-center">
        <div className="flex justify-center items-center w-1/2">
          <div className="flex justify-center items-center text-[#7e69aa] drop-shadow-[0px_0_100px_rgba(120,200,500,2)] ">
            <Globe size={300} />
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              Global Language <span className="text-[#7e69aa]">Capability</span>
            </h1>
            <p className="font-light">
              Our platform supports 20 global languages, ensuring your <br />
              recruitment process works seamlessly across international markets{" "}
              <br />
              and diverse talent pools.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {Languages.map((languages, index) => (
              <div
                className="flex flex-col bg-white py-2 px-4 text-xs rounded-full border border-gray-200 shadow-xs"
                key={index}
              >
                {languages}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
