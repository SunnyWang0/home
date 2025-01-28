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
  message: "ML/AI Engineer | UnleashAI Founder | Gym Rat | Musician",
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
    
    I founded <a href="https://unleashai.site/" target="_blank" rel="noopener noreferrer">UnleashAI</a>, an AI automation consulting agency focused on helping growing businesses leverage AI to 
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

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SunnyWang0",
  reposLength: 0,
  specificRepos: [],
  customProjects: [
    {
      name: "SnapFit: AI Body Fat Analyzer",
      description: `
        An AI-powered body fat analysis tool that provides accurate body fat percentage estimates from photos.
        SnapsFit helps users track their fitness progress through a combination of body fat and weight 
        analysis, all bundled in a clean and easy-to-use UI.
      `,
      svn_url: "https://github.com/SunnyWang0/SnapFit"
    },
    {
      name: "FitLens: AI Supplement Analyzer",
      description: `
        A supplement analysis tool that decodes supplement labels through photos.
        Simply snap a picture of any pre-workout or supplement label, and FitLens breaks down 
        the ingredients and effects in plain English and graphics. The app provides easy-to-understand effectiveness scores 
        making it simple to compare different products and make informed decisions about your supplements.
      `,
      svn_url: "https://github.com/SunnyWang0/FitLens"
    },
    {
      name: "Sweat AI: Supplement Shopping Assistant",
      description: `
        An AI-powered research-based supplement shopping assistant.
        Leveraging natural language processing and GPT-4o, this tool helps 
        users make informed decisions about their supplement purchases 
        by providing personalized, research-backed recommendations. Recommendations
        are pulled from all available supplement stores with a link to the product.
      `,
      homepage: "https://www.sweat.chat",
      svn_url: "https://github.com/SunnyWang0/SweatAI"
    },
    {
      name: "AI Music Genre Classification Research",
      description: `
        A music genre classification model that innovates by leveraging Convolutional Neural Networks. 
        The method uniquely combines Melspectrograms and Short-Time Fourier Transform spectrograms as 
        joint inputs to augment training data. This approach successfuly improved classification accuracy 
        in music genre identification by 7%.
      `,
      svn_url: "https://github.com/SunnyWang0/GenreClassification",
      paper_url: require("../editable-stuff/paper442.pdf")
    },
    {
      name: "TuneBot: AI Song Lyrics Generator",
      description: `
      A GPT-2-based AI for generating song lyrics tailored to genre, artist, and subject inputs. 
      Tunebot enhances lyric authenticity by incorporating song structures and rhyming schemes. 
      It also features a custom Named Entity Recognition system, enabling accurate interpretation 
      of natural language user inputs.
      `,
      svn_url: "https://github.com/mumichians/TuneBot-WebApp",
    },
    {
      name: "Tesla FAQ Chatbot",
      description: `
        An NLP-driven chatbot tailored for answering FAQ's related to Tesla, mapping user queries to an FAQ database.
        Contains an NER system to extract relevant information from user queries and pull the most relevant answers.
      `,
      svn_url: "https://github.com/SunnyWang0/FAQ-Chatbot",
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
    { name: "Python", value: 90 },
    { name: "PyTorch", value: 85 },
    { name: "TensorFlow", value: 80 },
    { name: "SQL", value: 87 },
    { name: "C/C++", value: 85 },
    { name: "NumPy", value: 87 },
    { name: "AWS", value: 90 },
    { name: "Git", value: 92 },
  ],
  softSkills: [
    { name: "Collaboration", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Grit", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Hard Working", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Curiosity", value: 88 },
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
