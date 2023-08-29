import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Frontend Developer",
        company: "Capillary Technologies",
        location: "Hyderabad, India",
        description:
            "Built a framework to develop PWA's in a shorter time by creating reusable modules like Auth, Search, Filter, Cart, Checkout, Payments, etc,. Worked on multiple projects like PizzaHut, FabIndia, KFC and SellerGyan.",
        icon: React.createElement(FaAngular),
        iconColor: "rgb(223, 21, 56)",
        date: "2017 - 2018",
        skills: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Ionic', 'Webpack', 'HTML', 'Bootstrap', 'Node', 'Express']
    },
    {
        title: "Senior Front-end Developer",
        company: "CatchThatBus",
        location: "Hyderabad, India",
        description:
            "Worked on CatchThatBus web app, added few new features to the app. And worked on legacy website and integrated internal CMS. Worked on multiple projects of the company and mostly on PWA 'Trokka', it's a Paytm of Malaysia to book Bus, Train, Tours & Mobile recharge, etc..",
        icon: React.createElement(FaVuejs),
        iconColor: "rgb(72, 187, 135)",
        date: "2019",
        skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Vuex', 'Quasar', 'AWS', 'Docker', 'Git', 'Shell script']
    },
    {
        title: "Software Engineer",
        company: "Creative Mindz Group",
        location: "Hyderabad, India",
        description:
            "Worked on multiple small products to help e-commerce sellers to ease there work. Mainly worked on a platform named SellerGyan to improve the sales for e-commerce sellers. Did data scraping and developed the web applications frontend and even worked on the backend using NodeJS and Express.",
        icon: React.createElement(FaReact),
        iconColor: "rgb(103, 219, 251)",
        date: "2019 - 2020",
        skills: ['JavaScript', 'React.js', 'Redux', 'Material-UI (MUI)', 'Next.js', 'Angular', 'TypeScript', 'Webpack', 'NodeJS', 'Express', 'MongoDB']
    },
    {
        title: "Freelance Developer",
        company: "Tez Solutions, Minto and others",
        location: "Remote",
        description:
            "Converted a web applications to a hybrid mobile apps using ionic. Built new SPA's using company's inclusive pre built web app/hybrid app building framework. Used React Native to built an app. For Minto.ai I developed an Admin tool/dashboard to track & monitor the condition of industrial rotating machines. For the E-commerce client I built a tool for optimizing the product image and printing the design.",
        icon: React.createElement(FaAngular),
        iconColor: "rgb(223, 21, 56)",
        date: "2020",
        skills: ['Angular', 'TypeScript', 'Ionic', 'Angular Material', 'RxJS', 'React.js', 'Redux.js', 'React Native', 'JavaScript', 'Bootstrap']
    },
    {
        title: "Frontend Engineer",
        company: "iSpace, Inc.",
        location: "Remote",
        description: "Worked on Inseego Connect, it's a cloud-based configuration and monitoring application provided by Inseego. Maintained web app by fixing issues encountered by QA folks and implementing new features like creating charts and filters. Wrote test cases to improve the code coverage.",
        icon: React.createElement(FaReact),
        iconColor: "rgb(103, 219, 251)",
        date: "2021",
        skills: ['JavaScript', 'React.js', 'Next.js', 'chakra UI', 'Jest', 'Cypress', 'Vue.js', 'SASS', 'HTML', 'Webpack']
    },
    {
        title: "Senior Front-end Developer",
        company: "Blokbot",
        location: "Remote",
        description:
            "Build the main web front application for blokbot. This web application allows users to interact with different auto trading bots and track the performance of each bot.",
        icon: React.createElement(FaReact),
        iconColor: "rgb(103, 219, 251)",
        date: "2021 - 2022",
        skills: ['TypeScript', 'React.js', 'Next.js', 'React Query', 'Tailwind CSS', 'HTML', 'Webpack']
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;

export const socials = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/umar-ibn-shafee/'
    },
    {
        name: 'Github',
        link: 'https://github.com/umar-ibn-shafee'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/IbnShafee'
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/ibnshafee_dev/'
    }
] as const;