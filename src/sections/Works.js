import { 
    motion, 
    useInView, 
    useAnimation,
    useMotionTemplate,
    useMotionValue,
    useSpring 
} from "framer-motion"
import * as React from "react";
import { Link } from "react-router-dom";
import virtualDoctorImg from '../imgs/Virtual-doctor-book-appointment.png'
import foodiesImg from "../imgs/Foodies.png"
import discountAppImg from "../imgs/Discount-Application-resized.png"
import stockImg from "../imgs/Stocks-Application-1.PNG"
import { useRef, useEffect } from "react"
import "./Works.css"
// import Project from "../components/Project"


const projects = [
    {
        id: "1",
        title: "Validitron Virtual Doctor",
        description: "A group university project of five members to extend an existing Web-based telehealth platform that allows video consultation and sharing of clinical data for The Digital Health Validitron.",
        tech: ["Vue.js", "JavaScript", "HTML", "CSS", "Agile methodology", "GitHub", "Confluence"],
        img: virtualDoctorImg
    },
    {
        id: "2",
        title: "Foodies Android App",
        description: "A group university project of four members to create an app targeting for people who like to share and explore food, make friends with people who like foods and join various foods communities to meet people in community for different eating events.",
        tech: ["Java", "Android Studio", "Firebase", "Git"],
        img: foodiesImg
    },
    {
        id: "3",
        title: "Discount Discovery Mobile App",
        description: "A group project of four members to build a React Native mobile application for industry partner – Tanda, which interacts with the Tanda’s API. It allows Tanda's users to view a list of available discounts based on their shift status and allows them to show the cashier the selected discount for use.",
        tech: ["React Native", "JavaScript", "React Navigation", "RESTful API", "GitHub", "Jest"],
        img: discountAppImg
    },
    {
        id: "2",
        title: "Stock Analytics Website",
        description: "A personal university project to develop a React-based web application to allow users to view and analyse stock market statistics, a MySQL database and an Express application that replicates the services provided by the API as documented in the Swagger",
        tech: ["React", "JavaScript", "RESTful APIs", "Node.js", "Express.js", "MYSQL", "Swagger", "Knex", "helmet", "morgan", "JWT"],
        img: stockImg
    }
]

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

function Project ({item}) {
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
    
    return (
        <Link to="..." className="card-link">
       
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
                    {/* <a href="#" class="btn btn-primary">Learn more</a> */}
                </div>
            </motion.div>
        </Link>
    )
}

export default function Works() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControl.start("show")
        }
    }, [isInView])

    return (
        <div id="works" class="container" >
            <motion.div 
                className="sectionHeading" 
                ref={ref}
                variants={{
                    hidden: {y:200, opacity:0},
                    show: {y:0, opacity:1, transition:{duration: 0.5, delay: 0.5}
                    }
                }}
                initial = "hidden"
                animate = {mainControl}>
                <h1 className="sectionName" id="educationHeading">My Works</h1>
                <div className="divider" ></div>
            </motion.div>
            <motion.div 
                ref={ref}
                className="project-container"
                variants={{
                    hidden: {opacity: 0},
                    show: {opacity: 1,
                        transition: {
                            staggerChildren: 0.5,
                            
                        }
                    }
                }}
                initial = "hidden"
                animate = {mainControl}
                >
                {projects.map(item => (
                    <Project item={item} key={item.id}/>
                ))}
            </motion.div>
           
           
           

        </div>

        
    )
}