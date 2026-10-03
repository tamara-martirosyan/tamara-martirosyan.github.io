import { projects } from "@/lib/projects";

export const site = {
  name: "Tamara Martirosyan",
  role: "Senior Frontend Engineer",
  title: "Senior Frontend Engineer",
  location: "Yerevan, Armenia",
  url: "https://tamara-martirosyan.github.io",
  tagline:
    "Senior Frontend Engineer with 10+ years building high-traffic React and Next.js systems.",
  summary:
    "Senior Frontend Engineer with 10+ years building and scaling high-traffic, performance-critical web applications used by millions of users. Deep expertise in React, Next.js, and TypeScript, with a track record of cutting load times, raising Core Web Vitals scores, and shipping complex, user-facing features end-to-end. Comfortable owning architecture decisions, mentoring engineers, and working directly with backend and product teams to move fast without breaking things.",
  seo: {
    title: "Tamara Martirosyan — Senior Frontend Engineer",
    description:
      "Tamara Martirosyan — Senior Frontend Engineer building scalable React, Next.js, and TypeScript products.",
    ogDescription:
      "Senior Frontend Engineer building scalable React and Next.js products.",
  },
  links: {
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=tamara.martirosyan.93@gmail.com",
    phone: "tel:+37493484953",
    github: "https://github.com/tamara-martirosyan",
    linkedin: "https://www.linkedin.com/in/tamara-martirosyan",
  },
  contact: {
    email: "tamara.martirosyan.93@gmail.com",
    phone: "+374 93 484953",
    phoneE164: "+37493484953",
    phoneDisplay: "(+374) 93 484953",
  },
  focus: [
    {
      title: "Frontend architecture",
      description:
        "Scalable React and Next.js systems, rendering strategies, and patterns that stay maintainable as products grow.",
    },
    {
      title: "Performance at scale",
      description:
        "SSR, code splitting, lazy loading, Core Web Vitals, and UX that stays fast under real production load.",
    },
    {
      title: "AI product interfaces",
      description:
        "Agent workflows, stateful multi-step UIs, and human-centered tools people trust day to day.",
    },
    {
      title: "Technical leadership",
      description:
        "Coding standards, mentoring, cross-functional delivery, and end-to-end ownership from discovery to deploy.",
    },
  ],
  experience: [
    {
      company: "Picsart",
      role: "Senior Software Engineer",
      period: "2023 – May 2026",
      description:
        "Led frontend architecture for high-impact features in a large-scale production environment used by millions of users.",
      highlights: [
        "Built scalable React and Next.js apps, improving performance via SSR and code splitting",
        "Owned the full product lifecycle — discovery, technical design, implementation, testing, and deployment",
        "Established coding standards and review processes that improved code quality and consistency across the team",
        "Mentored engineers and led technical discussions, raising team-wide engineering standards",
        "Partnered closely with backend teams to define API contracts and scalable data flow",
      ],
      projects: [
        {
          title: "Space (performance initiative)",
          description:
            "Drove a performance initiative across a high-traffic product surface, guided by Lighthouse audits and Core Web Vitals.",
          highlights: [
            "Reduced initial load time by ~35% through code splitting and lazy loading",
            "Raised the overall Lighthouse performance score from ~65 to 90+",
            "Cut bundle size by ~25–30% by improving SSR and state management efficiency",
          ],
        },
        {
          title: "AI Agents Platform",
          description:
            "Built the user-facing frontend for the Picsart AI Agent platform — creating, configuring, and running AI-powered agents.",
          highlights: [
            "Designed frontend for agent creation, configuration, and execution, supporting 10+ agent types",
            "Built dynamic, stateful UIs for multi-step agent interactions, cutting task time by ~20%",
            "Integrated with AI/ML services, handling real-time updates for 1000+ sessions",
            "Shipped the platform with the backend team in ~2 months",
          ],
        },
      ],
    },
    {
      company: "Picsart",
      role: "Software Engineer",
      period: "2019 – 2023",
      description:
        "Developed scalable, maintainable frontend features with React and JavaScript in a codebase serving millions of monthly active users.",
      highlights: [
        "Built a reusable component library adopted by 5+ teams, cutting duplicate development effort by ~30%",
        "Contributed to architectural decisions that improved page load performance by ~25%",
        "Partnered with designers and backend engineers to deliver cohesive, high-quality product experiences",
      ],
    },
    {
      company: "Picsart",
      role: "Junior Software Engineer",
      period: "2016 – 2019",
      description:
        "Built responsive, accessible, and maintainable UI components and improved reliability across production systems.",
      highlights: [
        "Refactored legacy CMS components, reducing rendering time by ~40%",
        "Investigated and resolved production issues, contributing to system reliability",
      ],
    },
    {
      company: "Bee Web Systems",
      role: "Junior Frontend Engineer",
      period: "2015 – 2016",
      description:
        "Developed responsive UI components and templates with a focus on cross-browser consistency.",
      highlights: [
        "Ensured consistent user experience across devices and browsers",
        "Maintained and improved existing frontend systems",
      ],
    },
  ],
  volunteering: [
    {
      title: "2026 APRI Forum",
      role: "Volunteer, Support Team",
      organization: "APRI Armenia",
      location: "Yerevan",
      period: "September 2026",
      description:
        "Supported the three-day international policy forum “Sketching the Architecture of Change,” organized by the APRI Armenia think tank at Armenia Marriott Hotel Yerevan.",
      highlights: [
        "Assisted with attendee registration and check-in for policymakers, diplomats, and business and civil-society leaders",
        "Worked with the organizing team to keep the on-site flow smooth and handle on-the-spot requests throughout the event",
      ],
    },
    {
      title: "DigiTec Expo & DigiTec Business Forum",
      role: "Event Support — Registration & Logistics",
      organization: "UATE",
      period: "2014",
      description:
        "Supported the organization of DigiTec Expo and DigiTec Business Forum, Armenia's major annual technology exhibition and business forum, organized by UATE. Involved in the organizational process from preparation through event days.",
      highlights: [
        "Built and maintained the database of invited guests, including partners, business representatives, and other key attendees",
        "Contacted invitees by phone to confirm attendance and share event details",
        "Prepared and produced attendee badges",
        "Managed on-site registration and check-in for expo visitors and forum participants",
        "Assisted with event logistics and coordinated with the organizing team to keep operations running smoothly",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Architecture",
      items: [
        "Scalable frontend systems",
        "Rendering strategies",
        "Performance optimization",
      ],
    },
    {
      category: "State & testing",
      items: [
        "Redux Toolkit",
        "Modern state patterns",
        "Jest",
        "React Testing Library",
        "Playwright",
      ],
    },
    {
      category: "Performance",
      items: ["Core Web Vitals", "SSR", "Lazy loading", "Code splitting"],
    },
    {
      category: "Tooling & delivery",
      items: [
        "Webpack & Babel",
        "ESLint & Prettier",
        "CI/CD",
        "Git, GitHub, GitLab",
      ],
    },
    {
      category: "Ways of working",
      items: ["Technical leadership", "Mentoring", "Agile & Scrum", "Claude", "Cursor"],
    },
  ],
  education: {
    degree: "B.S. in Computer Science",
    school: "European Regional Educational Academy",
    period: "2011 – 2015",
  },
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Performance",
    "AI products",
  ],
  projects,
} as const;
