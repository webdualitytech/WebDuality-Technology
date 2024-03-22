import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import tsImg from "./Assets/tsImg.svg";

// Back Image
import typescriptbackImg from "./Assets/typescriptbackImg.png";

// Web Pages
import {
  webDevServices,
  webDevAgency,
  webDevTechStack,
} from "./TypescriptTech";

const Typescript = () => {
  const firstContainer = {
    heading: "Typescript Development",
    para: "In the present era, technology is advancing rapidly, and the software development industry is witnessing heightened competition. Businesses are keen to enhance their operations through innovative software applications, aiming to optimize workflows and gain a competitive edge in the market. This is where a TypeScript Development Company in India, such as Step2gen, plays a pivotal role.",
    backimg: typescriptbackImg,
  };

  const secondContainer = {
    heading:
      "Elevate Your Business with <strong> Cutting-Edge TypeScript Development </strong> Services",
    para1:
      "TypeScript, a superset of JavaScript, enhances the language's capabilities, making it more robust and secure. As an open-source programming language, TypeScript is widely embraced by businesses and developers globally.",
    para2:
      "At Web Duality, we specialize in delivering comprehensive TypeScript Development Services to empower businesses in enhancing their digital presence. Through the utilization of TypeScript, we assist businesses in crafting high-performance web and mobile applications that prioritize security, scalability, and user-friendliness. Our team of experts offers end-to-end TypeScript development services, covering conceptualization, deployment, and ongoing maintenance, ensuring businesses maximize the value of their digital investments.",
    img: tsImg,
  };

  const thirdContainer = {
    heading:
      "Exclusive <strong> Attribute of TypeScript </strong> Web Development",
    para: "In TypeScript web development, the exclusive feature of static typing ensures code reliability, maintainability, and improved software quality for applications.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "<strong> Expert TypeScript </strong> Development Services",
    para: "Explore our diverse range of expert TypeScript Development Services tailored to meet the unique requirements of our clients. Our services encompass:",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "Benefits of <strong> TypeScript </strong> Compared to <strong> JavaScript </strong>",
    para: "Discover why TypeScript surpasses JavaScript with added features, making it a more robust choice for large-scale applications.",
    webDevTechStack,
  };

  const hire = "Typescript";

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

export default Typescript;
