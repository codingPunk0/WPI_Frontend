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
      className="w-screen h-screen flex flex-col text-white">
      <motion.h1
        variants={children}
        id="text"
        className="z-20 mx-auto mt-[3rem] text-xl lg:text-4xl lg:w-1/2 max-lg:px-2 text-center font-bold capitalize">
        Open and decentralized protocol for syncing various wallets to
        dapps secure server
      </motion.h1>
      <AllButtons />
      <motion.p
        variants={children}
        className="mx-auto w-fit mt-auto max-[380px]:mb-2 min-[380px]:mt-[100px] max-lg:text-sm">
        Dapps Integration © {new Date().getFullYear()} All Rights Reserved.
      </motion.p>

      <div className="absolute bg-black w-full h-full opacity-50 z-10"></div>
    </motion.section>
  );
};
