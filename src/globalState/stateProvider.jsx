import { useState, createContext, useContext } from "react";

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export const StateProvider = ({ children }) => {
  const [connect, setConnect] = useState(false);

  return (
    <ListContext.Provider value={{ connect, setConnect }}>
      {children}
    </ListContext.Provider>
  );
};
