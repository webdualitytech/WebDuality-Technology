// React & UseState
import React, { useState, useEffect } from "react";
// Navbar CSS
import "./Navbar.css";

// Logo
import Logo from "./Assets/Logo_Transparent.png";
// import Logo from "./Assets/Vector.png";

/* ------------- React Router Dom ------------- */
// NavLink
import { NavLink, useLocation } from "react-router-dom";

/* ------------------- MUI Icons ------------------- */
// Down Arrow Icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

/* ------------------- MUI Components ------------------- */
// Menu
import Menu from "@mui/material/Menu";
// Menu Item
import MenuItem from "@mui/material/MenuItem";

// Team Component
import Team from "../Team/Team";
// DrawerNav Component
import DrawerNav from "./DrawerNav";

// NavPages
import { navLink } from "./NavPages";

const Navbar = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Menu Anchor
  const [anchorEl, setAnchorEl] = useState([null, null, null, null]); // Initialize with null for each icon
  const [scrollNav, setScrollnav] = useState(0);
  // Build Team Dialog UseState
  const [openBuildTeamDialog, setOpenBuildTeamDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update the scroll value when the user scrolls
      setScrollnav(window.scrollY);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Open Menu
  const handleClick = (event, index) => {
    if (!anchorEl[index]) {
      // Check if the menu is not already open
      setAnchorEl((prev) => {
        const newAnchorEl = [...prev];
        newAnchorEl[index] = event.currentTarget;
        return newAnchorEl;
      });
    }
  };

  // Close Menu
  const handleClose = (index) => {
    setAnchorEl((prev) => {
      const newAnchorEl = [...prev];
      newAnchorEl[index] = null;
      return newAnchorEl;
    });
  };

  // Open Build Team Dialog Func
  const handleBuildTeamOpenDialog = () => {
    setOpenBuildTeamDialog(true);
  };

  // Close Build Team Dialog Func
  const handleBuildTeamCloseDialog = () => {
    setOpenBuildTeamDialog(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className="navbar"
        style={{
          backgroundColor:
            scrollNav === 0 ? "transparent" : "var(--main-background-color)",
          height: scrollNav === 0 ? "110px" : "95px",
          borderBottom: scrollNav === 0 ? "" : "1px solid #e1e1e1",
        }}
      >
        <div className="innerNav">
          {/* Logo Box */}
          <div className="box">
            <NavLink to="/">
              {/* Logo */}
              <img src={Logo} alt="" className="logo" draggable="false" />
            </NavLink>
          </div>

          {/* List Box */}
          <div className="box">
            {navLink.map((val, i) => (
              <li
                key={i}
                style={{
                  color:
                    scrollNav === 0
                      ? "var(--main-textSecond-color)"
                      : "var(--main-text-color)",
                  textShadow:
                    scrollNav === 0
                      ? "1px 1px 2px rgb(255, 255, 255), 0 0 1em #16205f,0 0 0.2em #16205f"
                      : "",
                }}
              >
                <NavLink
                  to={`/${val.link}`}
                  className="navLink"
                  style={{
                    color:
                      scrollNav === 0
                        ? "var(--main-textSecond-color)"
                        : "var(--main-text-color)",
                    textShadow:
                      scrollNav === 0
                        ? "1px 1px 2px rgb(255, 255, 255), 0 0 1em #16205f,0 0 0.2em #16205f"
                        : "",
                  }}
                >
                  {val.label}
                </NavLink>

                {val.subMenu && (
                  <div>
                    <KeyboardArrowDownOutlinedIcon
                      id="basic-button"
                      aria-controls={anchorEl[i] ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorEl[i] ? "true" : undefined}
                      onClick={(event) => handleClick(event, i)}
                      sx={{
                        width: 24,
                        height: 24,
                        transform: Boolean(anchorEl[i])
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl[i]}
                      open={Boolean(anchorEl[i])}
                      onClose={() => handleClose(i)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 6,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      {val.subMenu.map((e, idx) => {
                        return (
                          <NavLink
                            key={idx}
                            onClick={() => handleClose(i)}
                            to={`/${e.link}`}
                          >
                            <MenuItem
                              sx={{
                                color: "var(--Dark, #16205f)",
                                fontWeight: 500,
                                fontFamily: "Poppins",
                                fontSize: "16px",
                                borderRadius: "2px 0 0 2px",
                                borderLeft: "4px solid transparent",
                                mt: 0.5,
                                mb: 0.5,
                                "&:hover": {
                                  borderLeft: "4px solid #fcb81f",
                                },
                              }}
                            >
                              {e.name}
                            </MenuItem>
                          </NavLink>
                        );
                      })}
                    </Menu>
                  </div>
                )}
              </li>
            ))}
          </div>
          {/* Button Box
          <div className="box">
            Button
            <button onClick={handleBuildTeamOpenDialog}>
              <span>Build a team</span>
              <ArrowForwardOutlinedIcon
                sx={{
                  width: 18,
                  height: 15.5,
                  ml: 0.5,
                }}
              />
            </button>
          </div> */}

          {/* DrawerNav Component Box */}
          <div className="hide">
            <DrawerNav
              anchor={"right"}
              component="span"
              scrollNav={scrollNav}
            />
          </div>
        </div>
      </div>

      {/* Build Team Dialog Box */}
      <Team
        openBuildTeamDialog={openBuildTeamDialog}
        handleBuildTeamCloseDialog={handleBuildTeamCloseDialog}
      />
    </>
  );
};

export default Navbar;
