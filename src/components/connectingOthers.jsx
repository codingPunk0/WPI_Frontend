import { Oval } from "react-loader-spinner";
import { FaShieldAlt } from "react-icons/fa";
import { useList } from "../globalState/stateProvider";
import { FailedComp } from "./failedComp";
import { Form } from "./form";
import { motion } from "framer-motion";
import { WalletHeader } from "./walletHeader";
import { useState, useEffect, createRef } from "react";

export const ConnectingOthers = () => {
  const {
    wallet,
    walletIcon,
    setConnectOthers,
    setShowConnectWallet,
    setIsOpen
  } = useList();

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

  return (
    <motion.section
      layout
      ref={fixedElementRef}
      style={{ top: `${topPosition}px` }}
      className="fixed w-[80%] md:w-[70%] left-[10%] md:left-[15%] lg:w-[32%] z-40 border lg:left-[34%] bg-white text-black rounded-xl p-6">
      <WalletHeader
        clickHandler={() => {
          setConnectOthers(false);
          setShowConnectWallet(false);
          setIsOpen(false);
        }}
      />
      <motion.div
        layout
        className="flex flex-row w-fit mx-auto mt-5">
        <img
          className="w-[1.5rem] h-[1.5rem] lg:mt-[0.1rem]"
          src={walletIcon}
        />
        <p className="md:text-xl ml-3 font-bold">{wallet}</p>
      </motion.div>
      <motion.p
        layout
        className="text-gray-400 max-md:text-xs font-light my-3 w-fit mx-auto text-center">
        This connection is secure and encrypted
      </motion.p>

      <Form />

      <motion.div
        layout
        className="flex flex-row text-gray-400 w-fit mx-auto mt-5">
        <FaShieldAlt className="mt-[0.4rem] max-[690px]:mt-[0.3rem] min-[540px]:max-md:mt-[0.13rem] w-[2rem]" />
        <p className="text-sm md:text-lg font-semibold">
          This connection is end-to-end encrypted
        </p>
      </motion.div>
    </motion.section>
  );
};
