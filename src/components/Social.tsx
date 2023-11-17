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
      <a href="">
        <LinkedinOutlined />
      </a>
      <a href="">
        <MailOutlined />
      </a>
      <a href="">
        <InstagramOutlined />
      </a>
    </div>
  );
};

export default Social;
