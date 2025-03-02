import React from "react";

// Tech stack data
const techStack = [
  "PHP",
  "JavaScript",
  "WixPartners",
  "Shopify",
  "WordPress",
  "WebFlow",
  "Vue.js",
  "Angular.js",
  "Python",
  "Laravel",
];

const FloatingTechStack = () => {
  return (
    <div className="bg-black py-10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/public/grid-pattern.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto">
        {/* Floating animation wrapper */}
        <div className="flex space-x-6 overflow-hidden">
          <div className="flex space-x-6 animate-marquee">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-6 animate-marquee">
            {techStack.map((tech, index) => (
              <span
                key={`duplicate-${index}`}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS for animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: flex;
            min-width: max-content;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FloatingTechStack;
