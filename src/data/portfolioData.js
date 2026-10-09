export const portfolioData = {
  personal: {
    name: "Hamza Wahmane",
    title: "Software Engineer & Long-Distance Cycling Explorer",
    subheading: "1337 Coding School (42 Network) • Solo Bikepacker across Morocco",
    bio: "Where algorithmic precision meets the grit of the open road. When I am not engineering concurrent C/C++ systems or crafting full-stack web applications, I am on my bike conquering mountain passes in the High Atlas, riding alongside Atlantic trade winds, and sleeping under the desert stars.",
    location: "Marrakech & Casablanca, Morocco",
    status: "Open for Opportunities & New Horizons",
    avatar: "https://avatars.githubusercontent.com/u/133402595?v=4",
    email: "hamza.wahm5@gmail.com",
  },
  socials: {
    instagram: "https://www.instagram.com/wahmane.hamza/",
    github: "https://github.com/Wahmane-Hamza",
    linkedin: "https://www.linkedin.com/in/hamza-wahmane-8318493b5/",
    twitter: "https://twitter.com/WahmaneHamza",
  },
  stats: [
    { label: "Kilometers in the Saddle", value: "5,000+ km", detail: "Across mountain passes & coasts" },
    { label: "Highest Summit Conquered", value: "2,260 m", detail: "Tizi n'Tichka (High Atlas)" },
    { label: "Coding Pedigree", value: "1337 / 42", detail: "Peer-to-peer systems mastery" },
    { label: "Open Source Repos", value: "25+", detail: "On GitHub" },
  ],
  adventures: [
    {
      id: "toubkal-summit",
      title: "Climbing Mount Toubkal Summit (4,167 m)",
      route: "High Atlas • Toubkal National Park, Morocco",
      distance: "4,167 m Summit Elevation • Alpine Ascent",
      type: "High-Altitude Peak Climb",
      season: "Alpine Expedition",
      image: "./trips/toubkal_summit.jpg",
      story: "Reaching the highest peak in North Africa. Ascending through steep boulder fields and snowy couloirs to stand on the rocky summit of Jbel Toubkal.",
      highlights: [
        "North Africa's highest summit (4,167m)",
        "Dramatic snowy Atlas mountain faces",
        "Rocky ridge scramble and thin alpine air",
        "Sunrise over the High Atlas ranges"
      ],
      gear: "Alpine Pack • Trekking Poles • Mountain Gear",
      instagramUrl: "https://www.instagram.com/wahmane.hamza/"
    },
    {
      id: "cycling-167km",
      title: "167 km Cycling Tour in 2 Days",
      route: "Atlas Foothills & Mountain Passes",
      distance: "167 km in 2 Days • Endurance Tour",
      type: "Bikepacking Endurance",
      season: "Multi-Day Ride",
      image: "./trips/cycling_167km.jpg",
      story: "Pushing the limits on two wheels: 167 kilometers covered in just two days across challenging Moroccan topography, gravel roads, and mountain passes.",
      highlights: [
        "167 km crushed in 48 hours",
        "Saddle endurance and pedal rhythm",
        "Mountain road talisman & route markers",
        "Self-supported bikepacking pace"
      ],
      gear: "Touring Bike • Frame Packs • Nutrition & Hydration",
      instagramUrl: "https://www.instagram.com/wahmane.hamza/"
    },
    {
      id: "oukaimden-mount",
      title: "Climbing Mount Oukaïmeden (3,200 m)",
      route: "Oukaïmeden Plateau & Peak, High Atlas",
      distance: "3,200 m Summit • Above the Clouds",
      type: "Alpine Ridge Climb",
      season: "Mountain Expedition",
      image: "./trips/oukaimden_mount.jpg",
      story: "Climbing high above the valley floor to the rocky summit ridges of Oukaïmeden. Resting on the mountain rocks suspended directly above an ocean of clouds.",
      highlights: [
        "Lying on mountain rocks above the clouds",
        "Snow-dusted High Atlas peaks",
        "3,200m altitude vantage point",
        "Pure silence and mountain wind"
      ],
      gear: "Cold-Weather Shell • Lightweight Trek Pack",
      instagramUrl: "https://www.instagram.com/wahmane.hamza/"
    },
    {
      id: "lalla-takerkoust",
      title: "Trip in Lalla Takerkoust & Barrage Marrakech",
      route: "Lalla Takerkoust Reservoir & Trails, Marrakech",
      distance: "Lake Circuit & Countryside Trails",
      type: "Trekking & Exploration",
      season: "Trail Expedition",
      image: "./trips/lalla_takerkoust.jpg",
      story: "Exploring the dirt roads, pine trees, and rolling plains surrounding the Lalla Takerkoust dam with backpacks under the blue Marrakech sky.",
      highlights: [
        "Dirt tracks along Barrage Lalla Takerkoust",
        "Countryside backpack exploration",
        "Marrakech desert plateau scenery",
        "Quiet trail camaraderie"
      ],
      gear: "Hiking Pack • Trail Footwear • Sun Protection",
      instagramUrl: "https://www.instagram.com/wahmane.hamza/"
    }
  ],
  projects: [
    {
      id: "minishell",
      code: "EXHIBIT 01: UNIX SHELL",
      title: "Minishell Organization",
      subtitle: "Full-Featured Unix Shell in C (42 School • Score 125/100)",
      role: "Parsing Logic Owner (Lexer, Grammar AST, Redirections, Syntax Validation)",
      team: "Hamza Wahmane (Parsing Logic) • Abdellah Nsila (Execution Logic)",
      description: "A complete Unix shell mimicking /bin/bash built strictly in C without external libraries. Engineered with a modular dual-repository architecture separating input parsing and execution engine.",
      features: [
        "Lexical analysis, tokenization & Abstract Syntax Tree (AST) generation",
        "Command & redirection arrangement (<, >, >>, << heredocs)",
        "Logical operators (&&, ||) and nested subshells with parentheses priorities",
        "Quote handling, escape sequence resolution & syntax error validation",
        "Built-in commands (cd, echo, export, unset, env, exit, pwd) & signal handling",
        "Official 42 School Score: 125/100 (Full Bonus Completed)"
      ],
      tags: ["C", "AST", "Lexer / Parser", "Unix Internals", "POSIX", "Signals"],
      githubUrl: "https://github.com/Minishell13",
      liveUrl: null,
      badge: "Score: 125/100"
    },
    {
      id: "webserv",
      code: "EXHIBIT 02: HTTP SERVER ENGINE",
      title: "Webserv — Hmida Srbay",
      subtitle: "HTTP/1.0 High-Performance Non-Blocking Web Server in C++98",
      role: "Core Developer (Architecture, Sockets & CGI Integration)",
      team: "Hamza Wahmane • Abdellah Nsila • AKL001",
      description: "An event-driven, non-blocking I/O web server built from scratch in strict C++98. Operates on a single-threaded multiplexing model (epoll/kqueue) serving hundreds of concurrent clients with minimal RAM overhead.",
      features: [
        "Event-driven non-blocking I/O multiplexing (epoll / fcntl O_NONBLOCK)",
        "Zero-RAM static asset streaming in controlled chunks to avoid memory spikes",
        "Nginx-style .conf lexer/parser, virtual hosting, and URI location resolver",
        "Dynamic CGI execution engine (Python & PHP) with pipes and fork/execve",
        "Multipart upload processing & native in-memory session/cookie persistence",
        "Strict C++98 standard compliance (-Wall -Wextra -Werror, zero external libraries)"
      ],
      tags: ["C++98", "epoll Multiplexer", "Non-blocking Sockets", "HTTP/1.0", "CGI Engine", "Session Cookies"],
      githubUrl: "https://github.com/Web-serv-42",
      liveUrl: null,
      badge: "C++98 / epoll"
    },
    {
      id: "kouralink",
      code: "EXHIBIT 03: COMMUNITY PLATFORM",
      title: "KouraLink Organization",
      subtitle: "Vibrant Football Community Hub & Tactical Match Platform",
      role: "Full-Stack Web Architect",
      team: "KouraLink Organization Team",
      description: "A community-driven digital football platform bringing football enthusiasts together. Features dynamic match coordination, team creation, tournament competition, and interactive strategic whiteboard planning.",
      features: [
        "Interactive gameplay: organize matches, assemble teams & enter tournaments",
        "Strategic team planning: visual whiteboard design tools for managers and captains",
        "Global inclusive football community hub for players, coaches & fans",
        "Modern cloud-native web application deployed and running live on Vercel"
      ],
      tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Vercel", "Real-Time"],
      githubUrl: "https://github.com/kouralink",
      liveUrl: "https://kouralink.vercel.app",
      badge: "Live App on Vercel"
    },
    {
      id: "allobaba-webscrapy",
      code: "EXHIBIT 04: AUTOMATION & SCRAPING",
      title: "AlloBaba WebScrapy",
      subtitle: "Enterprise Microservices Web Scraping & Data Extraction Suite",
      role: "Full-Stack & Systems Developer",
      team: "AlloBaba WebScrapy Organization",
      description: "An automated distributed web scraping ecosystem featuring Python-powered microservices and cross-platform user interfaces for high-throughput commercial data harvesting.",
      features: [
        "Python microservice scrapers for AutoScout24, Pages Jaunes & B2B directories",
        "Cross-platform Desktop Application built with Electron, React, Vite & TypeScript",
        "Responsive Scrapy Web Client front-end for task configuration and monitoring",
        "Robust streaming pipelines and structured commercial data extraction"
      ],
      tags: ["Python", "Electron", "React", "TypeScript", "Microservices", "Data Scraping"],
      githubUrl: "https://github.com/Allobaba-WebScrapy",
      liveUrl: null,
      badge: "7 Repositories"
    }
  ],
  engineering: {
    overview: "Formed in the intensive, teacher-less environment of 1337 Coding School (42 Network), my engineering philosophy mirrors my cycling: self-reliance, endurance, and total ownership of every problem.",
    pillars: [
      {
        title: "Systems & Low-Level Architecture",
        desc: "Mastery of C and C++, POSIX threads, race condition prevention, Unix system calls, and algorithms developed from scratch at 1337.",
        tags: ["C", "C++", "POSIX Threads", "Unix Internals", "Memory Management", "Algorithms"]
      },
      {
        title: "Full-Stack Web Engineering",
        desc: "Building real-time, responsive modern applications with React, Node.js, Express, WebSockets, and Docker containerization.",
        tags: ["React", "JavaScript", "Node.js", "Socket.io", "Docker", "Tailwind CSS"]
      }
    ]
  }
};
