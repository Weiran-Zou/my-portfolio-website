import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Skillcard.css"
import {animate, motion} from "framer-motion"

const iconVariant = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
export default function Skillcard(props) {
    return (
        <motion.div  
            whileHover={{
                scale: 1.1,
                duration: 0.8,
                
            }}
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
            id="skill-card"
        >
            
            <img src={props.src} ></img>

        </motion.div >
    
    )

}