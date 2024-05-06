import { IoMdClose } from "react-icons/io";
import { useList } from "../globalState/stateProvider";
import { AllWallets } from "./allWallets";
import { WalletHeader } from "./walletHeader";

export const ConnectWallet = () => {
  const { setShowConnectWallet } = useList();

  return (
    <section className="fixed z-20 w-[30%] left-[35%] border bg-white text-black top-[15%] rounded-xl p-4">
      <WalletHeader
        clickHandler={() => {
          setShowConnectWallet(false);
        }}
      />
      <p className="text-gray-500 my-5 pl-4">
        Connect with one of our supported wallet providers.
      </p>
      <AllWallets />
    </section>
  );
};
