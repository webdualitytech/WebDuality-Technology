import iosImg from "./Assets/iosImg.jpg"
import androidImg from "./Assets/androidImg.jpg"
import crossplatformappImg from "./Assets/crossplatformImg.webp"

import medicalsectorImg from "./Assets/medicalImg.cms"
import travelImg from "./Assets/travelImg.jpg"
import educationImg from "./Assets/educationImg.jpg"
import fintechImg from "./Assets/fintechImg.jpg"
import fitnessImg from "./Assets/fitnessImg.jpg"
import bankingImg from "./Assets/bankingImg.jpg"
import mediaImg from "./Assets/mediaImg.jpg"
import ecommerceImg from "./Assets/ecommerceImg.jpg"

import javalogo from "./Assets/javalogo.png"
import kotlinlogo from "./Assets/kotlinlogo.jpg"
import cpplogo from "./Assets/cpplogo.png"
import swiftlogo from "./Assets/swiftlogo.png"
import flutterlogo from "./Assets/flutterlogo.jpg"
import dartlogo from "./Assets/dartlogo.jpg"
import reactnativelogo from "./Assets/reactnativelogo.jpg"

const webDevServices = [
    {
        name: "IOS App Development",
        text: "Forge connections with your audience through our expertly crafted native iOS apps. Leveraging technologies like C# and Swift, our developers ensure scalable solutions that seamlessly integrate with iPhone sensors for unparalleled functionality.",
        img: iosImg
    },

    {
        name: "Android App Development",
        text: "Unleash business expansion by delivering full-scale mobile solutions for Android users. Our expert developers, proficient in Java, Kotlin, C++, construct high-performance Android apps, ensuring a seamless user experience across diverse devices and establishing a strong brand presence in the expansive smartphone market.",
        img: androidImg
    },
    {
        name: "Cross-Platform App Development",
        text: "Tap into diverse markets efficiently with cost-effective cross-platform mobile solutions. Leveraging technologies like React Native, Flutter, and Dart, our team creates feature-packed apps for industries like healthcare, education, and hospitality.",
        img: crossplatformappImg
    },
]

const webDevAgency = [
    {
        name: "Medical Sector",
        img: medicalsectorImg
    },
    {
        name: "Travel & Tourism",
        img: travelImg
    },
    {
        name: "Education",
        img: educationImg
    },
    {
        name: "Fintech",
        img: fintechImg
    },
    {
        name: "Fitness",
        img: fitnessImg
    },
    {
        name: "Banking",
        img: bankingImg
    },
    {
        name: "Media",
        img: mediaImg
    },
    {
        name: "Ecommerce",
        img: ecommerceImg
    },
]

const webDevTechStack = [
    {
        img: javalogo,
        heading: "JAVA"

    },
    {
        img: kotlinlogo,
        heading: "Koltin"
    },
    {
        img: cpplogo,
        heading: "C++"
    },
    {
        img: swiftlogo,
        heading: "Swift"
    },
    {
        img: flutterlogo,
        heading: "Flutter"
    },
    {
        img: dartlogo,
        heading: "Dart"
    },
    {
        img: reactnativelogo,
        heading: "React Native"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }