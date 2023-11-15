import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Social = () => {
  return (
    <div className="flex gap-4 p-4 text-teal-400 text-2xl">
      <GithubOutlined />
      <LinkedinOutlined />
      <MailOutlined />
      <InstagramOutlined />
    </div>
  );
};

export default Social;
