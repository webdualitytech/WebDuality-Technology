import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <SentimentVeryDissatisfiedIcon
          sx={{
            m: 1,
            color: "#fff",
            fontSize: "4rem",
          }}
        />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
