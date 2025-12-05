import "./hero.scss";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const iconBounce = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/heshamsaad.pdf";
    link.download = "heshamsaad.pdf";
    link.click();
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HESHAM SAAD SELIM</motion.h2>
          <motion.h1 variants={textVariants}>
          Senior  Web Developer 
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={downloadResume}
            >
              <span>Download Resume</span>

              <motion.span variants={iconBounce} animate="animate">
                <FiDownload style={{ fontSize: 20 }} />
              </motion.span>
            </motion.button>
          <motion.button
  variants={textVariants}
  onClick={() => window.open("https://wa.me/201275794590", "_blank")}
  className="flex items-center gap-2"
>
<span>
  Contact Me
</span>
  <FaWhatsapp style={{ fontSize: 20 }}  />
</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
       fullstack developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
