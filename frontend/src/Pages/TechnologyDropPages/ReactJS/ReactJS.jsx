import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import reactImg from "./Assets/reactImg.png";

// Back Image
import reactbackImg from "./Assets/reactbackImg.png";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./ReactJSTech";

const ReactJS = () => {
  const firstContainer = {
    heading: "ReactJS Development",
    para: "Welcome to Web Duality, a React JS Development Company in India, dedicated to delivering exceptional web development services through the React JS library. Our team of skilled React JS developers utilizes this library to craft contemporary, responsive, and feature-rich web applications tailored to meet your business requirements. We are committed to offering high-quality software development services to ensure our clients maintain a competitive edge in the market.",
    backimg: reactbackImg,
  };

  const secondContainer = {
    heading:
      "Revolutionize Your Business with <strong> Cutting-Edge Web Applications through ReactJS Development </strong> Services",
    para1:
      "Improving business processes for a competitive edge and increased profits is paramount. ReactJS proves to be a powerful tool for achieving these goals, providing a robust framework for developing efficient web applications. Its component-based architecture facilitates modular and streamlined code development, making ReactJS an ideal choice for businesses aiming to enhance their digital presence.",
    para2:
      "ReactJS web apps enable seamless operations such as inventory management, customer relations, and accounting. The versatility of ReactJS ensures highly responsive and customizable interfaces, delivering a user-friendly experience tailored to your specific business needs. Embracing ReactJS web app development empowers your business to optimize processes, leading to heightened efficiency, productivity, and overall profitability.",
    img: reactImg,
  };

  const thirdContainer = {
    heading:
      "Unlock the <strong> Power of ReactJS </strong> in Web Development",
    para: "When it comes to web application development, React JS stands out as a favored choice, offering compelling reasons for businesses to embrace its capabilities. Explore the key factors that make React JS an optimal choice for web development.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Elevate Your Web Development Journey with <strong> Web Duality's React JS Expertise </strong>",
    para: "Selecting the ideal React JS development partner is crucial for the success of your web application, and Web Duality stands out as the preferred choice for discerning clients. Our unwavering commitment to delivering top-notch React JS development services positions us as a reliable ally in achieving your digital objectives. Here are compelling reasons to opt for Web Duality in React JS web development.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>ReactJS Development </strong> Services by Web Duality",
    para: "Explore a spectrum of React JS development services with Web Duality, designed to empower businesses in realizing their digital objectives. Our comprehensive suite of React JS development services encompasses.",
    webDevTechStack,
  };

  const hire = "ReactJS";

  return (
    <>
      <DropdownPages
        firstContainer={firstContainer}
        secondContainer={secondContainer}
        thirdContainer={thirdContainer}
        fourthContainer={fourthContainer}
        fifthContainer={fifthContainer}
        hire={hire}
      />
    </>
  );
};

export default ReactJS;
