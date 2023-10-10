import React from "react";
import Image from "next/image";

import sectionImage from "../../public/mobile-app.png";

const AppSection = () => {
  return (
    <section className="lg:relative -top-48 left-0 px-10 md:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center bg-[#18C6FF] bg-opacity-10 w-full rounded-3xl">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-700 px-10 lg:px-20 py-10">
            Get <span className="text-blue-500">Care</span>
            <span className="text-green-500">Assist</span> Mobile App Today
          </h2>
        </div>
        <div className="flex-1">
          <Image src={sectionImage} alt="" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
