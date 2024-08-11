import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          HESSHAM SAAD
        </motion.span>
        <div className="social">
          <a href={'https://www.github.com/saadstar'}  target="blank">
            <img src="/github.jpg" alt="github"/>
          </a>
          <a href="https://www.linkedin.com/in/hesham-saad-a28429215/" target="blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009015029306" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="heshamsaad151t@gmail.com" target="blank">
            <img src="/email.png" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
