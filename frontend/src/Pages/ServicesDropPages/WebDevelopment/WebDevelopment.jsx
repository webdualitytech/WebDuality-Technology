import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import webdevImg from "./Assets/webdevImg.jpg";
// Back Image
import webdevbackImg from "./Assets/webback.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./WebDev";

const WebDevelopment = () => {
  const firstContainer = {
    heading: "Web Development",
    para: "We take pride in being a well-established web development agencyequipped with a team of proficient web developers. Our focus is oncrafting top-notch, customized web solutions that align seamlessly with our clients' unique business goals while staying abreast of the latest industry benchmarks. This commitment ensures enhanced user interaction and satisfaction. Whether it's a sleek single-page website or a comprehensive ecommerce platform, our skilled web developers specialize in creating adapt.",
    backimg: webdevbackImg,
  };

  const secondContainer = {
    heading:
      "Crafting Tailored <strong>Web Development Solutions</strong> to Strengthen Your Online Presence",
    para1:
      "Web Duality pioneers cutting-edge technology for vibrant,adaptable websites. Our diverse team collaborates seamlessly,focusing on optimal practices to simplify technical complexitiesand foster enduring client relationships.",
    para2:
      "As a seasoned web development entity, we elevate startups and enterprises through compelling websites and applications. Our expertise extends to dynamic solutions like PWAs, user-centric apps, and streamlined SPAs.",
    img: webdevImg,
  };

  const thirdContainer = {
    heading:
      "<strong>Tailored Web Development Solutions</strong> for Startups, SMEs, and Large Enterprises.",
    para: "We recognize that every business harbors distinct aspirations for its online presence. Hence, we've formulated comprehensive web development services to address diverse client needs and assist businesses in introducing unique web solutions.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Collaborate with a <strong>Leading Web Development</strong> Agency to Fast-track Your Digital Expansion",
    para: "Web Duality is committed to delivering customized web solutions for diverse industries, including education, healthcare, hospitality, food & beverage, and more. Instead of employing a one-size-fits-all strategy, we meticulously assess individual business goals and craft a personalized development roadmap accordingly.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "<strong>Tools and Frameworks Empowering</strong> Our Dynamic Web Solutions",
    para: "We build dynamic web solutions with a powerful stack: Node.js/Django for servers, React/Angular for interfaces, and MongoDB/MySQL for databases. Our approach includes Docker for containerization, CI/CD for automation, and strong security measures like SSL/TLS and firewalls, ensuring top-notch performance, scalability, and security in modern web applications.",
    webDevTechStack,
  };

  const hire = "Web Development";
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

export default WebDevelopment;
