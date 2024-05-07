import { useList } from "../globalState/stateProvider";
import { motion } from "framer-motion";

export const EachWallet = ({ walletName, iconLink }) => {
  const { setConnect, setShowConnectWallet, setWallet, setWalletIcon } =
    useList();

  const item = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={item}
      onClick={() => {
        setShowConnectWallet(false);
        setConnect(true);
        setWallet(walletName);
        setWalletIcon(iconLink);
      }}
      className="flex flex-row px-4 py-3 bg-gray-50 rounded-md hover:shadow-md cursor-pointer">
      <motion.img
        className="w-[1.5rem]"
        src={iconLink}
        alt="wallet app icon"
      />
      <motion.p className="ml-4 font-bold">{walletName}</motion.p>
    </motion.div>
  );
};
