import { createContext, useContext } from "react";

// Creating LoaderContext
export const LoaderContext = createContext();

// Creating UseLoaderContext Hook
export const useLoaderContext = () => {
    return useContext(LoaderContext);
}