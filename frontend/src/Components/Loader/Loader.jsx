import React from "react";
import "./Loader.css";

// UseLoaderContext Custom Hook
import { useLoaderContext } from "../../Contexts/LoaderContext/LoaderContext";

const Loader = () => {
  // Data from UseLoaderContext Hook
  const { openLoader } = useLoaderContext();

  return (
    <>
      {/* Main Loader PopUp */}
      <div className="loaderPopUp">
        {/* Loader Dot */}
        <div className="loadingio-spinner-spin-l1z2qkooqrj" open={openLoader}>
          <div className="ldio-5wfeysc1cec">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
