import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import angularImg from "./Assets/angularImg.webp";

// Back Image
import angularbackImg from "./Assets/angularBack.png";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./AngularTech";

const Angular = () => {
  const firstContainer = {
    heading: "Angular Development",
    para: "Web Duality, a leading Angular development company in India, delivers efficient and cost-effective services globally. Our skilled team excels in building cutting-edge web applications using the latest Angular framework, ensuring customized solutions for seamless user experiences.",
    backimg: angularbackImg,
  };

  const secondContainer = {
    heading: "<strong>Angular Development</strong> with WebDuality Technology.",
    para1:
      "Web Duality excels in providing a spectrum of Angular development services, ranging from custom web applications to e-commerce and enterprise solutions. Our developers meticulously follow a comprehensive process, spanning ideation, design, development, testing, and deployment. We prioritize close collaboration with clients, ensuring the delivery of personalized solutions that seamlessly integrate with third-party services, APIs, and databases.",
    para2:
      "Emphasizing efficiency and quality, Web Duality takes pride in its commitment to timely project delivery. Our adept team is dedicated to creating innovative and reliable web solutions, tailored to meet the evolving needs of businesses across various sectors.",
    img: angularImg,
  };

  const thirdContainer = {
    heading: "<strong>Key Attributes</strong> of Angular Development",
    para: "Angular development presents a variety of features that position it as an excellent option for constructing sophisticated and contemporary web applications. Here are some of the primary attributes of Angular development.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Primary Advantages of <strong>Employing Angular</strong> in Web Development",
    para: "Leveraging Angular for web development provides a host of benefits compared to other frameworks. Some of the key merits of utilizing Angular for web development encompass.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>Technology</strong> Stack",
    para: "Angular development utilizes a stack with HTML, CSS, and TypeScript for the frontend, using Angular. On the backend, it employs server-side languages like Node.js or Python, coupled with frameworks like Express or Django, ensuring robust and scalable applications. Optimal stack selection is crucial for performance and scalability.",
    webDevTechStack,
  };

  const hire = "Angular";

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

export default Angular;
