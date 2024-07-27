import Image from "next/image";
import { Button } from "@nextui-org/react";
import Navbarcomp from "./Navbar";
import { FaCentercode } from "react-icons/fa";
import Cardcomp from "./Cardcomp";
import Footer from "./Footer";
import Optimise from "./Optimise";

export default function Home() {
  return (
    <div>
      <main className="hero-section">
        <Navbarcomp/>
        <div className="hero-text p-12">
        <p className = "text-4xl font-mono font-bold text-white leading-normal">Enhance your productivity as a <span className="text-yellow-500">budding developer</span></p>
        <p className = "text-2xl font-mono font-bold text-white leading-normal">We are with you!<FaCentercode /></p>
        </div>
      </main>
      <section className="flex justify-center pt-20 pb-20">
        <p className="text-5xl text-bold text-blue-600">What we do</p>
        <Cardcomp />
      </section>
      <Optimise/>
      <Footer/>
    </div>
  );
}
