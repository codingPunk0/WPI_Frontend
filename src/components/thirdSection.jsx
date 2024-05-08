import { motion } from "framer-motion";
import { AllButtons } from "./thirdSecButtons";
import { FaArrowUp } from "react-icons/fa";

export const ThirdSection = () => {
  return (
    <motion.section
      id="thirdSection"
      className="w-screen h-screen flex flex-col text-white">
      <h1
        id="text"
        className="z-20 mx-auto mt-5 text-4xl w-1/2 text-center font-bold">
        Open and decentralized protocol for syncing various wallets to
        dapps secure server
      </h1>
      <AllButtons />
      <p className="mx-auto w-fit mt-[130px]">
        Dapps Integration © {new Date().getFullYear()} All Rights Reserved.
      </p>

      <div className="absolute bg-black w-full h-full opacity-50 z-10"></div>
    </motion.section>
  );
};
