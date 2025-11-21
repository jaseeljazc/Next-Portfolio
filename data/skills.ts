//    // React Icons - you need to install: npm install react-icons
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiBootstrap,
//   SiTailwindcss,
//   SiGit,
//   SiGithub,
// } from "react-icons/si";
   
//   export const skills = [
//     {
//       name: "HTML5",
//       icon: SiHtml5,
//       color: "#E34F26", // Official HTML5 orange
//       category: "Frontend",
//     },
//     {
//       name: "CSS3",
//       icon: SiCss3,
//       color: "#1572B6", // Official CSS3 blue
//       category: "Frontend",
//     },
//     {
//       name: "JavaScript",
//       icon: SiJavascript,
//       color: "#F7DF1E", // Official JS yellow
//       category: "Programming",
//     },
//     {
//       name: "React.js",
//       icon: SiReact,
//       color: "#61DAFB", // Official React cyan
//       category: "Frontend",
//     },
//     {
//       name: "Node.js",
//       icon: SiNodedotjs,
//       color: "#339933", // Official Node.js green
//       category: "Backend",
//     },
//     {
//       name: "Express.js",
//       icon: SiExpress,
//       color: "#f1eded", // Official Express black
//       category: "Backend",
//     },
//     {
//       name: "MongoDB",
//       icon: SiMongodb,
//       color: "#47A248", // Official MongoDB green
//       category: "Database",
//     },
//     {
//       name: "Bootstrap",
//       icon: SiBootstrap,
//       color: "#7952B3", // Official Bootstrap purple
//       category: "CSS Framework",
//     },
//     {
//       name: "Tailwind CSS",
//       icon: SiTailwindcss,
//       color: "#06B6D4", // Official Tailwind cyan
//       category: "CSS Framework",
//     },
//     {
//       name: "Git",
//       icon: SiGit,
//       color: "#F05032", // Official Git orange-red
//       category: "Version Control",
//     },
//     {
//       name: "GitHub",
//       icon: SiGithub,
//       color: "#f2f1f1", // Official GitHub dark
//       category: "Version Control",
//     },
//   ];


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
  SiCloudinary,
} from "react-icons/si";
import { TbApi, TbLock } from "react-icons/tb";


export const skills = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#f1eded" },
      { name: "REST APIs", icon: TbApi, color: "#FF6C37" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff" },
      { name: "Bcrypt", icon: TbLock, color: "#4A90E2" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongodb, color: "#880000" },
    ],
  },
  {
    title: "Tools & Services",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#f2f1f1" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
];
