import { motion } from "framer-motion";
import { AllButtons } from "./thirdSecButtons";

export const ThirdSection = () => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="thirdSection"
      className="w-screen h-screen min-[1024px]:max-[1180px]:h-full flex flex-col text-white">
      <motion.h1
        animate={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        id="text"
        className="mx-auto mt-[3rem] lg:mt-[1.7rem] text-xl md:text-2xl lg:text-3xl lg:w-fit md:w-[70%] max-lg:px-2 text-center font-bold capitalize">
        an ecosystem of limitless possibilities
      </motion.h1>
      <AllButtons />
      <motion.p
        animate={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto w-fit mt-auto max-[380px]:mb-2 min-[1024px]:max-[1180px]:mb-2 min-[380px]:mt-[100px] max-lg:text-sm text-gray-500">
        Web3 Integration protocol © {new Date().getFullYear()} All Rights
        Reserved.
      </motion.p>
    </motion.section>
  );
};
