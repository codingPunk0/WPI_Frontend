import { IoMdClose } from "react-icons/io";
import { useList } from "../globalState/stateProvider";
import { AllWallets } from "./allWallets";

export const ConnectWallet = () => {
  const { setConnect } = useList();

  return (
    <section className="fixed z-20 w-[30%]  left-[35%] border bg-white text-black top-[15%] rounded-xl p-4">
      <div className="flex flex-row px-4 py-2 border-b">
        <h1 className="text-xl font-semibold flex-grow">Connect Wallet</h1>
        <button
          onClick={() => {
            setConnect(false);
          }}>
          <IoMdClose />
        </button>
      </div>
      <p className="text-gray-500 my-5 pl-4">
        Connect with one of our supported wallet providers.
      </p>
      <AllWallets />
    </section>
  );
};
