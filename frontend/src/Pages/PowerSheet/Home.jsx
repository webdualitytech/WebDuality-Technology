import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "./Home.css";
import PowerSheetFooter from "../../Components/PowerSheetFooter/PowerSheetFooter";

const Home = ({ element }) => {
  return (
    <>
      <SideBar />
      <div className="powerSheetCont">{element}</div>
    </>
  );
};

export default Home;
