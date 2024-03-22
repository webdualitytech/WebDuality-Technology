import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import uiuxImg from "./Assets/uiuxImg.avif";

// Back Image
import uiuxbackImg from "./Assets/uiuxbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./UIUX";

const UIUXDesign = () => {
  const firstContainer = {
    heading: "UI UX Design",
    para: "At Web Duality, we love creating websites and mobile apps that make things easy and enjoyable for you. We believe a great design isn't just about looking good but also about being easy to use. Our team of designers and developers works together to make sure your digital experience is smooth, user-friendly, and something you'll love using.",
    backimg: uiuxbackImg,
  };

  const secondContainer = {
    heading:
      "Elevating Digital Impact with <strong>Custom Web Solutions</strong> for a Strong Online Presence.",
    para1:
      "Web Duality pioneers cutting-edge technology to craft vibrant and adaptable websites with a focus on optimal user experiences. Our diverse team collaborates seamlessly, simplifying technical complexities to elevate UI/UX and foster enduring client relationships.",
    para2:
      "As a leading force in web development, we excel in elevating startups and enterprises through the creation of captivating websites and applications that prioritize an outstanding UI/UX. Our proficiency extends to crafting dynamic solutions.",
    img: uiuxImg,
  };

  const thirdContainer = {
    heading:
      "<strong>Strategic Creativity</strong> in Planning, Design, and Implementation",
    para: "Our Comprehensive Creative Strategy Design and Development offering encompasses a variety of services designed to formulate a digital strategy tailored to your business, ensuring alignment with your overarching goals and objectives.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Elevate your Business with Our <strong>Transformative UI/UX Design</strong> Solutions",
    para: "Empowering businesses to craft exceptional user experiences, our UI/UX Design Services are tailored to enhance customer interactions. Collaborating closely with clients, we deliver personalized design solutions, precisely aligned with their unique needs. Our comprehensive UI/UX Design Services encompass.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "<strong>Elevating UX</strong> with Powerful Tools and Frameworks for Dynamic Web Solutions",
    para: "Crafting dynamic web solutions with a focus on exceptional UI/UX using Bootstrap, Tailwind, and Chakra UI, along with design collaboration in Figma.",
    webDevTechStack,
  };

  const hire = "UI UX Design";

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

export default UIUXDesign;
