import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <section className="container mx-auto p-4">
      <div className="gap-2 flex flex-wrap -mx-2">
        {projects.map((item) => {
          return <ProjectCard key={item} />;
        })}
      </div>
    </section>
  );
};

export default ProjectList;