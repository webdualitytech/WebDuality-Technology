import React, { useState } from "react";

// Loader Context Hook
import { LoaderContext } from "./LoaderContext";

const LoaderContextProvider = ({ children }) => {
  // Loader Data UseState
  const [openLoader, setOpenLoader] = useState(false);

  return (
    // LoaderContext Provider
    <LoaderContext.Provider value={{ openLoader, setOpenLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
