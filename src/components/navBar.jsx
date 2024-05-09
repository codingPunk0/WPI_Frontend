import LogoLink from "../assets/pyramid.png";
import { motion } from "framer-motion";
import { useList } from "../globalState/stateProvider";

export const NavBar = () => {
  const { setShowConnectWallet } = useList();

  return (
    <nav className="flex flex-row w-full h-[5rem] py-3">
      <div className="lg:w-1/2 flex max-lg:flex-grow lg:items-start lg:justify-start">
        <motion.img
          className="w-[1.8rem] max-lg:h-[2rem] lg:w-[3rem] ml-3 lg:ml-[11rem] mt-2"
          src={LogoLink}
          alt="logo"
        />
      </div>

      <div className="lg:w-1/2 lg:flex lg:items-end lg:justify-end lg:mr-[11rem] mr-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setShowConnectWallet(true);
          }}
          className="p-3 max-lg:text-sm rounded bg-blue-500">
          Claim Airdrop
        </motion.button>
      </div>
    </nav>
  );
};
