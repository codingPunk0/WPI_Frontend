import { HeroSection } from "./heroSection";
import { HeroImage } from "./heroImage";
import { Comments } from "./comments";
import { motion } from "framer-motion";

export const FirstSection = () => {
  return (
    <section className="bg-[#04050B] text-white pb-6 border-b border-gray-500">
      <HeroSection />
      <Comments />
    </section>
  );
};

//04050B
