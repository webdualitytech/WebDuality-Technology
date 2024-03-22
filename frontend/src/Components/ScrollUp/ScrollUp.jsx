import React, { useState, useEffect } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const ScrollUp = () => {
  const [scrollNav, setScrollnav] = useState(0);

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

  return (
    <>
      <div
        className="upBtn"
        style={{
          zIndex: 9999,
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: "20px",
          background: "var(--main-backGradient-color)",
          borderRadius: "50%",
          display: "flex",
          transform: scrollNav > 100 ? "translateY(0px)" : "translateY(100px)",
          transition: "transform 0.5s ease",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ArrowCircleUpIcon
          sx={{
            fontSize: "2.5rem",
            color: "var(--main-textSecond-color)",
          }}
        />
      </div>
    </>
  );
};

export default ScrollUp;
