// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sunny",
  middleName: "",
  lastName: "Wang",
  message: "| ML/AI Engineer | UnleashAI Founder | Gym Rat | Musician |",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/SunnyWang0",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sunnyyy.wanggg/",
    },
    {
      image: "fa-brands fa-x-twitter",
      url: "https://x.com/SunnyWangAI",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sunnywang002/",
    },
    {
      image: "fa-spotify",
      url: "https://open.spotify.com/user/sunny.wang999?si=a353ef8182644a79",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/portrait.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/portrait.png"),
  imageSize: 375,
  message: `
    My name is Sunny Wang, and I'm a recent graduate from the University of Michigan with a dual 
    degree in computer science and music. I'm hardworking, creative, and resilient, viewing every 
    challenge as an opportunity to learn and improve. 

    <br /><br />
    
    I founded UnleashAI, an AI automation consulting agency focused on helping growing businesses leverage AI to 
    eliminiate tedious manual tasks and improve efficiency. I also enjoy tinkering with side projects in the intersection 
    of AI and fitness to create meaningful solutions.
    
    <br /><br />
    
    With a commitment to continuous growth, my goal is to gain hands-on experience and learn 
    from industry leaders who are driving innovation. I'm eager to hone my skills, contribute 
    to meaningful projects, and play a part in shaping the future of AI-driven technologies.
    <br /><br />
  `,
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SunnyWang0",
  reposLength: 0,
  specificRepos: [],
  customProjects: [
    {
      name: "GenreClassification",
      description: "A music genre classification model that innovates by leveraging Convolutional Neural Networks. The method uniquely combines Melspectrograms and Short-Time Fourier Transform spectrograms as joint data inputs. This approach successfuly improved classification accuracy in music genre identification.",
      svn_url: "https://github.com/SunnyWang0/GenreClassification",
      homepage: "",
      paper_url: require("../editable-stuff/paper442.pdf")
    },
    {
      name: "FAQ-Chatbot",
      description: "One of my first NLP projects ever. An NLP-driven chatbot tailored for answering FAQ's related to Tesla, mapping user queries to an FAQ database.",
      svn_url: "https://github.com/SunnyWang0/FAQ-Chatbot",
      homepage: ""
    },
    {
      name: "TuneBot",
      description: "Song lyric generation",
      svn_url: "https://github.com/mumichians/TuneBot-WebApp",
      homepage: ""
    }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/portrait.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/portrait.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C/C++", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "AWS", value: 90 },
    { name: "NumPy", value: 75 },
    { name: "Python", value: 90 },
    { name: "Tensorflow", value: 75 },
    { name: "SQL", value: 80 },
    { name: "Scikit-learn", value: 70 },
  ],
  softSkills: [
    { name: "Collaboration", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Grit", value: 87 },
    { name: "Problem Solving", value: 90 },
    { name: "Adaptability", value: 87 },
    { name: "Hard Working", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Curiosity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Machine Learning / AI opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sunny.wang002@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

//Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};
