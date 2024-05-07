import { IoMdClose } from "react-icons/io";
import { useList } from "../globalState/stateProvider";
import { motion } from "framer-motion";

export const WalletHeader = ({ clickHandler }) => {
  
  return (
    <motion.div layout className="flex flex-row px-4 py-2 border-b">
      <motion.h1 className="text-xl font-semibold flex-grow">
        Connect Wallet
      </motion.h1>
      <motion.button onClick={clickHandler}>
        <IoMdClose />
      </motion.button>
    </motion.div>
  );
};
