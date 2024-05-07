import { useState, createContext, useContext } from "react";

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export const StateProvider = ({ children }) => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [connect, setConnect] = useState(false);
  const [wallet, setWallet] = useState("");
  const [walletIcon, setWalletIcon] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <ListContext.Provider
      value={{
        showConnectWallet,
        setShowConnectWallet,
        connect,
        setConnect,
        wallet,
        setWallet,
        walletIcon,
        setWalletIcon,
        isOpen,
        setIsOpen
      }}>
      {children}
    </ListContext.Provider>
  );
};
