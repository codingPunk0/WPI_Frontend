import { Oval } from "react-loader-spinner";
import { FaShieldAlt } from "react-icons/fa";
import { useList } from "../globalState/stateProvider";
import { useState } from "react";
import { FailedComp } from "./failedComp";
import { Form } from "./form";
import { IoMdClose } from "react-icons/io";
import { WalletHeader } from "./walletHeader";

export const Connecting = () => {
  const { wallet, walletIcon, setConnect, setShowConnectWallet } =
    useList();
  const [failed, setFailed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  if (!failed) {
    setTimeout(() => {
      setFailed(true);
    }, 5000);
  }

  return (
    <section className="fixed w-[32%] z-20 border left-[34%] top-[15%] bg-white text-black rounded-xl p-6">
      <WalletHeader
        clickHandler={() => {
          setConnect(false);
          setShowConnectWallet(false);
        }}
      />
      <div className="flex flex-row w-fit mx-auto mt-5">
        <img
          className="w-[2rem]"
          src={walletIcon}
        />
        <p className="text-xl ml-3 font-bold">{wallet}</p>
      </div>
      <p className="text-gray-400 font-light my-3 w-fit mx-auto">
        This connection is secure and encrypted
      </p>
      {!failed && (
        <div className="flex flex-col items-center justify-center mt-5">
          <Oval
            color="rgb(59 130 246)"
            secondaryColor="rgb(191 219 254)"
          />
          <p className="mt-4">Establishing connection...</p>
          <p className="text-gray-400">please wait...</p>
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

      <div className="flex flex-row text-gray-400 w-fit mx-auto mt-5">
        <FaShieldAlt
          className="-mt-1"
          size={"2rem"}
        />
        <p className="text-lg font-semibold ml-3 text-center">
          This connection is end-to-end encrypted
        </p>
      </div>
    </section>
  );
};


