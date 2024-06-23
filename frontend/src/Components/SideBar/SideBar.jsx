import React, { useEffect, useState } from "react";
import logo from "./Assets/Logo Circle.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BACKEND_SERVER, POWER_SHEET_ROUTE } from "../../Helper/BaseUrl";

const SideBar = () => {
  const [greet, setGreet] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();
    let greeting = "";

    if (currentTime >= 5 && currentTime < 12) {
      greeting = "Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting = "Afternoon";
    } else {
      greeting = "Evening";
    }
    setGreet(greeting);
  }, []);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("webDualToken");
    const userid = localStorage.getItem("webDualUserid");

    axios
      .get(`${BACKEND_SERVER}/users/profile/${userid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navLinks = [
    {
      name: "Dashboard",
      link: `${POWER_SHEET_ROUTE}/dashboard`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
          style={{
            width: "20px",
            marginRight: "10px",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Profile",
      link: `${POWER_SHEET_ROUTE}/profile`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          style={{
            width: "20px",
            marginRight: "10px",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
    {
      name: "Timesheet",
      link: `${POWER_SHEET_ROUTE}/timesheet`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          style={{
            width: "20px",
            marginRight: "10px",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="navbar-top">
        <div className="left">
          <img src={logo} alt="" draggable="false" />
          <h3>WebDuality Technologies</h3>
        </div>
        <div className="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            style={{
              width: "25px",
              marginRight: "0 15px",
              cursor: "pointer",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          <span>
            <img
              src={
                userData?.profilePic ||
                "https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png"
              }
              alt=""
              draggable="false"
            />
            <p>{userData?.empId}</p>
          </span>
        </div>
      </div>
      <div className="navbar-sideBar">
        <h4>Good {greet} 👋🏻</h4>
        <p>{userData?.name}</p>

        <div className="navbar-box">
          {navLinks.map((e, i) => (
            <NavLink to={e.link} key={i}>
              {e.icon}
              {e.name}
            </NavLink>
          ))}
          <span
            onClick={() => {
              localStorage.clear();
              window.location.href = `${POWER_SHEET_ROUTE}/login`;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{
                width: "20px",
                marginRight: "10px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            SignOut
          </span>
        </div>

        <p
          style={{
            bottom: "0",
            position: "absolute",
            color: "darkgray",
            fontSize: "1rem",
          }}
        >
          WTPL Confidential
        </p>
      </div>
    </>
  );
};

export default SideBar;
