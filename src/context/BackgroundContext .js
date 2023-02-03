import React from "react";
import { useState } from "react";

export const BackgroundContecst = React.createContext("bg-light");
function BackgroundProvider({ children }) {
  const [thema, setThema] = useState("bg-light");

  return (
    <BackgroundContecst.Provider value={{ thema, setThema }}>
      {children}
    </BackgroundContecst.Provider>
  );
}

export default BackgroundProvider;
