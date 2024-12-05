import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../MagicButton";




const Hero = () => {
  return (
    <div className="pb-20 pt-36">
  
      <div>
        <Spotlight
          className="right-full -top-20 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="DeepSkyBlue"
        />
        <Spotlight
          className=" top-10 md:top-200  left-full "
          fill="purple"
        />
        <Spotlight
         className="left-10 top-17 md:left-40 md:top-44 md:h-[70vh] md:w-[30vw]" 
         fill="RoyalBlue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]
     absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest md:text-lg text-xs text-center text-blue-100 max-w-80 md:max-w-96 ">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Crafting Innovative Solutions into Intuitive User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-11"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I am Asaduzzaman Asad, a Front-End Developer skilled in Next.js,
            creating modern and engaging user interfaces.
          </p>

          <a href="#about">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        
      </div>
      
    </div>
  );
};

export default Hero;


