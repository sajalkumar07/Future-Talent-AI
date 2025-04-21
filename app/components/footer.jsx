import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = [
  {
    icons: <Mail size={20} />,
    details: "info@futuretalentai.com",
  },
  {
    icons: <Phone size={20} />,
    details: "+91-123-456-7890",
  },
  {
    icons: <MapPin size={20} />,
    details: "Bengaluru, India",
  },
];

const footer = () => {
  return (
    <div className="bg-gray-900 text-white  flex justify-center items-center flex-col p-8">
      <section className="max-w-7xl w-full flex justify-between  p-12 border-b border-gray-800">
        <div className="space-y-4">
          <h1>Future Talent Al</h1>
          <p className="text-sm font-thin">
            Al-powered recruitment solution <br />
            designed to address future of work
            <br />
            scenarios for HR teams.
          </p>
          <span className="text-xs bg-[#7e69aa] rounded-full p-2">
            Built in India for the world
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="">Platform</h1>
          <ul className="font-thin space-y-1">
            <li>Job Descriptions</li>
            <li>Candidate Sourcing</li>
            <li>Assessment</li>
            <li>Candidate Filtering</li>
            <li>HRMS Integration</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1>Company</h1>
          <ul className="font-thin space-y-1">
            <li>About Us s</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1>Contact Us</h1>
          {Contact.map((contact) => (
            <div className="flex gap-2 items-center">
              <span className="text-purple-500">{contact.icons}</span>
              <span className="font-thin">{contact.details}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl w-full flex justify-between px-12 items-center mt-8 ">
        <div className="font-thin ">
          <h1>© 2025 Future Talent Al. All rights reserved. </h1>
        </div>
        <div className="flex font-thin justify-between items-end text-left space-x-12">
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
          <h1>Cookies</h1>
        </div>
      </div>
    </div>
  );
};

export default footer;
