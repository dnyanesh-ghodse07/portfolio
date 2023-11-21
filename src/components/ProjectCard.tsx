import { ExportOutlined, GithubOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Music from "../assets//musical-note.png";
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
    <div className="shadow shadow-slate-100 dark:shadow-neutral-50 rounded-sm border-2 p-2 flex-grow dark:text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4">
      <h1 className="border-b-2 m-1 pb-2">{project.projectName}</h1>
      <div className="flex justify-center items-center p-4">
        <img src={Music} alt="" className="w-32" />
      </div>
      <p className="text-sm">{project.description}</p>
      <div className="flex items-center justify-between">
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
  );
};

export default ProjectCard;
