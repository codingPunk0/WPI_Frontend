import { useList } from "../globalState/stateProvider";
import { AllWallets } from "./allWallets";
import { WalletHeader } from "./walletHeader";
import { motion } from "framer-motion";
import { createRef, useEffect, useState } from "react";

export const ConnectWallet = () => {
  const { setShowConnectWallet } = useList();
  const [topPosition, setTopPosition] = useState(0);
  const fixedElementRef = createRef();

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const fixedElementHeight = fixedElementRef.current.clientHeight;
      const newTopPosition = (windowHeight - fixedElementHeight) / 2;
      setTopPosition(newTopPosition);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      ref={fixedElementRef}
      style={{ top: `${topPosition}px` }}
      className="fixed z-40 w-[70%] left-[15%] md:left-[25%] md:w-[50%] lg:w-[30%] lg:left-[35%] border bg-white text-black rounded-xl p-4">
      <WalletHeader
        clickHandler={() => {
          setShowConnectWallet(false);
        }}
      />
      <p className="text-gray-500 max-md:text-xs my-5 pl-4">
        Connect via one of our supported wallet providers.
      </p>
      <AllWallets />
    </motion.section>
  );
};
