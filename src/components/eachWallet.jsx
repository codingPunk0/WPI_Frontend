import { useList } from "../globalState/stateProvider";

export const EachWallet = ({ walletName, iconLink }) => {
  const { setConnect, setShowConnectWallet, setWallet, setWalletIcon } = useList();

  return (
    <div
      onClick={() => {
        setShowConnectWallet(false)
        setConnect(true);
        setWallet(walletName)
        setWalletIcon(iconLink)
      }}
      className="flex flex-row px-4 py-3 bg-gray-50 rounded-md hover:shadow-md cursor-pointer">
      <img
        className="w-[1.5rem]"
        src={iconLink}
        alt="wallet app icon"
      />
      <p className="ml-4 font-bold">{walletName}</p>
    </div>
  );
};
