import Image from "next/image";
import React from "react";

import sectionImage from "../../public/doctor-patient.png";

const Journey = () => {
  return (
    <section className="lg:relative -top-48 left-0 bg-[#1778FB] min-h-[750px] flex items-end px-10 md:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center text-white gap-16 w-full">
        <div className="flex-1">
          <Image src={sectionImage} alt="" width={400} height={400} />
        </div>
        <div className="flex-1">
          <div className="">
            <h2 className="font-semibold md:w-[400px] lg:font-normal text-3xl lg:text-5xl lg:w-[450px]">{`“A Journey of Care and Connection using AI”`}</h2>
            <p className=" lg:float-right md:w-[500px] lg:w-96 mt-5 text-lg">
              CareAssist aimed to be the guiding light, the bridge between
              patients and doctors, and the source of valuable insights into one
              {"'"}s health journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
