import React from "react";
import { ArrowUpRight } from "lucide-react";

import developerImage from "../assets/developer.avif";

const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description:
      "We are a team of skilled professionals developing your ideas into reality.",
  },
  {
    id: 2,
    title: "E-COMMERCE DEVELOPMENT",
    description:
      "Delivering high-quality E-Commerce web development services with technical creativity.",
  },
  {
    id: 3,
    title: "APPLICATION DEVELOPMENT",
    description:
      "Developing modern applications to meet today's technological needs.",
  },
  {
    id: 4,
    title: "CLOUD WEB AND DATA SCIENCE",
    description:
      "Our cloud and data science solutions help businesses grow efficiently.",
  },
  {
    id: 5,
    title: "CREATIVE DESIGNS",
    description:
      "Creativity is at the core of businesses. We bring the right design for you.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="relative">
          <img
            src={developerImage}
            alt="Developer"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-green-400 h3 text-sm font-semibold uppercase mb-2">
            Services
          </h2>
          <h1 className="h2 font-bold mb-4">Solutions We Provide</h1>
          <p className="text-gray-400 p mb-6">
            You have come to the right place. PixarArts is a unified platform for all things Web & Mobile.
          </p>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="h3 flex items-start justify-between border-b border-gray-700 pb-4 hover:text-green-400 transition-all duration-300"
              >
                <div className="flex space-x-4">
                  <span className="text-gray-500 p font-bold">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="h3 font-semibold">{service.title}</h3>
                    <p className="text-gray-400 p">{service.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-gray-500 hover:text-green-400 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
