const PORTFOLIO = {
  meta: {
    name: "Marco Calenda",
    role: "Fullstack Engineer",
    company: "BLUE Reply",
    year: "2026",
  },

  contact: {
    email: "marco.calenda14@gmail.com",
    phone: "+39 320 268 9148",
    phoneHref: "+393202689148",
    web: "mcalenda.github.io",
    webHref: "https://mcalenda.github.io",
    github: "@mcalenda"
  },

  ticker: [
    "ANGULAR", "FLUTTER", "JAVA SPRING", "REACT", "VUE.JS", "NEXT.JS",
    "PYTHON / FLASK", "TYPESCRIPT", "POSTGRESQL", "DOCKER", "JENKINS", "QUANTUM NLP"
  ],

  experience: [
    {
      period: "Feb 2024 — Present",
      current: true,
      title: "Fullstack Engineer",
      company: "BLUE Reply",
      location: "Milan, IT",
      stack: ["Angular", "Java Spring", "Flutter", "Vue.js", "React", "Python", "PHP", "SQL"],
      bullets: [
        { strong: "Financial services platforms", rest: " — built features in Angular + Java Spring with established design patterns; led large-scale upgrade of components and frameworks." },
        { strong: "Cross-platform mobile app", rest: " in Flutter for iOS and Android — webview, fingerprint auth, geolocation; managed App Store / Play Store releases and supported teams on UI/UX accessibility." },
        { strong: "Internal Generative AI tool", rest: " — React + Flask + Express stack that turns prompts into mockups and translates code across stacks." },
        { strong: "Consumer-loans onboarding", rest: " — Vue.js front-end translating Adobe XD into responsive UI; updated CSS/JS libraries and trimmed build pipeline." },
        { strong: "Automotive AMS", rest: " — fixed production issues under SLA, improved PHP performance, led change requests." },
        { strong: "Solution design & estimation", rest: " — functional/technical docs, microservice architectures, vendor coordination for service integration." },
        { strong: "DevOps", rest: " — Git, Jenkins automated builds & deploys, JIRA tracking." }
      ]
    }
  ],

  projects: [
    {
      num: "01",
      tag: "Master Thesis",
      name: { plain: "QNLP for ", italic: "NFR Classification" },
      meta: "2023 · Research · 110/110 cum laude",
      desc: "Research evaluating quantum NLP models against shallow ML and classical text vectorization techniques on the task of non-functional requirements classification.",
      stack: ["Python", "Quantum NLP", "Scikit-learn", "PyTorch"],
      art: "qnlp",
      url: "https://github.com/MCalenda/Master-Thesis"
    },
    {
      num: "02",
      tag: "Academic · Project Manager",
      name: { plain: "Heart", italic: "Care" },
      meta: "Web app · SCRUM · 2022",
      desc: "Web application for cardiology patient management. Owned task scheduling, risk management, HR allocation following Agile/SCRUM. Delivered with React, Java Spring, MySQL.",
      stack: ["React", "Java Spring", "MySQL", "Agile"],
      art: "heart",
      url: "https://github.com/mcalenda/heartcare"
    },
    {
      num: "03",
      tag: "Academic · DApp",
      name: { plain: "Fund", italic: "MeNow" },
      meta: "Ethereum dApp · Data Security course",
      desc: "Decentralized crowdfunding application built on Ethereum. Smart contracts in Solidity orchestrated through the Truffle Suite, React front-end consuming on-chain state via Web3.",
      stack: ["Solidity", "Truffle", "React", "Web3"],
      art: "fund",
      url: "https://github.com/mcalenda/fundmenow"
    },
    {
      num: "04",
      tag: "Open Source",
      name: { plain: "c", italic: "ASpER" },
      meta: "Plug-in · Code smell detection",
      desc: "Maintenance work on cASpER — automated code-smell detection and refactoring plug-in. Tracked change requests end-to-end: proposal, reverse engineering, impact analysis, development, testing.",
      stack: ["Java", "Refactoring", "Static Analysis"],
      art: "casper",
      url: "https://github.com/mcalenda/cASpER"
    }
  ],

  education: [
    {
      period: "Sep 2021 — Dec 2023",
      degree: "MSc in Computer Science",
      school: "University of Salerno · Salerno, IT",
      grade: "110 / 110 cum laude",
      focusLabel: "Curriculum — Software Engineering for IT Management",
      focus: [
        "Artificial Intelligence & NLP",
        "Software Engineering for AI",
        "Project Management",
        "Software Maintenance and Evolution"
      ],
      thesis: {
        plain: "Thesis defended in Software Engineering and AI — ",
        italic: "“Exploring the potential of quantum NLP for non-functional requirements classification”."
      }
    },
    {
      period: "Sep 2016 — Sep 2020",
      degree: "BSc in Computer Science",
      school: "University of Salerno · Salerno, IT",
      grade: null,
      focusLabel: "Foundations",
      focus: [
        "Logic, Mathematics & Statistics",
        "Algorithms & Data Structures",
        "Operating Systems & Networks",
        "Software Engineering"
      ],
      thesis: null
    }
  ],

  skills: [
    {
      cat: "Frameworks & Libraries",
      primary: ["Angular", "React", "Vue.js", "Next.js", "Flutter", "Java Spring"],
      secondary: ["Flask", "Express", "Bootstrap", "Tailwind"]
    },
    {
      cat: "Languages",
      primary: ["TypeScript", "JavaScript", "Java", "Python"],
      secondary: ["HTML / CSS", "PHP", "C", "Solidity"]
    },
    {
      cat: "Data",
      primary: ["MySQL", "PostgreSQL", "MongoDB"],
      secondary: ["MS Access"]
    },
    {
      cat: "Tooling & Platform",
      primary: ["Git", "Docker", "Jenkins", "GitHub Actions"],
      secondary: ["Travis CI", "Kafka", "Gradle", "Maven", "Gulp", "JIRA", "Trello", "Slack"]
    },
    {
      cat: "Methodologies",
      primary: ["Microservices", "REST / SOAP APIs", "Agile / SCRUM", "CI/CD"],
      secondary: ["Async Events", "JWT"]
    }
  ]
};
