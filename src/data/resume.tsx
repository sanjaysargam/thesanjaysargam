import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sanjay Sargam",
  initials: "SS",
  url: "https://www.linkedin.com/in/sanjaysargam/",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai,+India",
  description:
    `Mobile Engineer`,
  summary:
    `Mobile App Developer skilled in Android and React Native.
Currently working at Accenture, where I improve app performance and build new features.
Previously worked at Glimz and Rapydlaunch, building mobile apps from scratch.
Google Summer of Code 2024 Mentee and 2025–26 Mentor at AnkiDroid.
Active open-source contributor (AnkiDroid, RocketChat, JitsiMeet).
I focus on building scalable apps, improving user experience, and writing clean, maintainable code.`,
  avatarUrl: "https://github.com/SanjaySargam.png",
  skills: [
    "Java",
    "Kotlin",
    "C",
    "Android (Native)",
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
    { href: "/resume.pdf", icon: Icons.resume, label: "Resume" },
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
      logoUrl: "https://imgs.search.brave.com/I3Vxkxpf3DXBnGSyt3tS0Bls3021C_bdVWG9icGRF4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZFQ5eFl4dm0w/L3cvODAwL2gvODAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc3NTU5NDk2NDM4/MA",
      start: "Aug 2025",
      end: "Present",
      description:
        "Working on BBW project, improving app performance, implementing new features, and maintaining code quality across mobile applications.",
    },
    {
      company: "Glimz",
      href: "https://glimznow.com/",
      badges: [],
      location: "Remote",
      title: "React Native Developer",
      logoUrl: "https://play-lh.googleusercontent.com/ZYLrjlFJf56odVK2hQud1uY25Qpp7rxdzOT2kSyovW6XODqbopDvsRxkMDyqi7FBia9YA5mCeW7osV7vpDXqIg=w240-h480-rw",
      start: "Jan 2025",
      end: "Aug 2025",
      description:
        "Built Glimz and ScrollShop apps from scratch, implemented Instagram-like reels features, and built dedicated video player components for mobile applications.",
    },
    {
      company: "Kalp Intelligence",
      href: "https://kalpintelligence.com/",
      badges: [],
      location: "Remote",
      title: "Mobile App Developer",
      logoUrl: "https://play-lh.googleusercontent.com/h6tUG0ErQbbtlWwVorl8PVoOcB4tBxKLEV4WCOEGIf9KdQ2iccB5Ami5ECjLlH9fOM0=s94-rw",
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
      logoUrl: "https://play-lh.googleusercontent.com/ABa6K-2pDbgi2Uv8iShn8_fjNkZlib-eyl7DqAXWhtIHOEV2X19VBR5f1Xi1SjnVNVM=s48-rw",
      start: "2022",
      end: "2023",
      description:
        "Developed mobile applications for a social networking platform, focusing on user experience and performance optimization.",
    },
    {
      company: "AnkiDroid",
      href: "https://play.google.com/store/apps/details?id=com.ichi2.anki",
      badges: [],
      location: "Remote",
      title: "GSoC Mentee & Mentor",
      logoUrl: "https://play-lh.googleusercontent.com/4aLlAwUKGg5Keo8zz-pPI1QS9KnjSsa3vKX2NINqq5Fv1jfPK3bl6ghLaZ371OcH9A=w240-h480-rw",
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
      logoUrl: "https://imgs.search.brave.com/r0Et36IOgnx6ZYj1mRJBZ5RWATV_ju7UDENI7l6dJgg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYTFmOTEwMDI4/ODg4OWUxOGM3YjBh/MzVhMTQ1YzQ5ZTll/ZDkxZmViMDA3ODEz/YjVlNDg3NTY1YjVi/YmQyMWI3OS9tdS5h/Yy5pbi8",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "ScrollShop",
      href: "https://www.scroll-shop.in/",
      dates: "Feb 2026 - April 2026",
      active: true,
      description:
        "It is a video-first shopping platform where discovery feels as natural as scrolling social media. Instead of searching through endless listings, users can explore products through short, engaging reels posted by independent sellers and growing brands.",
      technologies: [
        "React Native",
        "Javascript",
        "TypeScript",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.terminal.scrollshop",
          icon: <Icons.playstore className="size-4" />,
        },
          {
          type: "Appstore",
          href: "https://apps.apple.com/in/app/scrollshop/id6760423798",
          icon: <Icons.appstore className="size-4" />,
        },
      ],
      image: "https://play-lh.googleusercontent.com/_mkLvxbW6FDXhQnOLVSOE9YLoY8uz311K0V_Dh1tMwhJ46Z6pNPKiya7AEmqlggCVm-YSM3ITkdmVjKvfP3tdxA=w416-h235-rw",
      video: "",
    },
    {
      title: "GlimzNow",
      href: "https://www.glimznow.com/",
      dates: "Aug 2025 - Jan 2026",
      active: true,
      description:
        "It is a digital entertainment app that offers pay-per-view access to shows, and creator content. Instead of subscriptions, viewers pay only for what they watch, making premium content more accessible and affordable, while ensuring creators earn directly from each view.",
      technologies: [
        "React Native",
        "Expo",
        "JavaScript", 
        "Typescript",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.glimz.terminal",
          icon: <Icons.playstore className="size-4" />,
        },
          {
          type: "Appstore",
          href: "https://apps.apple.com/in/app/glimz-now/id6756281746",
          icon: <Icons.appstore className="size-4" />,
        },
      ],
      image: "https://play-lh.googleusercontent.com/apzqLjFvGWuQh5yil0O0qbzJm09ykumfHcxsa0lAZwOiNiMg0K8gRMXAfUki3un2hrWeZTH6n_wJM4Bxq5aS7Q=w416-h235-rw",
      video: "",
    },
    {
      title: "SNK Prop: Plots & Villa",
      href: "https://snkprop.in",
      dates: "Jan 2024 - May 2025",
      active: true,
      description:
        "SNK is your one-stop destination to explore and discover a wide range of real estate options including Plots, Lands, Farmhouses, and Villas – all tailored to match your needs, preferences, and lifestyle. Whether you're looking for a peaceful weekend retreat, a long-term investment, or a dream villa to live in, SNK makes your property search smooth and reliable.",
      technologies: [
        "React Native",
        "JavaScript",
        "TypeScript",
      ],
      links: [
        {
          type: "Playstore",
          href: "https://play.google.com/store/apps/details?id=com.snk.prop",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "https://i.ibb.co/VpNPbSDn/574bb61f-38c9-44b1-b249-be1dc085a574.png",
      video: "",
    },
    {
      title: "Med1 - Medicine Delivery App",
      href: "https://play.google.com/store/apps/details?id=com.med1.medicine",
      dates: "2026",
      active: true,
      description:
        `It is a digital healthcare platform connecting customers, pharmacies, and delivery partners.
Customers can order medicines and essentials with fast delivery and real-time tracking. Delivery partners earn by delivering medicines quickly within their area. Medical stores can go online, manage inventory, and receive orders while Medone handles logistics.
A simple, reliable ecosystem for faster and accessible healthcare.`,
      technologies: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
      ],
      links: [
        {
          type: "Med1 - Consumer",
          href: "https://play.google.com/store/apps/details?id=com.med1.medicine",
          icon: <Icons.playstore className="size-4" />,
        },
         {
          type: "Med1 - Medical Partner",
          href: "https://play.google.com/store/apps/details?id=com.medone.partner",
          icon: <Icons.playstore className="size-4" />,
        }, {
          type: "Med1 - Delivery Partner",
          href: "https://play.google.com/store/apps/details?id=com.medone.delivery",
          icon: <Icons.playstore className="size-4" />,
        },
      ],
      image: "https://play-lh.googleusercontent.com/NlVUqGN25fcSoP2j9QXsMpECddNYs72YnV4ObhXhYaTffBPcqBHds_-lqUSFbwOeK6q6=w416-h235-rw",
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
  talks: [
  {
    title: "Getting Started with Open Source",
    description: "Delivered a session on open source contribution fundamentals, helping students understand how to begin their journey, choose projects, and actively participate in developer communities.",
    date: "2025",
    event: "Vidyalankar Institute of Technology",
    location: "Mumbai",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D22AQErKMpKYH3k7Q/feedshare-shrink_2048_1536/B4DZjVpzGGGkA0-/0/1755931166719?e=1778112000&v=beta&t=TDsoRHcR63gvAHvIl7TBsbbZyGi3eeYpsU758PMaeqw",
    media: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/posts/sanjaysargam_i-had-the-opportunity-to-deliver-a-session-activity-7364909148376825857-Op-D",
        label: "LinkedIn Post",
        icon: <Icons.linkedin className="h-4 w-4" />
      }
    ],
    tags: ["Open Source", "Community", "Beginner Friendly"]
  },
  {
    title: "Open Source & GSoC Guidance Session",
    description: "Conducted a technical talk on open source and Google Summer of Code (GSoC), covering roadmap, proposal strategies, and real-world contribution insights to help students get selected.",
    date: "2025",
    event: "VESIT Tinkers CodeCell",
    location: "Mumbai",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D22AQH6rx1BPRhbkw/feedshare-shrink_2048_1536/B4DZn_24mFHYAw-/0/1760934217803?e=1778112000&v=beta&t=Y0gmDZLZbmvh-azkjMovknMDq5o4QRdktZXDc4FWjKg",
    media: [
      {
        type: "youtube",
        url: "https://youtu.be/YSd0pHeE5Ps",
        label: "YouTube",
        icon: <Icons.youtube className="h-4 w-4" />
      },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/posts/sanjaysargam_opensource-gsoc-techtalk-activity-7385893437931245568-tQTI",
        label: "LinkedIn Post",
        icon: <Icons.linkedin className="h-4 w-4" />
      },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/posts/vesit-tinkers-codecell-computer-department_gsoc-opensource-codecelltinkerer-ugcPost-7387141940271730688-kGrs",
        label: "Event Post",
        icon: <Icons.linkedin className="h-4 w-4" />
      }
    ],
    tags: ["Open Source", "GSoC", "Mentorship"]
  },
  {
    title: "GSoC & Open Source Journey",
    description: "Shared personal experience and insights from Google Summer of Code, including preparation strategy, contribution tips, and how to stand out in open source programs.",
    date: "2025",
    event: "Vidyalankar Institute of Technology",
    location: "Mumbai",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D22AQF3zHMIppY78A/feedshare-shrink_2048_1536/B4DZw2oyZ3G4Ak-/0/1770443188607?e=1778112000&v=beta&t=UrtfKhJ7rzNMGsRghpSaWhLyr1NrlJWZSmW1odJ36aU",
    media: [
      {
        type: "linkedin",
        url: "https://www.linkedin.com/posts/sanjaysargam_spoke-at-vidyalankar-institute-of-technology-activity-7425776953020026880-dXM-",
        label: "LinkedIn Post",
        icon: <Icons.linkedin className="h-4 w-4" />
      }
    ],
    tags: ["GSoC", "Open Source", "Experience Sharing"]
  }
],
} as const;
