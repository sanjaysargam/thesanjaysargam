import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanjay Sargam",
  initials: "SS",
  url: "https://www.linkedin.com/in/sanjaysargam/",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai,+India",
  description:
    "Mobile App Developer with a passion for building innovative mobile applications and contributing to open source projects.",
  summary:
    "I'm a passionate Mobile App Developer with expertise in Android, React Native, and Flutter. Currently, I'm working at Accenture as a Mobile App Developer improving app performance and implementing new features. I've previously worked at Glimz and Rapydlaunch as a React Native Developer, where I built Glimz and ScrollShop apps from scratch. As a GSoC Mentee in 2024 and Mentor in 2025-2026 at AnkiDroid, I've contributed to various open-source projects including AnkiDroid, RocketChat, and JitsiMeet.",
  avatarUrl: "https://github.com/SanjaySargam.png",
  skills: [
    "Java",
    "Kotlin",
    "C",
    "Dart",
    "PHP",
    "Android (Native)",
    "Flutter",
    "React Native",
    "HTML5",
    "CSS3",
    "Firebase",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sargamsanjaykumar@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SanjaySargam",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sanjaysargam/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/sanjay__sargam",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/thefunnyintrovertttt/",
        icon: Icons.instagram,

        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/@sanjay_sargam",
        icon: Icons.youtube,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@sanjaysargam",
        icon: Icons.medium,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "https://www.accenture.com/",
      badges: [],
      location: "Remote",
      title: "Mobile App Developer",
      logoUrl: "/accenture.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Working on BBW project, improving app performance, implementing new features, and maintaining code quality across mobile applications.",
    },
    {
      company: "Glimz",
      href: "https://glimz.com/",
      badges: [],
      location: "Remote",
      title: "React Native Developer",
      logoUrl: "/glimz.png",
      start: "Jan 2025",
      end: "Aug 2025",
      description:
        "Built Glimz and ScrollShop apps from scratch, implemented Instagram-like reels features, and built dedicated video player components for mobile applications.",
    },
    {
      company: "Rapydlaunch",
      href: "https://rapydlaunch.com/",
      badges: [],
      location: "Remote",
      title: "Mobile App Developer",
      logoUrl: "/rapydlaunch.png",
      start: "June 2023",
      end: "Dec 2024",
      description:
        "Built mobile applications including a delivery app, managed as mobile app tech lead, and implemented robust features for iOS and Android platforms.",
    },
    {
      company: "ApnaKonnect",
      href: "https://apnakonnect.com/",
      badges: [],
      location: "Remote",
      title: "Mobile App Developer",
      logoUrl: "/apnakonnect.png",
      start: "2022",
      end: "2023",
      description:
        "Developed mobile applications for a social networking platform, focusing on user experience and performance optimization.",
    },
    {
      company: "AnkiDroid",
      href: "https://ankidroid.org/",
      badges: [],
      location: "Remote",
      title: "GSoC Mentee & Mentor",
      logoUrl: "/ankidroid.png",
      start: "2024",
      end: "Present",
      description:
        "GSoC Mentee: 2024, GSoC Mentor: 2025-2026. Contributed to open-source projects including AnkiDroid, focusing on improving user experience and performance.",
    },
  ],
  education: [
    {
      school: "Mumbai University",
      href: "https://mu.ac.in/",
      degree: "Computer Engineering",
      logoUrl: "/mumbai-university.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "AnkiconnectAndroid",
      href: "https://github.com/SanjaySargam/AnkiconnectAndroid",
      dates: "2024 - Present",
      active: true,
      description:
        "Unofficial Ankiconnect for Android (i.e. for Yomichan) - An Android app that connects with Anki for vocabulary learning.",
      technologies: [
        "Kotlin",
        "Android",
        "Open Source",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SanjaySargam/AnkiconnectAndroid",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "uwumi",
      href: "https://github.com/SanjaySargam/uwumi",
      dates: "2024",
      active: true,
      description:
        "A feature-rich anime, manga and movie streaming app built with React Native and Expo. Complete streaming solution for entertainment content.",
      technologies: [
        "React Native",
        "Expo",
        "JavaScript",
        "Open Source",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SanjaySargam/uwumi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "react-native-consumet",
      href: "https://github.com/SanjaySargam/react-native-consumet",
      dates: "2026",
      active: true,
      description:
        "React Native library providing access to entertainment media information (anime, movies, manga, etc.) from multiple sources.",
      technologies: [
        "React Native",
        "JavaScript",
        "API Integration",
        "Open Source",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SanjaySargam/react-native-consumet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "consumet.ts",
      href: "https://github.com/SanjaySargam/consumet.ts",
      dates: "2026",
      active: true,
      description:
        "Node.js library that provides high-level APIs for obtaining information on various entertainment media such as books, movies, comic books, anime, manga, and so on.",
      technologies: [
        "TypeScript",
        "Node.js",
        "API Integration",
        "Open Source",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SanjaySargam/consumet.ts",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "GSoC AnkiDroid",
      dates: "May - Aug 2024",
      location: "Remote",
      description:
        "Google Summer of Code 2024 with AnkiDroid. Contributed to the development of the Anki flashcard application, improving user experience and performance.",
      image: "",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ankidroid.org/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ankidroid/AnkiDroid",
        },
      ],
    },
    {
      title: "GSoC Mentorship",
      dates: "May - Aug 2025, 2026",
      location: "Remote",
      description:
        "Google Summer of Code Mentor for AnkiDroid in 2025 and 2026. Guiding new contributors and helping them develop their projects in the open-source ecosystem.",
      image: "",
      links: [],
    },
  ],
} as const;
