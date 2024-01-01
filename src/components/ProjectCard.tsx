import { ExportOutlined, GithubOutlined } from "@ant-design/icons";
import { Button, Modal, Tag } from "antd";
// import Music from "../assets/music-p.png";
import React, { useState } from "react";

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

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        footer
        title={project.projectName}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-4">
          <ul className="text-sm text-slate-400 list-disc">
            {project.features.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <div>
            <h2>Technologies used : </h2>
            {project.tool.map((item) => {
              return (
                <Tag className="m-1" color={item.color} key={item.name}>
                  {item.name}
                </Tag>
              );
            })}
          </div>
          <div className="flex justify-between items-center">
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
      </Modal>
      <div className="shadow-md dark:text-slate-200 dark:bg-slate-600 hover:bg-slate-100">
        <div className="">
          <img src={`/public/assets/${project.image}.png`} alt="" className="" />
        </div>
        <div className="flex flex-col p-2">
          <div className="flex items-center justify-between">
            <h1 className="text-orange-300 font-semibold">
              {project.projectName}
            </h1>
            <div className="flex justify-end gap-2 text-xl">
              <a href={project.git_link}>
                <GithubOutlined className="cursor-pointer" />
              </a>
              <a href={project.web_link}>
                <ExportOutlined className="cursor-pointer" />
              </a>
            </div>
          </div>
          <p className="text-sm">{project.description}</p>
          <Button
            size="small"
            className="mt-2 text-slate-600 dark:text-slate-100"
            onClick={showModal}
          >
            Know more
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
