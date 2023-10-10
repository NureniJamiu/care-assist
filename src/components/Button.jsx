import Link from "next/link";
import React from "react";

const Button = ({ title, className }) => {
  return (
    <Link href="#">
      <button
        className={` bg-blue-600 rounded-3xl px-5 py-3 text-sm font-semibold text-white ${className}`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
