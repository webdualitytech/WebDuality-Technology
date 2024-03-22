import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import blazorImg from "./Assets/blazorImg.jpg";

// Back Image
import blazorbackImg from "./Assets/blazorbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./BlazorTech";

const Blazor = () => {
  const firstContainer = {
    heading: "Blazor Development",
    para: "Web Duality, a leading Blazor development company, crafts dynamic web applications for global businesses using the contemporary Blazor framework. Our team delivers personalized Blazor development services, empowering clients to establish a strong brand identity and engage customers through fully functional web applications.",
    backimg: blazorbackImg,
  };

  const secondContainer = {
    heading:
      "Unveil Feature-Rich <strong> Web Applications Through Our Blazor Development </strong> Services.",
    para1:
      "Web Duality, a prominent Blazor development company based in India, leverages Microsoft's cutting-edge Blazor framework to seamlessly launch dynamic SPAs, PWAs, and traditional web applications. Our skilled developers utilize C#, HTML, and CSS to craft high-performance user interfaces, setting Blazor apart by eliminating the need for Javascript.",
    para2:
      "Beyond development, Web Duality extends a suite of services designed to provide clients with a competitive edge in the market. Our adept developers efficiently write Blazor code, navigating away from the complexities of Javascript and ensuring an optimal user experience across various platforms. Microsoft's substantial investment in Blazor has sparked a significant transition among developers, moving away from traditional Javascript frameworks to embrace this innovative technology in the current web app development landscape.",
    img: blazorImg,
  };

  const thirdContainer = {
    heading:
      "Elevating User Experience with <strong> Powerful Blazor Features </strong>",
    para: "As a Blazor development agency in India, Web Duality integrates all Blazor features into the development of customized Blazor apps, catering to diverse business objectives.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "Tailored <strong> Blazor Development </strong> Solutions",
    para: "Web Duality excels in tailored Blazor development services, addressing diverse business objectives. As the foremost Blazor development company, we specialize in feature-rich PWAs and user-friendly SPAs. Our team analyzes your business requirements to deliver a customized web solution.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "Elevate Your <strong> Web Applications with Blazor Development </strong> Services",
    para: "With a track record of crafting numerous web applications using Blazor, Web Duality confidently asserts its superiority over conventional Javascript frameworks. Opting for Blazor development services from Web Duality offers several advantages over traditional Javascript frameworks.",
    webDevTechStack,
  };

  const hire = "Blazor";

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

export default Blazor;
