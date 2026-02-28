/**
 * seed.js
 * Run with: npm run seed
 * Populates MongoDB with initial portfolio data extracted from the original HTML/JS files.
 */

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Owner = require("../models/Owner");
const Project = require("../models/Project");
const Service = require("../models/Service");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio";

// ─── Seed data (was previously hardcoded in HTML / JS) ───────────────────────

const ownerData = {
  name: "Prashant Koirala",
  firstName: "Prashant",
  lastName: "Koirala",
  bio: "I'm a designer and full-stack developer who's obsessed with creating award-worthy digital experiences. From crafting pixel-perfect interfaces to architecting robust backend systems, I live at the intersection where beautiful design meets clean code. My work draws inspiration from the best of Awwwards — those jaw-dropping sites that make you pause mid-scroll and wonder \"how did they do that?\"",
  tagline: "Code / Design / Craft / Repeat",
  email: "prashantkoirala465@gmail.com",
  resumeLink:
    "https://drive.google.com/file/d/1lhunYlVGdRqDiOsPf6xECVWj0x6tDbzR/view?usp=sharing",
  portrait: "/images/services-header/portrait.jpeg",
  social: {
    github: "https://github.com/prashantkoirala465",
    linkedin: "https://www.linkedin.com/in/prashantkoirala/",
    twitter: "https://x.com/arkynox_",
  },
  footerLinks: [
    { label: "View Portfolio", url: "https://www.prashantkoirala.info.np" },
    { label: "View Blog", url: "https://prashantkoirala.hashnode.dev/" },
    { label: "Design Archive", url: "https://www.awwwards.com/winner-list/" },
    { label: "Basic References", url: "https://www.pillarstack.com/" },
    {
      label: "Animation References",
      url: "https://blog.olivierlarose.com/",
    },
  ],
};

const projectsData = [
  {
    title: "Triad Portfolio",
    image: "/images/work-items/work-item-1.jpg",
    description: "Award-worthy design portfolio",
    url: "",
    featured: true,
    order: 1,
  },
  {
    title: "Pinnacle Urja",
    image: "/images/work-items/work-item-2.jpg",
    description: "Energy company website",
    url: "",
    featured: true,
    order: 2,
  },
  {
    title: "Project Three",
    image: "/images/work-items/work-item-3.jpg",
    description: "",
    url: "",
    featured: false,
    order: 3,
  },
  {
    title: "Ocean Education",
    image: "/images/work-items/work-item-4.jpg",
    description: "Educational platform",
    url: "",
    featured: true,
    order: 4,
  },
  {
    title: "Sign2Text",
    image: "/images/work-items/work-item-5.jpg",
    description: "Sign language to text converter",
    url: "",
    featured: true,
    order: 5,
  },
  {
    title: "Project Six",
    image: "/images/work-items/work-item-6.jpg",
    description: "",
    url: "",
    featured: false,
    order: 6,
  },
  {
    title: "Project Seven",
    image: "/images/work-items/work-item-7.jpg",
    description: "",
    url: "",
    featured: false,
    order: 7,
  },
  {
    title: "Project Eight",
    image: "/images/work-items/work-item-8.jpg",
    description: "",
    url: "",
    featured: false,
    order: 8,
  },
  {
    title: "Project Nine",
    image: "/images/work-items/work-item-9.jpg",
    description: "",
    url: "",
    featured: false,
    order: 9,
  },
  {
    title: "Project Ten",
    image: "/images/work-items/work-item-10.jpg",
    description: "",
    url: "",
    featured: false,
    order: 10,
  },
];

const servicesData = [
  {
    title: "Frontend Development",
    image: "/images/services/service-1.jpg",
    order: 1,
  },
  {
    title: "Backend Development",
    image: "/images/services/service-2.jpg",
    order: 2,
  },
  {
    title: "UI/UX Design",
    image: "/images/services/service-3.jpg",
    order: 3,
  },
  {
    title: "Web Applications",
    image: "/images/services/service-4.jpg",
    order: 4,
  },
];

// ─── Seed function ────────────────────────────────────────────────────────────

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Owner.deleteMany();
    await Project.deleteMany();
    await Service.deleteMany();
    console.log("Cleared existing data");

    // Insert fresh data
    await Owner.create(ownerData);
    console.log("Owner seeded");

    await Project.insertMany(projectsData);
    console.log(`${projectsData.length} projects seeded`);

    await Service.insertMany(servicesData);
    console.log(`${servicesData.length} services seeded`);

    console.log("\nDatabase seeded successfully!");
  } catch (err) {
    console.error("Seed error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

seed();
