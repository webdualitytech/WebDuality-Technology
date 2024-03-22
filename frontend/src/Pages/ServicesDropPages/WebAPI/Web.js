import agiledevImg from "./Assets/agiledevImg.avif"
import dataprotectImg from "./Assets/dataprotectImg.jpg"
import partnershipImg from "./Assets/partnershipImg.jpg"
import flexibleImg from "./Assets/flexiblescaleImg.webp"
import devopsImg from "./Assets/devopsImg.jpg"
import affordableImg from "./Assets/affordableImg.webp"

import performanceImg from "./Assets/performanceImg.jpg"
import securityImg from "./Assets/securityImg.jpg"
import flexibilityImg from "./Assets/flexibilityImg.jpg"
import scalabilityImg from "./Assets/scalabilityImg.jpg"

import gitlogo from "./Assets/gitlogo.png"
import firecamplogo from "./Assets/firecamplogo.svg"
import postmanlogo from "./Assets/postmanlogo.png"
import visualstudiologo from "./Assets/visualstudiologo.png"

const webDevServices = [
    {
        name: "Agile Development Methodology",
        text: "Embracing an agile development methodology, we accelerate project delivery with enhanced efficiency. Our commitment to agility ensures responsiveness to your evolving needs and requirements.",
        img: agiledevImg
    },
    {
        name: "Prioritizing Security",
        text: "Our commitment to security is paramount, and we adhere to industry best practices to safeguard your APIs, preventing unauthorized access and fortifying protection against potential attacks.",
        img: dataprotectImg
    },
    {
        name: "Strategic Client Partnerships",
        text: "At the core of our approach is the belief in fostering robust relationships with our clients. We actively collaborate, ensuring their needs are not just met but surpassed.",
        img: partnershipImg
    },
    {
        name: "Flexible Scaling Options",
        text: "Tailoring our team size to match your project needs, we offer the flexibility to scale up or down. This ensures cost-effectiveness, allowing you to pay only for the resources essential to your requirements.",
        img: flexibleImg
    },
    {
        name: " Development with DevOps",
        text: "Our adoption of DevOps practices ensures the efficient and effective construction, testing, and deployment of ASP.NET Core Web APIs. Employing automated testing, continuous integration and delivery, along with various tools and methodologies, we guarantee the highest quality for your Web APIs.",
        img: devopsImg
    },
    {
        name: "Affordable Excellence with Top-notch Talent",
        text: "Harnessing the skills of top-tier ASP.NET Core developers, our team delivers exceptional services at a competitive cost. Outsourcing your Web API development to us ensures high-quality solutions without breaking the bank.",
        img: affordableImg
    },
]

const webDevAgency = [
    {
        name: "Performance",
        img: performanceImg
    },
    {
        name: "Security",
        img: securityImg
    },
    {
        name: "Flexibility",
        img: flexibilityImg
    },
    {
        name: "Scalability",
        img: scalabilityImg
    },

]

const webDevTechStack = [
    {
        img: gitlogo,
        heading: "Git"

    },
    {
        img: firecamplogo,
        heading: "Firecamp"
    },
    {
        img: postmanlogo,
        heading: "Postman"
    },
    {
        img: visualstudiologo,
        heading: "Visual Studio"
    },

]


export { webDevServices, webDevAgency, webDevTechStack }