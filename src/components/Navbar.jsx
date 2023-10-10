"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import logo from "../../public/logo.png";

import { Menu } from "lucide-react";
import { links } from "@/mockDB";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <nav
      className="relative px-10 md:px-20 lg:px-28 py-5 md:py-3 border-b mx-auto"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl cursor-pointer">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>

        <div className="hidden lg:flex gap-8">
          {links.map((_, index) => (
            <Link
              key={index}
              href={_.url}
              className="text-sm font-semibold hover:text-blue-600"
            >
              {_.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between md:gap-12 lg:gap-20">
          <div>
            <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
              <span>
                <Menu />
              </span>
            </div>

            <Button title="Login as Admin" className="hidden lg:flex" />
          </div>
        </div>
      </div>

      {/* mobile navItems fold */}
      {toggle && (
        <div
          className="lg:hidden fixed w-full h-screen top-0 left-0 bg-white px-10 py-3 z-50 "
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
        >
          {/* close menu icon */}

          <div
            className="float-right bg-gradient-to-b from-blue-500 to-green-500 rounded-full p-[2px] cursor-pointer"
            onClick={handleToggle}
          >
            <div className="bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {/* end close menu icon */}
          <div className="mt-16 flex flex-col gap-8">
            {links.map((_, index) => (
              <Link
                key={index}
                href={_.url}
                className=""
                data-aos="fade-right"
                data-aos-duration={`1${index + 1}00`}
              >
                {_.title}
              </Link>
            ))}

            <Button title="Login as Admin" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
