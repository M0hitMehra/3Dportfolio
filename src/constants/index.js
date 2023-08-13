import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

 
} from "../assets";

import courseBundler from "../assets/courseBundler.png"
import tasking from "../assets/tasking.png"
import store from "../assets/store.png"



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "React.js Developer",
    company_name: "Simmi Foundation",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      `Demonstrated expertise in developing the frontend of
      Simmi Foundation's official website, encompassing
      dynamic pages for both the admin panel and user panel. Utilized a wide range of technologies including React.js, Bootstrap 5, and CSS to ensure a seamless user
      experience`,
      `Spearheaded the design and implementation of the
      frontend for Simmi Foundation's website, leveraging the
      power of React.js and other cutting-edge technologies. Successfully transformed concepts into a visually
      appealing and interactive website, contributing to an
      enhanced user interface`,
      `Engineered an intuitive and user-friendly interface for
      Simmi Foundation's website, elevating the overall user
      experience. Employed innovative design techniques and
      best practices to optimize usability, resulting in improved
      engagement and satisfaction among website visitors`,
    ],
  },
  {
    title: "Web Developer",
    company_name: "Two Waits",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2021 - Dec 2022",
    points: [
      "It' s a four week internship and we have to complete the task.",
      "During this internship I created UI using bootstrap 5 and CSS and different framework.",
      "And we have to build a gym website from a scratch.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce Store",
    description:
      "This is a full stack web app with payment options, Authentication, password Encryption, and separate Admin and user dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: store,
    source_code_link: "https://github.com/M0hitMehra/mernStackE-Store",
  },
  {
    name: "E-learning store",
    description:
      " spearheaded the development of Course Bundler, an e-learning platform API using Express, Node.js, and MongoDB. Focusing on backend development, database management, and authentication, I built a robust and secure system that enables seamless course management, user authentication, and data storage for a dynamic elearning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "chakraUi",
        color: "pink-text-gradient",
      },
    ],
    image: courseBundler,
    source_code_link: "https://github.com/M0hitMehra/courseBundlerFrontend",
  },
  {
    name: "Task App",
    description:
      "This is a comprehensive task management application that provides users with the ability to add, edit, and delete tasks. The app utilizes the react-beautiful-drag-drop library, which enables the incorporation of drag-and-drop functionality within the application.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tasking,
    source_code_link: "https://github.com/M0hitMehra/typeScriptTaskApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
