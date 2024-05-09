import { NavBar } from "./navBar";
import { useList } from "../globalState/stateProvider";
import { motion } from "framer-motion";
import { HeroImage } from "./heroImage";

export const HeroSection = () => {
  const { setShowConnectWallet } = useList();

  const varia = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    },
    initial: {
      opacity: 0,
      y: 10
    }
  };

  const item = {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 10 }
  };

  return (
    <motion.div>
      <center>
        <NavBar />

        <motion.section
          initial="initial"
          animate="animate"
          variants={varia}
          className="mt-[6rem]">
          <motion.h1
            variants={item}
            className="text-2xl font-bold">
            The Communication Protocol For Dapp
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl font-light mt-5 text-gray-500">
            Ecosystem that enables wallets and apps to securely connect and
            interact.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-row gap-x-5 mt-5 w-fit mx-auto">
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              onClick={() => {
                setShowConnectWallet(true);
              }}
              className="bg-blue-500 py-3 px-6 rounded">
              Connect wallet
            </motion.button>
            <motion.button
              onClick={() => {
                setShowConnectWallet(true);
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 py-3 px-6 rounded">
              Migrate token
            </motion.button>
          </motion.div>
          <HeroImage variants={item} />
        </motion.section>
      </center>
    </motion.div>
  );
};

