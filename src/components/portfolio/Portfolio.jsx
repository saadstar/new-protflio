import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 0,
    title: "EzEats Managment App",
    img: "./img/ezeatsProject.png",
    desc: "it is live Project for mange the waiter side for a resturants and caching the orders ,its build using react with typescript as frontend and sashido services for saving the data",
    demo:"https://management.ezeats.app/"
  },
  {
    id: 1,
    title: "Building office Mangement App",
    img: "./img/elemanProject.png",
    desc: "Live Project for manging the all process of realstate Company that have alot of sites working on it, its a completly MernStack app build using react,redux,node,express and Multer.",
    demo:"https://www.eleaman.com/"
  },
  {
    id: 2,
    title: "E-Commerce (MernStack) App",
    img: "./img/saadstore.jpg",
    desc: "it is a fully e-commerce features having a cart, wishlist components registeration system and having products comming from a api built using node.js and having slider and nodemailer ,Techonlogy:React.js Node.js Express Mongodb and Restapi",
    demo:"https://6553d979cae3660af6da287a--soft-faloodeh-77f36a.netlify.app/"
  },
  {
    id: 3,
    title: "Hotel Booking (MernStack) App",
    img: "./img/flight-book.jpg",
    desc: "It is a full Hotel booking app build using React and node.js ,the app have an registeration system ,search& filter feature ,single hotel page and booking single room. Search_Key:madrid,berlin, london",
    demo:"https://654fc09c7dbdf35a2387e31d--musical-clafoutis-1c205e.netlify.app/"
  },
  {
    id: 4,
    title: "Youtube (MernStack) App",
    img: "./img/youtube.png",
    desc: "It is full-stack youtube clone build using react and Node, the app have a fully registeration system (login,signup,google), trending section and you can like videos and upload a new video, the data is saved in firebase.",
    demo:"https://6553e311422fac14272caf50--willowy-platypus-3e7cb8.netlify.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container" >
        <div className="wrapper" style={{marginTop:"10px"}}>
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
              <a href={ item.demo}  target="blank">
            <button>
                See Demo
              </button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
