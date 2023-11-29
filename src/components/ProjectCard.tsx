import { ExportOutlined, GithubOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Music from "../assets/music-p.png";
import React from "react";

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
};

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="shadow-gray-700 border-[.5px] dark:text-slate-200 dark:drop-shadow-xl dark:bg-slate-600">
      <div className="">
        <img src={Music} alt="" className="" />
      </div>
      <div className="flex flex-col p-2">
        <h1 className="text-orange-300 font-semibold">{project.projectName}</h1>
        <p className="text-sm font-thin">{project.description}</p>
        <div className="flex justify-between items-center">
          <div>
            {project.tool.map((item) => {
              return (
                <Tag color={item.color} key={item.name}>
                  {item.name}
                </Tag>
              );
            })}
          </div>
          <div className="flex justify-end gap-2 mt-2 text-xl">
            <a href={project.git_link}>
              <GithubOutlined className="cursor-pointer" />
            </a>
            <a href={project.web_link}>
              <ExportOutlined className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
