import databindImg from "./Assets/databindImg.jpg"
import dependencyinjectImg from "./Assets/dependencyinjectionImg.jpg"
import navigatesystemImg from "./Assets/navigatesystemImg.jpg"
import dynamicformImg from "./Assets/dynamicformImg.jpg"
import platformdevelopmentImg from "./Assets/platformdevelopmentImg.jpg"
import structuredarchitectureImg from "./Assets/structuredarchitectureImg.jpg"

import accelarateddeImg from "./Assets/accelareteddevImg.avif"
import codequalityImg from "./Assets/codequalityImg.webp"
import userexpImg from "./Assets/userexpImg.jpeg"
import scalabilityImg from "./Assets/scalabilityImg.jpg"

import angularlogo from "./Assets/angularlogo.png"
import typescriptlogo from "./Assets/typescriptlogo.png"
import nodejslogo from "./Assets/nodejslogo.png"
import mongodblogo from "./Assets/mongodblogo.png"
import awslogo from "./Assets/awslogo.jpg"

const webDevServices = [
    {
        name: "Bidirectional Data Binding",
        text: "Angular provides bidirectional data binding, ensuring that modifications to the model instantly propagate to the view, and conversely.",
        img: databindImg
    },

    {
        name: "Dependency Injection Mechanism",
        text: "Angular employs a dependency injection mechanism, a design pattern facilitating the streamlined management of dependencies among various components within a web application.",
        img: dependencyinjectImg
    },
    {
        name: "Navigation System",
        text: "Angular features an integrated navigation system that empowers developers to establish routes for diverse components within a web application.",
        img: navigatesystemImg
    },
    {
        name: "Dynamic Form Creation",
        text: "Angular provides dynamic form creation through its reactive forms feature, allowing developers to effortlessly build intricate forms.",
        img: dynamicformImg
    },
    {
        name: "Platform-Agnostic Development",
        text: "Angular empowers developers to create web applications that seamlessly operate across diverse platforms and devices.",
        img: platformdevelopmentImg
    },
    {
        name: "Structured Architecture Approach",
        text: "Angular adheres to a structured architecture approach, specifically the Model-View-Controller (MVC) design, effectively segregating the presentation, data, and logic layers within an application.",
        img: structuredarchitectureImg
    },
]

const webDevAgency = [
    {
        name: "Accelerated Development",
        img: accelarateddeImg
    },
    {
        name: "Improved Code Quality",
        img: codequalityImg
    },
    {
        name: "Elevated User Experience",
        img: userexpImg
    },
    {
        name: "Scalability",
        img: scalabilityImg
    }
]

const webDevTechStack = [
    {
        img: angularlogo,
        link: "/angular",
        heading: "Angular"

    },
    {
        img: typescriptlogo,
        link: "/typescript",
        heading: "Typescript"
    },
    {
        img: nodejslogo,
        link: "/node",
        heading: "Node JS"
    },
    {
        img: awslogo,
        heading: "AWS"
    },
    {
        img: mongodblogo,
        heading: "MongoDB"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }