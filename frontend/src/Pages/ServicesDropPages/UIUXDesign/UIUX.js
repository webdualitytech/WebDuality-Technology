import researchanalysisImg from "./Assets/researchanalysis.webp"
import brandImage from "./Assets/brand.jpg";
import informationImg from "./Assets/information.webp"

import responsivewebImg from "./Assets/responsive.jpg"
import mobileappImg from "./Assets/mobileapp.png"
import graphicImg from "./Assets/graphic.avif"
import dynamicdesigImg from "./Assets/dynamic.png"
import interactiveImg from "./Assets/interactive.png"

import bootstraplogo from "./Assets/bs5logo.avif"
import csslogo from "./Assets/csslogo.webp"
import figmalogo from "./Assets/figmalogo.png"
import tailwindlogo from "./Assets/tailwindlogo.png"
import chakrauilogo from "./Assets/charkauilogo.png"
import adobelogo from "./Assets/adobe.jpg"
import sketchuplogo from "./Assets/sketchup.jpg"
import blenderlogo from "./Assets/blender.jpg"
import sasslogo from "./Assets/sasslogo.png"
import htmllogo from "./Assets/htmllogo.webp"

const webDevServices = [
    {
        name: "Research and Analysis",
        text: "We undertake thorough research and analysis to comprehend your target demographic, market dynamics, and competitors, enabling the formulation of a strategy harmonizing with your business objectives.",
        img: researchanalysisImg
    },

    {
        name: "Branding and Identity",
        text: "We assist in cultivating a robust brand persona that mirrors the core values and mission of your company.",
        img: brandImage
    },
    {
        name: "Structuring Information and Organization",
        text: "We establish a coherent and user-friendly framework for your website or app, guaranteeing a smooth and intuitive user experience.",
        img: informationImg
    },
]

const webDevAgency = [
    {
        name: "Responsive Web Design",
        img: responsivewebImg
    },
    {
        name: "Mobile App Design",
        img: mobileappImg
    },
    {
        name: "Graphic Design",
        img: graphicImg
    },
    {
        name: "Dynamic Design Solutions Hub",
        img: dynamicdesigImg
    },
    {
        name: "Interactive Interface Innovations",
        img: interactiveImg
    },
]

const webDevTechStack = [
    {
        img: bootstraplogo,
        heading: "Bootstrap"

    },
    {
        img: csslogo,
        heading: "CSS"
    },
    {
        img: figmalogo,
        heading: "Figma"
    },
    {
        img: tailwindlogo,
        heading: "Tailwind CSS"
    },
    {
        img: chakrauilogo,
        heading: "Chakra UI"
    },
    {
        img: adobelogo,
        heading: "Adobe Illustrator"
    },
    {
        img: sketchuplogo,
        heading: "SketchUp"
    },
    {
        img: blenderlogo,
        heading: "Blender"
    },
    {
        img: sasslogo,
        heading: "SASS"
    },
    {
        img: htmllogo,
        heading: "HTML"
    },
]


export { webDevServices, webDevAgency, webDevTechStack }