import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="flex items-center justify-center">
      <div
        id="about_wrapper"
        className="my-32 rounded-3xl py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 bg-[#13131A] max-[760px]:mt-25 mb-2"
      >
        <h4 className="text-center text-[14px] font-semibold uppercase">About Us</h4>
        <h2 className="text-center text-[40px] font-bold pt-6 leading-[1.2] w-full">
          Breaking into the Blockchain Space one block at a time
        </h2>
        <p className="text-center pt-6 text-gray-400 font-semibold text-md">We are a family of passionate and hardworking DeFi enthusiasts working towards a common goal of making DeFi accessible, simple, and rewarding for the masses with a ROBUST & COMPREHENSIVE ECOSYSTEM.</p>
      </div>
    </section>
  );
};

export default About;