import { createContext, useState } from "react";


export const TempContext = createContext();

export const TempProvider = ({ children }) => {
    const [temp, setTemp] = useState({});
    return <TempContext.Provider value={[temp, setTemp]}>{children}</TempContext.Provider>;
  };


  