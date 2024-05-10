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
      className="flex md:flex-col flex-row items-center justify-center border border-gray-600 md:py-3 rounded-xl max-lg:p-2">
      <img
        className="w-[3rem] md:w-[4rem]"
        src={imgLink}
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-lg font-bold md:mt-3">{feature}</h1>
        <p className="text-gray-400 mt-3 text-xs md:text-sm px-3 text-center">
          {desc}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setShowConnectWallet(true);
          }}
          className="flex flex-row md:text-blue-500 max-md:rounded max-md:px-2 max-md:py-1 max-md:bg-blue-500 mt-3 max-md:text-xs max-md:font-light">
          {buttonText}
          <FaLongArrowAltRight className="mt-[0.35rem] ml-2 max-md:hidden" />
        </motion.button>
      </div>
    </motion.div>
  );
};
