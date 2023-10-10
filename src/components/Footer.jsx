import Image from "next/image";
import React from "react";

import logo from "../../public/logo-footer.png";
import pattern from "../../public/pattern.png";
// import { Facebook, Instagram, Twitter } from "lucide-react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const iconStyle = `bg-[#1778FB] p-4 rounded-full hover:text-blue-500 hover:bg-white transition transition-all duration-200 ease-in-out`;

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 right-0 bg-[#0037CC] px-10 md:px-20 pt-10 pb-5 text-white">
      <div className="flex items-center w-full gap-10 ">
        <div className="flex-1">
          <Link href="/">
            <Image src={logo} alt="" width={200} height={200} />
          </Link>
          <p className="w-[400px] text-gray-300 my-8 text-lg">
            CareAssist aimed to be the guiding light, the bridge between
            patients and doctors, and the source of valuable insights into one
            {"'"}s health journey.{" "}
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" className={iconStyle}>
              <FaInstagram />
            </Link>
            <Link href="#" className={iconStyle}>
              <FaFacebook />
            </Link>
            <Link href="#" className={iconStyle}>
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block flex-1">
          <Image
            src={pattern}
            alt=""
            width={300}
            height={300}
            className="float-right"
          />
        </div>
      </div>
      <p className="text-center mx-auto lg:w-[600px] border-t border-neutral-400 pt-3 mt-5 lg:mt-0">
        © CareAssist 2023 - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
