import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import softwareImg from "./Assets/softwareImg.png";

// Back Image
import softwarebackImg from "./Assets/softwarebackmg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Software";

const SoftwareTesting = () => {
  const firstContainer = {
    heading: "Quality Assurance and Software Testing",
    para: "Web Duality is a leading software testing company in India, committed to delivering outstanding quality assurance services. Our team comprises proficient QA and software testing professionals equipped with the latest tools and methodologies. We ensure the delivery of efficient and reliable software testing services, prioritizing exceptional quality for our clients.",
    backimg: softwarebackImg,
  };

  const secondContainer = {
    heading:
      "Strategic <strong>Software Testing Solutions</strong> for Diverse Industries",
    para1:
      "In today's digital landscape, robust software testing is crucial for ensuring optimal performance. At Web Duality, we lead the way in providing comprehensive software testing solutions tailored for various industries. Understanding the pivotal role of testing in the digital realm, we offer strategic testing services to optimize software functionality, performance, and security.",
    para2:
      "Our experienced team employs industry-leading tools and methodologies to conduct thorough software testing, identifying and resolving potential issues. From functional testing to non-functional testing, we cover all aspects to ensure your software meets the highest quality standards. Partner with us to fortify your digital assets and achieve a seamless user experience for your customers.",
    img: softwareImg,
  };

  const thirdContainer = {
    heading:
      "Excellence in <strong>Software Testing Services</strong> for Quality Assurance",
    para: "At Web Duality, we excel in providing comprehensive software testing services, prioritizing quality throughout the development lifecycle. Leveraging years of industry experience, our adept team covers manual and automation testing, performance testing, mobile app testing, and more. Using a variety of tools and technologies, we ensure your software is bug-free, stable, and scalable for a flawless user experience.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "Classification of <strong>Software Testing Categories</strong>",
    para: "Software testing can be categorized broadly into two groups: functional testing and non-functional testing. Each category is characterized by distinct objectives, methodologies, and techniques. Here is an overview of both classifications.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Cutting-edge <strong>Tools and Technologies</strong> for QA",
    para: "In our QA processes, the team utilizes a diverse set of tools and technologies to conduct thorough testing, ensuring your software meets the desired quality standards. Here are some of the tools and technologies we leverage.",
    webDevTechStack,
  };

  const hire = "Software Testing";

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

export default SoftwareTesting;
