import { motion } from "framer-motion"
import "./SectionHeading.css"

export default function HeadingSection(props) {
    return (
        <motion.div 
            className="sectionHeading" 
            initial={{y:200, opacity:0}}
            whileInView={{y:0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 0.5, delay: 0.2}}
        >
            <h1 className="sectionName">{props.name}</h1>
            <div className="divider" ></div>
        </motion.div>
    )
  
}