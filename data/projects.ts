export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  color: string;
  href: string;
  status: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Malawi Food Security Monitor",
    category: "DATA · GIS",
    description:
      "A food-security intelligence platform for Malawi that processes market-price data, detects unusual price spikes, visualises district-level risk, and brings forecasts, seasonal baselines, indicators, and reports into one dashboard.",
    image: "/images/projects/malawi-food-security.png",
    color: "mint",
    href: "https://frontend-seven-omega-94.vercel.app/",
    status: "Live",
    technologies: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "Next.js"],
  },
  {
    number: "02",
    name: "Akonzi Sofa Furniture",
    category: "E-COMMERCE · WEB",
    description:
      "An online storefront for a Malawian furniture business, presenting product collections and MWK pricing while giving customers a direct WhatsApp route for enquiries and orders.",
    image: "/images/projects/akonzi-furniture.png",
    color: "coral",
    href: "https://akonzifurniture.com/",
    status: "Live",
    technologies: ["Next.js", "React", "E-commerce", "WhatsApp"],
  },
  {
    number: "03",
    name: "Travel Lab Malawi",
    category: "TRAVEL · WEB",
    description:
      "A tourism discovery experience for Malawi that brings destination guides, local experiences, interactive mapping, itinerary planning, accommodation information, and practical travel guidance together in one place.",
    image: "/images/projects/travel-lab.png",
    color: "lavender",
    href: "https://travel-lab-theta.vercel.app/",
    status: "Live",
    technologies: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "04",
    name: "MeepleMania Games",
    category: "EVENTS · EXPERIENCES",
    description:
      "A digital hub for board-game experiences in Malawi, helping visitors explore game nights, upcoming events, Lake Malawi retreats, community activities, and corporate team-building opportunities.",
    image: "/images/projects/meeplemania.png",
    color: "yellow",
    href: "https://meeple.brandfletch.com/",
    status: "Live",
    technologies: ["Board-Game Events", "Community Experiences", "Team-Building"],
  },
  {
    number: "05",
    name: "Brandfletch Dev Studio",
    category: "DIGITAL · SYSTEMS",
    description:
      "A digital studio website showcasing services across custom websites, business applications, business systems, workflow automation, and integrations—helping prospective clients understand the solutions available to them.",
    image: "/images/projects/brandfletch-studio.png",
    color: "mint",
    href: "https://dev.brandfletch.com/",
    status: "Live",
    technologies: ["Custom Websites", "Business Applications", "Workflow Automation"],
  },
  {
    number: "06",
    name: "Jonge Investments",
    category: "FURNITURE · E-COMMERCE",
    description:
      "An online furniture showroom for a Blantyre business, presenting furniture collections, product details, and custom-design options while making it easier for customers to enquire about what they need.",
    image: "/images/projects/jonge-investments.png",
    color: "coral",
    href: "https://jonge-investment.vercel.app/",
    status: "Live",
    technologies: ["Next.js", "React", "TypeScript"],
  },
];
