import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import csharpImg from "./Assets/csharpImg.png";

// Back Image
import csharpbackImg from "./Assets/csharpbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./CSharpTech";

const CSharp = () => {
  const firstContainer = {
    heading: "C# Development",
    para: "Web Duality, a leading C# development company in India, delivers comprehensive services globally. Our experienced team utilizes cutting-edge technologies to provide innovative, robust, and scalable C# solutions tailored to meet business objectives, consistently exceeding expectations.",
    backimg: csharpbackImg,
  };

  const secondContainer = {
    heading:
      "C# Development Powered by <strong>Web Duality Excellence</strong>",
    para1:
      "Web Duality stands at the forefront of C# development services, offering a diverse range from custom applications to enterprise solutions. Our developers meticulously follow a comprehensive process, spanning ideation, design, development, testing, and deployment. We prioritize close collaboration with clients, ensuring the delivery of personalized solutions that seamlessly integrate with third-party services, APIs, and databases.",
    para2:
      "With a focus on efficiency and quality, Web Duality takes pride in its commitment to timely project delivery. Our adept team is dedicated to creating innovative and reliable C# solutions, tailored to meet the evolving needs of businesses across various sectors.",
    img: csharpImg,
  };

  const thirdContainer = {
    heading: "Unveiling the <strong> Advantages of Choosing C# </strong>",
    para: "C# stands out as a popular and widely-adopted programming language in web development, providing numerous benefits that make it an exceptional choice for building web applications. Some of the advantages of opting for C# in web development include.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "C# Development Services",
    para: "As a premier C# development company based in India, we offer an extensive array of C# development services.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Tools & Technologies We Use For C#",
    para: "We leverage cutting-edge tools like Visual Studio, .NET frameworks, SQL Server, Git, and CI/CD tools for efficient and high-quality C# development.",
    webDevTechStack,
  };

  const hire = "C#";

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

export default CSharp;
