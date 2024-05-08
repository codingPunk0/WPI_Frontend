import { motion } from "framer-motion";
import { FaBridgeWater } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { IoWaterSharp } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";

const EachButton = ({ children }) => {
  return (
    <button className="border rounded-xl font-bold p-4 flex flex-row items-center justify-center gap-x-2">
      {children}
    </button>
  );
};

export const AllButtons = () => {
  return (
    <motion.div className="grid grid-cols-2 gap-x-4 gap-y-9 z-20 w-[60%] mx-auto mt-[100px]">
      <EachButton>
        <MdSavings />
        Staking
      </EachButton>
      <EachButton>
        <FaBridgeWater />
        Bridging
      </EachButton>
      <EachButton>
        <FiDollarSign />
        Claim
      </EachButton>
      <EachButton>
        <FaClipboardList />
        Whitelist
      </EachButton>
      <EachButton>
        <FaWallet />
        Wallet
      </EachButton>
      <EachButton>
        <MdSystemSecurityUpdateGood />
        Verification
      </EachButton>
      <EachButton>
        <IoWaterSharp />
        Liquidity
      </EachButton>
      <EachButton>
        <FaImage />
        NFTs
      </EachButton>
    </motion.div>
  );
};
