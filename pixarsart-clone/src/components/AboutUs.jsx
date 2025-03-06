import React from "react";
import { ArrowUpRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 px-8 md:px-20 relative pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80"></div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-white">Who we are?</h2>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          You get to work with some of the most talented web developers,
          designers, creative thinkers, and innovators in our team. Website
          designing and development catered just for you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-gray-400 text-lg">
            We value you and your brand. Analysis of your goals is a primary
            step in our work process. We want to get to know you and your
            business goals and then collaborate together to turn your ideas into
            reality.
          </p>

          <p className="text-gray-400 text-lg">
            Our goal is to give your products the futuristic and present edge to
            lead the way through. We partner with you in idea generation and
            build the path toward success for you and us.
          </p>
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#"
            className="relative group inline-flex items-center px-6 py-3 border-2 border-gray-600 rounded-full text-white text-lg font-medium transition-all duration-300 hover:border-gray-300 hover:scale-105"
          >
            Contact Us
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
