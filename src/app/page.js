"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Navbar />;
}
