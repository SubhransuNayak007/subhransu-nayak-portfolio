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
    profileSummary: "12th-class secondary school science student from Berhampur, Odisha. Actively building frontend and backend foundations, combining logical structures with clean user experiences. Seeking opportunities to collaborate and build the next generation of web applications.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/posts/subhransu-nayak-4b33383a7_i-built-an-youtube-comment-automation-website-ugcPost-7469356091273986049-OHQF/"
  },
  developer: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" },
    headline: "Subhransu Nayak // Dev Profile",
    profileSummary: "Began learning programming and software logic in Python in 2025. Fell in love with web layouts. Actively training on React, Node.js, Python, Java, C#, and C. Balances daytime secondary school classes with night-time coding modules.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/posts/subhransu-nayak-4b33383a7_i-built-an-youtube-comment-automation-website-ugcPost-7469356091273986049-OHQF/"
  },
  stalker: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif" },
    headline: "Stalking Subhransu Nayak?",
    profileSummary: "Here's what you need to know: Passionate beginner developer, quick learner, and secondary school student who spends nights building high-performance downloaders and simulator platforms.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/posts/subhransu-nayak-4b33383a7_i-built-an-youtube-comment-automation-website-ugcPost-7469356091273986049-OHQF/"
  },
  adventure: {
    backgroundImage: { url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" },
    headline: "Subhransu Nayak's Adventures",
    profileSummary: "When not attending science lectures, I'm diving into Python scrapers, C# logic pipelines, or learning about server automation modules. Exploring the frontiers of web engineering and AI daily.",
    resumeLink: { url: "/Subhransu_Nayak_Resume.docx" },
    linkedinLink: "https://www.linkedin.com/posts/subhransu-nayak-4b33383a7_i-built-an-youtube-comment-automation-website-ugcPost-7469356091273986049-OHQF/"
  }
};

export const staticWorkPermit: WorkPermit = {
  visaStatus: "Student (Secondary Education)",
  expiryDate: new Date("2028-06-30"),
  summary: "Secondary School Science Student in Berhampur, Odisha, India. Started coding in 2025.",
  additionalInfo: "Seeking junior/intern frontend developer roles and collaborative open-source assignments. Legally eligible to work on remote contracts/internships."
};

export const staticTimeline: TimelineItem[] = [
  {
    timelineType: 'education',
    name: "Higher Secondary Science Education",
    title: "12th-Class Science Student",
    techStack: "Physics, Chemistry, Mathematics, Computer Science",
    summaryPoints: [
      "Currently pursuing secondary school science classes in Berhampur, Odisha.",
      "Balances daytime formal school lectures with night-time coding modules.",
      "Developing basic software concepts, logical thinking, and scientific foundations."
    ],
    dateRange: "2024 - Present"
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
  title: "Secondary School Science Student & Aspiring Developer",
  summary: "12th-class secondary school science student from Berhampur, Odisha. Started learning programming in 2025 and fell in love with web layouts. Balances school classes with night-time coding modules.",
  companyUniversity: "Science Student, Berhampur",
  linkedinLink: "https://www.linkedin.com/posts/subhransu-nayak-4b33383a7_i-built-an-youtube-comment-automation-website-ugcPost-7469356091273986049-OHQF/",
  email: "subhransunayak007@gmail.com",
  phoneNumber: "+91 98765 43210"
};

export const staticSkills: Skill[] = [
  // Backend Category
  {
    name: "Ruby on Rails",
    category: "Backend",
    description: "Backend Framework",
    icon: "SiRubyonrails"
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Backend Language",
    icon: "SiPhp"
  },
  {
    name: "Java",
    category: "Backend",
    description: "Object-Oriented Programming Language",
    icon: "FaJava"
  },
  {
    name: "SpringBoot",
    category: "Backend",
    description: "Java Framework",
    icon: "SiSpringboot"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Backend Runtime",
    icon: "FaNodeJs"
  },

  // Databases Category
  {
    name: "MySQL",
    category: "Databases",
    description: "Relational Database",
    icon: "SiMysql"
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    description: "Relational Database",
    icon: "SiPostgresql"
  },

  // Frontend Category
  {
    name: "HTML&CSS",
    category: "Frontend",
    description: "Web Markup and Styling",
    icon: "SiHtml5"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Scripting Language",
    icon: "SiJavascript"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe JavaScript",
    icon: "SiTypescript"
  },
  {
    name: "React",
    category: "Frontend",
    description: "Frontend Framework",
    icon: "FaReact"
  },

  // Cloud & DevOps Category
  {
    name: "CI/CD",
    category: "Cloud & DevOps",
    description: "Continuous Integration & Delivery",
    icon: "SiImessage"
  },
  {
    name: "Netlify",
    category: "Cloud & DevOps",
    description: "Frontend Deployment Platform",
    icon: "SiNetlify"
  },
  {
    name: "Heroku",
    category: "Cloud & DevOps",
    description: "Cloud Platform for Apps",
    icon: "SiHeroku"
  },
  {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    description: "Container Orchestration",
    icon: "SiKubernetes"
  },
  {
    name: "GCP",
    category: "Cloud & DevOps",
    description: "Google Cloud Platform",
    icon: "SiGooglecloud"
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    description: "Cloud Platform",
    icon: "FaAws"
  },

  // Other Tools & Practices Category
  {
    name: "Docker",
    category: "Other Tools & Practices",
    description: "Containerization",
    icon: "FaDocker"
  },
  {
    name: "Git",
    category: "Other Tools & Practices",
    description: "Version Control",
    icon: "SiGit"
  },
  {
    name: "Vercel",
    category: "Other Tools & Practices",
    description: "Deployment Platform",
    icon: "SiVercel"
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
