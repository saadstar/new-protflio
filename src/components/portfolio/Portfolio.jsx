import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 6,
    title: "Saudi Export Gate",
    img: "./img/exportgate.webp",
    desc: "Export Gate is a platform that connects exporters with global suppliers, enabling easy product management and seamless quote requests and responses. It offers a professional supplier dashboard, real-time notifications, and instant WhatsApp communication. The system helps businesses access export opportunities and manage operations efficiently and quickly.",
    demo:"https://exportgate.sa/"
  },
  {
    id: 0,
    title: "EzEats Managment App",
    img: "./img/ezeatsProject.png",
    desc: "it is live Project for mange the waiter side for a resturants and caching the orders ,its build using react with typescript as frontend and sashido services for saving the data",
    demo:"https://management.ezeats.app/"
  },
  {
    id: 0,
    title: "Lumiere Valet App",
    img: "./img/lumiere.webp",
    desc: "Lumiere Valet is a smart valet management system built with React, Node.js, Express, MongoDB, and real-time Socket.io communication. It allows customers to request their cars, choose pickup points, and receive live status updates. The dashboard provides admins and drivers full control over vehicle tracking, requests, and operations with an elegant, luxury UI.",
    demo:"https://lumiereservices.com"
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
    title: "E-Commerce App",
    img: "./img/saadstore.jpg",
    desc: "it is a fully e-commerce features having a cart, wishlist components registeration system and having products comming from a api built using node.js and having slider and nodemailer ,Techonlogy:React.js Node.js Express Mongodb and Restapi",
    demo:"https://6553d979cae3660af6da287a--soft-faloodeh-77f36a.netlify.app/"
  },
  {
    id: 3,
    title: "Hotel Booking App",
    img: "./img/flight-book.jpg",
    desc: "It is a full Hotel booking app build using React and node.js ,the app have an registeration system ,search& filter feature ,single hotel page and booking single room. Search_Key:madrid,berlin, london",
    demo:"https://654fc09c7dbdf35a2387e31d--musical-clafoutis-1c205e.netlify.app/"
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
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
