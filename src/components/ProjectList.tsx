import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <section id="project-list" className="container mx-auto p-4">
      <div className="flex flex-wrap gap-4 -mx-2">
        {projects.map((item) => {
          return <ProjectCard key={item} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;
