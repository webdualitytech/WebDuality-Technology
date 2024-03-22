import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import mobileappImg from "./Assets/mobileappImg.jpg";

// Back Image
import mobileappbackImg from "./Assets/mobileappback.avif";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./MobileApp";

const MobileAppDevelopment = () => {
  const firstContainer = {
    heading: "Mobile App Development",
    para: "Web Duality is a top-rated mobile app development firm, committed to reshaping global businesses' digital presence. With expertise in both native and cross-platform mobile app development, we empower entrepreneurs to establish a robust mobile footprint and lead in their industries. Our focus on innovation and client satisfaction ensures that our solutions drive success and growth for partners.",
    backimg: mobileappbackImg,
  };

  const secondContainer = {
    heading:
      "Comprehensive <strong>Mobile App Development Solutions</strong> Tailored for Various Industries",
    para1:
      "Mobile applications have become an indispensable component of today's digital landscape. From startups to large-scale enterprises, businesses of all sizes can invest in mobile app development to capitalize on the advantages of establishing a robust mobile presence and connecting with their potential customer base.",
    para2:
      "At Web Duality, we stand at the forefront of crafting comprehensive mobile solutions for both Android and iOS platforms. Our commitment lies in assisting businesses to take significant strides in their digital transformation journey, designing full-scale mobile apps that enhance their brand visibility and engagement.",
    img: mobileappImg,
  };

  const thirdContainer = {
    heading:
      "Empower Your Business Growth Through Our Comprehensive <strong>Mobile App Development</strong> Solutions",
    para: "As a full-service mobile app development firm, we offer a range of tailored services to meet diverse business objectives. Our dedicated team provides end-to-end support, guiding you from ideation to seamless market entry with a standout solution.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "<strong>Versatile Mobile App Development</strong> Solutions for Every Sector",
    para: "With our mobile app development expertise, we ensure a seamless digital transition for businesses across different sectors. Web Duality has partnered with businesses of all sizes, crafting bespoke apps that align with specific industry goals.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "<strong>Enhancing Mobile App</strong> User Experience through Robust Tools and Frameworks",
    para: "Crafting dynamic mobile solutions with a focus on exceptional user interfaces using React Native, Java, and Kotlin.",
    webDevTechStack,
  };

  const hire = "Mobile App Development";

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

export default MobileAppDevelopment;
