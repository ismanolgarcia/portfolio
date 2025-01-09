interface HardSkill {
  name: string;
  description: string;
  icon: string;
}
const hardSkills: HardSkill[] = [
  {
    name: "AstroJs",
    description: "Specialized in building modern static websites, leveraging its speed and flexibility when integrated with other frameworks.",
    icon: "astro_dark"
  },
  {
    name: "NextJs",
    description: "A key framework for developing dynamic web applications, combining SSR and SSG to enhance user experience.",
    icon: "nextjs_icon_dark"
  },
  {
    name: "NodeJs",
    description: "Proven experience in backend development and efficient RESTful APIs, used in scalable projects since 2018.",
    icon: "nodejs"
  },
  {
    name: "MongoDB",
    description: "Preferred NoSQL database for handling large data volumes in high-performance applications.",
    icon: "mongodb"
  }
];


export default hardSkills;