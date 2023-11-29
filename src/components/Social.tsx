import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Social = () => {
  return (
    <div className="flex gap-4 p-4 text-teal-400 text-2xl">
      <a href="https://github.com/dnyanesh-ghodse07">
        <GithubOutlined />
      </a>
      <a href="https://www.linkedin.com/in/dnyaneshwar-ghodse">
        <LinkedinOutlined />
      </a>
      <a href="mailto:ghodsednyaneshwar@gmail.com">
        <MailOutlined />
      </a>
      <a href="https://www.instagram.com/dnyanesh.ghodse/">
        <InstagramOutlined />
      </a>
    </div>
  );
};

export default Social;
