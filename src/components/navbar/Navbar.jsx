import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         Eng/ HESSHAM SAAD SELIM
        </motion.span>
      <div className="social">
  <a href="https://www.github.com/saadstar" target="_blank" rel="noreferrer">
    <FaGithub className="icon github" />
  </a>

  <a href="https://www.linkedin.com/in/hesham-saad-a28429215/" target="_blank" rel="noreferrer">
    <FaLinkedin className="icon linkedin" />
  </a>

  <a href="https://www.facebook.com/profile.php?id=100009015029306" target="_blank" rel="noreferrer">
    <FaFacebook className="icon facebook" />
  </a>

  <a href="mailto:heshamsaad151t@gmail.com" target="_blank" rel="noreferrer">
    <FaEnvelope className="icon email" />
  </a>
</div>

      </div>
    </div>
  );
};

export default Navbar;
