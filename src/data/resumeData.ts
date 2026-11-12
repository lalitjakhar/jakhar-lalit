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
    occupation: "Frontend Engineer",
    bio: "I’m Lalit Jakhar, a frontend developer based in Jaipur, India. I build responsive web experiences with React, Next.js, and TypeScript, partnering with product and design teams to turn ideas into polished, production-ready interfaces.",
    contactmessage:
      "Have a product, website, or frontend role in mind? Tell me what you’re building. I’m happy to talk through the brief, the team, and how I could contribute.",
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
      "A practical toolkit for building accessible, responsive interfaces—from component architecture through launch and ongoing refinement.",
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
          "Build and refine the Kroolo corporate website, presenting its AI-powered WorkOS, workflows, and productivity features. Develop responsive pages with Next.js, TypeScript, and Tailwind CSS, with attention to clear information architecture and on-page SEO.",
      },
      {
        company: "Zyneto Global Technologies",
        title: "Frontend Developer",
        years: "February 2024 - Present",
        description:
          "Develop responsive React and Next.js experiences with design and product teams. Selected work includes Zyneto’s corporate site, Cheelgadi in Jaipur, and National Distribution Company in Oman, using TypeScript, Tailwind CSS, and Material UI across projects.",
      },
      {
        company: "GOHASHINCLUDE PVT. LTD.",
        title: "Frontend Developer",
        years: "September 2022 - February 2024",
        description:
          "Built and maintained frontend components with HTML, CSS, JavaScript, and React. Collaborated with backend developers to integrate REST APIs and deliver responsive web interfaces.",
      },
    ],
    skills: [
      {
        name: "React.js",
        description:
          "Build reusable, component-driven interfaces for interactive web applications.",
        image: "react.svg",
      },
      {
        name: "Next.js",
        description:
          "Create production-ready React experiences with routing, rendering, and framework-level optimizations.",
        image: "nextjs.svg",
      },
      {
        name: "TypeScript",
        description:
          "Add clear types to components, props, and application data for maintainable code.",
        image: "typescript.svg",
      },
      {
        name: "JavaScript",
        description:
          "Use modern JavaScript to build clean, reliable frontend interactions.",
        image: "javascript.svg",
      },
      {
        name: "Performance Optimization",
        description:
          "Consider page weight, image delivery, and rendering behavior when building for the web.",
        image: "performance.svg",
      },
      {
        name: "HTML5",
        description:
          "Structure content with semantic, accessible HTML elements.",
        image: "html.svg",
      },
      {
        name: "CSS",
        description:
          "Create responsive layouts, visual systems, and considered interface details.",
        image: "css.svg",
      },
      {
        name: "Bootstrap",
        description:
          "Use Bootstrap components and grid utilities to build responsive layouts.",
        image: "bootstrap.svg",
      },
      {
        name: "Tailwind CSS",
        description:
          "Build consistent, responsive interfaces with utility-first styling.",
        image: "tailwind.svg",
      },
      {
        name: "Material-UI",
        description:
          "Apply Material UI components and theming to product interfaces.",
        image: "material_ui.svg",
      },
      {
        name: "SEO Optimization",
        description:
          "Use semantic page structure, metadata, and structured data to support discoverability.",
        image: "seo-optimization.svg",
      },
      {
        name: "Git",
        description:
          "Track changes and collaborate through version-controlled workflows.",
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
