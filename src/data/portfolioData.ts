export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  highlightMetric?: string;
  category: 'ML & AI' | 'Web Development' | 'Cloud & Systems';
  githubUrl: string;
  hasVerifiedCode: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  focusAreas: string[];
  summary: string;
  technologies: string[];
  certificateUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  pdfUrl: string;
  category: string;
  dateAwarded?: string;
  credentialId?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  type: 'Hackathon' | 'Academic' | 'Recognition';
  description: string;
  badgeText: string;
  certificateUrl?: string;
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  institution: string;
  headline: string;
  description: string;
  keyResponsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  grade?: string;
  details?: string;
}

export const PERSONAL_INFO = {
  name: "Rukia Juhi S",
  heroGreeting: "Hi, I'm Juhi.",
  subtitle: "Computer Science Engineer • AI & Data Enthusiast",
  shortStatement: "Building practical solutions with code, data and AI.",
  positioning: "Computer Science student focused on Web Development, Python, Data Analytics and AI/ML.",
  summary:
    "Final-year Computer Science Engineering student at Hindustan Institute of Technology and Science, Chennai, with hands-on experience in web development, Python, data analytics, machine learning and AI-based applications through internships, projects and hackathons. Interested in building practical, user-focused software solutions while strengthening problem-solving and core computer science skills.",
  college: "Hindustan Institute of Technology and Science (HITS), Chennai",
  degree: "B.Tech – Computer Science and Engineering",
  year: "Final Year",
  email: "juhisherif@gmail.com",
  phone: "+91 7339330127",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/rukia-juhi/",
  github: "https://github.com/Rukia-juhi",
  resumePdfUrl: "/My-Portfolio/Rukia_Juhi_S_Resume.pdf",
  profilePhotoUrl: "/My-Portfolio/profile.jpg",
  cgpa: "9.70 / 10",
};

export const HIGHLIGHT_STATS = [
  {
    title: "Final Year CSE Student",
    description: "Hindustan Institute of Tech & Science, Chennai",
    icon: "GraduationCap",
  },
  {
    title: "Multiple Internships",
    description: "Hands-on experience in Data Science & Web Development",
    icon: "Briefcase",
  },
  {
    title: "Multiple Featured Projects",
    description: "End-to-end ML models, Web platforms & Explainable AI",
    icon: "FolderGit2",
  },
  {
    title: "Hackathon Experience",
    description: "24-hr university hackathon & technical challenge participation",
    icon: "Trophy",
  },
];

export const CURRENTLY_EXPLORING = [
  "Advanced Web Development",
  "Data Structures & Algorithms",
  "AI/ML Workflows",
  "Data Analytics",
  "SQL & Schema Design",
  "Core Computer Science",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Foundation languages used for algorithmic problem solving and system development.",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    category: "Web Development",
    description: "Frontend and backend frameworks for building responsive, modern user interfaces and RESTful APIs.",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Flask" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Data & Machine Learning",
    description: "Analytical pipelines, predictive modeling, statistical preprocessing, and data visualization.",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Scikit-learn" },
      { name: "Machine Learning" },
      { name: "Data Analytics" },
      { name: "Data Visualization" },
    ],
  },
  {
    category: "Databases",
    description: "Relational and document storage solutions for structured and unstructured application data.",
    skills: [
      { name: "SQLite" },
      { name: "MongoDB" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Core software engineering fundamentals underpinning performant and maintainable architectures.",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "DBMS" },
      { name: "Computer Networks" },
    ],
  },
  {
    category: "Tools & Platforms",
    description: "Modern developer tooling, version control, interactive notebooks, and business intelligence.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Google Colab" },
      { name: "Jupyter Notebook" },
      { name: "Tableau" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "gradtwin",
    role: "Data Science Intern",
    company: "Gradtwin Services (OPC) Pvt. Ltd.",
    location: "Remote",
    summary:
      "Engaged in end-to-end data processing pipelines and machine learning model development using Python, gaining rigorous practical experience in core AI/ML workflows and model evaluation.",
    focusAreas: [
      "Machine learning model development and algorithm selection",
      "Python-based development for data preprocessing, EDA, and feature engineering",
      "Created data visualizations using Matplotlib to present analytical insights",
      "Practical implementation and validation of machine learning workflows",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Machine Learning"],
    certificateUrl: "/My-Portfolio/certificates/gradtwin-internship.pdf",
  },
  {
    id: "marcello",
    role: "Web Development Intern",
    company: "Marcello Tech Institute",
    location: "Hybrid",
    summary:
      "Contributed to full-stack web application engineering, building responsive client-side components with modern HTML, CSS, JavaScript, and integrating with Flask backend APIs.",
    focusAreas: [
      "Responsive and intuitive web interface development using modern CSS and JavaScript",
      "API design and seamless backend integration with Flask REST APIs",
      "Application testing, performance optimization, and debugging",
      "Collaborative version control and deployment workflow exposure",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Flask", "REST APIs"],
    certificateUrl: "/My-Portfolio/certificates/marcello-web-dev.pdf",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "disaster-forecasting",
    title: "Disaster Forecasting & Emergency Alert System",
    subtitle: "Predictive Environmental Hazard Analytics",
    tagline: "Machine learning application for climate hazard forecasting and real-time emergency alert triggers.",
    description:
      "Developed a machine learning-based application for disaster forecasting and emergency alerts using environmental and regional data such as temperature, humidity, rainfall and wind conditions.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Random Forest",
    ],
    keyFeatures: [
      "CSV dataset upload for dynamic multi-region climate data ingestion",
      "Interactive parameter controls for simulating custom weather scenarios",
      "Exploratory data visualization and real-time trend plots",
      "Random Forest machine learning prediction engine for disaster risk assessment",
      "Automated hazard severity classification and emergency alert generation",
      "End-to-end data preprocessing and statistical feature engineering pipeline",
      "Comprehensive model evaluation, cross-validation, and hyperparameter tuning",
    ],
    category: "ML & AI",
    githubUrl: "https://github.com/Rukia-juhi/Disaster-Forecasting-And-Emergency-Alert-System",
    hasVerifiedCode: true,
  },
  {
    id: "career-adviser",
    title: "Career Adviser System",
    subtitle: "Web-based Skill Mapping & Guidance Platform",
    tagline: "Structured career navigation platform mapping user skills to tailored career pathway recommendations.",
    description:
      "Developed a web-based career adviser system that helps users manage profiles, map their skills and explore suitable career recommendations through an intuitive web interface.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
    keyFeatures: [
      "Secure user authentication and credential management",
      "Comprehensive user profile creation and educational background management",
      "Interactive skill mapping engine correlating competencies with industry requirements",
      "Algorithmic career recommendations based on skill affinity scoring",
      "Persistent relational database integration powered by SQLite",
      "Clean, responsive web-based user interface designed for effortless navigation",
    ],
    category: "Web Development",
    githubUrl: "https://github.com/Rukia-juhi/Career-Adviser-System",
    hasVerifiedCode: true,
  },
  {
    id: "phishguard-xai",
    title: "PhishGuardXAI",
    subtitle: "Explainable AI Phishing URL Detection",
    tagline: "High-precision phishing URL classification powered by LightGBM and Explainable AI interpretability.",
    description:
      "Contributed to an explainable AI-based phishing detection system, including the development and integration of a LightGBM-based machine learning model delivering interpretable cybersecurity insights.",
    technologies: [
      "Python",
      "LightGBM",
      "Machine Learning",
      "Explainable AI",
      "Data Processing",
    ],
    highlightMetric: "91.10% Model Accuracy (Evaluation Result)",
    keyFeatures: [
      "Feature extraction and lexical analysis of suspicious web URLs",
      "LightGBM gradient-boosting classifier for robust malicious URL detection",
      "Explainable AI (XAI) methodology to illuminate why a URL was flagged",
      "Documented model accuracy of approximately 91.10% from project evaluation",
      "Data processing pipeline handling imbalanced cybersecurity threat datasets",
      "Modular model integration ready for web extension or security gateway pipelines",
    ],
    category: "ML & AI",
    githubUrl: "https://github.com/Rukia-juhi/PhishGuardXAI",
    hasVerifiedCode: true,
  },
  {
    id: "key-to-mind",
    title: "Key To Mind",
    subtitle: "Mental Wellbeing & Interactive De-stress Suite",
    tagline: "Full-featured wellbeing web application combining clinical stress assessments with calming interactive micro-apps.",
    description:
      "Developed a wellbeing-focused application using Zoho Catalyst that combines stress assessment with interactive activities designed to provide users with engaging ways to manage and understand their stress levels.",
    technologies: [
      "Zoho Catalyst",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    keyFeatures: [
      "5-question structured psychological stress assessment questionnaire",
      "Algorithmic stress score calculation with Low / Moderate / High classification",
      "Memory Match card cognitive concentration game",
      "Interactive tactile Bubble Pop relaxation widget",
      "Digital Zen Garden with customizable relaxing visuals",
      "Creative Doodle Pad with stroke controls for expressive drawing",
      "Classic Snake recreation for mindful focus shifts",
      "Color-based Water Sort puzzle game",
      "Dedicated Psychiatrist & Professional Help information directory",
    ],
    category: "Cloud & Systems",
    githubUrl: "https://github.com/Rukia-juhi/Key-To-Mind",
    hasVerifiedCode: true,
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "university-topper",
    title: "University Topper — 1st Rank Holder",
    event: "Hindustan Institute of Technology and Science (HITS)",
    type: "Academic",
    badgeText: "Academic Excellence",
    description:
      "Consecutively awarded the prestigious Proficiency Certificate across all semesters to date for maintaining the 1st Rank in the Department of Computer Science and Engineering.",
  },
  {
    id: "intellithon-25",
    title: "HITS Intellithon'25 Participant",
    event: "24-Hour National Level Hackathon, HITS",
    type: "Hackathon",
    badgeText: "24h Hackathon",
    description:
      "Participated in the 24-hour National Level Hackathon organized by the Department of Intelligent Systems and Cybersecurity at HITS, collaborating to prototype and present a technical software solution.",
    certificateUrl: "/My-Portfolio/certificates/intellithon-25.pdf",
  },
  {
    id: "iaspire",
    title: "Iaspire — Go for Gold",
    event: "Innovation & Technical Initiative",
    type: "Recognition",
    badgeText: "Gold Level Achiever",
    description:
      "Successfully unlocked Gold level during the Go for Gold contest in iAspire, demonstrating technical aptitude, creative problem-solving, and competitive execution.",
    certificateUrl: "/My-Portfolio/certificates/iaspire-gold.pdf",
  },
];

export const LEADERSHIP: LeadershipRole = {
  id: "iet-hits-head-rd",
  role: "Head of Research & Development",
  organization: "IET Student Chapter",
  institution: "Hindustan Institute of Technology and Science (HITS), Chennai",
  headline: "IET student chapter at HITS selected as Head of R&D",
  description:
    "Selected to lead the Research & Development wing of the Institution of Engineering and Technology (IET) student chapter at HITS. Directing student-led technical initiatives, spearheading research-oriented workshops, and fostering cross-disciplinary collaboration in emerging technologies such as Artificial Intelligence, Data Science, and Modern Software Engineering.",
  keyResponsibilities: [
    "Leading research and development initiatives, project hackathons, and ideation tracks for engineering students.",
    "Mentoring junior peers on core computer science competencies, algorithmic problem solving, and research methodologies.",
    "Curating technical symposia, speaker sessions, and project incubation workshops in collaboration with faculty and industry mentors.",
    "Promoting an open engineering culture that translates theoretical coursework into impactful, practical technical solutions.",
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "hackerrank-sql",
    title: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    category: "Databases & Languages",
    dateAwarded: "23 Oct, 2025",
    credentialId: "202CB697FF53",
    pdfUrl: "/My-Portfolio/certificates/hackerrank-sql.pdf",
  },
  {
    id: "mongodb-basics",
    title: "MongoDB Basics for Students",
    issuer: "MongoDB University",
    category: "Databases & Languages",
    dateAwarded: "06-21-2025",
    credentialId: "MDBtksqo47sop",
    pdfUrl: "/My-Portfolio/certificates/mongodb-basics.pdf",
  },
  {
    id: "deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    category: "Data Analytics & Forensics",
    dateAwarded: "December 21st, 2025",
    pdfUrl: "/My-Portfolio/certificates/deloitte-data-analytics.pdf",
  },
  {
    id: "coursera-genai",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud (via Coursera)",
    category: "AI & Machine Learning",
    dateAwarded: "Aug 27, 2025",
    credentialId: "0XKR01GKUYSV",
    pdfUrl: "/My-Portfolio/certificates/coursera-genai.pdf",
  },
  {
    id: "coursera-data-analysis",
    title: "Introduction to Data Analysis using Microsoft Excel",
    issuer: "Coursera",
    category: "Data Analytics",
    dateAwarded: "Dec 28, 2025",
    credentialId: "7M483SBFYJ15",
    pdfUrl: "/My-Portfolio/certificates/coursera-data-analysis.pdf",
  },
  {
    id: "mycaptain-python",
    title: "Python Programming Course",
    issuer: "MyCaptain",
    category: "Programming Foundations",
    dateAwarded: "February 2024",
    pdfUrl: "/My-Portfolio/certificates/mycaptain-python.pdf",
  },
  {
    id: "gradtwin-cert",
    title: "Data Science Internship Certificate",
    issuer: "Gradtwin Services (OPC) Pvt. Ltd.",
    category: "Internship Credential",
    dateAwarded: "13th October 2025",
    pdfUrl: "/My-Portfolio/certificates/gradtwin-internship.pdf",
  },
  {
    id: "marcello-cert",
    title: "Web Development Internship Certificate",
    issuer: "Marcello Tech Institute",
    category: "Internship Credential",
    dateAwarded: "21.10.2024",
    credentialId: "MTINTWD2110296",
    pdfUrl: "/My-Portfolio/certificates/marcello-web-dev.pdf",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Hindustan Institute of Technology and Science, Chennai",
    period: "2023 – Present",
    status: "Final Year",
    grade: "CGPA: 9.70 / 10",
  },
  {
    degree: "Higher Secondary Education (SSCE)",
    institution: "The Rajas International School (CBSE), Kanyakumari",
    period: "2022 – 2023",
    status: "Completed",
    grade: "80%",
  },
  {
    degree: "Secondary Education (AISSE)",
    institution: "John’s Central School (CBSE), Anjugramam",
    period: "2018 – 2019",
    status: "Completed",
    grade: "88.40%",
  },
];
