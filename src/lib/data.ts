export const EducationHistory = [
  {
    yearsActive: "September 2021 — Present",
    university: "Indonesia University of Education",
    program: "Education of System and Information Technology",
    description:
      "Over the final two years of my college experience, I actively participated in diverse student organization initiatives, enhancing my knowledge and skills. As the vice-chairperson of student organization, I spearheaded numerous project endeavors, and I consistently delivered successful outcomes on various final projects.",
  },

  {
    yearsActive: "February 2024 — Present",
    university: "Bangkit Academy led by Google, GoTo, and Traveloka",
    program: "Cloud Computing",
    description:
      "Throughout this program, I delved into learning about cloud computing, encompassing fundamental concepts, architecture, and the application of cloud technology in business solutions. I actively engaged in ILT sessions and capstone projects designed to enhance my technical skills and strategic understanding in this field. Moreover, through Bangkit Academy, I learned about the significance of integrating cloud technology to support digital transformation and innovation across various industry sectors.",
  },

  {
    yearsActive: "June 2018 — June 2021",
    university: "Senior High School of 95, Jakarta",
    program: "Social Science",
    description:
      "During my three years at school, I was active in extracurricular activities and seized opportunities to develop my social skills. Academically, I managed to stay in the top 20% out of 350 students throughout my time in high school and even qualified for university through an invitation-based track (SNMPTN).",
  },
];

import Netflix from "public/img/netflixProject.webp";
import OnlineStore from "public/img/onlineStoreProject.webp";
import Sahate from "public/img/sahateProject.webp";
import SuperConnect from "public/img/superconnectProject.webp";

export const ProjectPortfolio = [
  {
    projectId: "Project01",
    projectName: "Super Connect",
    projectDescription:
      "This Super Connect project is a chatbot created for a final assignment in a Software Engineering course during college. This chatbot was created using the API from Google Gemini. In this chatbot, users can interact with the chatbot like using chatbots in general: for example ChatGPT or Google Gemini (formerly Bard).",
    projectUrl: "https://superconnect.vercel.app/",
    projectImage: SuperConnect,
    techStack: ["Next.js", "TypeScript", "Gemini API", "Tailwind"],
  },
  {
    projectId: "Project02",
    projectName: "Netflix - UI",
    projectDescription:
      "This Netflix clone project focusing on its user interface. It uses Next.js for the frontend and Tailwind for styling to make the site look good and work well on all devices. Even though it doesn't have its own backend, it pulls in content using the TMDB API. With this, users can see movies, shows, and more in a design like Netflix.",
    projectUrl: "https://netflix-clone-with-next.vercel.app/",
    projectImage: Netflix,
    techStack: ["Next.js", "TMDB API", "Tailwind"],
  },

  {
    projectId: "Project03",
    projectName: "Online Store - UI",
    projectDescription:
      "This online store project is entirely focused on frontend development. Utilizing React as the main framework and Tailwind for styling, the website is designed to deliver an optimal user experience across various devices. Even without a dedicated backend, the site efficiently showcases product catalogs, demonstrating smooth navigation and an appealing design for visitors.",
    projectUrl: "https://react-online-store-alpha.vercel.app/",
    projectImage: OnlineStore,
    techStack: ["React", "Tailwind"],
  },
  {
    projectId: "Project04",
    projectName: "Sahate",
    projectDescription:
      "This project is a web that uses HTML, CSS, and JavaScript to introduce the residents of 'Sahate'. By utilizing the GSAP library for animation, this project provides an engaging interactive experience with smooth and dynamic animation elements.",
    projectUrl: "https://sahate.vercel.app",
    projectImage: Sahate,
    techStack: ["HTML", "JavaScript", "GSAP"],
  },
];
