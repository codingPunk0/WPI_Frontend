import { motion } from "framer-motion";
import { AllButtons } from "./thirdSecButtons";

export const ThirdSection = () => {
  const variantAnimation = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const children = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <motion.section
      variants={variantAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="thirdSection"
      className="w-screen h-screen min-[1024px]:max-[1180px]:h-full flex flex-col text-white">
      <motion.h1
        variants={children}
        id="text"
        className="mx-auto mt-[3rem] lg:mt-[1.7rem] text-xl md:text-2xl lg:text-3xl lg:w-fit md:w-[70%] max-lg:px-2 text-center font-bold capitalize">
        an ecosystem of limitless possibilities
      </motion.h1>
      <AllButtons />
      <motion.p
        variants={children}
        className="mx-auto w-fit mt-auto max-[380px]:mb-2 min-[1024px]:max-[1180px]:mb-2 min-[380px]:mt-[100px] max-lg:text-sm text-gray-500">
        Web3 Integration protocol © {new Date().getFullYear()} All Rights
        Reserved.
      </motion.p>
    </motion.section>
  );
};
