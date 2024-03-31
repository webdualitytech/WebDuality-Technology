// React & UseState
import React, { useState } from "react";
// Footer CSS
import "./Footer.css";

// Image
import footerCom from "./Assets/footerCom.png";
// Logo
import Logo from "./Assets/Logo_Transparent.png";

/* ------------- React Router Dom ------------- */
// Link
import { Link, useLocation } from "react-router-dom";

// Axios
import axios from "axios";
import { backendURL } from "../../Helper/BaseUrl";

/* ------------------- MUI Icons ------------------- */
// Right Arrow Icon
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// Email Icon
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// Phone Icon
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
// Location Icon
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

/* ------------- Alerts ------------- */
// Snack Bar
import Snackbar from "@mui/material/Snackbar";
// Alert
import MuiAlert from "@mui/material/Alert";

const Footer = () => {
  const location = useLocation();

  // organy List
  const organy = [
    {
      content: "About Us",
      link: "/",
    },
    {
      content: "Success Stories",
      link: "/",
    },
    {
      content: "Privacy Policy",
      link: "/",
    },
    {
      content: "Terms & Conditions",
      link: "/",
    },
    {
      content: "Contact Us",
      link: "/contact",
    },
  ];

  // Services List
  const services = [
    {
      content: "Hire Permanent Staff",
      link: "/",
    },
    {
      content: "Staff Augmentation",
      link: "/",
    },
    {
      content: "Software Outsourcing",
      link: "/",
    },
    {
      content: "Build remote Office",
      link: "/",
    },
  ];

  // Start List
  const start = [
    {
      content: "You Asked",
      link: "/",
    },
    {
      content: "We Proceed",
      link: "/",
    },
    {
      content: "Negotiate",
      link: "/",
    },
    {
      content: "You Get",
      link: "/",
    },
  ];

  // All Data UseState
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetail, setProjectDetail] = useState("");

  // Handle Change Func
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // CheckBox State
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Email and Phone Regex
  const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const phoneRegex = /^([+]?[0-9]{1,4}[ -]?)?([0-9]{10})$/;

  // Alert State
  const [alert, setAlert] = useState({
    emailAlert: "",
    phoneAlert: "",
  });

  // Snackbar Alert UseState
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  // Close SnackBar Alert Func
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnack({
      ...snack,
      open: false,
    });
  };

  // Consultation Func
  const consultation = () => {
    if (
      org.trim() !== "" &&
      name.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      alert.phoneAlert === "" &&
      email.trim() !== "" &&
      alert.emailAlert === "" &&
      projectDetail.trim() !== "" &&
      isChecked
    ) {
      // Save data for send backend
      const data = {
        name,
        email,
        organization: org,
        phoneNumber,
        projectDetail,
      };
      // Post Request
      axios
        .post(`${backendURL}/consultation`, data)
        .then((res) => {
          // Response
          setSnack({
            open: true,
            message: `${res.data.msg}`,
            severity: "success",
          });
          setOrg("");
          setName("");
          setPhoneNumber("");
          setEmail("");
          setProjectDetail("");
          setIsChecked(false);
        })
        .catch((err) => {
          // Error
          setSnack({
            open: true,
            message: "Server Error !!",
            severity: "error",
          });
        });
    } else {
      setSnack({
        open: true,
        message: "Wrong Credentials !!",
        severity: "warning",
      });
    }
  };

  const mainStyle = {
    maxWidth: "1219px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  };

  return (
    <>
      <div className="footerBox">
        <div className="firstContFootBox">
          {/* Image */}
          <div className="img">
            {location.pathname === "/contact" ? (
              <>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.2660736574235!2d77.42927685!3d28.61078365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee941d0fac1d%3A0x23370297a1102792!2sSector%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1705414993426!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "0px 0px 30px 20px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    border: "0px",
                    margin: 0,
                    padding: 0,
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    transition: "box-shadow 0.3s ease",
                    outline: "none",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </>
            ) : (
              <>
                <img src={footerCom} alt="" draggable="false" />
              </>
            )}
          </div>

          <div className="formBox">
            <h2>Connect With Your Next Great Hire Today!</h2>
            {/* All Form Details */}
            <div className="formDetails">
              {[
                "Organization",
                "Your Name",
                "Phone Number",
                "Email",
                "Project Detail",
              ].map((e, i) => (
                <div className="box" key={i}>
                  {/* Title */}
                  <p>{e}</p>
                  {/* Inputs */}
                  <input
                    type="text"
                    placeholder={`Enter ${e}`}
                    value={
                      e === "Organization"
                        ? org
                        : e === "Your Name"
                        ? name
                        : e === "Phone Number"
                        ? phoneNumber
                        : e === "Email"
                        ? email
                        : projectDetail
                    }
                    onChange={(event) =>
                      handleInputChange(event, (value) => {
                        if (e === "Organization") setOrg(value);
                        else if (e === "Your Name") setName(value);
                        else if (e === "Phone Number") setPhoneNumber(value);
                        else if (e === "Email") setEmail(value);
                        else setProjectDetail(value);
                      })
                    }
                    onBlur={() => {
                      if (e === "Phone Number") {
                        if (!phoneRegex.test(phoneNumber)) {
                          setAlert({
                            ...alert,
                            phoneAlert: "Invalid phone no. !!",
                          });
                        } else {
                          setAlert({
                            ...alert,
                            phoneAlert: "",
                          });
                        }
                      } else if (e === "Email") {
                        if (!emailRegex.test(email)) {
                          setAlert({
                            ...alert,
                            emailAlert: "Invalid Email !!",
                          });
                        } else {
                          setAlert({
                            ...alert,
                            emailAlert: "",
                          });
                        }
                      }
                    }}
                  />
                  {/* Alert Show */}
                  {e === "Email" || e === "Phone Number" ? (
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "red",
                        // height: "10px",
                        margin: "0 0 0 5px",
                        padding: "0",
                      }}
                    >
                      {e === "Email" ? alert.emailAlert : alert.phoneAlert}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>

            <div className="policy">
              <input
                type="checkbox"
                name="check"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span>
                By sending this form I confirm that I have read and accept the
                <strong> Privacy Policy</strong>
              </span>
            </div>

            {/* Consultation Button */}
            <button onClick={consultation}>
              <span>GET CONSULTATION</span>
              <ArrowForwardOutlinedIcon
                sx={{
                  width: 18,
                  height: 15.5,
                  ml: 0.5,
                }}
              />
            </button>
          </div>
        </div>

        <div className="secondContFootBox">
          <div className="innerBox">
            <div className="footBox">
              <img src={Logo} alt="" />
              <p>
                Expertly trained, battle-tested, elite software developers on
                demand
              </p>
              <p>
                <PhoneEnabledIcon
                  sx={{
                    mr: 1,
                  }}
                />{" "}
                <a href="tel:+91 9358174038">+91 9358174038</a>
              </p>
              <p>
                <EmailOutlinedIcon
                  sx={{
                    mr: 1,
                  }}
                />{" "}
                <a href="mailto:hr@webduality.com">hr@webduality.com</a>
              </p>
              <p>
                <LocationOnOutlinedIcon
                  sx={{
                    mr: 1,
                  }}
                />
                Greater Noida Sector 4
              </p>
              <p
                style={{
                  display: "flex",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    mr: 1,
                  }}
                />
                <span> Sco 63, Sector 12-A, Panchkula, Haryana 134112</span>
              </p>
            </div>
            <div className="footBox">
              <p>Company</p>
              {organy.map((e, i) => {
                return (
                  <Link key={i} to={e.link} className="footLink">
                    {e.content}
                  </Link>
                );
              })}
            </div>
            <div className="footBox">
              <p>Services</p>
              {services.map((e, i) => {
                return (
                  <Link key={i} to={e.link} className="footLink">
                    {e.content}
                  </Link>
                );
              })}
            </div>
            <div className="footBox">
              <p>How to Start</p>
              {start.map((e, i) => {
                return (
                  <Link key={i} to={e.link} className="footLink">
                    {e.content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="thirdContFootBox">
          <div className="innerBox">
            <p>Follow us</p>
            <div className="social">
              {/* Linkedin */}
              <Link
                to="https://www.linkedin.com/company/webdualitytechnology/?viewAsMember=true"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M6.25 3.75018C4.86875 3.75018 3.75 4.86893 3.75 6.25018V23.7502C3.75 25.1314 4.86875 26.2502 6.25 26.2502H23.75C25.1313 26.2502 26.25 25.1314 26.25 23.7502V6.25018C26.25 4.86893 25.1313 3.75018 23.75 3.75018H6.25ZM6.25 6.25018H23.75V23.7502H6.25V6.25018ZM9.72412 7.89569C8.65287 7.89569 8.01025 8.53966 8.01025 9.39716C8.01025 10.2547 8.65295 10.8962 9.6167 10.8962C10.6879 10.8962 11.3306 10.2547 11.3306 9.39716C11.3306 8.53966 10.6879 7.89569 9.72412 7.89569ZM8.0957 12.5002V21.2502H11.25V12.5002H8.0957ZM13.8525 12.5002V21.2502H17.0068V16.4675C17.0068 15.0437 18.0226 14.8391 18.3276 14.8391C18.6326 14.8391 19.4482 15.145 19.4482 16.4675V21.2502H22.5V16.4675C22.5 13.7212 21.2797 12.5002 19.7534 12.5002C18.2272 12.5002 17.4131 13.0084 17.0068 13.7209V12.5002H13.8525Z"
                    fill="#16205F"
                  />
                </svg>
              </Link>
              {/* Facebook */}
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15 2.50018C8.11125 2.50018 2.5 8.11143 2.5 15.0002C2.5 21.8889 8.11125 27.5002 15 27.5002C21.8888 27.5002 27.5 21.8889 27.5 15.0002C27.5 8.11143 21.8888 2.50018 15 2.50018ZM15 5.00018C20.5377 5.00018 25 9.46253 25 15.0002C25 20.0183 21.3317 24.1415 16.5234 24.8732V17.9811H19.4336L19.8901 15.0246H16.5234V13.4084C16.5234 12.1796 16.9237 11.0891 18.0737 11.0891H19.9194V8.50848C19.5944 8.46473 18.9086 8.36932 17.6123 8.36932C14.9048 8.36932 13.3179 9.79932 13.3179 13.0568V15.0246H10.5347V17.9811H13.3179V24.8488C8.58786 24.0512 5 19.963 5 15.0002C5 9.46253 9.46235 5.00018 15 5.00018Z"
                    fill="#16205F"
                  />
                </svg>
              </Link>
              {/* Instagram */}
              <Link
                to="https://www.instagram.com/webduality.technology/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M10 3.75018C6.55375 3.75018 3.75 6.55393 3.75 10.0002V20.0002C3.75 23.4464 6.55375 26.2502 10 26.2502H20C23.4463 26.2502 26.25 23.4464 26.25 20.0002V10.0002C26.25 6.55393 23.4463 3.75018 20 3.75018H10ZM10 6.25018H20C22.0675 6.25018 23.75 7.93268 23.75 10.0002V20.0002C23.75 22.0677 22.0675 23.7502 20 23.7502H10C7.9325 23.7502 6.25 22.0677 6.25 20.0002V10.0002C6.25 7.93268 7.9325 6.25018 10 6.25018ZM21.25 7.50018C20.9185 7.50018 20.6005 7.63188 20.3661 7.8663C20.1317 8.10072 20 8.41866 20 8.75018C20 9.0817 20.1317 9.39965 20.3661 9.63407C20.6005 9.86849 20.9185 10.0002 21.25 10.0002C21.5815 10.0002 21.8995 9.86849 22.1339 9.63407C22.3683 9.39965 22.5 9.0817 22.5 8.75018C22.5 8.41866 22.3683 8.10072 22.1339 7.8663C21.8995 7.63188 21.5815 7.50018 21.25 7.50018ZM15 8.75018C11.5538 8.75018 8.75 11.5539 8.75 15.0002C8.75 18.4464 11.5538 21.2502 15 21.2502C18.4462 21.2502 21.25 18.4464 21.25 15.0002C21.25 11.5539 18.4462 8.75018 15 8.75018ZM15 11.2502C17.0675 11.2502 18.75 12.9327 18.75 15.0002C18.75 17.0677 17.0675 18.7502 15 18.7502C12.9325 18.7502 11.25 17.0677 11.25 15.0002C11.25 12.9327 12.9325 11.2502 15 11.2502Z"
                    fill="#16205F"
                  />
                </svg>
              </Link>
              {/* Twitter */}
              <Link to="https://twitter.com/webdualityTech" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M6.25 3.75018C4.87125 3.75018 3.75 4.87143 3.75 6.25018V23.7502C3.75 25.1289 4.87125 26.2502 6.25 26.2502H23.75C25.1287 26.2502 26.25 25.1289 26.25 23.7502V6.25018C26.25 4.87143 25.1287 3.75018 23.75 3.75018H6.25ZM6.25 6.25018H23.75L23.7524 23.7502H6.25V6.25018ZM18.208 8.89178C16.493 8.89178 15.1001 10.2859 15.1001 11.9997C15.1001 12.3209 15.2075 12.5355 15.2075 12.7492C12.6363 12.643 10.3867 11.3576 8.88672 9.53632C8.56547 9.96507 8.45703 10.4991 8.45703 11.0353C8.45703 12.1066 8.99357 12.966 9.85107 13.716C9.31607 13.6085 8.88578 13.5001 8.45703 13.2863C8.45703 14.7863 9.52791 15.9656 10.9204 16.2868C10.5992 16.3943 10.3847 16.3942 10.0635 16.3942C9.95598 16.3942 9.74012 16.2868 9.52637 16.2868C9.95512 17.4656 11.0269 18.4279 12.4194 18.4279C11.3482 19.1779 9.95451 19.7145 8.56201 19.7145H7.8125C9.205 20.5708 10.8131 21.1086 12.5269 21.1086C18.2056 21.1086 21.3135 16.3932 21.3135 12.322V11.8923C21.8497 11.4635 22.3837 10.9284 22.8149 10.2834C22.1724 10.6059 21.6362 10.713 20.9937 10.8205C21.6362 10.393 22.1715 9.85663 22.3853 9.10663C21.849 9.42788 21.2065 9.74864 20.4565 9.85614C19.9203 9.21364 19.0655 8.89178 18.208 8.89178Z"
                    fill="#16205F"
                  />
                </svg>
              </Link>
              {/* Youtube */}
              <Link
                to="https://www.youtube.com/channel/UCZfztDF4yg6swilPbgmjlzw"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15 5.00018C15 5.00018 7.18193 5.00014 5.23193 5.52264C4.15568 5.81014 3.30996 6.65712 3.02246 7.73212C2.49996 9.68212 2.5 15.0002 2.5 15.0002C2.5 15.0002 2.49996 20.3182 3.02246 22.2682C3.30996 23.3445 4.15693 24.1902 5.23193 24.4777C7.18193 25.0002 15 25.0002 15 25.0002C15 25.0002 22.8181 25.0002 24.7681 24.4777C25.8431 24.1902 26.69 23.3433 26.9775 22.2682C27.5 20.3182 27.5 15.0002 27.5 15.0002C27.5 15.0002 27.5 9.68212 26.9775 7.73212C26.69 6.65712 25.8431 5.81014 24.7681 5.52264C22.8181 5.00014 15 5.00018 15 5.00018ZM15 7.50018C18.6025 7.50018 23.1136 7.66719 24.1211 7.93719C24.3323 7.99344 24.5055 8.16659 24.563 8.37909C24.8642 9.50159 25 12.9277 25 15.0002C25 17.0727 24.8642 20.4975 24.563 21.6213C24.5067 21.8325 24.3336 22.0057 24.1211 22.0632C23.1148 22.3332 18.6025 22.5002 15 22.5002C11.3988 22.5002 6.88766 22.3332 5.87891 22.0632C5.66766 22.0069 5.49451 21.8338 5.43701 21.6213C5.13576 20.4988 5 17.0727 5 15.0002C5 12.9277 5.13576 9.50165 5.43701 8.37665C5.49326 8.16665 5.66641 7.99344 5.87891 7.93719C6.88516 7.66719 11.3975 7.50018 15 7.50018ZM12.5 10.6691V19.3312L20 15.0002L12.5 10.6691Z"
                    fill="#16205F"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="fourthContFootBox">
          <p>&copy; 2023 WebDuality Technology</p>
        </div>
      </div>

      {/* Snack Bar Alert */}
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {/* Mui Alert */}
        <MuiAlert
          onClose={handleClose}
          severity={snack.severity}
          sx={{ width: "100%" }}
        >
          <strong>{snack.message}</strong>
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Footer;
