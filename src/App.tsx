
// import React, { useState } from "react";
// import { GitHubStats } from "./components/GitHubStats";
// import { LanguageStats } from "./components/LanguageStats";
// import { TypeAnimation } from "react-type-animation";
// import GitHubCalendar from "react-github-calendar";
// import {
//   Menu,
//   X,
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   Download,
//   GraduationCap,
// } from "lucide-react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNode,
//   FaDatabase,
//   FaGitAlt,
//   FaNpm,
// } from "react-icons/fa";
// import {
//   SiRedux,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiPostman,
//   SiNetlify,
//   SiNodedotjs,
//   SiTailwindcss,
// } from "react-icons/si";
// import profile from "../public/image.png";
// import Pharmacy from "../public/Screenshot (439).png";
// import Tech from "../public/Teach_Time_Machine.png";
// import employeeProject from "../public/employeeProject.png";
// import Resume from "../public/SameerUpdatedResume25.pdf.pdf";
// import SchoolAppPhoto from "../public/SchoolManagement.png"
// import bestBuy from "../public/bestBuy.png"

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const stats = {
//     username: "SaimMeEr",
//     stats: {
//       stars: 15,
//       commits: 130,
//       prs: 17,
//       issues: 15,
//       contributions: 3,
//     },
//   };

//   const username = stats.username; // Define username for dynamic filename

//   const languages = [
//     { name: "HTML", percentage: 46.72, color: "#ff6b6b" },
//     { name: "CSS", percentage: 30.25, color: "#845ef7" },
//     { name: "JavaScript", percentage: 23.03, color: "#ffd43b" },
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "MediCare – Prescription & Inventory Management App",
//       description: (
//         <p>
//           Developed a full-featured pharmacy management application using React
//           and Firebase, focusing on prescription handling, medication
//           scheduling, and patient record management. Implemented real-time
//           features to enhance the experience for both pharmacists and patients,
//           ensuring intuitive interaction across the platform. Utilized Firebase
//           Realtime Database for seamless and efficient data handling, while
//           React.js powered the front-end development.
//         </p>
//       ),
//       image: Pharmacy,
//       techStack: [
//         "HTML",
//         "CSS",
//         "JAVASCRIPT",
//         "TYPESCRIPT",
//         "REACT",
//         "TAILWIND",
//         "Firebase",
//       ],
//       liveDemo: "https://v0-swapnilcare-ui-design.vercel.app/",
//       codeLink: "https://github.com/SaimMeEr/Pharmacy-Mangement-Tool",
//     },
//     {
//       id: 2,
//       title: "Employee Productivity Tracker",
//       description: (
//         <p>
//           Led a team in the development of a productivity app for task tracking,
//           time management, and work-life balance monitoring.Implemented AI
//           features for productivity analysis and optimization within the
//           app.Utilized technologies such as React.js, Node.js, and Firebase
//           Realtime Database for frontend, backend, and database
//           functionalities.Delivered project within a tight timeline as part of a
//           hackathon, ensuring seamless task creation, productivity tracking, and
//           real-time notifications.
//           <br />
//           <br />
//         </p>
//       ),
//       image: employeeProject,
//       techStack: [
//         "HTML",
//         "CSS",
//         "JAVASCRIPT",
//         "REACT JS",
//         "FIREBASE",
//         "TAILWIND",
//       ],
//       liveDemo: "https://employeeproductivity123.netlify.app/",
//       codeLink:
//         "https://github.com/anamika782/Employee-Productivity-Tracker-Application",
//     },
//     {
//       id: 3,
//       title: "Tech Time Machine",
//       description: (
//         <p>
//           Tech Time Machine is an interactive project that delves into the
//           evolution of the web from 1990 to 2030, highlighting its
//           transformation across decades. It showcases key milestones, design
//           trends, and technological advancements that have shaped the web as we
//           know it. The project also imagines an exciting vision of how the web
//           might evolve in the future, offering users a glimpse into the
//           possibilities of the next decade.
//         </p>
//       ),
//       image: Tech,
//       techStack: ["HTML", "CSS", "JAVASCRIPT"],
//       liveDemo: "https://techtimemachine.netlify.app/pages/login.html",
//       codeLink: "https://github.com/official-shashank/TechTimeMachine",
//     },
//     {
//       id: 4,
//       title: "School Management App",
//       description: (
//         <p>
//          Developed a full-featured school management application using React and Node.js, focusing on class scheduling, attendance tracking, and student performance management. Implemented real-time features to enhance the experience for both teachers and students, ensuring intuitive interaction across the platform. Utilized MongoDB and Express.js for efficient data handling, while React.js powered the front-end development..
//         </p>
//       ),
//       image: SchoolAppPhoto,
//       techStack: ["React", "Material UI", "Redux","Node.js","Express.js",'MongoDB'],
//       liveDemo: "https://school-management-by-sameer.netlify.app/",
//       codeLink: "https://github.com/SaimMeEr/school-management-app",
//     },
//     {
//       id: 5,
//       title: "Bestbuy Clone",
//       description: (
//         <p>
//         Developed a responsive e-commerce website inspired by Best Buy using HTML, CSS, and JavaScript. Focused on core shopping features like product listings, cart management, and detailed product views. Emphasized user interaction and UI/UX design. Built the project to understand the fundamentals of online retail platforms and front-end development for seamless shopping experiences
//         </p>
//       ),
//       image: bestBuy,
//       techStack: ["HTML", "TailwindCSS",'Css', "JAVASCRIPT"],
//       liveDemo: "https://bestbuyclonesrpp.netlify.app/",
//       codeLink: "https://github.com/rpsinghcodes/best-buy-clone",
//     },
//   ];

//   const handleDownloadResume = (e) => {
//     e.preventDefault();
//     const link = document.createElement("a");
//     link.href = Resume;
//     link.download = `${username || "resume"}.pdf`; // Dynamic filename with fallback
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.open(Resume, "_blank");
//   };

//   return (
//     <div className="bg-[#0a0a0a] text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed w-full bg-[#0a0a0a] z-50 px-4 py-4 border-b border-purple-600">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Sameer Ahmad Mir
//           </h1>
//           <div className="hidden md:flex space-x-6">
//             <a href="#home" className="hover:text-purple-500">
//               Home
//             </a>
//             <a href="#about" className="hover:text-purple-500">
//               About
//             </a>
//             <a href="#skills" className="hover:text-purple-500">
//               Skills
//             </a>
//             <a href="#statistics" className="hover:text-purple-500">
//               Statistics
//             </a>
//             <a href="#projects" className="hover:text-purple-500">
//               Projects
//             </a>
//             <a href="#contact" className="hover:text-purple-500">
//               Contact
//             </a>
//             <a
//               href={Resume}
//               target="_blank"
//               rel="noopener noreferrer"
//               download
//               onClick={handleDownloadResume}
//             >
//               <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
//                 Resume
//               </button>
//             </a>
//           </div>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-purple-600">
//             <div className="flex flex-col space-y-4 p-4">
//               <a href="#home" className="hover:text-purple-500">
//                 Home
//               </a>
//               <a href="#about" className="hover:text-purple-500">
//                 About
//               </a>
//               <a href="#skills" className="hover:text-purple-500">
//                 Skills
//               </a>
//               <a href="#statistics" className="hover:text-purple-500">
//                 Statistics
//               </a>
//               <a href="#projects" className="hover:text-purple-500">
//                 Projects
//               </a>
//               <a href="#contact" className="hover:text-purple-500">
//                 Contact
//               </a>
//               <a
//                 href={Resume}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 download
//                 onClick={handleDownloadResume}
//               >
//                 <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
//                   Resume
//                 </button>
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center pt-20"
//       >
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 text-center md:text-left">
//             <h2 className="text-4xl md:text-6xl font-bold mb-4">
//               Hi, I'm Sameer Ahmad Mir
//             </h2>
//             <div className="text-xl md:text-2xl text-purple-500 mb-6">
//               <TypeAnimation
//                 sequence={[
//                   "Full Stack Developer",
//                   2000,
//                   "MERN Stack Developer",
//                   2000,
//                   "Problem Solver",
//                   2000,
//                 ]}
//                 repeat={Infinity}
//               />
//             </div>
//             <div className="flex space-x-4 justify-center md:justify-start">
//               <a
//                 href="https://github.com/SaimMeEr"
//                 className="p-2 border border-purple-500 rounded-full hover:bg-purple-500 transition-colors"
//                 target="blank"
//               >
//                 <Github />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/saim-meer/"
//                 className="p-2 border border-purple-500 rounded-full hover:bg-purple-500 transition-colors"
//                 target="blank"
//               >
//                 <Linkedin />
//               </a>
//             </div>
//           </div>
//           <div className="md:w-1/2 mt-8 md:mt-0">
//             <div className="w-64 h-64 mx-auto relative">
//               <img
//                 src={profile}
//                 alt="Profile"
//                 className="rounded-full w-full h-full object-cover border-4 border-purple-500"
//               />
//               <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(168,85,247,0.5)]"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-[#0f0f0f]">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <span className="text-purple-500">
//                   <Mail />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Email</h3>
//                   <p>meersameer305@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-purple-500">
//                   <Phone />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Phone</h3>
//                   <p>+91 7006720971</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-purple-500">
//                   <MapPin />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Location</h3>
//                   <p>Panzinara,Srinagar,J&K,India</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-purple-500">
//                   <GraduationCap />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Education</h3>
//                   <p>Bachelor's of Technology (BTech)</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="text-purple-500">
//                   <Download />
//                 </span>
//                 <a
//                   href={Resume}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   download
//                   onClick={handleDownloadResume}
//                 >
//                   <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
//                     Resume
//                   </button>
//                 </a>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <div className="bg-[#1a1a1a] p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4 text-purple-500">
//                   About Me
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   Passionate Full Stack Developer with extensive expertise in
//                   the MERN stack, dedicated to building dynamic, scalable, and
//                   user-centric web applications. Skilled in both front-end and
//                   back-end development, with a strong commitment to writing
//                   clean, efficient code and optimizing performance. Driven by a
//                   love for problem-solving and innovation, I thrive on
//                   delivering seamless functionality and exceptional user
//                   experiences. Continuously learning and staying ahead of the
//                   curve to leverage the latest technologies in impactful ways.
//                 </p>
//               </div>
//               <div className="bg-[#1a1a1a] p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-4 text-purple-500">
//                   Education Details
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-bold">
//                       Bachelor of Technology (BTech)
//                     </h4>
//                     <p className="text-sm text-gray-500">2019-2022</p>
//                     <p className="text-gray-300 mt-2">
//                       Completed an intensive 8-month Web Development course at
//                       Masai School, gaining hands-on experience in HTML, CSS,
//                       JavaScript, React and MongoDB, along with a strong focus
//                       on Data Structures and Algorithms and real-world project
//                       development.{" "}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Skills
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
//               { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
//               { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
//               { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
//               {
//                 icon: <SiMongodb className="text-[#47A248]" />,
//                 name: "MongoDB",
//               },
//               {
//                 icon: <SiExpress className="text-[#ccd4cc]" />,
//                 name: "ExpressJs",
//               },
//               { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
//               { icon: <FaNpm className="text-[#CB3837]" />, name: "NPM" },
//               {
//                 icon: <SiFirebase className="text-[#FFCA28]" />,
//                 name: "Firebase",
//               },
//               {
//                 icon: <SiPostman className="text-[#FF6C37]" />,
//                 name: "Postman",
//               },
//               {
//                 icon: <SiNodedotjs className="text-[#308326]" />,
//                 name: "nodeJs",
//               },
//               {
//                 icon: <SiTailwindcss className="text-[#36b8d2]" />,
//                 name: "Tailwind",
//               },
//             ].map((skill, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center p-6 bg-[#1a1a1a] rounded-lg hover:scale-105 transition-transform"
//               >
//                 <div className="text-5xl mb-4">{skill.icon}</div>
//                 <p className="text-center">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section id="statistics" className="py-20 bg-[#0f0f0f]">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Statistics
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
//             {[
//               { number: "1200+", label: "Hours of Coding" },
//               { number: "200+", label: "DSA Problems" },
//               { number: "88+", label: "Git Commits" },
//               { number: "6+", label: "Projects" },
//               { number: "100+", label: "Hours of Soft Skills" },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-[#1a1a1a] rounded-lg"
//               >
//                 <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <GitHubCalendar
//               username="SaimMeEr"
//               colorScheme="dark"
//               fontSize={16}
//             />
//           </div>
//         </div>
//         <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
//           <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-6xl mx-auto">
//             <div className="w-full">
//               <GitHubStats username={stats.username} stats={stats.stats} />
//             </div>
//             <div className="w-full">
//               <LanguageStats languages={languages} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Projects
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-[#1a1a1a] rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.techStack.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                     >
//                       Live Demo
//                     </a>
//                     <a
//                       href={project.codeLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center py-2 border border-purple-500 rounded-full hover:bg-purple-500/20"
//                     >
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-[#0f0f0f]">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Contact Me
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <span className="p-3 bg-[#1a1a1a] rounded-full text-purple-500">
//                   <MapPin />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Location</h3>
//                   <p className="text-gray-400">Panzinara,Srinagar,J&K,India</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="p-3 bg-[#1a1a1a] rounded-full text-purple-500">
//                   <Mail />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Email</h3>
//                   <p className="text-gray-400">meersameer305@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <span className="p-3 bg-[#1a1a1a] rounded-full text-purple-500">
//                   <Phone />
//                 </span>
//                 <div>
//                   <h3 className="font-bold">Phone</h3>
//                   <p className="text-gray-400">+91 7006720971</p>
//                 </div>
//               </div>
//               <div className="flex space-x-4 pt-4">
//                 <a
//                   href="https://github.com/SaimMeEr"
//                   className="p-3 bg-[#1a1a1a] rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
//                   target="blank"
//                 >
//                   <Github />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/saim-meer/"
//                   className="p-3 bg-[#1a1a1a] rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
//                   target="blank"
//                 >
//                   <Linkedin />
//                 </a>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
//                 alt="Contact"
//                 className="rounded-lg shadow-lg max-w-md w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { GitHubStats } from "./components/GitHubStats";
import { LanguageStats } from "./components/LanguageStats";
import { TypeAnimation } from "react-type-animation";
import GitHubCalendar from "react-github-calendar";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  GraduationCap,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiNetlify,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import profile from "../public/image.png";
import Pharmacy from "../public/Screenshot (439).png";
import Tech from "../public/Teach_Time_Machine.png";
import employeeProject from "../public/employeeProject.png"
import Resume from "../public/SameerUpdatedResume25.pdf.pdf";
import SchoolAppPhoto from "../public/SchoolManagement.png"
import bestBuy from "../public/bestBuy.png"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = {
    username: "SaimMeEr",
    stats: {
      stars: 15,
      commits: 130,
      prs: 17,
      issues: 15,
      contributions: 3,
    },
  };

  const username = stats.username; // Define username for dynamic filename

  const languages = [
    { name: "HTML", percentage: 46.72, color: "#ff6b6b" },
    { name: "CSS", percentage: 30.25, color: "#845ef7" },
    { name: "JavaScript", percentage: 23.03, color: "#ffd43b" },
  ];

  const projects = [
    {
      id: 1,
      title: "MediCare – Prescription & Inventory Management App",
      description: (
        <p>
         Developed a full-featured pharmacy management application using React and Firebase, focusing on prescription handling, medication scheduling, and patient record management. Implemented real-time features to enhance the experience for both pharmacists and patients, ensuring intuitive interaction across the platform. Utilized Firebase Realtime Database for seamless and efficient data handling, while React.js powered the front-end development.
        </p>
      ),
      image: Pharmacy,
      techStack: ["HTML", "CSS", "JAVASCRIPT","TYPESCRIPT", "REACT","TAILWIND","Firebase"],
      liveDemo: "https://v0-swapnilcare-ui-design.vercel.app/",
      codeLink: "https://github.com/SaimMeEr/Pharmacy-Mangement-Tool",
    },
    {
      id: 2,
      title: "Employee Productivity Tracker",
      description: (
        <p>
         Led a team in the development of a productivity app for task tracking, time management, and work-life balance monitoring.Implemented AI features for productivity analysis and optimization within the app.Utilized technologies such as React.js, Node.js, and Firebase Realtime Database for frontend, backend, and database functionalities.Delivered project within a tight timeline as part of a hackathon, ensuring seamless task creation, productivity tracking, and real-time notifications.
         <br />
          <br />
        </p>
      ),
      image: employeeProject,
      techStack: ["HTML", "CSS", "JAVASCRIPT","REACT JS", "FIREBASE","TAILWIND"],
      liveDemo: "https://employeeproductivity123.netlify.app/",
      codeLink: "https://github.com/anamika782/Employee-Productivity-Tracker-Application",
    },
    {
      id: 3,
      title: "Tech Time Machine",
      description: (
        <p>
          Tech Time Machine is an interactive project that delves into the
          evolution of the web from 1990 to 2030, highlighting its
          transformation across decades. It showcases key milestones, design
          trends, and technological advancements that have shaped the web as we
          know it. The project also imagines an exciting vision of how the web
          might evolve in the future, offering users a glimpse into the
          possibilities of the next decade.
        </p>
      ),
      image: Tech,
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      liveDemo: "https://techtimemachine.netlify.app/pages/login.html",
      codeLink: "https://github.com/official-shashank/TechTimeMachine",
    },
    {
      id: 4,
      title: "School Management App",
      description: (
        <p>
         Developed a full-featured school management application using React and Node.js, focusing on class scheduling, attendance tracking, and student performance management. Implemented real-time features to enhance the experience for both teachers and students, ensuring intuitive interaction across the platform. Utilized MongoDB and Express.js for efficient data handling, while React.js powered the front-end development..
        </p>
      ),
      image: SchoolAppPhoto,
      techStack: ["React", "Material UI", "Redux","Node.js","Express.js",'MongoDB'],
      liveDemo: "https://school-management-by-sameer.netlify.app/",
      codeLink: "https://github.com/SaimMeEr/school-management-app",
    },
    {
      id: 5,
      title: "Bestbuy Clone",
      description: (
        <p>
        Developed a responsive e-commerce website inspired by Best Buy using HTML, CSS, and JavaScript. Focused on core shopping features like product listings, cart management, and detailed product views. Emphasized user interaction and UI/UX design. Built the project to understand the fundamentals of online retail platforms and front-end development for seamless shopping experiences
        </p>
      ),
      image: bestBuy,
      techStack: ["HTML", "TailwindCSS",'Css', "JAVASCRIPT"],
      liveDemo: "https://bestbuyclonesrpp.netlify.app/",
      codeLink: "https://github.com/rpsinghcodes/best-buy-clone",
    },
  ];

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = Resume;
    link.download = `${username || 'resume'}.pdf`; // Dynamic filename with fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open(Resume, "_blank");
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#0a0a0a] z-50 px-4 py-4 border-b border-purple-600">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sameer Ahmad Mir
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-purple-500">
              Home
            </a>
            <a href="#about" className="hover:text-purple-500">
              About
            </a>
            <a href="#skills" className="hover:text-purple-500">
              Skills
            </a>
            <a href="#statistics" className="hover:text-purple-500">
              Statistics
            </a>
            <a href="#projects" className="hover:text-purple-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-500">
              Contact
            </a>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={handleDownloadResume}
            >
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
                Resume
              </button>
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-purple-600">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#home" className="hover:text-purple-500">
                Home
              </a>
              <a href="#about" className="hover:text-purple-500">
                About
              </a>
              <a href="#skills" className="hover:text-purple-500">
                Skills
              </a>
              <a href="#statistics" className="hover:text-purple-500">
                Statistics
              </a>
              <a href="#projects" className="hover:text-purple-500">
                Projects
              </a>
              <a href="#contact" className="hover:text-purple-500">
                Contact
              </a>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={handleDownloadResume}
              >
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
                  Resume
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Sameer Ahmad Mir
            </h2>
            <div className="text-xl md:text-2xl text-purple-500 mb-6">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://github.com/SaimMeEr"
                className="p-2 border border-purple-500 rounded-full hover:bg-purple-500 transition-colors"
                target="blank"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/saim-me-er-350403231"
                className="p-2 border border-purple-500 rounded-full hover:bg-purple-500 transition-colors"
                target="blank"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="w-64 h-64 mx-auto relative">
              <img
                src={profile}
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-purple-500"
              />
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(168,85,247,0.5)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-purple-500">
                  <Mail />
                </span>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>meersameer305@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500">
                  <Phone />
                </span>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+91 7006720971</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500">
                  <MapPin />
                </span>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>Panzinara,Srinagar,J&K,India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500">
                  <GraduationCap />
                </span>
                <div>
                  <h3 className="font-bold">Education</h3>
                  <p>Bachelor's of Technology (BTech)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-purple-500">
                  <Download />
                </span>
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={handleDownloadResume}
                >
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
                    Resume
                  </button>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-500">
                  About Me
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate Full Stack Developer with extensive expertise in
                  the MERN stack, dedicated to building dynamic, scalable, and
                  user-centric web applications. Skilled in both front-end and
                  back-end development, with a strong commitment to writing
                  clean, efficient code and optimizing performance. Driven by a
                  love for problem-solving and innovation, I thrive on
                  delivering seamless functionality and exceptional user
                  experiences. Continuously learning and staying ahead of the
                  curve to leverage the latest technologies in impactful ways.
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-500">
                  Education Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">
                      Bachelor of Technology (BTech)
                    </h4>
                    <p className="text-sm text-gray-500">2019-2022</p>
                    <p className="text-gray-300 mt-2">
                      Completed an intensive 8-month Web Development course at
                      Masai School, gaining hands-on experience in HTML, CSS,
                      JavaScript, React and MongoDB, along with a strong focus
                      on Data Structures and Algorithms and real-world project
                      development.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
              { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
              { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
              { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
              {
                icon: <SiMongodb className="text-[#47A248]" />,
                name: "MongoDB",
              },
              {
                icon: <SiExpress className="text-[#ccd4cc]" />,
                name: "ExpressJs",
              },
              { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
              { icon: <FaNpm className="text-[#CB3837]" />, name: "NPM" },
              {
                icon: <SiFirebase className="text-[#FFCA28]" />,
                name: "Firebase",
              },
              {
                icon: <SiPostman className="text-[#FF6C37]" />,
                name: "Postman",
              },
              {
                icon: <SiNodedotjs className="text-[#308326]" />,
                name: "nodeJs",
              },
              {
                icon: <SiTailwindcss className="text-[#36b8d2]" />,
                name: "Tailwind",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-[#1a1a1a] rounded-lg hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <p className="text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {[
              { number: "1200+", label: "Hours of Coding" },
              { number: "200+", label: "DSA Problems" },
              { number: "88+", label: "Git Commits" },
              { number: "6+", label: "Projects" },
              { number: "100+", label: "Hours of Soft Skills" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#1a1a1a] rounded-lg"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <GitHubCalendar
              username="SaimMeEr"
              colorScheme="dark"
              fontSize={16}
            />
          </div>
        </div>
        <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-6xl mx-auto">
            <div className="w-full">
              <GitHubStats username={stats.username} stats={stats.stats} />
            </div>
            <div className="w-full">
              <LanguageStats languages={languages} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 border border-purple-500 rounded-full hover:bg-purple-500/20"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="p-3 bg-[#1a1a1a] rounded-full text-purple-500">
                  <MapPin />
                </span>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-400">Panzinara,Srinagar,J&K,India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="p-3 bg-[#1a1a1a] rounded-full text-purple-500">
                  <Mail />
                </span>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-400">meersameer305@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="p-3 bg-[#1a1a1a] rounded-full text-purple-500">
                  <Phone />
                </span>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">+91 7006720971</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/SaimMeEr"
                  className="p-3 bg-[#1a1a1a] rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                  target="blank"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/saim-me-er-350403231"
                  className="p-3 bg-[#1a1a1a] rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                  target="blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
                alt="Contact"
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;