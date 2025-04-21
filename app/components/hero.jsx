import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-8">
        <div className="z-10 grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left ">
            <span className="bg-[#f1effa] p-2 text-sm font-semibold text-[#7e69aa] rounded-full">
              Built in India for the world
            </span>
            <div className="mt-14">
              <div className="flex-col space-y-4">
                <h1 className="text-5xl font-bold text-[#7e69aa]">
                  AI-Powered
                </h1>
                <h1 className="text-5xl font-bold text-black">
                  Recruitment Solution
                </h1>
              </div>
            </div>

            <div className="text-[#555555]">
              <p>
                Optimize your hiring process with our intelligent recruitment
                platform.
                <br />
                Let Al handle the dreary aspects while your HR team focuses on
                engagement,
                <br />
                empowerment, and strategic growth.
              </p>
            </div>

            <div className="flex flex-row gap-4 justify-start">
              <button className="bg-[#7e69aa] text-white px-8 py-3 rounded-md flex items-center justify-center cursor-pointer group">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 duration-300 group-hover:translate-x-1" />
              </button>
              <button className="border border-[#7e69aa] p-2 rounded-md text-[#7e69aa] w-40 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>

          <div className="h-[600px]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/assets/hero.jpg"
                alt="Image"
                width={800}
                height={800}
                className="object-contain w-full rounded-xl shadow-2xl shadow-[#7596be]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
