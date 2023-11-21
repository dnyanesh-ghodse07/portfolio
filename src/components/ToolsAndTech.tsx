import SkillCard from "./SkillCard";
import reactIcon from "/react.svg";
import css from "/css.svg";
import html from "/html.svg";
import js from "/js.svg";
import git from "/git.svg";
import redux from "/redux.svg";
import sass from "/sass.svg";

interface Skill {
  title: string;
  icon: string;
  desc: string;
}

const ToolsAndTech = () => {
  const skills: Skill[] = [
    {
      title: "React",
      icon: reactIcon,
      desc: "React is an open-source JavaScript library used for building user interfaces.",
    },
    {
      title: "Git",
      icon: git,
      desc: "Git, a distributed version control system essential for collaborative software development.",
    },
    {
      title: "Javascript",
      icon: js,
      desc: "JavaScript is a versatile programming language commonly used for web development.",
    },

    {
      title: "HTML",
      icon: html,
      desc: "HTML, is the standard markup language used to create and structure content on the web. ",
    },
    {
      title: "CSS",
      icon: css,
      desc: "CSS is a stylesheet language used to control the presentation and layout of HTML documents on the web.",
    },
    {
      title: "Redux",
      icon: redux,
      desc: "Redux is a state management library commonly used with React for building predictable and efficient web applications.",
    },
    {
      title: "SASS",
      icon: sass,
      desc: "Sass, or Syntactically Awesome Stylesheets, is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).",
    },
  ];

  const tools = [
    {
      title: "VS code",
      icon: "VS",
    },
    {
      title: "Jira",
      icon: "J",
    },
    {
      title: "npm",
      icon: "npm",
    },
  ];
  return (
    <div className="py-4">
      <h1 className="border-l-2 pl-2 text-heading-text mb-5">Tools & Tech</h1>
      <div className="flex gap-4 flex-wrap overflow-y-scroll text-slate-50">
        {skills.map(({ icon, title }) => {
          return <SkillCard key={title} icon={icon} title={title} />;
        })}
      </div>
      <h2 className="border-l-2 pl-2 text-heading-text mb-5">Other tools</h2>
      <div className="flex gap-4 overflow-y-scroll text-slate-50">
        {tools.map(({ icon, title }) => {
          return <SkillCard key={title} icon={icon} title={title} />;
        })}
      </div>
    </div>
  );
};

export default ToolsAndTech;
