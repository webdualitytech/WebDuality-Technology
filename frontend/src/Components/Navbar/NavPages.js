const navServicesPages = [
    {
        name: "Web Development",
        link: "web-development"
    },
    {
        name: "UI UX Design",
        link: "uiux-design"
    },
    {
        name: "Cloud Services",
        link: "cloud-services"
    },
    {
        name: "PWA Development",
        link: "pwa-development"
    },
    {
        name: "Mobile App Development",
        link: "mobile-app-development"
    },
    {
        name: "Product Development",
        link: "product-development"
    },
    {
        name: "Software Testing",
        link: "software-testing"
    },
    {
        name: "Web API",
        link: "web-api"
    },
    {
        name: "Databases",
        link: "databases"
    },
    {
        name: "Reporting",
        link: "reporting"
    },
]

const navTechnologyPages = [
    {
        name: ".Net",
        link: "dot-net"
    },
    {
        name: "Blazor",
        link: "blazor"
    },
    {
        name: "C#",
        link: "c-sharp"
    },
    {
        name: "Angular",
        link: "angular"
    },
    {
        name: "React JS",
        link: "react"
    },
    {
        name: "MEAN/MERN",
        link: "mern"
    },
    {
        name: "TypeScript",
        link: "typescript"
    },
    {
        name: "Vue JS",
        link: "vue"
    },
    {
        name: "Node JS",
        link: "node"
    },
]

const navLink = [
    {
        label: "How to start",
        link: "start",
    },
    {
        label: "Services",
        link: "services",
        subMenu: navServicesPages
    },
    {
        label: "Technologies",
        link: "technologies",
        subMenu: navTechnologyPages
    },
    {
        label: "Careers",
        link: "careers",
    },
    {
        label: "Contact Us",
        link: "contact",
    },
]

export { navLink }