import React from "react";
import Image from "next/image";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="flex items-center justify-center bg-white border border-black rounded-lg text-center py-10 px-5 lg:p-10  z-20">
      <div>
        <Image
          src={icon}
          alt="icon"
          width={150}
          height={150}
          className="mx-auto"
        />
        <h4 className="text-xl font-semibold text-zinc-900 my-3">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
