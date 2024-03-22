import vuejswebappdevImg from "./Assets/vuejswebappdevImg.jpg"
import vuejsmobileappdevImg from "./Assets/vuejsmobileappdevImg.jpg"
import vuejsplugindevImg from "./Assets/vuejspluginImg.png"
import vuejscompdevImg from "./Assets/vuejscomponentImg.jpg"

import healthcareImg from "./Assets/medicalImg.cms"
import elearningImg from "./Assets/educationImg.jpg"
import networkingImg from "./Assets/socialmediaImg.jpeg"
import financeImg from "./Assets/financeImg.jpg"
import ecommerceImg from "./Assets/ecommerceImg.jpg"

import vuejslogo from "./Assets/vuejslogo.png"
import vuexlogo from "./Assets/vuexlogo.jpeg"
import vuerouterlogo from "./Assets/vuerouterlogo.jpg"
import vuetifylogo from "./Assets/vuetifylogo.png"

const webDevServices = [
    {
        name: "Vue.js Web Application Development",
        text: "Leverage our Vue.js expertise to build scalable, fast, and easily maintainable web applications. Our skilled developers create robust solutions tailored to your business needs.",
        img: vuejswebappdevImg
    },

    {
        name: "Vue.js Mobile App Development",
        text: "Harness Vue.js for cross-platform mobile applications with our expert development services. Our skilled developers craft user-friendly mobile apps, ensuring broad audience reach and seamless performance.",
        img: vuejsmobileappdevImg
    },
    {
        name: "Vue.js Plugin Development",
        text: "Elevate your application's functionality with our Vue.js plugin development services. Our adept developers create tailored plugins to enhance your web or mobile applications, meeting your specific requirements.",
        img: vuejsplugindevImg
    },
    {
        name: "Vue.js Component Development",
        text: "Optimize your development process with our Vue.js component development services. Our skilled developers create reusable components, ensuring scalability, speed, and easy maintenance across your web or mobile applications.",
        img: vuejscompdevImg
    }
]

const webDevAgency = [
    {
        name: "Healthcare",
        img: healthcareImg
    },
    {
        name: "E-learning",
        img: elearningImg
    },
    {
        name: "Networking",
        img: networkingImg
    },
    {
        name: "Finance",
        img: financeImg
    },
    {
        name: "Ecommerce",
        img: ecommerceImg
    }
]

const webDevTechStack = [
    {
        img: vuejslogo,
        link: "/vue",
        heading: "Vue.js"
    },
    {
        img: vuexlogo,
        heading: "VueX"
    },
    {
        img: vuerouterlogo,
        heading: "Vue Router"
    },
    {
        img: vuetifylogo,
        heading: "Vuetify"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }