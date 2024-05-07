import LogoLink from "../assets/pyramid.png";
import { motion } from "framer-motion";
import { useList } from "../globalState/stateProvider";

export const NavBar = () => {
  const { setShowConnectWallet } = useList();

  return (
    <nav className="flex flex-row w-full h-[5rem] py-3">
      <div className="w-1/2 flex items-start justify-start">
        <motion.img
          className="w-[3rem] ml-[11rem] mt-2"
          src={LogoLink}
          alt="logo"
        />
      </div>

      <div className="w-1/2 flex items-end justify-end mr-[11rem]">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setShowConnectWallet(true);
          }}
          className="p-3 rounded bg-blue-500">
          Claim Airdrop
        </motion.button>
      </div>
    </nav>
  );
};
