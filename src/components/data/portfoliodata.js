// src/data/portfolioData.js
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact } from 'react-icons/fa';


// Import project images (if you have them)
// import project1Image from '../assets/images/project1.png';

export const personalData = {
  name: "NAGA DURGA NUNNA",
  title: "Full-Stack Development",
  tagline: "Passionate about building intuitive and impactful web solutions.",
  email: "nagadurganunna2304@gmail.com",
  phone: "+91 9515673332", // Optional, consider privacy
  address: "Duddukuru, East Godavari, Andhra Pradesh, India", // Can be more general like "Andhra Pradesh, India"
  // linkedIn: "https://www.linkedin.com/in/your-linkedin-profile/", // IMPORTANT: Update this
  github: " https://github.com/nagg123",       // IMPORTANT: Update this
  resumeLink: "my-portfolio1/public/resume.pdf" // Path relative to public folder or use import
};

export const aboutData = {
  bio: [
    "Hi! I’m Naga Durga Nunna, a creative and detail-oriented Front-End Developer with a strong focus on building responsive, visually appealing, and user-friendly websites using HTML, CSS, Bootstrap, and JavaScript. I'm also exploring React.js to create more dynamic and interactive web applications.",
    "I love turning design ideas into real, functional web pages. Whether it’s building from scratch or improving an existing UI, I enjoy creating clean layouts with consistent styling and smooth responsiveness across devices."
  ],
  interests: ["Exploring new technologies", "Coding personal projects", "Reading tech blogs"],
};

export const projectsData = [
// {
//   id: 1,
//   title: "AppLab",
//   description: "Developed a responsive front-end web interface using HTML and CSS to showcase clean UI design and layout skills. The project demonstrates effective use of styling, layout structuring, and visual hierarchy for improved user experience.",
//   problemStatement: "To design a visually appealing and structured web layout using only HTML and CSS, ensuring responsiveness across devices.",
//   myRole: "Designed and implemented the full front-end structure, including layout, typography, and responsive styling.",
//   technologies: ["HTML5", "CSS3", "GitHub"],
//   challenges: ["Creating a pixel-perfect layout without JavaScript.", "Ensuring mobile responsiveness using only CSS media queries.", "Maintaining clean, semantic HTML structure."],
//   learnings: ["Improved CSS layout and styling skills.", "Gained experience in responsive design techniques.", "Enhanced ability to build UI components with only HTML and CSS."],
//   liveLink: "https://nagg123.github.io/applab/",
//   githubLink: "https://github.com/nagg123/applab.git"
// },
  
  
    {
  "id": "1",
  "title": "Advanced CRUD Application",
  "description": "Crafted a dynamic web app that lets you effortlessly manage products. Add, edit, find, and sort items with ease. It even saves your work in your browser and updates instantly if you have it open in multiple tabs!",
  "problemStatement": "Needed a quick, modern way to keep track of products online without a complex backend, ensuring data is saved and always up-to-date across sessions.",
  "myRole": "I built this app from scratch using React, focusing on a clean design and a smooth user experience for all product management tasks.",
  "technologies": ["React", "JavaScript", "CSS", "HTML", "Browser Storage (localStorage)"],
  "highlights": [
    "Instant product updates across browser tabs.",
    "Easy-to-use forms for adding & editing items.",
    "Quick search and category filtering.",
    "Data automatically saved in your browser."
  ],
  "learnings": [
    "Mastered building interactive web pages with React.",
    "Became skilled in using browser features for a better user experience.",
    "Learned to create clean and intuitive user interfaces."
  ],
  "liveLink": "https://nagg123.github.io/crud/",
  "githubLink": "https://github.com/nagg123/crud.git"
},
  // Add 1-2 more projects if you have them
];

export const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 />, proficiency: "Experienced" },
    { name: "CSS3", icon: <FaCss3Alt />, proficiency: "Experienced" },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare />, proficiency: "Proficient" },
    { name: "Bootstrap", icon: <FaBootstrap />, proficiency: "Proficient" },
    { name: "React", icon: <FaReact />, proficiency: "Familiar" }, // Add if learning
    // { name: "Node.js", icon: <FaNodeJs />, proficiency: "Familiar" },
    // { name: "MongoDB", icon: <SiMongodb />, proficiency: "Familiar" },
  ],
   Backend: [
    "Node.js",
    "Express.js",
    "PHP",
    "XAMPP",
    "MySQL"
  ],
  soft: [
    "Adaptability",
    "Teamwork",
    "Continuous Learning",
    "Problem Solving",
    "Communication"
  ],
  languages: [
    { name: "Telugu", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
  ]
};

export const educationData = [
  {
    degree: "Bachelor of Electrical Engineering",
    institution: "GIET Engineering College (JNTUK), Kakinada",
    period: "2019 – 2023",
    grade: "CGPA: 6.8/10"
  },
];

export const experienceData = [
  // {
  //   title: "Software Developer Intern",
  //   company: "Tech Solutions Inc.",
  //   period: "Jun 2022 - Aug 2022",
  //   responsibilities: [
  //     "Contributed to the development of a new feature for the company's flagship product.",
  //     "Participated in daily stand-ups and sprint planning meetings.",
  //     "Wrote unit tests to ensure code quality."
  //   ]
  // },
  // Add internships if any
];