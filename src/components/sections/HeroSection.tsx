import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex justify-between items-center mt-16 md:z-[9999]" id="acceuil">
      <div className="pt-32 md:pt-4">
        <p className="text-[1.128rem] font-[700] text-primary uppercase mb-4">
          Best Destinations around the world
        </p>
        <div className="flex flex-col">
          <div className="volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-lightBlue">
            Fear less,
            <div className="flex  flex-col">
              <span className="ml-8 z-10">Dare more,</span>
              <img
                src="/images/stylish-underline.png"
                alt="stylish underline"
                className="-mt-4 z-0 hidden md:block"
              />
            </div>
          </div>

          <p className="volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-lightBlue">
            Escape routine,And write your story.
          </p>
        </div>

        <p className="my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]">
          Journeys were not merely taken but lived, where maps folded into memories and distant lands stirred the soul. To wander was not to escape, but to arrive— 
        </p>

        <div className="flex gap-6 items-center ">
          <div>
            <MainButton
              text="Find out more"
              classes="bg-title text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem]"
            />
          </div>
          <div className="flex items-center mt-6 hover:cursor-pointer hover:translate-x-1 transition-all">
            <img
              src="/images/play-shadow.png"
              alt="rounded play icon with shadow"
            />
            <p className="text-title -mt-6 ">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/images/lady-with-aircraft.png"
          alt="girl with phone with aircrafts on the background"
        />
      </div>
    </section>
  );
}

export default HeroSection;
