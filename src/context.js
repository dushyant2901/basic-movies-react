import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"hi"}> {children} </AppContext.Provider>;
};

export const useGlobalContext = ()=>useContext(AppContext);
export default AppProvider;
