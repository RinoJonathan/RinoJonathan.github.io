import './Footer.css'
import { Link } from "react-router-dom";
import EmailIcon from "../../../assets/EmailIcon";
import LinkedinIcon from "../../../assets/LinkedinIcon";
import TwitterIcon from "../../../assets/TwitterIcon";
import { motion } from 'motion/react';

const buttonAnimations = {
  buttonHover: {
    scale : 1.05,
    transition: { 
      duration: 1,
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  buttonClick: {
    scale: 0.95
  }
}




export default function Footer() {
  return (
    <footer id='contact' className="content min-h-screen bg-tblack text-white flex flex-col justify-center items-center">
      <div className="w-4/5 mx-auto border-b-2 p-8 m-8 text-center">
        <h1 className="text-6xl">Contact</h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:w-4/5 md:mt-20 justify-center items-center space-y-16 md:space-y-0 p-8">
        {[
          {
            icon: <EmailIcon style="w-28 h-28" />,
            text: "arulrinojonathan@gmail.com",
            link: "mailto:arulrinojonathan@gmail.com",
          },
          {
            icon: <TwitterIcon style="w-28 h-28" />,
            text: "@RinoJonathanP",
            link: "https://twitter.com/RinoJonathanP",
          },
          {
            icon: <LinkedinIcon style="w-28 h-28" />,
            text: "rino-jonathan",
            link: "https://www.linkedin.com/in/rino-jonathan/",
          },
        ].map((item, index) => (
          <motion.div key={index} 
          className="flex flex-col items-center text-center"
          variants={buttonAnimations}
          
          whileHover="buttonHover"
          whileTap="buttonClick"
          >
            <Link className="mb-4" to={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </Link>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </footer>
  );
}
