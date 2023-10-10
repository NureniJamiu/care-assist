import React from "react";
import { Raleway } from "next/font/google";
import Button from "./Button";
import Image from "next/image";

import sectionImage from "../../public/hero.png";

const raleway = Raleway({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="px-10 md:px-20 py-5 md:py-3">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <h1
            className={`${raleway.className} text-[#1E1F4B] text-6xl font-bold`}
          >
            A Journey of Care and Connection
          </h1>
          <p className="py-8 text-zinc-700 w-[400px] text-lg">
            Help find solutions with intuitive and in accordance with the client
            business goals. We provide high-quality services.
          </p>
          <Button title="Get Started Today" className="px-10 py-3 text-base" />
        </div>
        <div className="flex-1">
          <Image
            src={sectionImage}
            alt="Hero"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
