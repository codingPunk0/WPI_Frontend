import { Oval } from "react-loader-spinner";
import { FaShieldAlt } from "react-icons/fa";
import { useList } from "../globalState/stateProvider";
import { FailedComp } from "./failedComp";
import { Form } from "./form";
import { motion } from "framer-motion";
import { WalletHeader } from "./walletHeader";
import { useState, useEffect, createRef } from "react";

export const Connecting = () => {
  const {
    wallet,
    walletIcon,
    setConnect,
    setShowConnectWallet,
    setIsOpen
  } = useList();
  const [failed, setFailed] = useState(false);
  const [showForm, setShowForm] = useState(false);
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

  if (!failed) {
    setTimeout(() => {
      setFailed(true);
    }, 5000);
  }

  return (
    <motion.section
      layout
      ref={fixedElementRef}
      style={{ top: `${topPosition}px` }}
      className="fixed w-[80%] md:w-[70%] left-[10%] md:left-[15%] lg:w-[32%] z-40 border lg:left-[34%] bg-white text-black rounded-xl p-6">
      <WalletHeader
        clickHandler={() => {
          setConnect(false);
          setShowConnectWallet(false);
          setIsOpen(false);
        }}
      />
      <motion.div
        layout
        className="flex flex-row w-fit mx-auto mt-5">
        <img
          className="w-[1rem] max-md:h-[1rem] max-md:mt-[0.2rem] md:w-[2rem]"
          src={walletIcon}
        />
        <p className="md:text-xl ml-3 font-bold">{wallet}</p>
      </motion.div>
      <motion.p
        layout
        className="text-gray-400 max-md:text-xs font-light my-3 w-fit mx-auto text-center">
        This connection is secure and encrypted
      </motion.p>
      {!failed && (
        <div className="flex flex-col items-center justify-center md:mt-5">
          <div className="max-md:w-[3rem]">
            <Oval
              color="rgb(59 130 246)"
              secondaryColor="rgb(191 219 254)"
            />
          </div>
          <p className="md:mt-4 max-md:text-sm">
            Establishing connection...
          </p>
          <p className="text-gray-400 max-md:text-xs">please wait...</p>
        </div>
      )}

      {failed && !showForm && (
        <FailedComp
          tryAgainHandler={() => {
            setFailed(false);
          }}
          submitHandler={() => {
            setShowForm(true);
          }}
        />
      )}

      {showForm && <Form />}

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
