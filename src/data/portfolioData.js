export const portfolioData = {
  personal: {
    name: "Hamza Wahmane",
    title: "Full-Stack Developer & Software Engineer",
    subheading: "Student / Alumnus at 1337 Coding School (42 Network)",
    bio: "I'm a passionate Software Engineer and Full-Stack Developer with a deep foundation in both low-level systems programming and modern web technologies. From architecting real-time web applications with React and Socket.io to optimizing concurrent algorithms and Unix systems in C/C++, I love solving complex technical challenges.",
    location: "Morocco",
    status: "Open to opportunities",
    avatar: "https://avatars.githubusercontent.com/u/133402595?v=4",
    email: "hamzawahmane.contact@gmail.com", // customizable
  },
  socials: {
    github: "https://github.com/Wahmane-Hamza",
    linkedin: "https://www.linkedin.com/in/hamza-wahmane-8318493b5/",
    twitter: "https://twitter.com/WahmaneHamza",
    instagram: "https://www.instagram.com/wahmane.hamza",
  },
  stats: [
    { label: "Public Repositories", value: "25+" },
    { label: "Core Languages", value: "C, C++, JS, Python" },
    { label: "Coding School", value: "1337 (42 Network)" },
    { label: "Focus Areas", value: "Web, Systems & DevOps" },
  ],
  skillCategories: [
    {
      name: "Frontend Development",
      description: "Building responsive, modern, and interactive web user interfaces.",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design", "Vite"]
    },
    {
      name: "Backend & Real-Time",
      description: "Scalable server architectures and low-latency communication.",
      skills: ["Node.js", "Express.js", "Socket.io", "RESTful APIs", "Python", "WebSockets"]
    },
    {
      name: "Systems & Low-Level",
      description: "Memory management, concurrent computing, and Unix internals (1337 / 42).",
      skills: ["C", "C++ (OOP)", "POSIX Threads & Mutexes", "Data Structures", "Algorithms", "Unix / Linux Internals"]
    },
    {
      name: "DevOps & Infrastructure",
      description: "Containerization, network engineering, and developer tooling.",
      skills: ["Docker & Docker Compose", "Git & GitHub", "Bash / Shell", "TCP/IP & Subnetting", "Linux Environment", "Vercel"]
    }
  ],
  projects: [
    {
      id: "eff_cloud",
      title: "eff_cloud — Cloud Storage Architecture",
      description: "Containerized cloud infrastructure for user and file storage management featuring Docker Compose orchestration and volume isolation.",
      tags: ["Docker", "Docker Compose", "JavaScript", "Linux"],
      category: "Full-Stack",
      repoUrl: "https://github.com/Wahmane-Hamza/eff_cloud",
      demoUrl: null,
      stars: 1,
      featured: true,
      highlights: ["Multi-container deployment", "Volume isolation", "Automated orchestration"]
    },
    {
      id: "online-multiplayer",
      title: "Real-Time Multiplayer Game",
      description: "Full-stack multiplayer browser game engine leveraging WebSockets for instant state synchronization, room management, and player interaction.",
      tags: ["Node.js", "Express", "Socket.io", "WebSockets"],
      category: "Interactive / Games",
      repoUrl: "https://github.com/Wahmane-Hamza/Online-Multiplayer-JavaScript-Game",
      demoUrl: null,
      stars: 0,
      featured: true,
      highlights: ["Sub-50ms sync latency", "Room creation & matchmaking", "Event-driven architecture"]
    },
    {
      id: "bus-reservation",
      title: "Bus Reservation Platform",
      description: "Interactive seat booking and ticket reservation web application with responsive route filtering, dynamic seating maps, and clean UI.",
      tags: ["React", "Tailwind CSS", "React Router", "JavaScript"],
      category: "Full-Stack",
      repoUrl: "https://github.com/Wahmane-Hamza/Bus_reservation",
      demoUrl: null,
      stars: 0,
      featured: true,
      highlights: ["Interactive visual seat grid", "Client-side routing", "Tailwind responsive design"]
    },
    {
      id: "philosophers",
      title: "Philosophers — Concurrency & Threads",
      description: "1337 project solving the classic Dining Philosophers dilemma. Implemented POSIX threads, mutex locking, precise microsecond timing, and starvation prevention.",
      tags: ["C", "Multithreading", "Mutexes", "POSIX Threads"],
      category: "Systems & C/C++",
      repoUrl: "https://github.com/Wahmane-Hamza/Philosophers",
      demoUrl: null,
      stars: 0,
      featured: true,
      highlights: ["Zero race conditions", "Deadlock avoidance", "Microsecond-accurate timekeeping"]
    },
    {
      id: "push-swap",
      title: "Push_swap — Algorithmic Sorter",
      description: "High-performance algorithmic project sorting stacks of integers with minimal instructions using an optimized chunk-sort algorithm and complexity analysis.",
      tags: ["C", "Algorithms", "Data Structures", "Optimization"],
      category: "Systems & C/C++",
      repoUrl: "https://github.com/Wahmane-Hamza/Push_swap",
      demoUrl: null,
      stars: 0,
      featured: true,
      highlights: ["O(N log N) efficiency", "Two-stack manipulation", "Exhaustive error handling"]
    },
    {
      id: "so-long",
      title: "so_long — 2D Mini Game Engine",
      description: "Tile-based 2D game developed using the MiniLibX graphic library. Features map flood-fill path validation, sprite animations, and interactive event loops.",
      tags: ["C", "MiniLibX", "Graphics", "Pathfinding"],
      category: "Systems & C/C++",
      repoUrl: "https://github.com/Wahmane-Hamza/so_long",
      demoUrl: null,
      stars: 1,
      featured: false,
      highlights: ["Flood-fill map validation", "Custom sprite rendering", "Smooth key event handling"]
    },
    {
      id: "pipex",
      title: "pipex — Unix Pipeline Recreation",
      description: "Re-engineered the Unix shell pipeline mechanism (`< infile cmd1 | cmd2 > outfile`) using pipe(), fork(), dup2(), and execve() with proper process hierarchies.",
      tags: ["C", "Unix", "System Calls", "IPC"],
      category: "Systems & C/C++",
      repoUrl: "https://github.com/Wahmane-Hamza/pipex",
      demoUrl: null,
      stars: 0,
      featured: false,
      highlights: ["File descriptor management", "Process forking & pipes", "PATH parsing & command resolution"]
    },
    {
      id: "cpp-modules",
      title: "C++ Object-Oriented Modules",
      description: "Advanced exploration of C++ object-oriented design patterns, orthodox canonical forms, dynamic polymorphism, operator overloading, and template metaprogramming.",
      tags: ["C++", "OOP", "Polymorphism", "Templates"],
      category: "Systems & C/C++",
      repoUrl: "https://github.com/Wahmane-Hamza/cpp-I",
      demoUrl: null,
      stars: 0,
      featured: false,
      highlights: ["Orthodox Canonical Class Forms", "Virtual function tables", "Template metaprogramming"]
    },
    {
      id: "netpractice",
      title: "NetPractice — Network Architecture",
      description: "Hands-on project mastering TCP/IP networking, variable-length subnet masks (VLSM), IP routing tables, default gateways, and network packet simulation.",
      tags: ["Networking", "TCP/IP", "Subnetting", "Routing"],
      category: "Systems & C/C++",
      repoUrl: "https://github.com/Wahmane-Hamza/NetPractice",
      demoUrl: null,
      stars: 1,
      featured: false,
      highlights: ["IPv4 subnet calculations", "Custom routing table resolution", "CIDR notation proficiency"]
    },
    {
      id: "valorant-store",
      title: "Valorant Web Store Clone",
      description: "Dynamic frontend storefront replicating the sleek aesthetic and item preview features of the Valorant game marketplace.",
      tags: ["JavaScript", "CSS3", "UI/UX", "Frontend"],
      category: "Interactive / Games",
      repoUrl: "https://github.com/Wahmane-Hamza/Valorant-store",
      demoUrl: null,
      stars: 0,
      featured: false,
      highlights: ["Cyberpunk gaming aesthetic", "Interactive item carousel", "Modern CSS animations"]
    }
  ],
  education: [
    {
      institution: "1337 Coding School (UM6P / 42 Network)",
      degree: "Software Engineering & Computer Science",
      period: "Casablanca / Khouribga / Benguerir, Morocco",
      description: "Peer-to-peer, project-based curriculum without teachers or lectures. Mastered low-level systems programming in C and C++, algorithmic complexity, Unix system calls, networks, and concurrent multithreading.",
      badge: "42 Network"
    }
  ]
};
