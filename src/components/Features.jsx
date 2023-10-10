import React from "react";

import { Raleway } from "next/font/google";
import FeatureCard from "./FeatureCard";

import feature1 from "../../public/feature-1.png";
import feature2 from "../../public/feature-2.png";
import feature3 from "../../public/feature-3.png";

const raleway = Raleway({ subsets: ["latin"] });

const features = [
  {
    icon: feature1,
    title: "CareBot",
    desc: "Help find solutions with intuitive and in accordance with client business goals.",
  },
  {
    icon: feature2,
    title: "CareCheck",
    desc: "Help find solutions with intuitive and in accordance with client business goals.",
  },
  {
    icon: feature3,
    title: "CareGiver",
    desc: "Help find solutions with intuitive and in accordance with client business goals.",
  },
];

const Features = () => {
  return (
    <section className="px-10 md:px-20 py-5 md:py-3">
      <div className="text-center">
        <h2
          className={`${raleway.className} text-[#1E1F4B] text-4xl font-bold`}
        >
          Our Key Features
        </h2>
        <p className="text-zinc-700 lg:w-[400px] lg:mx-auto my-3">
          Help find solutions with intuitive and in accordance with client
          business goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 mt-8 gap-8">
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
