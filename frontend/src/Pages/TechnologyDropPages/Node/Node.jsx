import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import nodejsImg from "./Assets/nodejsImg.webp";

// Back Image
import nodejsbackImg from "./Assets/nodejsbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./NodeTech";

const Node = () => {
  const firstContainer = {
    heading: "NodeJS Development",
    para: "As a dedicated Node.js development partner, we specialize in creating high-performance web solutions, encompassing PWAs, intricate web applications, chatbots, and more, tailored to meet our clients' unique business needs. Our adept developers harness the power of Node.js to facilitate the deployment of serverless cloud-based web solutions, ensuring a cutting-edge user experience.",
    backimg: nodejsbackImg,
  };

  const secondContainer = {
    heading:
      "Embark on Digital Evolution Through Tailored <strong> NodeJS </strong> Development Solutions",
    para1:
      "In the tech-driven business world, organizations seek digital solutions that handle vast real-time data efficiently. Node.js, with its event-driven data models, is a key technology for constructing robust multi-user architectures in modern web solutions.",
    para2:
      "At Web Duality, we provide expert Node.js development services to empower businesses, from startups to enterprises. Our skilled Node.js developers harness the runtime environment to create scalable web applications aligned with clients' objectives. We specialize in Node.js application migration, ensuring clients' existing applications stay competitive with the latest features and functionalities.",
    img: nodejsImg,
  };

  const thirdContainer = {
    heading:
      "Personalized <strong> NodeJS Development </strong> Services for Startups, Small Businesses, and Large Enterprises",
    para: "As a leading force in NodeJS web development, we lead the way in delivering top-notch NodeJS development services spanning various industries. Our services are customized to assist businesses in elevating and expanding their operations for optimal productivity. Here's a brief overview of our NodeJS development services.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Innovate, Develop, and Expand Your Web Presence with <strong> NodeJS </strong> Development",
    para: "As a comprehensive NodeJS development company, we offer end-to-end solutions for creating dynamic, data-intensive, and scalable web applications to optimize business processes. Explore the inherent advantages of NodeJS as a web development platform.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Customizing <strong>NodeJS </strong> Solutions Across Industries",
    para: "As a reputable Node.js development company, Web Duality excels in providing bespoke Node.js web and mobile development solutions crafted to meet your business requirements. Our team of Node.js developers has partnered with startups and established enterprises across diverse industries, ensuring tailored solutions.",
    webDevTechStack,
  };

  const hire = "NodeJS";

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

export default Node;
