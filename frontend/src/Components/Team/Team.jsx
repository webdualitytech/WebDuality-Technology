// React,UseState,UseEffect
import React, { useState, useEffect } from "react";
// Team CSS
import "./Team.css";

/* ------------------- MUI Component ------------------- */
// Dialog
import Dialog from "@mui/material/Dialog";
// Dialog Content
import DialogContent from "@mui/material/DialogContent";
// PropTypes
import PropTypes from "prop-types";
// Tabs
import Tabs from "@mui/material/Tabs";
// Tab
import Tab from "@mui/material/Tab";
// Typography
import Typography from "@mui/material/Typography";
// Box
import Box from "@mui/material/Box";

// Custome Tab Panel Func Open Redirecting Each Tab
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Custom Tab Panel PropTypes
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Setting Tab Attributes
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Team = (props) => {
  // Props
  const { openBuildTeamDialog, handleBuildTeamCloseDialog } = props;

  // Option Tab UseState
  const [optionVal, setOptionVal] = useState(0);

  // Change Option Func
  const handleChangeOption = (event, newValue) => {
    setOptionVal(newValue);
  };

  // UseEffect Changing Effect for Tab Button Option
  useEffect(() => {
    // Get all elements with the class name 'custom-tab'
    const customTabs = document.getElementsByClassName("custom-tab");

    // Iterate through the elements and apply styles based on tabIndex
    for (let i = 0; i < customTabs.length; i++) {
      const tab = customTabs[i];

      // Check the tabIndex and apply styles accordingly
      if (tab.tabIndex !== -1) {
        // Add or modify styles based on the condition
        tab.style.flexShrink = "0";
        tab.style.background =
          "linear-gradient(90deg, #30BCC9 3.55%, #313968 100%)";
        tab.style.color = "#fff";
      } else {
        // Reset styles if the condition is not met
        tab.style.background = "#fff";
        tab.style.color = "#8A8A8A";
      }
    }
  }, [optionVal]);

  return (
    <>
      {/* Build Team Dialog Box */}
      <Dialog
        open={openBuildTeamDialog}
        onClose={handleBuildTeamCloseDialog}
        maxWidth="xl"
      >
        {/* Dialog Content */}
        <DialogContent
          style={{
            width: "100%",
          }}
        >
          {/* Team Box */}
          <div className="team">
            <span>Build a team</span>
            <p>We specialize in helping you build a team.</p>
          </div>

          {/* Main Tab Box */}
          <Box sx={{ width: "100%" }} className="mainTab">
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
              className="tabBox"
              style={{
                borderBottom: "0px",
              }}
            >
              {/* Custom-tabs Box */}
              <Tabs
                value={optionVal}
                onChange={handleChangeOption}
                aria-label="basic tabs example"
                className="custom-tabs"
              >
                {/* Custom-tab Box */}
                <Tab
                  label="Option 1"
                  {...a11yProps(0)}
                  style={{
                    flexShrink: "0",
                    background:
                      "linear-gradient(90deg, #30BCC9 3.55%, #313968 100%)",
                    color: "#fff",
                  }}
                  className="custom-tab"
                />
                {/* Custom-tab Box */}
                <Tab
                  label="Option 2"
                  {...a11yProps(1)}
                  className="custom-tab"
                  style={{
                    borderRadius: "0px 8px 8px 0px",
                  }}
                />
              </Tabs>
            </Box>

            {/* First tab Panel */}
            <CustomTabPanel value={optionVal} index={0}>
              <span className="data">
                <span className="dataBox">
                  <span>Company</span>
                  <input type="text" placeholder="Placeholder" />
                </span>
                <span className="dataBox">
                  <span>Your Name</span>
                  <input type="text" placeholder="Placeholder" />
                </span>
              </span>
            </CustomTabPanel>

            {/* Second tab Panel */}
            <CustomTabPanel value={optionVal} index={1}>
              <span className="data">
                <span className="dataBox">
                  <span>Email Id</span>
                  <input type="text" placeholder="Placeholder" />
                </span>
                <span className="dataBox">
                  <span>Address</span>
                  <input type="text" placeholder="Placeholder" />
                </span>
              </span>
            </CustomTabPanel>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Team;
