import { ProfileBanner, WorkPermit, TimelineItem, Project, Certification, ContactMe, Skill } from '../types';
import hotelCalifornia from '../images/Hotelcalifornia.jpg';
import acdc from '../images/ac-dc.jpg';
import gunsNRoses from '../images/guns-n-roses.webp';
import alchemist from '../images/alchemist.jpg';
import richDadPoorDad from '../images/rich_dad_poor_dad.jpg';
import atomicHabits from '../images/atomic_habits.jpg';

export const staticProfileBanner: Record<string, ProfileBanner> = {
  recruiter: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif" },
    headline: "Subhransu Nayak",
    profileSummary: "11th & 12th higher secondary science student at Khallikote College, Berhampur. Actively building frontend and backend foundations, combining logical structures with clean user experiences. Seeking opportunities to collaborate and build the next generation of web applications.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/in/subhransu-nayak-4b33383a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  developer: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" },
    headline: "Subhransu Nayak // Dev Profile",
    profileSummary: "Began learning programming and software logic in Python in 2025. Fell in love with web layouts. Actively training on React, Node.js, Python, Java, C#, and C. Balances daytime science classes at Khallikote College with night-time coding modules.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/in/subhransu-nayak-4b33383a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  stalker: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif" },
    headline: "Stalking Subhransu Nayak?",
    profileSummary: "Here's what you need to know: Passionate beginner developer, quick learner, and higher secondary science student at Khallikote College who spends nights building high-performance downloaders and simulator platforms.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/in/subhransu-nayak-4b33383a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  },
  adventure: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" },
    headline: "Subhransu Nayak's Adventures",
    profileSummary: "When not attending science lectures, I'm diving into Python scrapers, C# logic pipelines, or learning about server automation modules. Exploring the frontiers of web engineering and AI daily.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/in/subhransu-nayak-4b33383a7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  }
};

export const staticWorkPermit: WorkPermit = {
  visaStatus: "Student (Higher Secondary Education)",
  expiryDate: new Date("2028-06-30"),
  summary: "Higher Secondary Science Student at Khallikote College, Berhampur. Started coding in 2025.",
  additionalInfo: "Seeking junior/intern frontend developer roles and collaborative open-source assignments. Legally eligible to work on remote contracts/internships."
};

export const staticTimeline: TimelineItem[] = [
  {
    timelineType: 'education',
    name: "11th & 12th Higher Secondary Education",
    title: "Khallikote College, Berhampur",
    techStack: "Physics, Chemistry, Mathematics, Computer Science",
    summaryPoints: [
      "Currently pursuing higher secondary science classes (11th & 12th grade) at Khallikote College.",
      "Balances daytime formal lectures in Berhampur with night-time coding modules.",
      "Developing basic software concepts, logical thinking, and scientific foundations."
    ],
    dateRange: "2025 - Present"
  },
  {
    timelineType: 'work',
    name: "Self-Taught Developer Path",
    title: "Beginner Full-Stack Developer",
    techStack: "React, Node.js, Python, Java, C#, C, HTML, CSS",
    summaryPoints: [
      "Started learning programming and software logic in Python in 2025.",
      "Built several showcase applications including Pitbull Market, StreamGrab, and Repairer (Beta).",
      "Actively building frontend and backend foundations, combining logical structures with clean user experiences."
    ],
    dateRange: "2025 - Present"
  }
];

export const staticProjects: Project[] = [
  {
    title: "TubeFlow",
    description: "An AI-powered SaaS that automates YouTube comment replies 24/7. Evaluates incoming queries using smart keyword rules and responds instantly to pricing, links, or coupon queries in the creator's voice.",
    techUsed: "React, TypeScript, Tailwind CSS, Node.js",
    image: { url: "/images/tubeflow.png" },
    link: "https://tubeflow-weld.vercel.app/"
  },
  {
    title: "TubeForge",
    description: "A multimodal AI workspace that transforms YouTube videos into rich knowledge assets. Automatically generates study notes, interactive quizzes, and SEO-optimized blog posts directly from video content.",
    techUsed: "React, TypeScript, Tailwind CSS, Python",
    image: { url: "/images/tubeforge.png" }
  },
  {
    title: "Bruhaspati AI",
    description: "An elite AI tutoring platform for Indian competitive exams (CBSE, JEE, NEET, IAT). Provides structured answers complete with LaTeX math, diagrams, key board vocabulary, and exam history insights.",
    techUsed: "React, TypeScript, CSS, Gemini API",
    image: { url: "/images/bruhaspati.png" },
    link: "https://bruhaspati-ai.vercel.app/"
  },
  {
    title: "Pitbull Market",
    description: "A real-time trading simulator website offering an immersive, simulated financial market experience. Players can execute mock trades and watch tickers update dynamically. 10,000+ mock trades processed in real-time.",
    techUsed: "React, CSS, HTML",
    image: { url: "/images/pitbull_market.jpg" }
  },
  {
    title: "StreamGrab",
    description: "A high-performance YouTube and Instagram 4K video downloader built with a modern and intuitive user interface using scrapers and custom pipelines. 4K downloads processed in under 12 seconds.",
    techUsed: "Python, C#, Node.js",
    image: { url: "/images/streamgrab.png" },
    link: "https://github.com/SubhransuNayak007/StreamGrab"
  },
  {
    title: "Repairer (Beta)",
    description: "An on-demand scheduling app to search, review, and hire certified technicians in under 30 minutes. Status: Active Development / Coming Soon. Scheduling matches optimized under 300ms.",
    techUsed: "React, Node.js, Java, Python, C#",
    image: { url: "/images/repairer.png" }
  }
];

export const staticCertifications: Certification[] = [
  {
    title: "Python Programming Foundation",
    issuer: "Self-Paced Training / Developer Modules",
    issuedDate: "2025",
    link: "https://github.com/SubhransuNayak007",
    iconName: "Python"
  },
  {
    title: "Frontend Web Development with React",
    issuer: "Interactive Code Camps & Projects",
    issuedDate: "2025",
    link: "https://github.com/SubhransuNayak007",
    iconName: "React"
  }
];

export const staticContactMe: ContactMe = {
  profilePicture: { url: "https://avatars.githubusercontent.com/u/161400262?v=4" }, // Using GitHub avatar
  name: "Subhransu Nayak",
  title: "Higher Secondary Science Student & Aspiring Developer",
  summary: "11th & 12th higher secondary science student at Khallikote College, Berhampur. Started learning programming in 2025 and fell in love with web layouts. Balances school classes with night-time coding modules.",
  companyUniversity: "Khallikote College, Berhampur",
  linkedinLink: "https://www.linkedin.com/in/subhransu-nayak-4b33383a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "subhransunayak007@gmail.com",
  phoneNumber: "+91 98765 43210"
};

export const staticSkills: Skill[] = [
  // Programming Languages Category
  {
    name: "Python",
    category: "Programming Languages",
    description: "Scripting, automation, and core AI backend logic.",
    icon: "SiPython"
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    description: "Dynamic web interaction and script handling.",
    icon: "SiJavascript"
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    description: "Type-safe scalability for complex applications.",
    icon: "SiTypescript"
  },
  {
    name: "C++",
    category: "Programming Languages",
    description: "High-performance systems and structures.",
    icon: "SiCplusplus"
  },
  {
    name: "C",
    category: "Programming Languages",
    description: "Low-level procedural logic and algorithms.",
    icon: "SiC"
  },
  {
    name: "Kotlin",
    category: "Programming Languages",
    description: "Modern language for Android and multiplatform apps.",
    icon: "SiKotlin"
  },
  {
    name: "Java",
    category: "Programming Languages",
    description: "Enterprise services and object-oriented backend applications.",
    icon: "FaJava"
  },
  {
    name: "PHP",
    category: "Programming Languages",
    description: "Server-side web scripting and legacy configurations.",
    icon: "SiPhp"
  },

  // Frontend Category
  {
    name: "React",
    category: "Frontend",
    description: "Interactive component-based UI engineering.",
    icon: "FaReact"
  },
  {
    name: "HTML&CSS",
    category: "Frontend",
    description: "Modern page structure, layout flow, and responsiveness.",
    icon: "SiHtml5"
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Advanced styling, keyframes, transitions, and layouts.",
    icon: "SiCss"
  },

  // Backend Category
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven runtime environment for servers.",
    icon: "FaNodeJs"
  },
  {
    name: "Ruby on Rails",
    category: "Backend",
    description: "Full-stack framework advocating rapid development.",
    icon: "SiRubyonrails"
  },
  {
    name: "SpringBoot",
    category: "Backend",
    description: "Robust Java microservice frameworks.",
    icon: "SiSpringboot"
  },

  // Databases Category
  {
    name: "MySQL",
    category: "Databases",
    description: "Standard relational database systems.",
    icon: "SiMysql"
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    description: "Advanced open-source relational database structures.",
    icon: "SiPostgresql"
  },

  // Cloud & DevOps Category
  {
    name: "Cloudflare",
    category: "Cloud & DevOps",
    description: "Global proxy routing, caching, and domain security.",
    icon: "SiCloudflare"
  },
  {
    name: "Netlify",
    category: "Cloud & DevOps",
    description: "Static frontend deployments and deployment hooks.",
    icon: "SiNetlify"
  },
  {
    name: "Heroku",
    category: "Cloud & DevOps",
    description: "PaaS cloud deployment for web services.",
    icon: "SiHeroku"
  },
  {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    description: "Container deployment automation and scale systems.",
    icon: "SiKubernetes"
  },
  {
    name: "GCP",
    category: "Cloud & DevOps",
    description: "Google Cloud hosting and API services.",
    icon: "SiGooglecloud"
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    description: "Cloud servers and compute instances.",
    icon: "FaAws"
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    description: "Application container containment and sandboxes.",
    icon: "FaDocker"
  },
  {
    name: "CI/CD",
    category: "Cloud & DevOps",
    description: "Automated pipelines checking integration and builds.",
    icon: "SiImessage"
  },

  // Design & Prototyping Category
  {
    name: "Figma",
    category: "Design & Prototyping",
    description: "Vector prototyping and high-fidelity layout wireframes.",
    icon: "SiFigma"
  },
  {
    name: "Framer",
    category: "Design & Prototyping",
    description: "Dynamic micro-interactions and production page layout.",
    icon: "SiFramer"
  },

  // Development Tools Category
  {
    name: "VS Code",
    category: "Development Tools",
    description: "Advanced editor workspace and development configurations.",
    icon: "VscVscode"
  },
  {
    name: "Git",
    category: "Development Tools",
    description: "Distributed version control system.",
    icon: "SiGit"
  },
  {
    name: "GitHub",
    category: "Development Tools",
    description: "Git hosting service and Actions automated pipeline integrations.",
    icon: "SiGithub"
  },
  {
    name: "Vercel",
    category: "Development Tools",
    description: "Fast web application hosting and serverless systems.",
    icon: "SiVercel"
  },
  {
    name: "Notion",
    category: "Development Tools",
    description: "Project management workspace, wikis, and documentation.",
    icon: "SiNotion"
  },

  // AI & LLMs Category
  {
    name: "ChatGPT",
    category: "AI & LLMs",
    description: "OpenAI language models for programming logic assistance.",
    icon: "SiOpenai"
  },
  {
    name: "Claude",
    category: "AI & LLMs",
    description: "Anthropic's LLM optimized for complex coding and logic analysis.",
    icon: "SiAnthropic"
  },
  {
    name: "Gemini",
    category: "AI & LLMs",
    description: "Google's multimodal model for advanced context reasoning.",
    icon: "SiGooglegemini"
  },
  {
    name: "Ollama",
    category: "AI & LLMs",
    description: "Local runner for open-weight model instances (Llama, Mistral).",
    icon: "SiOllama"
  },
  {
    name: "CodeRabbit",
    category: "AI & LLMs",
    description: "AI code reviews checking pull requests on commits.",
    icon: "SiCoderabbit"
  },
  {
    name: "Hugging Face",
    category: "AI & LLMs",
    description: "Open community platform sharing AI models and datasets.",
    icon: "SiHuggingface"
  },
  {
    name: "Kiro",
    category: "AI & LLMs",
    description: "Vector and structural design layout assistant.",
    icon: "FaBrain"
  },
  {
    name: "Higgsfield",
    category: "AI & LLMs",
    description: "AI model generating video motions and segments.",
    icon: "FaVideo"
  }
];

export const staticMusic = [
  { title: "Hotel California - Eagles", imgSrc: hotelCalifornia, link: "https://open.spotify.com/track/40riOy72G6M1jVW1ptz7uE" },
  { title: "Highway to Hell - AC/DC", imgSrc: acdc, link: "https://open.spotify.com/track/2zYzyldAdmZGb2Uk35515x" },
  { title: "Sweet Child O' Mine - Guns N' Roses", imgSrc: gunsNRoses, link: "https://open.spotify.com/track/7o2CTHR4VTu7vUiZtdIp0F" }
];

export const staticReading = [
  { title: "The Alchemist - Paulo Coelho", imgSrc: alchemist },
  { title: "Rich Dad Poor Dad - Robert Kiyosaki", imgSrc: richDadPoorDad },
  { title: "Atomic Habits - James Clear", imgSrc: atomicHabits }
];

export const staticBlogs = [
  { title: "My Journey into Web Development", excerpt: "Starting programming in 2025 and falling in love with frontends...", link: "https://github.com/SubhransuNayak007" },
  { title: "How to Build a Scraper in Python", excerpt: "A deep dive into StreamGrab video download logic and scraper pipelines...", link: "https://github.com/SubhransuNayak007/StreamGrab" }
];
