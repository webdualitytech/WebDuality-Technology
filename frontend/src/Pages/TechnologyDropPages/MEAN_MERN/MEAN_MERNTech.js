import singlepageappImg from "./Assets/singlepageapplicationImg.jpeg"
import excelmeanmernImg from "./Assets/mernmeanexcellenceIMg.png"
import meanmernappdevImg from "./Assets/mernmeanmobileImg.jpg"
import meanmerncloudImg from "./Assets/mernmeancloudImg.webp"

import largerdevcommunityImg from "./Assets/largerdevcommunityImg.jpg"
import costeffectiveImg from "./Assets/costeffectiveImg.jpg"
import highperformappImg from "./Assets/highperformanceappImg.avif"
import consistenttechstackImg from "./Assets/consistenttechstackImg.jpg"

import mongodblogo from "./Assets/mongodblogo.png"
import expresslogo from "./Assets/expressjslogo.png"
import reactlogo from "./Assets/reactlogo.jpg"
import angularlogo from "./Assets/angularlogo.png"
import nodelogo from "./Assets/nodejslogo.png"

const webDevServices = [
    {
        name: "Single Page Application Development",
        text: "Harness the capabilities of our MEAN & MERN Stack Development Services to craft dynamic and seamless Single Page Applications (SPAs). Our specialized approach ensures efficient development, utilizing the synergies of MEAN and MERN stacks for robust, scalable, and responsive web applications across various devices.",
        img: singlepageappImg
    },

    {
        name: "Web Duality excels in MEAN & MERN web development",
        text: "Web Duality excels in MEAN & MERN web development, creating feature-rich web applications with seamless integration of Angular or React, Node.js, and MongoDB for high performance and tailored solutions.",
        img: excelmeanmernImg
    },
    {
        name: "MEAN & MERN Mobile App Development",
        text: "Web Duality excels in MEAN & MERN mobile app development, providing comprehensive services from ideation to deployment. Using Angular or React Native for the front-end, Node.js for the back-end, and MongoDB for the database ensures a seamless experience across platforms.",
        img: meanmernappdevImg
    },
    {
        name: "Scalable Cloud Solutions with MEAN & MERN",
        text: "Explore the power of scalable, reliable, and secure cloud hosting environments with our MEAN & MERN cloud-based solutions. Leveraging platforms like Amazon Web Services (AWS) or Microsoft Azure, we optimize performance and cost-effectiveness for your applications in the cloud.",
        img: meanmerncloudImg
    }
]

const webDevAgency = [
    {
        name: "Large Developer Community",
        img: largerdevcommunityImg
    },
    {
        name: "Cost-effective",
        img: costeffectiveImg
    },
    {
        name: "High-performance Applications",
        img: highperformappImg
    },
    {
        name: "Consistent Technology Stack",
        img: consistenttechstackImg
    }
]

const webDevTechStack = [
    {
        img: mongodblogo,
        heading: "MongoDB"
    },
    {
        img: expresslogo,
        heading: "Express"
    },
    {
        img: reactlogo,
        link: "/react",
        heading: "React"
    },
    {
        img: angularlogo,
        link: "/angular",
        heading: "Angular"
    },
    {
        img: nodelogo,
        link: "/node",
        heading: "Node.js"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }