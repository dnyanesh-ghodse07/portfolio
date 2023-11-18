import { ExportOutlined, GithubOutlined } from "@ant-design/icons";

const ProjectCard = () => {
  // const { isDark } = useTheme();
  return (
    <div
      className={
        " shadow shadow-neutral-50 rounded-sm border-2 p-4 flex-grow text-gray-100 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4 hover:translate-y-1 hover:animate-pulse"
      }
    >
      <h1 className={"border-b-2 m-1 pb-2"}>Title</h1>
      <p className={"text-sm"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        deleniti minus sunt possimus delectus dolorum, eos eum. Quae nobis eius
        molestias soluta velit beatae cupiditate veritatis iusto. Recusandae,
        delectus perspiciatis.
      </p>
      <div className="flex justify-end">
        <GithubOutlined />
        <ExportOutlined />
      </div>
    </div>
  );
};

export default ProjectCard;
