import "./Contact.css";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

function Contact({className="text"}) {
  return (
    <div className="contact">
      <h1 className="title-1">Contact</h1>
      <div className={className}>Do You Want To Communicate ? 💬</div>
      <div className={className}>Here You Are 👇</div>
      <a target="_blank" href="https://www.instagram.com/itsteatv/">
        <FaInstagram className="icon" />
      </a>
      <a target="_blank" href="https://discord.com/users/703054310128353280">
        <FaDiscord className="icon" />
      </a>
      <a target="_blank" href="https://twitter.com/itsteatv">
        <FaTwitter className="icon" />
      </a>
    </div>
  );
}

export default Contact;
