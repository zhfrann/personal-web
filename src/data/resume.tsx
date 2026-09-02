import { Icons } from "@/components/icons";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Javascript } from "@/components/ui/svgs/javascript";
import { ExpressJS } from "@/components/ui/svgs/express";
import { NestJS } from "@/components/ui/svgs/nestjs";
import { Laravel } from "@/components/ui/svgs/laravel";
import { MySQL } from "@/components/ui/svgs/mysql";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Prisma } from "@/components/ui/svgs/prisma";

export const DATA = {
  name: "Muhammad Zhafran Ilham",
  initials: "Zhafran",
  url: "https://zhafranilham.my.id",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/Kabupaten+Bandung,+Jawa+Barat",
  description:
    "Software Engineering undergraduate with hands-on experience and a strong interest in backend development.",
  ogDescription:
    "Portfolio of Muhammad Zhafran Ilham, a Software Engineering undergraduate focused on backend development, REST APIs, databases, and scalable web applications.",
  summary:
    "Fourth-year Software Engineering undergraduate with hands-on experience in backend development, RESTful API design, and database management through academic, organizational, and professional projects. Familiar with building and maintaining applications using technologies such as TypeScript, JavaScript, Express.js, NestJS, Prisma ORM, Laravel, PostgreSQL, and MySQL. Interested in backend engineering and continuously developing an understanding of software development practices, API documentation, containerization, and system design fundamentals. A motivated learner and collaborative team member who is eager to improve technical and problem-solving skills while contributing to meaningful software projects.",
  avatarUrl: "/picofme.webp",
  ogImage: "/og_image.webp",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    projects: {
      order: 2, enabled: true,
      label: "My Projects",
      heading: "Check out my works",
      text: "I've worked on a variety of projects, from simple websites to complex web applications.",
    },
    work: { order: 3, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 4, enabled: true, heading: "Education" },
    skills: { order: 5, enabled: true, heading: "Skills" },
    // contact: {
    //   order: 6, enabled: false,
    //   label: "Contact",
    //   heading: "Let's work together",
    //   text: "Have a project, collaboration opportunity, or just want to discuss? Send us a direct message using this form.  ",
    // },
  },
  skills: [
    // { name: "Astro", icon: Astro },
    // { name: "React", icon: ReactLight },
    // { name: "Next.js", icon: NextjsIconDark },
    { name: "JavaScript", icon: Javascript },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express JS", icon: ExpressJS },
    { name: "NestJS", icon: NestJS },
    { name: "Laravel", icon: Laravel },
    // { name: "Python", icon: Python },
    // { name: "Go", icon: Golang },
    { name: "MySQL", icon: MySQL },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Prisma", icon: Prisma },
    { name: "Docker", icon: Docker },
    // { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#work", label: "Work" },
    { href: "/#education", label: "Education" },
    { href: "/#skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
    // { href: "/#contact", label: "Contact" },
  ],
  contact: {
    email: "muh.zhafranilham@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        display: "github.com/zhfrann",
        url: "https://github.com/zhfrann",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        display: "linkedin.com/in/muhammad-zhafran-ilham",
        url: "https://www.linkedin.com/in/muhammad-zhafran-ilham/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        display: "x.com/zhfran_",
        url: "https://x.com/zhfran_",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Human Centric Engineering Research Center",
      href: "https://humic.telkomuniversity.ac.id",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Backend Engineer",
      logoUrl: "/work/humic-logo.webp",
      start: "April 2026",
      end: "June 2026",
      description:
        "Developed backend features for Internify LMS using TypeScript, Express.js, Prisma ORM, and PostgreSQL. Built project, task, submission, certificate, and real-time notification workflows to support centralized internship learning and project management.",
    },
  ],
  education: [
    {
      school: "Telkom University",
      href: "https://telkomuniversity.ac.id/",
      location: "Bandung, Indonesia",
      degree: "Bachelor of Science in Software Engineering",
      logoUrl: "/education/logo-telkom-university.webp",
      start: "September 2023",
      end: "2027",
    },
    {
      school: "Telkom Vocational School",
      href: "https://smktelkom-mks.sch.id/",
      location: "Makassar, Indonesia",
      degree: "High School Diploma",
      logoUrl: "/education/telkom-school-logo.webp",
      start: "June 2020",
      end: "July 2023",
    },
  ],
  projects: [
    {
      title: "Internify LMS",
      slug: "internify-lms",
      href: "/blog/internify-lms",
      dates: "March 2026 - June 2026",
      active: true,
      description:
        "Extending HUMIC’s Internify platform with backend workflows for project-based learning, task management, and submission tracking.",
      technologies: [
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Express.js",
        "Swagger",
      ],
      links: [
      ],
      image: "/projects/internify-lms-portal.webp",
      video: "",
    },
  ],
} as const;
