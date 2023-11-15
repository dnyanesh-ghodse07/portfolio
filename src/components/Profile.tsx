import ProfileImg from "../assets/profile-pic (12).png";
import Social from "./Social";
const Profile = () => {
  return (
    <section>
      <div className="text-white">
        <div className="mx-auto flex flex-col items-center justify-center py-20 px-10">
          <img
            src={ProfileImg}
            alt="Hero Image"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-2 hover:animate-pulse">
            Dnyaneshwar Ghodse
          </h1>
          <p className="text-lg md:text-2xl">Front End Engineer</p>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Profile;
