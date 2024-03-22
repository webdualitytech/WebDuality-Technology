import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import webapiImg from "./Assets/webapi.webp";

// Back Image
import webapibackImg from "./Assets/webapibackImg.png";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Web";
const WebAPI = () => {
  const firstContainer = {
    heading: "Web Duality's Expertise in Core API Development",
    para: "At Web Duality, we specialize in Core Web API development, crafting tailored solutions for diverse industries. Our experienced team ensures seamless integration with existing systems, meeting each client's unique requirements.",
    backimg: webapibackImg,
  };

  const secondContainer = {
    heading: "Tailored <strong>Web API Solutions</strong> Across Industries",
    para1:
      "In today's digital era, Web APIs play a pivotal role in facilitating seamless communication between various applications and platforms. Businesses, regardless of their size, can leverage the power of Web API development to enhance connectivity and streamline processes.",
    para2:
      "At Web Duality, we lead the way in providing tailored Web API solutions, catering to the unique requirements of diverse industries. Our expertise extends to crafting robust APIs for effective communication and integration, fostering digital transformation for businesses seeking enhanced connectivity and efficiency.",
    img: webapiImg,
  };

  const thirdContainer = {
    heading: "<strong>Partner with Us</strong> for Outsourcing",
    para: "Choose Web Duality as your outsourcing destination for comprehensive Web API development solutions. Explore the advantages we provide for your project, including.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "Advantages of <strong>Web API Development</strong>",
    para: "Explore the numerous advantages offered by ASP.NET Core Web API Development.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Tools and Technologies <strong>Core API Development</strong>",
    para: "Web Duality employs a variety of cutting-edge tools and technologies to craft high-performing ASP.NET Core Web APIs.",
    webDevTechStack,
  };

  const hire = "Web API";

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

export default WebAPI;
