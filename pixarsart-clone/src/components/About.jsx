import React from "react";
import LogoPNG from '../assets/LogoPNG.png'
import awsLogo from "../assets/aawslogo.png";
import googleLogo from "../assets/Google-Partner-logo.png";
import shopifyLogo from "../assets/shopify-partners.webp";
import wixLogo from "../assets/wixpartners_AGE.png";
import squarespaceLogo from "../assets/squarespace-logo.png";



const About = () => {
  return (
    <section>
        <div className="bg-[#121212] w-full flex justify-between pt-[100px]">
      <div className="w-[50%] flex gap-3  pl-[100px] pb-20">
      <div className="h-20 w-1 bg-white"></div>
      <div>
      <div className="text-white h3">
        <h2 className="font-bold text-2xl">We Are geared Towards</h2>
        <h1 className="font-bold h2">
          Versatility and offering you efficiency and the best quality services
          at every step.
        </h1>
        <p className="p font-bold">
          At Pixarsart our aim is to create the most effective online presence
          for your brand. We use the latest technology to provide you with the
          most intuitive solutions to cater to all your business needs. We want
          to see your business thrive. <br /> Our Team over at Pixarsart are committed
          to providing creative and innovative solutions in Web and App
          Development, UI/UX Design, Backend Development, Digital Product
          Development, Server Management, Continuous Integration and Continuous
          deployment as well as effective eCommerce solutions. We are
          progressively working with clients with legacy systems as well as
          progressive technologies.
        </p>
        <button className="button">Book Your Consultation</button>
      </div>
      </div>
      </div>
      <div>
        <img src={LogoPNG} alt="" className="pr-[100px]"/>
      </div>
    </div>
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex gap-4">
        <div className="flex items-center space-x-4 mb-8">
          <h1 className="h2 font-bold">Partners And Certifications</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-[#121212] p-8 rounded-lg">
          <img src={awsLogo} alt="AWS" className="h-16 mx-auto" />
          <img src={googleLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={shopifyLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={wixLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={squarespaceLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={googleLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={googleLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={googleLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={googleLogo} alt="Google Partner" className="h-16 mx-auto" />
          <img src={googleLogo} alt="Google Partner" className="h-16 mx-auto" />
        </div>
      </div>
    </section>
    </section>
  );
};

export default About;
