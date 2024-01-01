import { Divider } from "antd";
import ProjectCard from "./ProjectCard";

type Tool = {
  name: string;
  color: string;
};

type Project = {
  id: string;
  projectName: string;
  image: string;
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
      projectName: "Age Old - Hotel Manage",
      image: "../assets/hotel.png",
      description:
        "App for hotels to manage cabins, booking,account & users & also show the insight of Data",
      features: [
        "Dark & light theme",
        "Chart & graphs to show data insights",
        "Intuitive and responsive design for a smooth user experience",
        "Clean and minimalistic design & layout to highlight the functionality.",
        "Ensures a seamless experience across various devices and screen sizes.",
      ],
      tool: [
        { name: "React", color: "blue" },
        { name: "React Query", color: "red" },
        { name: "React form", color: "yellow" },
        { name: "Styled Components", color: "tomato" },
        { name: "React Form", color: "lightblue" },
        { name: "Supabase", color: "lightgreen" },
      ],
      git_link: "https://github.com/dnyanesh-ghodse07/age-old-hotel-manage",
      web_link: "https://age-old-hotel-manage.vercel.app/dashboard",
    },
    {
      id: "13423",
      projectName: "Music Player",
      image: "../assets/music.png",
      description:
        "Music player with functionalities like play,pause, music progress using javascript, html & css",
      features: [
        "Intuitive and responsive design for a smooth user experience",
        "Clean and minimalistic layout to highlight the music player functionality.",
        "Play, pause, next, and previous buttons for easy navigation.",
        "Real-time progress indicator for the currently playing track.",
        "Seek functionality to jump to specific parts of the song.",
        "Ensures a seamless experience across various devices and screen sizes.",
      ],
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
      image: "../assets/music.png",
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
      image: "../assets/music.png",
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
      <h1 className="text-heading-text">
        Projects : <Divider />
      </h1>
      <div className="grid grid-cols-2 place-content-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
