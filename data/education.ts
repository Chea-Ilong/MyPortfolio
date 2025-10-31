/**
 * Education and Achievements Data
 * Contains all education and achievement/certificate information
 */

import type { EducationEvent, Achievement } from "@/types";

export const EDUCATION_EVENTS: EducationEvent[] = [
  {
    year: 2020,
    title: "Started Bachelor's in Software Engineering",
    description: "Enrolled at University of Technology",
    details:
      "Began my journey in software engineering, focusing on programming fundamentals, data structures, and algorithms.",
  },
  {
    year: 2021,
    title: "Web Development Fundamentals Certificate",
    description: "Completed comprehensive web development course on Coursera",
    details:
      "Learned HTML, CSS, JavaScript, and responsive design principles. Created several projects including a personal portfolio and e-commerce prototype.",
  },
  {
    year: 2022,
    title: "Advanced JavaScript Certificate",
    description: "Mastered advanced JavaScript concepts through Udemy",
    details:
      "Studied modern JavaScript features, asynchronous programming, and frameworks like React. Developed a real-time chat application as the final project.",
  },
  {
    year: 2023,
    title: "React Development Certificate",
    description: "Completed freeCodeCamp's React curriculum",
    details:
      "Gained expertise in React, Redux, and related technologies. Built several single-page applications and contributed to open-source projects.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: 2021,
    title: "Web Development Certification",
    description: "Completed comprehensive web development course",
    details:
      "Mastered HTML, CSS, JavaScript, and responsive design principles through an intensive 12-week program.",
    isCertificate: true,
    issuer: "Coursera",
    credentialId: "WD-2021-78945",
    credential: "https://coursera.org/verify/WD-2021-78945",
    date: "May 2021",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    images: ["/porfile.jpg", "/java.jpeg", "/photo_2025-09-17_22-34-55.jpg"],
  },
  {
    year: 2022,
    title: "Advanced JavaScript Certificate",
    description: "Mastered advanced JavaScript concepts",
    details:
      "Completed an intensive course covering modern JavaScript features, asynchronous programming, and frameworks.",
    isCertificate: true,
    issuer: "Udemy",
    credentialId: "JS-ADV-34567",
    credential: "https://udemy.com/certificate/JS-ADV-34567",
    date: "October 2022",
    skills: ["ES6+", "Async/Await", "Promises", "Functional Programming"],
    images: ["/java.jpeg", "/porfile.jpg", "/photo_2025-09-17_22-34-55.jpg"],
  },
  {
    year: 2023,
    title: "React Development Certificate",
    description: "Completed React curriculum with honors",
    details:
      "Built several single-page applications and contributed to open-source projects using React and related technologies.",
    isCertificate: true,
    issuer: "freeCodeCamp",
    credentialId: "REACT-2023-12345",
    credential: "https://freecodecamp.org/certification/REACT-2023-12345",
    date: "December 2023",
    skills: ["React", "Redux", "Hooks", "Context API", "Next.js"],
    images: ["/photo_2025-09-17_22-34-55.jpg", "/porfile.jpg", "/java.jpeg"],
  },
];
