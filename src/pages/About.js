import "./About.css";
import { FaGithub } from "react-icons/fa";

function About({ className = "text" }) {
  const github = "https://github.com/itsteatv";

  return (
    <div>
      <h1 className="title-1">About</h1>
      <div className={className}>Hi, I'm Reza 👋 </div>
      <div className={className}>They Call Me itsteatv 🧑🏻‍💻</div>
      <div className={className}>I'm Junior FrontEnd Developer ⚛️</div>
      <div className={className}>
        You Want Other Projects ?! Click On Icon 👇
      </div>
      <a href={github} target="_blank">
        <FaGithub className="icon" />
      </a>
    </div>
  );
}

export default About;
