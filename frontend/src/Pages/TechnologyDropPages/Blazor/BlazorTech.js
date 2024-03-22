import databindblazorImg from "./Assets/databindblazorImg.jpg"
import blazordebugImg from "./Assets/blazordebugImg.png"
import dependecyinjecblazorImg from "./Assets/dependecyinjectImg.png"
import formvalidImg from "./Assets/dotmsvalidblazorImg.png"
import statefullblazorImg from "./Assets/statefulblazorImg.png"
import blazorjsImg from "./Assets/blazorjsImg.png"

import blazordevImg from "./Assets/blazordevImg.png"
import pwaImg from "./Assets/pwaImg.png"
import jsmigrateImg from "./Assets/jsmigrateImg.png"

import webfusionlogo from "./Assets/wefusionlogo.jpg"
import codevortexlogo from "./Assets/codevorteslogo.jpeg"
import webcraftlogo from "./Assets/webcrafter360logo.avif"

const webDevServices = [
    {
        name: "Harnessing the Power of Data Binding in Blazor",
        text: "Web Duality optimizes Blazor's Data Binding, supporting HTML bind attributes for seamless DOM and component binding. With versatile techniques like one-way, two-way, and event data binding, it ensures an efficient development experience.",
        img: databindblazorImg
    },
    {
        name: "Debugging Capabilities in Blazor",
        text: "In Blazor, Web Duality enhances debugging support by seamlessly integrating it with Web Assembly applications and incorporating Browse Dev tools across various Chromium browsers.",
        img: blazordebugImg
    },
    {
        name: "Dependency Injection in Blazor",
        text: "Web Duality enhances development in Blazor by offering dependency injection for both Web Assembly and server applications. This unique feature empowers developers to create loosely coupled user interfaces, promoting enhanced reusability and testing capabilities.",
        img: dependecyinjecblazorImg
    },
    {
        name: "Simplifying Forms and Validation in Blazor",
        text: "Web Duality streamlines Blazor form validation with built-in DataAnnotationsValidator support. Developers effortlessly optimize validation using annotations, enhancing the entire process for greater convenience.",
        img: formvalidImg
    },
    {
        name: "Stateful Development with Blazor",
        text: "Blazor's advantage in web app development lies in its ability to create stateful applications, allowing seamless preservation of the end-user's current state in the server's memory.",
        img: statefullblazorImg
    },
    {
        name: "Javascript Interoperability in Blazor",
        text: "Blazor offers Javascript interoperability, granting developers the freedom to call diverse JavaScript functions and libraries using .NET. With this feature, developers can trigger the Bootstrap Javascript runtime by invoking these Javascript functions.",
        img: blazorjsImg
    },
]

const webDevAgency = [
    {
        name: "Blazor Development",
        img: blazordevImg
    },
    {
        name: "Progressive Applications",
        img: pwaImg
    },
    {
        name: "JavaScript Migration",
        img: jsmigrateImg
    }
]

const webDevTechStack = [
    {
        img: webfusionlogo,
        heading: "WebFusion"
    },
    {
        img: codevortexlogo,
        heading: "CodeVortex"
    },
    {
        img: webcraftlogo,
        heading: "WebCrafter360"
    }
]



export { webDevServices, webDevAgency, webDevTechStack }