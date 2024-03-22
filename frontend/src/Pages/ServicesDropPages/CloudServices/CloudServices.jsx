import React from "react";

// Dropdown Pages Main Root Page Component
import DropdownPages from "../../../Components/DropdownPages/DropdownPages";

// Image
import cloudImg from "./Assets/cloudimage.png";

// Back Image
import cloudbackImg from "./Assets/backcloud.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Cloud";

const CloudServices = () => {
  const firstContainer = {
    heading: "Ultimate Hub for Cloud Services",
    para: "In the rapidly evolving digital landscape, the significance of cloud services in the software development sector cannot be overstated. At Web Duality Technologies, we recognize the crucial role that dependable and effective cloud services play in ensuring the success of your business. This is why we provide an extensive array of cloud services meticulously designed to cater to your unique software development requirements.",
    backimg: cloudbackImg,
  };

  const secondContainer = {
    heading:
      "<strong>Revolutionize Web Application</strong> Quality through Cloud Solutions.",
    para1:
      "Enhance your web applications with the power of cloud services—boosting flexibility, scalability, and reliability. Embrace cloud computing's agility for seamless infrastructure scaling, ensuring optimal application performance. Streamline costs and fortify security to focus on delivering exceptional user experiences without compromise.",
    para2:
      "At Web Duality Technologies, we understand each business is unique. Our commitment is to offer specialized guidance in choosing tailored cloud services. Our experts analyze your requirements, providing recommendations to maximize your cloud infrastructure for optimal business benefits.",
    img: cloudImg,
  };

  const thirdContainer = {
    heading: "<strong>Comprehensive Cloud</strong> Solutions",
    para: "Explore our extensive array of cloud services, delivering unparalleled flexibility and scalability. From robust infrastructure to cutting-edge security, our offerings cater to diverse business needs, ensuring seamless and efficient operations in the digital realm.",
    webDevServices,
  };

  const fourthContainer = {
    heading: "<strong>Cloud Services</strong> Platforms",
    para: "Revolutionizing the digital landscape, our cloud service platforms stand as the bedrock of innovation, meticulously engineered to propel businesses to new heights. At the forefront of our commitment to excellence are cutting-edge platforms that seamlessly marry power with simplicity, ensuring a transformative experience for our clients.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "<strong>Ignite Creativity</strong> with Our Extensive Range of Cloud Solutions",
    para: "Web Duality Technologies provides an extensive array of cloud solutions tailored to your business needs. Our offerings encompass Amazon Web Services (AWS), Microsoft Azure, IBM Cloud, and Google Cloud Platform. Rely on our expert team to guide you in selecting the optimal cloud solution based on your specific requirements.",
    webDevTechStack,
  };

  const hire = "Cloud Services";

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

export default CloudServices;
