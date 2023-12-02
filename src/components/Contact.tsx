import { InstagramFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="flex flex-col dark:text-slate-200 p-4">
      <h1 className="text-heading-text py-4">Contact</h1>
      <div className="w-full md:flex gap-4 justify-between">
        <div className="my-2">
          <h2>
            Email <MailFilled /> :
          </h2>
          <a href="mailto:ghodsednyaneshwar@gmail.com">
            ghodsednyaneshwar@gmail.com
          </a>
        </div>

        <div className="my-2">
          <h2>
            LinkedIn <LinkedinFilled /> :
          </h2>
          <a href="https://www.linkedin.com/in/dnyaneshwar-ghodse/">
            Dnyaneshwar ghodse
          </a>
        </div>
        <div className="my-2">
          <h2>
            Instagram <InstagramFilled /> :
          </h2>
          <a href="https://www.instagram.com/dnyanesh.ghodse/">
            @dnyanesh.ghodse
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
