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
            className='col-md-3' style={{ margin:"1rem 0",  alignItems:"center"}}>
            <div id="skill-card">
                <img src={props.src} style={{padding:"0 2rem", width:"8rem"}}></img>
               
            </div>  
        </motion.div >
    
    )
    // <div className=' col-md-4' style={{margin:"1rem 0"}}>
    //     <div class="card" id="skill-card">
    //             <FontAwesomeIcon icon={props.skillIcon} className='card-img-top' size="2x" style={{padding:"1rem 0"}}/>
    //             <h5 card-title style={{padding:"1rem 0"}}>{props.skillName}</h5>
    //         </div>
    // </div> 
    
}