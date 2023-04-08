/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Apoorv Garg",
  title: "Hi all, I'm Apoorv",
  subTitle: emoji(
    "I am a passionate software systems engineer with experience building scalable and resilient systems using a range of technologies, including C/C++, Rust, Node.js, and more. With a focus on performance, reliability, and maintainability, I strive to deliver innovative solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18TKjmfa_Y2gsMZ792i20bDyadXTNgOEz/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/snipekill/",
  linkedin: "https://www.linkedin.com/in/apoorvgarg17/",
  gmail: "apoorv.garg.cse15@gmail.com",
  leetcode: "https://leetcode.com/apoorvgarg17/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DESIGN CODE DEBUG ANALYSE IMPROVE REPEAT !!!",
  skills: [
    emoji(
      "⚡ Experienced in building scalable and resilient systems, including data pipelines, synchronization systems, and high-capacity streaming pipelines"
    ),
    emoji("⚡ Proficient in analyzing and optimizing database performance, including execution plans, indexing, and normalization"),
    emoji(
      "⚡ Comfortable working in both individual and team environments, with experience leading cross-functional teams and collaborating on complex projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Go",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Los Angeles",
      logo: require("./assets/images/ucla.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - June 2023",
      desc: "Relevant Courses: Cloud Computing, Big Data Systems, Advanced Computer Arch, Parallel & Dist. Computing",
      descBullets: [
        "Teaching Assistant for Software Engineering course, mentored 100+ students to build industry grade projects, using software development life cycle methodologies",
        "Contributed to ongoing research as Graduate Student Researcher under the guidance of Professor Miryung Kim to generate error inducing \
        inputs for python programs and numerical libraries such as Numpy, Scipy, etc."
      ]
    },
    {
      schoolName: "Birla Institute of Technology",
      logo: require("./assets/images/bit.png"),
      subHeader: "Bachelor of Engineering in Computer Science & Engineering",
      duration: "July 2015 - May 2019",
      desc: "Relevant Courses: Data Structures and Algorithms, Operating Systems, Computer Architecture, DBMS",
      descBullets: [
        "Awarded GP Birla Scholarship at Birla Institute of Technology (2015-19) for academic excellence",
        "Won ‘Best Computer Science Solution’ award at Goldman Sachs ‘We Build’ challenge 2017 among 2K people",
        "Leading a team of 4, won at CodeAsylums Winter Hackathon 2017, by creating a website to help users code",
        "Secured 1st rank in ‘Bit Codezilla’, a coding event among 2015 Batch"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Systems Engineering", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Meta",
      companylogo: require("./assets/images/meta.avif"),
      date: "June 2022 – September 2022",
      desc: "Awareded the 'Greatly Exceeding Expectation' Rating",
      descBullets: [
        "Manuevered the assigned project in half the time, and implemented two self projects to tackle scalability and accuracy.",
        "Reduced resolution time for 40% of incidents, minimizing code under inspection to 0.1%, by devising code attribution models in Hack.",
        "Boosted code coverage to 80%, mapping targeted APIs to invoked code, by tracing execution at CPU instruction level."
      ]
    },
    {
      role: "Software Engineer",
      company: "Postman",
      companylogo: require("./assets/images/postman.png"),
      date: "Jan 2021 – Sep 2021 (9 months)",
      desc: "Backend Lead",
      descBullets: [
        "Led a cross team effort to build a data pipeline in python, sustaining a throughput of 10M events/hour, by extracting Redshift Data to MySQL using AWS lambda and S3 services.",
        "Conserved Database resources, decreasing latency by 70% and average active session by 10%, through analyzing execution plans, normalizing key tables and refining indexing.",
        "Formalized an algorithm for dynamic reordering of rows in PostgreSQL, minimized average row insertion calls by 60% using fractional indexing to enforce implicit ordering.",
        "Streamlined AWS ELB instances, decreased load by 90%, by redesigning micro service architecture in Node.js to eliminate technical debts and coupling issues.",
        "Amplified user session duration by 20%, by showcasing trending APIs extracted daily from 100K REST APIs using AWS SQS.",
        "Authored YML scripts to enable seamless CI/CD integrations, reducing testing time by 30%, facilitating building and testing processes through CircleCi and Bitbucket.",
        "Created a stateless service with REST APIs in Sails.js and Node.js to display information about public API workspaces and collections.",
      ]
    },
    {
      role: "Software Engineer",
      company: "Buyhatke",
      companylogo: require("./assets/images/buyhatke.jpg"),
      date: "Jun 2019 – Jan 2021 (1 year, 8 months)",
      desc: "Full stack developer, leading development for 3 products",
      descBullets: [
        "Improved information retrieval speed by 30%, by designing an efficient event based system in Node.js, extracting data from multiple sources concurrently using several servers, storing the transformed data in MySql database.",
        "Reduced third-party API usage by 70% by implementing lazy database updates and integrating Redis as cache layer with dynamic expiry, resulting in stable usage under fluctuating loads.",
        "Crafted a highly responsive UI for web application, using React and Tailwind CSS to ensure seamless adaptability to various screen sizes.",
        "Built a Node.js infrastructure from scratch to track flight prices and enable booking automation using REST APIs and headless browsers.",
        "Established virtual bidding marketplace for agents using React and Node.js, featuring reputation system and event/feedback monitoring to ensure fairness and optimal performance.",
        "Scaled back-end services, lowering latency by 40%, by incorporatingRedis andNode.js clusters library to enforce load balancing on an EC2.",
        "Engineered a high-capacity data pipeline to synchronize the database with critical updates, leveraging object hashing to drastically reduce data duplication and optimize performance.",
        "Reduced checkout time from 6 minutes to mere 25 seconds by creating javascript automation scripts, ensuring confirmed tickets during peak hours.",
        "Launched ETL orchestration to migrate data to graph database (Neo4j) from MySql, eliminating impedance mismatch with 90% reduction in latency.",

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


// Automatic GPU code generator
// Normal Details
// - Created framework taking a configuration file to output a low level C CUDA code with similar performance compared to the cuBlas and cuDnn
// - Supported Algorithms - Multiply & Accumulate(MAC), 2D & 3D Convolution, Matrix Multiplication
// - Auto generation framework written in python, aiming for maximum flexibility and tunable paremeters, adaptable to different GPU configs.
// report link:- https://drive.google.com/file/d/170LEbWbp2tkPLOKEHumtLh9Gblm7dd6c/view?usp=sharing
// supported-image:- /home/apoorvg/Documents/UCLA/courses/CS-259-learning-machines/Code-..
// github-link: https://github.com/snipekill/gpu-code-generator
// Technologies Used:- Makefile, C, Cuda, Python

// Mobile-Cloud Volumetric Live Streaming
// Normal Details
// - Designed an edge Multi-threaded server to transmit 3D videos in compressed format using Draco, boosting speed from 5fps to 30fps.
// - Initiated 3D stream transmission pipeline with asynchronous architecture and intelligent scheduling in Python, getting 10x speedup.
// report Link:- https://drive.google.com/file/d/12mvWKFQGtyx8O1oJXUeeMllVFkx2-uPc/view?usp=sharing
// supported-image:- apoorvg/Documents/UCLA/courses/CS-219-cloud-computing
// github-link:- https://github.com/snipekill/3d-streaming-server
// presentation-link:- https://drive.google.com/file/d/12PvrGBoCBxgJQ1ciO8zKx4HOhO_KKPZa/view?usp=share_link
// Technologies Used:- Python, Draco, TCP, cv2, numpy, multi-threading, open3d

// Counter Based Replacement Algorithms for Dead Line Prediction
// Normal Details:-
// - Implemented Access Interval Predictor(AIP) and LiveTime Predictor(LvP) as page replacement algorithms in gem5 simulator 
// - Evaluated Results on SPEC 2017 benchmarks getting 20% performance enhancement.
// report Link:- https://drive.google.com/file/d/1ZFnrHzTFTlyQkRZmELtgR1IcyvK8LPty/view?usp=sharing
// supported-image:- 
// github-link:- https://github.com/snipekill/page_repl_algo_gem5 (change-visibility to public)
// Technologies Used:- C, C++, Python, gem5, Cache Replacement

// Watch-Api (Open Source Project)
// Site-Link:- https://www.npmjs.com/package/watch-api
// Normal Details
// - Published an npm library to monitor APIs and middleware latency with a brief summary of statistics and aggregates.
// - Tracking status, error logs and latency at individual layer for each API hit.
// supported-image:- 
// github-link:- https://github.com/snipekill/watch-api
// Technologies Used:- Node.js, Javascript, Express, API Monitoring

// Custom Linux Shell
// Normal Details:-
// - Developed C program to serve as shell interface for Unix/Linux, 
// - Accepts shell commands and executes it in separate process using system calls such as fork, exec, wait, mmap.  
// - Tracks history of executed commands and supports inter process communication using shared memory and pipes.
// supported-image:- 
// github-link:- https://github.com/snipekill/custom-shell
// Technologies used:- C, Makefile, IPC, pipes

// Diffy-Fuzz
// Normal details
// - Modeled a test generation framework, approximating arbitrary program logic via a differentiable neural network using adversarial attacks
// - Improved branch coverage by more than 30%, by generating test cases to execute code untested by symbolic and concolic fuzzing.
// github link:- https://github.com/snipekill/diffy_fuzz
// report link:- https://drive.google.com/file/d/1eNVT5hQkjgr2n5d6QEJQDS-mZ6cwLRdS/view?usp=sharing
// supported-image:- apoorvg/Documents/UCLA/courses/CS-239-automated-test-gen/overview.png
// presentation-link:- https://drive.google.com/file/d/1TV1hV-Iqqpd3wP1B3L_z_vWhzk4OphYH/view?usp=sharing
// Technologies Used:- Python, Neural Network, Adversial Attacks, Fuzzing, Symbolic Testing, Branch coverage, AST


// Distributed Grep(WIP)
// Normal details
// -
// github link:- https://github.com/snipekill/diffy_fuzz
// supported-image:- 
// Technologies Used:- 

//  *******************MINI-PROJECTS**************************

// Matrix Multiplication using OpenMP & MPI libraries
// Normal Details
// - Designed two C++ program to perform parallel Matrix Multiplication using OpenMP pragmas and MPI for benchmarking.
// - Used techniques such as Data Reuse, loop tiling, loop unrolling, loop permutation to acheive maximum speed.
// supported-image:- 
// Technologies Used:- C++, OpenMP, MPI, Loop optimization, Cache Optimization

// 3D Convolution using CUDA & HLS for FPGA
// Normal Details
// - Designed a C++ program to perform 3D convolution using CUDA to run on GPU.
// - Used HLS to convert 3D convolution C code to RTL to run on FPGA given required specification.
// - Aimed for maximal cache coalescing, 
// supported-image:- 
// Technologies Used:- C++, CUDA, RTL, FPGA, HLS, Makefile


// Examplore Plus, ranking code examples using Quality Metrics
// Normal Details
// - Adding Code quality metrics to rank code examples for a given API usage to increase user confidence.
// - Used metrics such as github stars, time to resolve commits, activity time etc to formulate weight governing the ranks for examples.
// - Supported Image:- 
// Report Link:- https://drive.google.com/file/d/1InclgUmAzssT6UeJCzJR17JFd3anhppl/view?usp=share_link
// Presentation Link:- https://drive.google.com/file/d/1LzRH_5efI1AjG9skNUQYP-R3TbhQek5E/view?usp=share_link
// Github Link:- https://github.com/snipekill/ExamplorePlus
// Technologies Used:- Javascript, Meteor, HTML, CSS, Github APIs, BOA



// mini projects
// pipe functionality
// Inode file system

// WebConnect

// open source projects
// 


const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/automatic-gpu-proj.png"),
      projectName: "Automatic GPU code generator",
      bullets: [
        "Takes config file outputting CUDA code with similar perf compared to cuBlas and cuDnn.",
        "Supports Multiply & Accumulate(MAC), 2D & 3D Convolution and Matrix Multiplication.",
        "Framework written in python, aiming for maximum flexibility and tunable paremeters, adaptable to different GPU configs."
      ],
      report: "https://drive.google.com/file/d/170LEbWbp2tkPLOKEHumtLh9Gblm7dd6c/view?usp=sharing",
      technologies: ["python", "C", "CUDA"],
      github: "https://github.com/snipekill/gpu-code-generator/",
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "Mobile-Cloud Volumetric Live Streaming",
      bullets: [
        "Designed an edge Multi-threaded server to transmit 3D videos in compressed format using Draco, boosting speed from 5fps to 30fps.",
        "Initiated 3D stream transmission pipeline with asynchronous architecture and intelligent scheduling, getting 10x speedup."
      ],
      report: "https://drive.google.com/file/d/12mvWKFQGtyx8O1oJXUeeMllVFkx2-uPc/view?usp=sharing",
      technologies: ["Python", "Draco", "TCP", "cv2", "numpy", "multi-threading", "open3d"],
      presentation: "https://drive.google.com/file/d/12PvrGBoCBxgJQ1ciO8zKx4HOhO_KKPZa/view?usp=share_link",
      github: "https://github.com/snipekill/3d-streaming-server",
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "Counter Based Replacement Algorithms",
      bullets: [
        "Implemented Access Interval Predictor(AIP) and LiveTime Predictor(LvP) as page replacement algorithms in gem5 simulator.",
        "Evaluated Results on SPEC 2017 benchmarks getting 20% performance enhancement."
      ],
      report: "https://drive.google.com/file/d/1ZFnrHzTFTlyQkRZmELtgR1IcyvK8LPty/view?usp=sharing",
      technologies: ["C", "C++", "Python", "gem5", "Cache Replacement"],
      github: "https://github.com/snipekill/page_repl_gem5",
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "Watch-Api (Open Source Project)",
      bullets: [
        "Published an npm library to monitor APIs and middleware latency with a brief summary of statistics and aggregates.",
        "Tracking status, error logs and latency at individual layer for each API hit."
      ],
      technologies: ["Node.js", "Javascript", "Express", "API Monitoring"],
      github: "https://github.com/snipekill/watch-api/",
      website: "https://www.npmjs.com/package/watch-api/"
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "Custom Linux Shell",
      bullets: [
        "Developed C program to serve as shell interface for Unix/Linux.",
        "Accepts shell commands and executes it in separate process using system calls such as fork, exec, wait, mmap.",
        "Tracks history of executed commands and supports inter process communication using shared memory and pipes."
      ],
      technologies: ["C", "Makefile", "IPC", "pipes"],
      github: "https://github.com/snipekill/custom-shell",
    },
    {
      image: require("./assets/images/diffy-fuzz.png"),
      projectName: "Diffy-Fuzz",
      bullets: [
        "Modeled a test generation framework, approximating arbitrary program logic via a differentiable neural network using adversarial attacks.",
        "Improved branch coverage by more than 30%, by generating test cases to execute code untested by symbolic and concolic fuzzing."
      ],
      report: "https://drive.google.com/file/d/1eNVT5hQkjgr2n5d6QEJQDS-mZ6cwLRdS/view?usp=sharing",
      technologies: ["Python", "Neural Network", "Adversial Attacks", "Fuzzing", "Symbolic Testing", "Branch coverage", "AST"],
      presentation: "https://drive.google.com/file/d/1TV1hV-Iqqpd3wP1B3L_z_vWhzk4OphYH/view?usp=sharing",
      github: "https://github.com/snipekill/diffy_fuzz",
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "Matrix Multiplication using OpenMP & MPI libraries",
      bullets: [
        "Designed two C++ program to perform parallel Matrix Multiplication using OpenMP pragmas and MPI for benchmarking.",
        "Used techniques such as Data Reuse, loop tiling, loop unrolling, loop permutation to acheive maximum speed."
      ],
      technologies: ["C++", "OpenMP", "MPI", "Loop optimization", "Cache Optimization"],
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "3D Convolution using CUDA & HLS for FPGA",
      bullets: [
        "Designed a C++ program to perform 3D convolution using CUDA to run on GPU.",
        "Used HLS to convert 3D convolution C code to RTL to run on FPGA given required specification.",
      ],
      technologies: ["C++", "CUDA", "RTL", "FPGA", "HLS", "Makefile", "cache coalescing"],
    },
    {
      image: require("./assets/images/Server_Arch.png"),
      projectName: "ExamplorePlus",
      bullets: [
        "Adding Code quality metrics to rank code examples for a given API usage to increase user confidence.",
        "Used metrics such as github stars, time to resolve commits, activity time etc to formulate weight governing the ranks for examples.",
      ],
      report: "https://drive.google.com/file/d/1InclgUmAzssT6UeJCzJR17JFd3anhppl/view?usp=share_link",
      technologies: ["Javascript", "Meteor", "HTML", "CSS", "Github APIs", "BOA"],
      presentation: "https://drive.google.com/file/d/1LzRH_5efI1AjG9skNUQYP-R3TbhQek5E/view?usp=share_link",
      github: "https://github.com/snipekill/ExamplorePlus",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
