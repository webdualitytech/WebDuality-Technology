import React, { useState } from "react";
import "./Login.css";

import logo from "./Assets/Logo Circle.png";

import axios from "axios";
import { BACKEND_SERVER, POWER_SHEET_ROUTE } from "../../Helper/BaseUrl";

import Swal from "sweetalert2";
import { useLoaderContext } from "../../Contexts/LoaderContext/LoaderContext";
import Loader from "../../Components/Loader/Loader";
import PowerSheetFooter from "../../Components/PowerSheetFooter/PowerSheetFooter";

const Login = () => {
  // Data from UseLoaderContext Hook
  const { setOpenLoader, openLoader } = useLoaderContext();

  const [loginData, setLoginData] = useState({
    empId: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Open Loader
    setOpenLoader(true);

    axios
      .post(`${BACKEND_SERVER}/users/login`, loginData)
      .then((res) => {
        const { token, userid } = res?.data;

        localStorage.setItem("webDualToken", token);
        localStorage.setItem("webDualUserid", userid);

        // Close Loader
        setOpenLoader(false);

        window.location.href = `${POWER_SHEET_ROUTE}/dashboard`;
      })
      .catch((err) => {
        // console.log(err);

        // Close Loader
        setOpenLoader(false);

        Swal.fire({
          icon: "error",
          title: `Wrong credentials!`,
        });
      });
  };

  return (
    <>
      <div className="loginCont">
        <form onSubmit={handleLoginSubmit}>
          <h2>Power Sheet</h2>

          <img src={logo} alt="" draggable="false" />

          <label htmlFor="empId">Employee Id</label>
          <input
            type="text"
            placeholder="Employee Id"
            id="empId"
            name="empId"
            value={loginData.empId}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleFormChange}
            required
          />

          <button type="submit">Log In</button>
        </form>

        <div className="right"></div>
      </div>

      <PowerSheetFooter/>

      {/* Loader */}
      {openLoader && <Loader />}
    </>
  );
};

export default Login;
