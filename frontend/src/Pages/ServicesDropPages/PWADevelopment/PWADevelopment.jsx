import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import pwaImg from "./Assets/pwaimg.png";

// Back Image
import pwabackImg from "./Assets/pwabackImg.webp";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./PWA";

const PWADevelopment = () => {
  const firstContainer = {
    heading: "Progressive Web App Development",
    para: "In today's dynamic landscape, a compelling website is essential, seamlessly blending aesthetics with user experience. Enter Progressive Web App (PWA) Development, harmonizing the strengths of web and mobile for a distinctive and immersive user journey. Our expertise at Web Duality ensures responsive web app development, crafting fast, reliable, and seamless experiences across all devices – from desktops and tablets to smartphones. As a premier Progressive Web App Development company in India, we prioritize delivering fluid and engaging user interactions.",
    backimg: pwabackImg,
  };

  const secondContainer = {
    heading:
      "Create Effortless, Adaptive Journeys through <strong>PWA Development</strong>",
    para1:
      "At Web Duality Technologies, our forte lies in crafting Progressive Web Apps (PWAs) using Blazor, delivering seamless and adaptive user experiences. Our adept team leverages cutting-edge tools and technologies to build high-performance, feature-rich PWAs optimized for diverse devices and platforms.",
    para2:
      "We prioritize offline functionality, ensuring our PWAs operate without an internet connection. This enables access to app features in offline or low-connectivity scenarios. Our responsive design guarantees accessibility and user-friendliness across various screen sizes and devices. Trust our PWA development services for an outstanding user experience and heightened app engagement.",
    img: pwaImg,
  };

  const thirdContainer = {
    heading:
      "We Develop Innovative <strong>Progressive Web Apps</strong> to Boost Conversions",
    para: "At Web Duality Technologies, we recognize the pivotal role of converting visitors into customers for the success of any web application. Hence, we develop innovative Progressive Web Apps strategically crafted to enhance conversions. Our PWAs are search engine-optimized, ensuring heightened visibility and increased traffic to your website. Explore our PWA development services for a seamless transition from visitors to satisfied customers.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "Attributes of <strong>Progressive Web Application</strong>",
    para: "Progressive Web Apps showcase a variety of features, making them an ideal choice for businesses aiming to provide captivating user experiences. Explore some of the key attributes of Progressive Web Apps developed with cutting-edge technology.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>Web Duality's</strong> PWA Mastery",
    para: "At Web Duality Technologies, we excel in crafting Progressive Web Apps that ensure exceptional user experiences. Our expertise in PWA development includes",
    webDevTechStack,
  };

  const hire = "PWA Development";

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

export default PWADevelopment;
