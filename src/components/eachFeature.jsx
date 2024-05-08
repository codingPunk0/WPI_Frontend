import { FaLongArrowAltRight } from "react-icons/fa";
import { useList } from "../globalState/stateProvider";
import { motion } from "framer-motion";

export const EachFeature = ({ imgLink, feature, desc, buttonText }) => {
  const { setShowConnectWallet } = useList();

  return (
    <motion.div
      animate={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center border border-gray-600 py-3 rounded-xl">
      <img
        className="w-[4rem]"
        src={imgLink}
      />
      <h1 className="text-lg font-bold mt-3">{feature}</h1>
      <p className="text-gray-400 mt-3 text-sm px-3 text-center">{desc}</p>
      <motion.button whileHover={{scale: 1.05}}
        onClick={() => {
          setShowConnectWallet(true);
        }}
        className="flex flex-row text-blue-500 mt-3">
        {buttonText}
        <FaLongArrowAltRight className="mt-[0.35rem] ml-2" />
      </motion.button>
    </motion.div>
  );
};
