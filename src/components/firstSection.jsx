import { Header } from "./header";
import { HeroImage } from "./heroImage";
import { Comments } from "./comments";
import { motion } from "framer-motion";

export const FirstSection = () => {
  return (
    <section className="bg-[#04050B] text-white pb-6 border-b border-gray-500">
      <Header />
      <HeroImage />
      <Comments />
    </section>
  );
};

//04050B
