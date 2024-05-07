
import { useList } from "../globalState/stateProvider";
import { AllWallets } from "./allWallets";
import { WalletHeader } from "./walletHeader";
import { motion } from "framer-motion";


export const ConnectWallet = () => {
  const { setShowConnectWallet } = useList();

  const list = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,

      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      animate="animate"
      initial="initial"
      variants={list}
      className="fixed z-20 w-[30%] left-[35%] border bg-white text-black top-[15%] rounded-xl p-4">
      <WalletHeader
        clickHandler={() => {
          setShowConnectWallet(false);
        }}
      />
      <p className="text-gray-500 my-5 pl-4">
        Connect via one of our supported wallet providers.
      </p>
      <AllWallets />
    </motion.section>
  );
};
