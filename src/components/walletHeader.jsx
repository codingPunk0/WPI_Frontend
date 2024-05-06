import { IoMdClose } from "react-icons/io";

export const WalletHeader = ({ clickHandler }) => {
  return (
    <div className="flex flex-row px-4 py-2 border-b">
      <h1 className="text-xl font-semibold flex-grow">Connect Wallet</h1>
      <button onClick={clickHandler}>
        <IoMdClose />
      </button>
    </div>
  );
};
