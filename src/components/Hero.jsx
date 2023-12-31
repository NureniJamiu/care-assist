import React from "react";
import { Raleway } from "next/font/google";
import Button from "./Button";
import Image from "next/image";

import sectionImage from "../../public/hero.png";

const raleway = Raleway({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="px-10 md:px-20 py-5 md:py-3 mt-24 mb-5 lg:my-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
        <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
          <h1
            className={`${raleway.className} text-[#1E1F4B] text-5xl lg:text-6xl font-bold md:mx-auto lg:w-full`}
          >
            A Journey of Care and Connection
          </h1>
          <p className="py-8 text-zinc-700 md:w-[400px] lg:w-[700px] md:mx-auto lg:mx-0 text-xl">
            Help find solutions with intuitive and in accordance with the client
            business goals. We provide high-quality services.
          </p>
          <Button title="Get Started Today" className="px-10 py-4 text-base" />
        </div>
        <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
          <Image
            src={sectionImage}
            alt="Hero"
            width={530}
            height={530}
            className="float-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
