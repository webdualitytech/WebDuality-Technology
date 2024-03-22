import strategicImg from "./Assets/strategicguidImg.jpg"
import transitionImg from "./Assets/transitionImg.jpg"
import cloudsurveillanceImg from "./Assets/survillenceImg.jpg"
import cloudanalyticsImg from "./Assets/cloudanalyticsImg.jpg"
import cloudhostingImg from "./Assets/cloudhostingImg.jpg"
import cloudsecurityImg from "./Assets/cloudsecurityImg.jpg"

import kubernetesImg from "./Assets/kubernetesImg.webp"
import architectureImg from "./Assets/architectureImg.jpg"
import serverlessImg from "./Assets/serverlessImg.jpg"
import aimlcloudImg from "./Assets/aicloudImg.jpg"
import awscloudImg from "./Assets/awslamdaImg.png"
import ibmcloudImg from "./Assets/ibmcloudImg.webp"
import googlecloudImg from "./Assets/googlecloudImg.png"

import awslogo from "./Assets/awslogo.jpg"
import azurelogo from "./Assets/azurelogo.png"
import googlecloudlogo from "./Assets/googlecloudlogo.png"
import ibmcloudlogo from "./Assets/ibmcloudlogo.png"

const webDevServices = [
    {
        name: "Strategic Guidance",
        text: "Benefit from our adept cloud advisory services, designed to assist in selecting the optimal cloud solution for your business. Our proficient team analyzes your needs, offering a strategic roadmap for a seamless transition to the cloud.",
        img: strategicImg
    },

    {
        name: "Transition Services",
        text: "When considering migrating your current software applications to the cloud, rely on our expertise in cloud migration services. Our team of cloud specialists ensures a smooth transition, minimizing disruptions to your business operations during the migration process.",
        img: transitionImg
    },
    {
        name: "Continuous Surveillance",
        text: "Benefit from our around-the-clock cloud monitoring and support services, guaranteeing the seamless functioning of your cloud-based software applications. Our vigilant cloud experts proactively identify and resolve potential issues before they impact your operations.",
        img: cloudsurveillanceImg
    },
    {
        name: "Insightful Analytics",
        text: "Harness the power of data analytics, a vital aspect of effective business operations. Our cloud data analytics services empower you with valuable insights for informed decision-making. Explore a diverse array of services, encompassing data warehousing, data mining, and predictive analytics.",
        img: cloudanalyticsImg
    },
    {
        name: "Reliable Hosting",
        text: "Rely on our continuous 24/7 cloud monitoring and support services to guarantee the seamless functioning of your cloud-hosted software applications. Our proactive cloud experts monitor applications, identifying and resolving potential issues before they impact your operations.",
        img: cloudhostingImg
    },
    {
        name: "Cloud Security",
        text: "Elevate your data protection with our robust cloud security solutions. We implement cutting-edge measures to safeguard your cloud infrastructure, ensuring confidential information remains secure from potential threats, and enabling worry-free digital operations.",
        img: cloudsecurityImg
    },
]

const webDevAgency = [
    {
        name: "Containerization and Kubernetes",
        img: kubernetesImg
    },
    {
        name: "Microservices Architecture",
        img: architectureImg
    },
    {
        name: "Serverless Computing",
        img: serverlessImg
    },
    {
        name: "AI/ML and Big Data Services",
        img: aimlcloudImg
    },
    {
        name: "AWS Lambda",
        img: awscloudImg
    },
    {
        name: "IBM Cloud",
        img: ibmcloudImg
    },
    {
        name: "Google Cloud",
        img: googlecloudImg
    },
]

const webDevTechStack = [
    {
        img: awslogo,
        heading: "Amazon Web Services"

    },
    {
        img: azurelogo,
        heading: "Azure"
    },
    {
        img: googlecloudlogo,
        heading: "Google Cloud Platform"
    },
    {
        img: ibmcloudlogo,
        heading: "IBM Cloud"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }