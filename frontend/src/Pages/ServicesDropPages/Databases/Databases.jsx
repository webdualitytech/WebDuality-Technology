import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import databaseImg from "./Assets/databaseImg.jpg";

// Back Image
import databasebackImg from "./Assets/databasebackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Database";

const Databases = () => {
  const firstContainer = {
    heading: "End-to-End Database Solutions",
    para: "Web Duality delivers extensive database management and integration services, constructing robust database solutions tailored for web and mobile applications. Our proficient team specializes in expert database management for both mobile and web app development.",
    backimg: databasebackImg,
  };

  const secondContainer = {
    heading:
      "<strong>Versatile Database Management</strong> Solutions Across Multiple Platforms",
    para1:
      "Our team comprises highly skilled experts in database management, proficient in a range of technologies such as MySQL, MS SQL, PostgreSQL, MongoDB, Amazon DynamoDB, Azure CosmosDB, Indexed Database API, and Google Firebase.",
    para2:
      "In conjunction with these technologies, our team employs cutting-edge database engineering techniques to streamline database management and integrate scalable solutions for your digital platform. We extend our support to startups, enterprises, and established businesses, ensuring a seamless integration of databases and cloud services for enhanced and efficient data analysis.",
    img: databaseImg,
  };

  const thirdContainer = {
    heading:
      "<strong>Comprehensive Database Management</strong> and Integration Solutions",
    para: "As a holistic provider of database solutions, we present a variety of services to our global clientele. This flexibility empowers businesses to select services aligned with their individual business objectives.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "Databases in <strong>Digital Infrastructure</strong>",
    para: "Databases serve as the backbone of modern digital ecosystems, enabling efficient data storage, retrieval, and management. They play a pivotal role in diverse applications, ensuring seamless functioning across various industries.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>Expertise in Database</strong> Technologies",
    para: "Web Duality excels in a broad spectrum of database technologies tailored to diverse business needs. Our database consultants, in alignment with your project requirements, guide you in selecting the most suitable database technology for constructing a scalable digital solution.",
    webDevTechStack,
  };

  const hire = "Databases";

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

export default Databases;
