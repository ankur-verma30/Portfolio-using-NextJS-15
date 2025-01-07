import user_image from './about-me.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';

import postman from './postman.jpg';
import mongodb from './mongodb.png';

import right_arrow_white from './right-arrow-white.png';
import logo from './logo-white.png';
import logo_dark from './logo-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_photo.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import LeetCodeLogo from './leetcode.jpg';
import CodeChefLogo from './codechef.jpg';
import GFGLogo from './gfg.jpg';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    postman,
    LeetCodeLogo,
    CodeChefLogo,
    GFGLogo,
   
};

export const workData = [
    {
        id:0,
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        id:1,
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        id:2,
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        id:3,
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    {  id:0,icon: assets.web_icon, title: 'Custom Web Application Development', description: 'I create fully customized, scalable, and responsive web applications tailored to your unique business needs.', link: '' },
    {  id:1,icon: assets.mobile_icon, title: 'Frontend Development', description: 'Crafting intuitive and visually appealing user interfaces using modern frameworks like React and Next.js', link: '' },
    {  id:2,icon: assets.ui_icon, title: 'Backend Development & API Integration', description: 'Building robust and secure server-side applications with seamless API integrations for efficient data flow.', link: '' },
    {  id:3,icon: assets.graphics_icon, title: 'Website Optimization & Maintenance', description: 'Enhancing website performance, ensuring fast load times, and providing ongoing updates and support.', link: '' },
]

export const infoList = [
    {id:0, icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js Node Js, Express Js, C/C++, Python, SQL, Typescript,Firebase, MongoDB' },
    { id:1,icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Information Technology' },
    { id:2, icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 3 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb,  assets.git,assets.postman
];

export const EXPERIENCES = [
    {
      year: " June 2024 - September 2024",
      role: " Full Stack Developer",
      company: "GaoTek Inc.",
      description: `Worked in developing and maintaining web applications using Wordpress.Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Wordpress"],
    },
    {
      year: " August 2023 -August 2024",
      role: "Head of Operations ",
      company: "Developers Student Club GGV",
      description: `Involves overseeing the daily operations of the organization to ensure efficiency and effectiveness. Contributing to the technical side by building web applications using Next.js and React.Implemented responsive designs and optimized frontend performance. `,
      technologies: ["React.js", "TailwindCSS", "Next.js", "Node.js"],
    },
    {
      year: " August 2022 -August 2023",
      role: "Co-Lead of Web/Android Development Team ",
      company: "Developers Student Club GGV",
      description: `Developed and maintained web applications using HTML,CSS,JS. Worked closely with backend developers to integrate frontend components with Node.js APIs. Collaborated with cross-functional teams.`,
      technologies: ["HTML", "CSS", "JS"],
    },
  ];

  export const CODING_STATS=[
    {  
        id:0,
      title:"LeetCode",
      image: LeetCodeLogo, 
      profileLink:"https://leetcode.com/u/ankur_code07/", 
      discription: "Contest rating of 1,568, with 487 problems solved and five badges earned, including the 200 Days Badge 2024.",
      problemsSolved: '450+', 
    },
    { 
        id:1,
      title:"GFG",
      image: GFGLogo, 
      profileLink: "https://www.geeksforgeeks.org/user/ankur_verma3008/", 
      discription:"Solved 286 problems, have a coding score of 700, a contest rating of 1721, and a current streak of 109 days. You're ranked 63rd among peers.",
      problemsSolved: "280+", 
       
    },
    { 
        id:2,
      title:"Codechef",
      image: CodeChefLogo, 
      profileLink: "hhttps://www.codechef.com/users/ankurverma30",
      discription: "Rating of 1486 in Division 3, with a global rank of 30,585 and a country rank of 27,408.", 
      problemsSolved: "50+"
    },
  ]