import CV from "./ABDULLAHM(2024).pdf";
import Dafy from "./Image/dafy.jpg";
import MCA from "./Image/MSEClogo.jpeg";
import BCA from "./Image/ycmLogo.jpeg";
import DafyWeb from "./Image/DafyWeb.jpg";
import DafyAdmin from "./Image/dafyAdmin.jpg";
import GastosWeb from "./Image/GastosWeb.jpg";
import PythonWeb from "./Image/clmWeb.jpg";
import MalwareWeb from "./Image/malwareWeb.jpg";
import GitHub from "./Image/Git.png";
import PHP from "./Image/php.png";
import profilePhoto from "./Image/bio.jpg";

export const Bio = {
  name: "Abdullah M",
  roles: ["Front End Developer"],
  image: profilePhoto,
  description: `I am a motivated and versatile individual, 
    always eager to take on new challenges. 
    With a passion for learning I am dedicated to delivering high-quality results. 
    With a positive attitude and a growth mindset, 
    I am ready to make a meaningful contribution and achieve great things.`,
  github: "https://github.com/abdullah121098",
  resume: CV,
  // linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  // twitter: "https://twitter.com/RishavChanda",
  // insta: "https://www.instagram.com/rishav_chanda/",
  // facebook: "https://www.facebook.com/rishav.chanda.165/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Core PHP",
        image: PHP,
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: GitHub,
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Dafy,
    role: "Technical Support Executive",
    company: "Flipr Inovations Pvt. Ltd.",
    date: "May 2023 - Jan 2023",
    desc: "Working on the frontend of the web application using ReactJS, and Material UI.",
    skills: ["ReactJS", "GitHub", "Material UI", "HTML", "CSS", "JavaScript"],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: MCA,
    school: "Mepco Schlenk Engineering Colleg, Sivakasi",
    date: "Aug 2019 - June 2021",
    grade: "7.1 CGPA",
    desc: "I am graduated a Master's degree in Computer Application at Mepco Schlenk Engineering Colleg, Sivakasi. I have completed 4 semesters and have a CGPA of 7.1. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am learning and working on exciting projects.",
    degree: "Master of Computer Application - MCA,",
  },
  {
    id: 1,
    img: BCA,
    school: "Yadava College, Madurai",
    date: "Aug 2016 - June 2019",
    grade: "6.77 CGPA",
    desc: "I am graduated a Bachelor's degree in Computer Application at Yadava College, Madurai. I have completed 6 semesters and have a CGPA of 6.77. I have taken courses in Object-Oriented Programming, Database Management Systems, and among others. I am learning and working on exciting projects.",
    degree: "Bachelor of Computer Applications- BCA,",
  },
  {
    id: 2,
    img: "",
    school: "S.M.S.S. Govt.Boys Higher Sec. School,Shengottai",
    date: "June 2015 - Apr 2016",
    grade: "48.8%",
    desc: "I completed my class 12 high school education at S.M.S.S. Govt.Boys Higher Sec. School,Shengottai, where I studied Mathematics with Biology.",
    degree: "HSC(XII), Mathematics with Biology",
  },
  {
    id: 3,
    img: "",
    school: "S.M.S.S. Govt.Boys Higher Sec. School,Shengottai",
    date: "June 2012 - Apr 2013",
    grade: "75.6%",
    desc: "I completed my class 10 education at S.M.S.S. Govt.Boys Higher Sec. School,Shengottai, where I studied Tamil, English,Mathematic, Science,Social",
    degree: "SSLC(X),",
  },
];

export const projects = [
  {
    id: 0,
    title: "Dafy Static Website",
    date: "May 2023 - Jan 2024",
    description:
      "Developed a web application made responsive user interface with React JS that provides users with a seamless experience across all devices.",
    image: DafyWeb,
    tags: ["React Js", "HTML", "Material UI", "Redux", "CSS"],
    category: "web app",
    // github: "https://github.com/rishavchanda/Podstream",
    // webapp: "https://podstream.netlify.app/",
    // member: [
    //   {
    //     name: "Abdullah",
    //     // img: "https://avatars.githubusercontent.com/u/64485885?v=4",
    //     // linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    //     // github: "https://github.com/rishavchanda/",
    //   },
    //   {
    //     name: "Sheik Mohamed Kothari",
    //     // img: "https://avatars.githubusercontent.com/u/100614635?v=4",
    //     // linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
    //     // github: "https://github.com/upasana0710",
    //   },
    // ],
  },
  // {
  //   id: 1,
  //   title: "Dafy Admin Panel",
  //   date: "May 2023 - Present",
  //   description:
  //     "Developed a web application made responsive user interface with React JS that provides users with a seamless experience across all devices.",
  //   image: DafyAdmin,
  //   tags: [
  //     "React Js",
  //     "HTML",
  //     "Material UI",
  //     "Redux",
  //     "CSS",
  //     "GoogleMap",
  //     "Redux",
  //   ],
  //   category: "web app",
  //   // github: "https://github.com/rishavchanda/Podstream",
  //   // webapp: "https://podstream.netlify.app/",
  //   member: [
  //     {
  //       name: "Abdullah",
  //       // img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       // linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       // github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Sheik Mohamed Kothari",
  //       // img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       // linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       // github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "GASTOS",
    date: "Jan 2021 – May 2021",
    description:
      "A project based on Expense Tracking System which uses PHP Language. It has some features that will allow all the users to manage their daily expenses and income under different categories. This system as well as the web application’s concept is all clear, it’s the same as real-life scenarios and well-implemented on it.",
    image: GastosWeb,
    tags: ["PHP", "MySql", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/abdullah121098/Gastos.git",
    // webapp: "https://vexa-app.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "College Management System In Python",
  //   date: "July 2020 – Dec 2020",
  //   description:
  //     "The College Management System In Python is a simple project developed using Python. The project contains only the admin side. It is an integrated console-based application that handles various academic activities of a College. It is a mini python project that is used to keep and maintain the complete record of Students.",
  //   image: PythonWeb,
  //   tags: ["Python"],
  //   category: "web app",
  //   // github: "https://github.com/rishavchanda/Project-Management-App",
  //   // webapp: "https://vexa-app.netlify.app/",
  // },
  {
    id: 4,
    title: "Malware App Detection in Play store",
    date: "Dec 2018 – March 2019",
    description:
      "Ranking fraud in the mobile App market refers to fraudulent or deceptive activities which have a purpose of bumping up the Apps in the popularity list. Indeed, it becomes more and more frequent for App developers to use shady means, such as inflating their Apps’ sales or posting phony App ratings, to commit ranking fraud. While the importance of preventing ranking fraud has been widely recognized, there is limited understanding and research in this area.",
    image: MalwareWeb,
    tags: ["PHP", "MySql", "HTML", "CSS"],
    category: "web app",
    // github: "https://github.com/rishavchanda/Project-Management-App",
    // webapp: "https://vexa-app.netlify.app/",
  },
];
export const Certificate = [
  {
    id: 5,
    title: "Python Basic",
    date: "Sep 2020",
    description:
      `This course covers topics like Scalar Types, Operators and Control Flow, Strings, 
      Collections and Iteration, Modularity, Objects and Types and Classes`,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    tags: [""],
    category: "Certificate",
    hackerRank: "https://www.hackerrank.com/certificates/e27333981b27",
    // github: "https://github.com/rishavchanda/Project-Management-App",
    webapp: "https://www.hackerrank.com/profile/abdullah_bca98",
  },
];
export const TimeLineData = [
  { year: 2023, text: "Started my journey" },
  // { year: 2018, text: "Worked as a freelance developer" },
  // { year: 2019, text: "Founded JavaScript Mastery" },
  // { year: 2020, text: "Shared my projects with the world" },
  // { year: 2021, text: "Started my own platform" },
];
