import { Input, Button } from "antd";
const { TextArea } = Input;

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-heading-text py-4">Contact</h1>
      <div className="w-full md:w-[600px] flex flex-col gap-4">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <TextArea placeholder="message" />
        <Button className="text-teal-300">Send</Button>
      </div>
    </div>
  );
};

export default Contact;
