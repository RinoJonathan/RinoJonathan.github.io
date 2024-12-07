
import { motion } from 'motion/react'
import './AuroraButton.css'

interface AuroraButtonProp {
  text: string
}

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

export default function AuroraButton({text} : AuroraButtonProp)  {
  return (
    <motion.button 
    className="auroraButton"
    variants={buttonAnimations}
    whileHover="buttonHover"
    whileTap="buttonClick">
      <span className="auroraButton__inner ">
        <span className="auroraButton__label" data-label={text} data-hover={text}>
          Get in touch
          <span className="auroraButton__labelBackground"></span>
        </span>
      </span>
      <span className="auroraButton__background"></span>
    </motion.button>
  )
}
