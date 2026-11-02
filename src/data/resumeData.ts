export interface Address {
  city: string;
  state: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface MainData {
  name: string;
  occupation: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: Address;
  resumedownload: string;
  social: Social[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface Work {
  company: string;
  title: string;
  years: string;
  description: string;
}

export interface Skill {
  name: string;
  description: string;
  image: string;
}

export interface ResumeData {
  skillmessage: string;
  education: Education[];
  work: Work[];
  skills: Skill[];
}

export interface Testimonial {
  text: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}

export interface ResumeDataStructure {
  main: MainData;
  resume: ResumeData;
  testimonials: TestimonialsData;
}

export const resumeData: ResumeDataStructure = {
  main: {
    name: "Lalit Jakhar",
    occupation: "Frontend Developer",
    bio: "I am a Frontend Developer passionate about crafting modern, impactful web experiences. Currently working at Zyneto Global Technologies, I focus on responsive and engaging solutions, especially for the recruiting and ecommerce industries. My expertise includes React.js, Next.js, Tailwind CSS, and Material-UI. I continuously explore new technologies and innovative solutions to enhance user interactions.",
    contactmessage:
      "Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you. Reach out by email or use the form below.",
    email: "lalit25jakhar@gmail.com",
    phone: "+91 8690843263",
    address: {
      city: "Jaipur",
      state: "Rajasthan",
    },
    resumedownload:
      "https://drive.google.com/file/d/1pO_q5OOA08YJTT3WHtadr_bIFeJFdRKa/view?usp=sharing",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/lalitjakhar/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/lalitjakhar_/",
      },
      {
        name: "github",
        url: "https://github.com/lalitjakhar",
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/lalit.choudhary25",
      },
      {
        name: "twitter",
        url: "https://x.com/lalit_jakhar25",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/@lalit_jakhar_25",
      },
    ],
  },
  resume: {
    skillmessage:
      "I am passionate about frontend development and always eager to learn new technologies. Here are some key skills:",
    education: [
      {
        school: "Maharishi Arvind Institute of Science & Management",
        degree: "BCA, Computer Science",
        graduated: "June 2025",
        description:
          "BCA in Computer Science, with a focus on frontend development.",
      },
    ],
    work: [
      {
        company: "Kroolo",
        title: "Frontend Web Developer",
        years: "Oct 2024 - Present",
        description:
          "At Kroolo, I contribute to building innovative, user-centric web applications that empower productivity through AI-driven solutions. My role involves designing and implementing responsive, intuitive interfaces using modern frameworks. Collaborating closely with cross-functional teams, I ensure seamless integration of AI features into the platform, enhancing user workflows and streamlining complex tasks. My work focuses on optimizing performance, accessibility, and scalability, enabling Kroolo to deliver a cutting-edge experience to its users. On kroolo.com I build the corporate site in Next.js, TypeScript, and Tailwind CSS, including SEO audits and a structure that presents the AI WorkOS clearly.",
      },
      {
        company: "Zyneto Global Technologies",
        title: "Frontend Developer",
        years: "February 2024 - Present",
        description:
          "Develop and maintain responsive web applications using React.js and Next.js. Collaborate with the design team to implement UI/UX designs using Material-UI and Tailwind CSS. Key skills: React.js, Next.js, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Material-UI, Web Performance Optimization. Client sites include the Zyneto corporate website, Cheelgadi (a vegetarian restaurant, hotel, and wedding venue in Jaipur), and NDC Oman.",
      },
      {
        company: "GOHASHINCLUDE PVT. LTD.",
        title: "Frontend Developer",
        years: "September 2022 - February 2024",
        description:
          "Built and maintained front-end components using HTML, CSS, JavaScript, and React.js. Worked closely with backend developers to integrate RESTful APIs. Key skills: HTML, CSS, JavaScript, Bootstrap, React.js, Next.js.",
      },
    ],
    skills: [
      {
        name: "React.js",
        description:
          "Experienced in building dynamic and responsive web applications using React.js.",
        image: "react.svg",
      },
      {
        name: "Next.js",
        description:
          "Skilled in Next.js for server-side rendering and optimized React-based applications.",
        image: "nextjs.svg",
      },
      {
        name: "TypeScript",
        description:
          "Expert in TypeScript for type-safe development, improving code quality and maintainability.",
        image: "typescript.svg",
      },
      {
        name: "JavaScript",
        description:
          "Proficient in JavaScript, including modern ES6+ syntax for writing clean, maintainable code.",
        image: "javascript.svg",
      },
      {
        name: "Performance Optimization",
        description:
          "Experienced in optimizing & improving performance and load times.",
        image: "performance.svg",
      },
      {
        name: "HTML5",
        description:
          "Strong foundation in HTML5 for structuring and presenting web content effectively.",
        image: "html.svg",
      },
      {
        name: "CSS",
        description:
          "Expertise in CSS for styling and creating visually appealing web layouts.",
        image: "css.svg",
      },
      {
        name: "Bootstrap",
        description:
          "Experienced in using Bootstrap for responsive and mobile-first web designs.",
        image: "bootstrap.svg",
      },
      {
        name: "Tailwind CSS",
        description:
          "Proficient in Tailwind CSS for utility-first styling and custom design implementations.",
        image: "tailwind.svg",
      },
      {
        name: "Material-UI",
        description:
          "Skilled in Material-UI for building cohesive and visually consistent UI components.",
        image: "material_ui.svg",
      },
      {
        name: "SEO Optimization",
        description:
          "Proficient in SEO optimization and search engine rankings.",
        image: "seo-optimization.svg",
      },
      {
        name: "Git",
        description:
          "Proficient in using Git for version control and collaboration.",
        image: "github.svg",
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        text: "Working with Lalit has been an absolute pleasure. His expertise in React.js and Next.js is exceptional, and he consistently delivers high-quality, performant solutions. What sets him apart is his attention to detail and his ability to translate complex requirements into elegant, user-friendly interfaces. He's a true professional who goes above and beyond to ensure project success.",
      },
      {
        text: "Lalit is one of the most dedicated frontend developers I've had the opportunity to collaborate with. His proficiency in modern frameworks like Next.js and his deep understanding of responsive design principles make him an invaluable asset to any team. He communicates effectively, meets deadlines consistently, and always maintains a positive, solution-oriented approach to challenges.",
      },
      {
        text: "Lalit's commitment to excellence is evident in every project he undertakes. He combines strong technical knowledge with a collaborative spirit, making him an ideal team member. His ability to quickly adapt to new technologies and his focus on writing scalable, efficient code has consistently impressed both clients and colleagues. He's a developer you can always count on.",
      },
      {
        text: "Lalit brings a unique combination of technical expertise and creative problem-solving to every project. His work with React.js and Next.js has significantly improved our application's performance and user experience. He's proactive, detail-oriented, and always willing to share knowledge with the team. Working with him has been a great experience.",
      },
      {
        text: "What I appreciate most about Lalit is his dedication to writing clean, maintainable code. His understanding of modern web development practices, especially with TypeScript and Next.js, has helped us build more robust applications. He's reliable, communicates well, and consistently delivers quality work on time.",
      },
      {
        text: "Lalit's ability to transform design concepts into fully functional, responsive web applications is impressive. His proficiency with Tailwind CSS and Material-UI allows him to create beautiful interfaces that are both aesthetically pleasing and highly functional. He's a valuable team member who always strives for excellence.",
      },
    ],
  },
};
