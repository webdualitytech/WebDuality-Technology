// React,UseState,UseEffect
import React, { useState } from "react";
// Hire CSS
import "./Hire.css";

import pdflogo from "./Assets/pdflogo.png";

/* ------------------- MUI Component ------------------- */
// Dialog
import Dialog from "@mui/material/Dialog";
// Dialog Content
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

/* ------------- MUI Icons ------------- */
// Person Icon
import PersonIcon from "@mui/icons-material/Person";
// Email Icon
import EmailIcon from "@mui/icons-material/Email";
// PhoneNumber Icon
import PhoneIcon from "@mui/icons-material/Phone";

import axios from "axios";
import { backendURL } from "../../Helper/BaseUrl";

/* ------------- Alerts ------------- */
// Snack Bar
import Snackbar from "@mui/material/Snackbar";
// Alert
import MuiAlert from "@mui/material/Alert";

const Hire = (props) => {
  // Props
  const { openHireDialog, handleHireCloseDialog, heading } = props;

  // hire UseState
  const [hire, setHire] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    domain: heading,
    resume: "",
  });

  // Input Alert UseState
  const [alert, setAlert] = useState({
    nameAlert: "",
    mailAlert: "",
    phoneNumberAlert: "",
    fileAlert: "",
  });

  // Handle hire Change Func
  const handleHireChange = (e) => {
    const { name, value } = e.target;
    setHire({
      ...hire,
      [name]: value,
    });
  };

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (e) => {
    const val = e.target.files[0];

    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes

    if (!val) {
      setSelectedFile();
      setAlert({
        ...alert,
        fileAlert: "Please select a file.",
      });
      return;
    }

    if (val.type !== "application/pdf") {
      setSelectedFile();
      setAlert({
        ...alert,
        fileAlert: "Only PDF files are supported.",
      });
      return;
    }

    if (val.size > maxSizeInBytes) {
      setSelectedFile();
      setAlert({
        ...alert,
        fileAlert: "PDF should be less than 2MB.",
      });
      return;
    }

    setSelectedFile(val);
    setAlert({
      ...alert,
      fileAlert: "",
    });

    const reader = new FileReader();
    reader.readAsDataURL(val);
    reader.onload = function () {
      const url = reader.result;
      setHire({
        ...hire,
        resume: url,
      });
    };
  };

  const fileNameFormat = (f) => {
    const text = f.split(".");
    return `${text[0].substring(0, 3)}...${text[1]}`;
  };

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

  // Handle Form Submit Func
  const handleHireData = (event) => {
    // Stop Reloading the Page when Submiting the Form
    event.preventDefault();

    // Check if the form is fill or not
    if (
      hire.name !== "" &&
      alert.nameAlert === "" &&
      hire.email !== "" &&
      alert.mailAlert === "" &&
      hire.phoneNumber !== "" &&
      alert.phoneNumberAlert === "" &&
      selectedFile &&
      alert.fileAlert === ""
    ) {
      // Post Request
      axios
        .post(`${backendURL}/apply`, hire)
        .then((res) => {
          // Response
          setSnack({
            open: true,
            message: `${res.data.msg}`,
            severity: "success",
          });

          setHire({ name: "", email: "", phoneNumber: "", domain: heading });
          setSelectedFile();
        })
        .catch((err) => {
          // Error
          setSnack({
            open: true,
            message: "Server Error !!",
            severity: "error",
          });
        });
    }
    // Else show fill the form
    else {
      setSnack({
        open: true,
        message: "Please fill the form !!",
        severity: "warning",
      });
    }
  };

  const isMobile = window.innerWidth <= 600;

  return (
    <>
      {/* Hire Dialog Box */}
      <Dialog
        open={openHireDialog}
        onClose={handleHireCloseDialog}
        maxWidth="xl"
      >
        {/* Dialog Content */}
        <DialogContent
          style={{
            minWidth: isMobile ? "100%" : "500px",
            maxWidth: isMobile ? "100%" : "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#16205f",
              fontFamily: "Poppins",
            }}
            className="hireMainBox"
          >
            <h2>
              Apply for <strong>{heading}</strong>
            </h2>
            {/* First Name Box */}
            <Box className="hireBox">
              {/* Text Field */}
              <TextField
                label="Full Name"
                color="warning"
                type="text"
                name="name"
                value={hire.name}
                onChange={handleHireChange}
                className="hireInput"
                variant="outlined"
                placeholder="Enter Full Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* Person Icon */}
                      <PersonIcon
                        sx={{
                          color: "#16205f",
                          m: 0.5,
                          fontSize: "2rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                onBlur={() => {
                  if (hire.name === "" || /^\s*$/.test(hire.name)) {
                    setAlert({
                      ...alert,
                      nameAlert: "Please enter name !!",
                    });
                  } else {
                    setAlert({
                      ...alert,
                      nameAlert: "",
                    });
                  }
                }}
              />
              {/* Show name Alert */}
              <p>{alert.nameAlert}</p>
            </Box>

            {/* Email Id Box */}
            <Box className="hireBox">
              {/* Text Field */}
              <TextField
                label="Email Id"
                color="warning"
                type="text"
                name="email"
                value={hire.email ? hire.email.trim("") : hire.email}
                onChange={handleHireChange}
                className="hireInput"
                variant="outlined"
                placeholder="Enter Email ID"
                onBlur={() => {
                  if (
                    !/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
                      hire.email
                    )
                  ) {
                    setAlert({
                      ...alert,
                      mailAlert: "Invalid email address !!",
                    });
                  } else {
                    setAlert({
                      ...alert,
                      mailAlert: "",
                    });
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* Person Icon */}
                      <EmailIcon
                        sx={{
                          color: "#16205f",
                          m: 0.5,
                          fontSize: "2rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {/* Show Email Alert */}
              <p>{alert.mailAlert}</p>
            </Box>

            {/* PhoneNumber Box */}
            <Box className="hireBox">
              {/* Text Field */}
              <TextField
                label="PhoneNumber No."
                color="warning"
                type="tel"
                name="phoneNumber"
                value={
                  hire.phoneNumber
                    ? hire.phoneNumber.trim("")
                    : hire.phoneNumber
                }
                onChange={handleHireChange}
                className="hireInput"
                variant="outlined"
                placeholder="Enter PhoneNumber No."
                onBlur={() => {
                  if (
                    !/^([+]?[0-9]{1,4}[ -]?)?([0-9]{10})$/.test(
                      hire.phoneNumber
                    )
                  ) {
                    setAlert({
                      ...alert,
                      phoneNumberAlert: "Invalid phoneNumber no. !!",
                    });
                  } else {
                    setAlert({
                      ...alert,
                      phoneNumberAlert: "",
                    });
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* Person Icon */}
                      <PhoneIcon
                        sx={{
                          color: "#16205f",
                          m: 0.5,
                          fontSize: "2rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {/* Show PhoneNumber Alert */}
              <p>{alert.phoneNumberAlert}</p>
            </Box>

            {/* Resume Box */}
            <Box
              className="hireBox"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                p: 1,
                borderRadius: "5px",
                position: "relative",
                height: "100px",
              }}
            >
              <div className="resume">
                <div className="first">
                  <h6>Import your CV</h6>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    style={{
                      display: "none",
                    }}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file"
                    style={{
                      background:
                        "linear-gradient(90deg, #30bcc9 0%, #313968 100%)",
                      color: "white",
                      marginTop: "10px",
                      marginLeft: "5px",
                      padding: "2px 15px",
                      borderRadius: "5px",
                      borderStyle: "none",
                      cursor: "pointer",
                      boxShadow:
                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                    }}
                  >
                    Upload
                  </label>
                </div>

                <div className="last">
                  {selectedFile && (
                    <>
                      <img
                        src={pdflogo}
                        alt=""
                        draggable="false"
                        style={{
                          width: "50px",
                        }}
                      />
                      <p>{fileNameFormat(selectedFile.name)}</p>
                    </>
                  )}
                </div>
              </div>

              {/* File Alert */}
              <p
                style={{
                  marginBottom: "0",
                }}
              >
                {alert.fileAlert}
              </p>
            </Box>

            <div
              className="btnGrp"
              style={{
                marginTop: "10px",
              }}
            >
              <Button
                color="success"
                variant="contained"
                onClick={handleHireData}
                sx={{
                  m: 1,
                }}
              >
                Submit
              </Button>
              <Button
                onClick={handleHireCloseDialog}
                color="error"
                variant="outlined"
                sx={{
                  m: 1,
                }}
              >
                Close
              </Button>
            </div>
          </Box>
        </DialogContent>
      </Dialog>

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

export default Hire;
