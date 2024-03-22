import databaseintegrationImg from "./Assets/databaseintegrationImg.avif"
import databasemigrationImg from "./Assets/databasemigrationImg.jpg"
import databasemaintananceImg from "./Assets/databasemaintananceImg.avif"
import databasemonitoringImg from "./Assets/databasemonitoringImg.jpg"
import dataanalyticsImg from "./Assets/dataanalyticsImg.jpg"

import datastorageImg from "./Assets/datastorageImg.jpg"
import dataretrievalImg from "./Assets/dataretrive.webp"
import datamanagementImg from "./Assets/datamanagementImg.jpg"
import datasecurityImg from "./Assets/datasecurityImg.jpg"

import mysqllogo from "./Assets/mysqllogo.png"
import postgrsqllogo from "./Assets/postgresqllogo.png"
import mssqllogo from "./Assets/mssqllogo.jpg"
import mongodblogo from "./Assets/mongodblogo.png"
import azurecosmosdblogo from "./Assets/azurecosmosdblogo.jpg"
import googlefirebaselogo from "./Assets/googlefirebaseImg.png"

const webDevServices = [
    {
        name: "Database Integration",
        text: "We possess proficiency in seamlessly integrating multiple databases to optimize business processes and minimize unforeseen data redundancy. This entails linking diverse systems and applications to establish a unified, cohesive perspective of data throughout the organization.",
        img: databaseintegrationImg
    },

    {
        name: "Efficient Database Migration",
        text: "We specialize in transferring data between databases with a focus on maintaining integrity, accuracy, and completeness. Whether upgrading from legacy systems or transitioning to cloud-based databases, our team ensures a secure and streamlined migration process.",
        img: databasemigrationImg
    },
    {
        name: "Database Maintenance and Support",
        text: "Web Duality extends comprehensive ongoing maintenance and support services, ensuring sustained optimization and efficient performance of your database. This encompasses regular tasks such as database backups, security patching, and performance tuning.",
        img: databasemaintananceImg
    },
    {
        name: "Database Monitoring & Management",
        text: "We provide continuous oversight to ensure your app's backend runs smoothly. Our services include monitoring performance, resolving issues, and managing resources for optimal functionality.",
        img: databasemonitoringImg
    },
    {
        name: "Data Analytics and Reporting",
        text: "Our expertise extends to data analytics and reporting services, enabling clients to derive valuable insights from their data. This encompasses the creation of customized reports and dashboards, along with the implementation of advanced data analysis tools such as data mining and predictive analytics.",
        img: dataanalyticsImg
    },
]

const webDevAgency = [
    {
        name: "Data Storage",
        img: datastorageImg
    },
    {
        name: "Data Retrieval",
        img: dataretrievalImg
    },
    {
        name: "Data Management",
        img: datamanagementImg
    },
    {
        name: "Data Security",
        img: datasecurityImg
    }

]

const webDevTechStack = [
    {
        img: mysqllogo,
        heading: "MySQL"

    },
    {
        img: postgrsqllogo,
        heading: "PostgreSQL"
    },
    {
        img: mssqllogo,
        heading: "MS SQL"
    },
    {
        img: mongodblogo,
        heading: "MongoDB"
    },
    {
        img: azurecosmosdblogo,
        heading: "Azure CosmosDB"
    },
    {
        img: googlefirebaselogo,
        heading: "Google Firebase"
    }
]


export { webDevServices, webDevAgency, webDevTechStack }