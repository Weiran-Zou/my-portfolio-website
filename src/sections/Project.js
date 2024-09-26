import { 
    motion, 
    useMotionTemplate,
    useMotionValue,
    useSpring 
} from "framer-motion"
import React from "react";
import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Project.css"
import MyModal from "../components/MyModal";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;



const Project = ({item}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const openModal = () => {
        setIsModalOpen(true);
        console.log("hi")
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return (
        // <Link to="..." className="card-link">
        <>
            <MyModal
                show={isModalOpen}
                onCancel={closeModal}
                header={item.title}
                className="project-details-modal"
              
            >
               
                <img src={item.img}  alt="..." />
                <div className="card-body" >
                    <ul className="techList">
                        { item.tech.map(tech =>
                            <li>{tech}</li>
                        )}
                        
                    </ul>
                    <p className="card-text">{item.description}</p>
                </div>
                
               
            </MyModal>
            <motion.div 
                
                className="project-card"
                variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
                whileHover={{
                    // rotate: 5,
                    scale:1.05,
                    transition:{duration:0.8}
                }}
                // whileHover={{ scale: 0.95, rotate: "-1deg" }}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                >
                <img src={item.img}  alt="..." style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}/>
                <div className="card-body"  style={{
                    transform: "translateZ(50px)",
                }}>
                    <h5 className="card-title">{item.title}</h5>
                    <ul className="techList">
                        { item.tech.map(tech =>
                            <li>{tech}</li>
                        )}
                        
                    </ul>
                    <p className="card-text">{item.description}</p>
                    <button type="button" class="btn btn-primary" onClick={openModal}>Show More</button>
                </div>
            </motion.div>
        </>
        // </Link>
       
    )
}

export default Project;