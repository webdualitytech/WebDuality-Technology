import React from "react";
import "./Careers.css";
import BoxDiv from "../../Components/BoxDiv/BoxDiv";

const JobListing = ({ jobTitle, jobDescription, requirements, applyLink }) => (
  <div className="job-listing">
    <h2>{jobTitle}</h2>
    <p>{jobDescription}</p>
    <h3>Requirements:</h3>
    <ul>
      {requirements.map((requirement, index) => (
        <li key={index}>{requirement}</li>
      ))}
    </ul>
    <div className="apply-button">
      <a href={applyLink} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  </div>
);

const Careers = () => {
  const jobListings = [
    {
      jobTitle: "Software Developer",
      jobDescription:
        "We are looking for a skilled software developer to join our team.",
      requirements: [
        "1+ year Experience with React or Angular",
        "Strong knowledge of JavaScript,node.js or php or .net",
        "Team player.Dynamic Software Developer specializing in JavaScript, React, and Node.js. Proven expertise in full-stack development, RESTful APIs, and database management (e.g., MongoDB, MySQL). Skilled in front-end frameworks (Vue.js) and familiar with back-end technologies (Express.js). Strong problem-solving abilities, collaborative mindset, and experience in agile development methodologies. Continuous learner with a passion for incorporating emerging technologies.",
      ],
      applyLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe-8VG6GzPD0gikz8MKL6OWQOfk2OHdKvkFiPdXrG6kqIZEoA/viewform?usp=sf_link",
    },
    {
      jobTitle: "UX/UI Designer",
      jobDescription:
        "We are seeking a creative and detail-oriented 1+ year UX/UI designer.",
      requirements: [
        "Proficient in design tools like Sketch or Figma",
        "Understanding of user-centered design",
      ],
      applyLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe-8VG6GzPD0gikz8MKL6OWQOfk2OHdKvkFiPdXrG6kqIZEoA/viewform?usp=sf_link",
    },
    {
      jobTitle: "Business Development Executive (BDE)",
      jobDescription:
        "We are seeking a creative and detail-oriented 1+ year Business Development Executive (BDE).",
      requirements: [
        "Results-driven Business Development Executive. Strong in sales, communication, and market research. Skilled in negotiation, CRM, and strategic thinking. Adaptable and tech-savvy. Committed to achieving targets and fostering growth.",
      ],
      applyLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe-8VG6GzPD0gikz8MKL6OWQOfk2OHdKvkFiPdXrG6kqIZEoA/viewform?usp=sf_link",
    },
    // Add more job listings as needed
  ];

  const heading = "Careers";
  const para =
    "Do you want to learn more about Courtney? Our team is looking for people who want to work on interesting international projects, develop and learn new skills, and share what they've learned with others.";

  return (
    <div className="career-main">
      <BoxDiv heading={heading} para={para} />
      <div className="career-page">
        {jobListings.map((job, index) => (
          <JobListing key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
