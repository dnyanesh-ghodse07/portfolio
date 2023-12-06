import { Divider } from "antd";
import ProjectCard from "./ProjectCard";

type Tool = {
  name: string;
  color: string;
};

type Project = {
  id: string;
  projectName: string;
  description: string;
  tool: Tool[];
  git_link: string;
  web_link: string;
  features: string[];
};

const ProjectList = () => {
  const projects: Project[] = [
    {
      id: "73423",
      projectName: "Music Player",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur",
      features: ["Intuitive and responsive design for a smooth user experience", "Clean and minimalistic layout to highlight the music player functionality.", "Play, pause, next, and previous buttons for easy navigation.","Real-time progress indicator for the currently playing track.",
      "Seek functionality to jump to specific parts of the song.","Ensures a seamless experience across various devices and screen sizes."],
      tool: [
        { name: "html", color: "blue" },
        { name: "css", color: "orange" },
        { name: "js", color: "yellow" },
      ],
      git_link: "https://github.com/dnyanesh-ghodse07/music-player",
      web_link: "https://music-player-d1.netlify.app/",
    },
    {
      id: "13423",
      projectName: "Music Player",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur",
      features: [""],
      tool: [
        { name: "html", color: "blue" },
        { name: "css", color: "orange" },
        { name: "js", color: "yellow" },
      ],
      git_link: "https://github.com/dnyanesh-ghodse07/music-player",
      web_link: "https://music-player-d1.netlify.app/",
    },
    {
      id: "2033",
      projectName: "Music Player",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur",
      features: [""],
      tool: [
        { name: "html", color: "blue" },
        { name: "css", color: "orange" },
        { name: "js", color: "yellow" },
      ],
      git_link: "https://github.com/dnyanesh-ghodse07/music-player",
      web_link: "https://music-player-d1.netlify.app/",
    },
    {
      id: "90823",
      projectName: "Music Player",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur",
        features: [""],
      tool: [
        { name: "html", color: "blue" },
        { name: "css", color: "orange" },
        { name: "js", color: "yellow" },
      ],
      git_link: "https://github.com/dnyanesh-ghodse07/music-player",
      web_link: "https://music-player-d1.netlify.app/",
    },
  ];

  return (
    <section id="project-list" className="container">
      <h1 className="text-heading-text">Projects : <Divider /></h1>
      <div className="grid grid-cols-2 place-content-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
