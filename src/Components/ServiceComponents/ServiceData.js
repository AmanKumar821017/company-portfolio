import WebImg from '../../assets/WebDev.webp'
import SeoImg from '../../assets/SEO.webp'
import UiuxImg from '../../assets/UIUX.webp'
import DataImg from '../../assets/DaAnalytic.webp'

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiFigma,
  SiPandas,
  // SiPowerbi,
  // SiTableau,
  SiMysql,
} from "react-icons/si";

export const servicesData = {
  development: {
    hero: {
      title: "Web Development",
      para: "We build modern, responsive and high-performance websites.",
      bgimg: WebImg,
    },

    sectionTitle: "Web Development Services We Offer",

    sectionPara:
      "We provide modern web development solutions designed to help businesses establish a strong online presence. From custom websites to powerful web applications, our team delivers secure, scalable, and user-friendly digital experiences tailored to your unique business needs.",

    services: [
      {
        title: "Custom Website Development",
        para: "We create modern, responsive, and high-performance websites tailored to your business goals and brand identity.",
      },
      {
        title: "Web Application Development",
        para: "Build scalable and secure web applications that streamline operations and deliver exceptional user experiences.",
      },
      {
        title: "Website Support & Optimization",
        para: "Keep your website secure, updated, and optimized with continuous support, performance improvements, and monitoring.",
      },
    ],

    technologiesPara:
      "We use modern web technologies to create fast, responsive, and scalable websites and web applications that deliver exceptional user experiences.",

    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],

    processTitle: "Our Development Process",

    processPara:
      "We follow a structured development process to deliver high-quality solutions efficiently and on time.",

    process: [
      {
        title: "Requirement Analysis",
        para: "We understand your business goals, target audience, and project requirements before starting development."
      },
      {
        title: "UI/UX Planning",
        para: "We create wireframes and design strategies to ensure a smooth and user-friendly experience."
      },
      {
        title: "Development",
        para: "Our developers build secure, scalable, and high-performance solutions using modern technologies."
      },
      {
        title: "Testing",
        para: "We thoroughly test the website to ensure functionality, performance, and security."
      },
      {
        title: "Deployment",
        para: "After successful testing, we launch the project and make it available to your users."
      }
    ],
  },

  seo: {
    hero: {
      title: "SEO Optimization",
      para: "Improve your website rankings and drive organic growth.",
      bgimg: SeoImg,
    },

    sectionTitle: "SEO Services We Offer",

    sectionPara:
      "Our SEO services help businesses improve online visibility, increase website traffic, and achieve higher search engine rankings through proven optimization strategies.",

    services: [
      {
        title: "On-Page SEO",
        para: "Optimize website content, structure, and metadata to improve search engine visibility and user experience.",
      },
      {
        title: "Technical SEO",
        para: "Enhance website speed, indexing, crawlability, and overall technical performance for better rankings.",
      },
      {
        title: "SEO Monitoring & Reporting",
        para: "Track rankings, traffic, and performance metrics with detailed reporting and continuous optimization.",
      },
    ],

    technologiesPara:
      "We utilize industry-leading SEO tools and analytics platforms to monitor performance, identify opportunities, and improve search rankings.",

    technologies: [
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Search Console", icon: SiGooglesearchconsole },
      { name: "SEMrush", icon: SiSemrush },
    ],

   processTitle: "Our SEO Process",

processPara:
  "We follow a proven SEO strategy to improve search engine rankings, increase organic traffic, and help your business achieve long-term online growth.",

process: [
  {
    title: "Website Audit",
    para: "We analyze your website's current SEO performance, identify technical issues, and uncover opportunities for improvement."
  },
  {
    title: "Keyword Research",
    para: "We research relevant and high-performing keywords that align with your business goals and target audience."
  },
  {
    title: "Optimization",
    para: "We optimize website content, meta tags, structure, and technical elements to improve search engine visibility."
  },
  {
    title: "Performance Tracking",
    para: "We continuously monitor rankings, traffic, and user behavior to measure SEO effectiveness and make improvements."
  },
  {
    title: "Reporting",
    para: "We provide detailed SEO reports with insights, progress updates, and recommendations for continued growth."
  }
],
  },

  uiux: {
    hero: {
      title: "UI/UX Design",
      para: "Beautiful, intuitive, and user-centered digital experiences.",
      bgimg: UiuxImg,
    },

    sectionTitle: "UI/UX Design Services We Offer",

    sectionPara:
      "We design engaging and user-friendly interfaces that improve usability, increase customer satisfaction, and strengthen your digital presence.",

    services: [
      {
        title: "User Experience Design",
        para: "Create intuitive user journeys and experiences that improve engagement and satisfaction.",
      },
      {
        title: "User Interface Design",
        para: "Design visually appealing interfaces that align with your brand identity and business goals.",
      },
      {
        title: "Wireframing & Prototyping",
        para: "Build interactive prototypes and wireframes to validate ideas before development begins.",
      },
    ],

    technologiesPara:
      "Our designers use modern design and prototyping tools to craft intuitive, visually appealing, and user-focused experiences.",

    technologies: [
      { name: "Figma", icon: SiFigma },
      // { name: "Adobe XD", icon: SiAdobexd },
      // { name: "Photoshop", icon: SiAdobephotoshop },
    ],

   processTitle: "Our UI/UX Design Process",

processPara:
  "We follow a user-centered design process to create intuitive, visually appealing, and engaging digital experiences that meet both user needs and business goals.",

process: [
  {
    title: "Research",
    para: "We gather insights about your business, target audience, competitors, and user needs to establish a strong design foundation."
  },
  {
    title: "Wireframing",
    para: "We create wireframes to define the structure, layout, and user flow of the application before visual design begins."
  },
  {
    title: "UI Design",
    para: "We design attractive and consistent user interfaces that reflect your brand identity and enhance usability."
  },
  {
    title: "Prototyping",
    para: "We build interactive prototypes to visualize user interactions and validate design concepts before development."
  },
  {
    title: "Testing",
    para: "We conduct usability testing and gather feedback to refine the design and ensure the best possible user experience."
  }
],
  },

  dataanalytics: {
    hero: {
      title: "Data Analytics",
      para: "Transform data into meaningful business insights.",
      bgimg: DataImg,
    },

    sectionTitle: "Data Analytics Services We Offer",

    sectionPara:
      "We help businesses unlock the power of their data through advanced analytics, visualization, and reporting solutions that support smarter decision-making.",

    services: [
      {
        title: "Data Collection & Processing",
        para: "Gather, clean, and organize data from multiple sources for accurate analysis.",
      },
      {
        title: "Business Intelligence",
        para: "Transform raw data into actionable insights through dashboards and reporting tools.",
      },
      {
        title: "Data Visualization",
        para: "Present complex data in clear, interactive visual formats that support decision-making.",
      },
    ],

    technologiesPara:
      "We leverage powerful analytics and visualization tools to uncover trends, measure performance, and generate actionable business insights.",

    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas },
      // { name: "Power BI", icon: SiPowerbi },
      // { name: "Tableau", icon: SiTableau },
      { name: "SQL", icon: SiMysql },
    ],

   processTitle: "Our Data Analytics Process",

processPara:
  "We follow a structured data analytics process to transform raw data into meaningful insights that support informed business decisions and growth.",

process: [
  {
    title: "Data Collection",
    para: "We gather data from multiple sources, including databases, applications, websites, and business systems."
  },
  {
    title: "Data Processing",
    para: "We clean, organize, and prepare the collected data to ensure accuracy, consistency, and reliability."
  },
  {
    title: "Analysis",
    para: "We analyze data using statistical methods and analytical techniques to identify patterns, trends, and opportunities."
  },
  {
    title: "Visualization",
    para: "We create interactive dashboards, charts, and reports that make complex data easy to understand and interpret."
  },
  {
    title: "Reporting",
    para: "We deliver actionable insights and detailed reports that help stakeholders make data-driven business decisions."
  }
],
  },
}