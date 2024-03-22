import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import vuejsImg from "./Assets/vuejsImg.png";

// Back Image
import vuejsbackImg from "./Assets/vuejsbakcImg.png";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./VueTech";

const Vue = () => {
  const firstContainer = {
    heading: "Vue.js Development",
    para: "Web Duality, a premier Vue.js Development Company, delivers high-performance and interactive web applications. Leveraging the robust Vue.js framework, our services empower businesses to create scalable and efficient digital solutions with a focus on dynamic user interfaces.",
    backimg: vuejsbackImg,
  };

  const secondContainer = {
    heading:
      "Our Go-To Hub for Varied <strong>Vue.js Development</strong> Services",
    para1:
      "Web Duality Technologies recognizes Vue.js as a leading framework, extensively utilized for creating dynamic, user-centric, and high-performance web applications aligned with diverse business goals. With a comprehensive range of Vue.js development services and a tailored development approach, we empower businesses to launch into the digital sphere with feature-rich and fully functional web applications, streamlining complex business processes.",
    para2:
      "Our skilled team excels in crafting scalable web applications using Vue.js, catering to diverse industries. Employing cutting-edge Vue.js technologies, including the latest versions and plugins, we guide businesses through the realms of digital transformation in today's tech-driven landscape.",
    img: vuejsImg,
  };

  const thirdContainer = {
    heading:
      "Empower Your Business with <strong> Vue.js </strong> Development Services",
    para: "Utilize Vue.js, an open-source JavaScript framework, for high-performance web applications. Our Vue.js Development Services ensure scalability and seamless user experiences. Services include.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "<strong> Vue.js </strong> Development Services Tailored for Your Business",
    para: "Explore our Vue.js development solutions, catering to diverse business sizes – from startups to enterprises. Our seasoned Vue.js developers excel in crafting scalable and resilient web applications within the Vue.js framework. Our proficiency spans across various domains, including.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>Technologies</strong> We Use",
    para: "At Web Duality, we harness cutting-edge technologies for top-notch Vue.js development services. Our toolkit comprises.",
    webDevTechStack,
  };

  const hire = "Vue.js";

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

export default Vue;
