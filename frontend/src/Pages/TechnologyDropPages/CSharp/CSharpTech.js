import accesssimplycsharpImg from "./Assets/accessimplicsharpImg.jpg"
import webdevcsharpImg from "./Assets/wevdebcsharpImg.webp"
import oopscsharpImg from "./Assets/oopscsharpImg.webp"
import crosslatformcsharpImg from "./Assets/crossplatformcsharpImg.webp"

import customsoftImg from "./Assets/customsoftwareImg.jpg"
import clouddevImg from "./Assets/clouddevImg.png"
import mobileappImg from "./Assets/mobileappImg.jpg"
import desktopappImg from "./Assets/desktopappImg.webp"
import windowdevImg from "./Assets/windowsdevImg.png"

import sqlserverlogo from "./Assets/mssqllogo.jpg"
import vscodelogo from "./Assets/visualstudiologo.png"
import dockerlogo from "./Assets/dockerlogo.png"
import dotnetcorelogo from "./Assets/dotnetcorelogo.png"
import entityframeworklogo from "./Assets/entityframeworkImg.png"
import kuberneteslogo from "./Assets/kubertnesslogo.png"
import linqlogo from "./Assets/linqlogo.jpg"

const webDevServices = [
    {
        name: "Accessibility and Simplicity in C# Programming",
        text: "C# stands out as an easily comprehensible and user-friendly programming language, making it an ideal choice for beginners and those new to programming.",
        img: accesssimplycsharpImg
    },

    {
        name: "Web Application Performance with C#",
        text: "C# stands as an optimal choice for web development, providing high performance that is well-suited for constructing complex and high-performance web applications.",
        img: webdevcsharpImg
    },
    {
        name: "Development with Object-Oriented Programming in C#",
        text: "C# is a proficient object-oriented programming language that empowers developers to craft code that is easily maintainable, modifiable, and reusable.",
        img: oopscsharpImg
    },
    {
        name: "Cross-Platform Development with C#",
        text: "C# stands out as a versatile cross-platform programming language, enabling developers to create code that seamlessly runs on multiple platforms, including Windows, Linux, and macOS.",
        img: crosslatformcsharpImg
    }
]

const webDevAgency = [
    {
        name: "Custom Software",
        img: customsoftImg
    },
    {
        name: "Cloud Development",
        img: clouddevImg
    },
    {
        name: "Mobile App",
        img: mobileappImg
    },
    {
        name: "Desktop App",
        img: desktopappImg
    },
    {
        name: "Windows Development",
        img: windowdevImg
    }
]

const webDevTechStack = [
    {
        img: sqlserverlogo,
        heading: "SQL Server"

    },
    {
        img: vscodelogo,
        heading: "Visual Studio"
    },
    {
        img: dockerlogo,
        heading: "Docker"
    },
    {
        img: dotnetcorelogo,
        heading: ".Net Core"
    },
    {
        img: entityframeworklogo,
        heading: "Entity Framework"
    },
    {
        img: kuberneteslogo,
        heading: "Kubernetes"
    },
    {
        img: linqlogo,
        heading: "LINQ"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }