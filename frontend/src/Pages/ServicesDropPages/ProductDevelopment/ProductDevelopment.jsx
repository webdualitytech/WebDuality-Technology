import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import productImg from "./Assets/productImg.jpg";

// Back Image
import productbackImg from "./Assets/productbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Product";

const ProductDevelopment = () => {
  const firstContainer = {
    heading: "Product Development Services",
    para: "Web Duality Technologies is a professional product development company specializing in innovative digital solutions to streamline business operations in the digital era. Our app development services cater to various industries with a personalized approach, enabling companies to accelerate growth through unique software solutions. We design our digital solutions with a vision to help organizations achieve both short-term and long-term business objectives.",
    backimg: productbackImg,
  };

  const secondContainer = {
    heading:
      "Strategic Product Development Solutions for <strong>Diverse Industries</strong>",
    para1:
      "In the dynamic digital landscape, mobile applications play a pivotal role for businesses of all scales. Embracing the necessity of mobile app development, Web Duality leads the way in tailoring comprehensive solutions for Android and iOS platforms. Our dedication is unwavering as we guide businesses through impactful digital transformation journeys, crafting full-scale mobile apps that elevate brand visibility and deepen customer engagement.",
    para2:
      "Explore the possibilities with our product development expertise, ensuring your mobile presence aligns seamlessly with your industry needs. From startups to enterprises, we commit to delivering tailored solutions that amplify your brand's digital footprint and connection with potential customers.",
    img: productImg,
  };

  const thirdContainer = {
    heading:
      "Customized <strong>Digital Solutions</strong> to Align with Your Business Goals",
    para: "As a prominent product development company, we acknowledge the unique operational objectives of each organization. Offering personalized product development services at Web Duality, we eschew a one-size-fits-all approach. Through meticulous market research, we construct distinctive digital solutions tailored to your brand's specific needs.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Seamless Digital Transition for <strong>Enhanced Productivity</strong>",
    para: "In today's digital age, our product development team guides businesses through effective strategy development, ensuring a smooth transition to the digital realm. Share your requirements, and let us craft custom software solutions tailored to your needs",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>Optimizing Efficiency</strong> in KeyRise Software",
    para: "The performance and user experience of digital products heavily rely on their features. In India, our product developers prioritize user-centric features and advanced APIs to guarantee optimal performance in your software.",
    webDevTechStack,
  };

  const hire = "Product Development";

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

export default ProductDevelopment;
