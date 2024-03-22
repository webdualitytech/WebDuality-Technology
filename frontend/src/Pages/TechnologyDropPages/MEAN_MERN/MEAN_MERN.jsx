import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import meanmernImg from "./Assets/meanmernImg.jpg";

// Back Image
import meanmernbackImg from "./Assets/meanmernbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./MEAN_MERNTech";

const MEAN_MERN = () => {
  const firstContainer = {
    heading: "MEAN & MERN Full-Stack Development",
    para: "Welcome to Web Duality, a leading MEAN and MERN Full-Stack Development Service provider in India. Specializing in cutting-edge solutions, we empower businesses to enhance their digital presence and drive growth through MEAN and MERN Stack Development Services.",
    backimg: meanmernbackImg,
  };

  const secondContainer = {
    heading: "The primary <strong> distinction between MEAN and MERN </strong>",
    para1:
      "The MEAN stack comprises MongoDB, Express, Angular, and Node.js, forming a comprehensive solution for modern web applications. MongoDB is a NoSQL database, Express is a flexible web application framework for Node.js, Angular is a front-end JavaScript framework, and Node.js is a server-side JavaScript runtime.",
    para2:
      "The MERN stack, like MEAN, includes MongoDB, Express, and Node.js, but incorporates React instead of Angular. React is a component-based front-end JavaScript library, enabling the creation of reusable UI components for dynamic interfaces. MERN is tailored for specific applications, offering advantages in building complex and reusable user interfaces.",
    img: meanmernImg,
  };

  const thirdContainer = {
    heading: "<strong> MEAN & MERN </strong> Stack Development Solutions",
    para: "Explore our comprehensive range of MEAN & MERN Stack Development Solutions tailored to diverse industry needs. Our offerings comprise.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "Benefits of Using MEAN & MERN Stack Framework",
    para: "Web Duality excels in innovation! Our seasoned .NET developers, adhering to market standards, leverage expertise to create high-performance web, desktop, and mobile applications. With a proven development approach, we empower businesses for rapid time-to-market, delivering top-quality .NET solutions.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "Choosing Between <strong> MEAN and MERN Stack </strong> for Development",
    para: "MEAN and MERN stand out as leading full-stack development technologies globally. While both are potent and efficient, key distinctions exist, influencing the choice between them for your specific needs.",
    webDevTechStack,
  };

  const hire = "MEAN & MERN";

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

export default MEAN_MERN;
