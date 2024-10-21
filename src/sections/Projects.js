import { motion } from "framer-motion"
import virtualDoctorImg from '../assets/imgs/Virtual-doctor-book-appointment.png'
import foodiesImg from "../assets/imgs/Foodies.png"
import discountAppImg from "../assets/imgs/Discount-Application-resized.png"
import stockImg from "../assets/imgs/Stocks-Application-1.PNG"
import { useContext } from "react"
import "./Projects.css"
import Project from "./Project";
import { SectionRefsContext } from '../context/SectionRefsContext';
import SectionHeading from "../components/SectionHeading";

const projects = [
    {
        id: "1",
        title: "Validitron Virtual Doctor",
        description: "A group project of five members to extend the functionalities of an existing web-based telehealth platform and implement architectural changes to accommodate a Fast Healthcare Interoperability Resources (FHIR) server for the Validitron.",
        tech: ["Vue.js", "JavaScript", "HTML", "CSS", "Agile methodology", "GitHub"],
        img: virtualDoctorImg
    },
    {
        id: "2",
        title: "Foodies Android App",
        description: "A group project of four members to create an Android app targeting for people who like to share and explore food, make friends with food lovers and join various foods communities.",
        tech: ["Java", "Android Studio", "Firebase", "Git"],
        img: foodiesImg
    },
    {
        id: "3",
        title: "Discount Discovery Mobile App",
        description: "A group project of four members to build a mobile application for software company, Tanda, interacting with Tanda’s API and showing the available discounts to Tanda’s users based on shift status.",
        tech: ["React Native", "JavaScript", "React Navigation", "RESTful API", "GitHub", "Jest"],
        img: discountAppImg
    },
    {
        id: "4",
        title: "Stock Analytics Website",
        description: "A web development project to develop a React-based web application for stock analysis, and create an Express application and a MySQL database that replicates the services provided by the API as documented in the Swagger.",
        tech: ["React", "JavaScript", "RESTful APIs", "Node.js", "Express.js"],
        img: stockImg
    }
]

export default function Projects() {
    const sectionRefs = useContext(SectionRefsContext);
    return (
        <section 
            id="projects" 
            ref={el => sectionRefs.current.push(el)}
        >
            <SectionHeading name="My Projects"/>
            <div className="projects-container" >
                {projects.map(item => (
                     <motion.div
                        className="project-wrapper"
                        key={item.id}
                        initial={{y:200, opacity:0}}
                        whileInView={{y:0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Project item={item} key={item.id}/>
                    </motion.div>
                ))}
            </div>
        </section>

        
    )
}