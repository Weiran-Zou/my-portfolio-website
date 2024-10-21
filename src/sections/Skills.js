import Skillcard from "../components/Skillcard"
import { useContext } from "react"
import { motion } from "framer-motion"
import express from '../assets/imgs/icons8-express-js.svg'
import node from '../assets/imgs/icons8-nodejs.svg'
import react from '../assets/imgs/icons8-react.svg'
import vue from "../assets/imgs/icons8-vue-js.svg"
import javaScript from '../assets/imgs/icons8-javascript.svg'
import html from '../assets/imgs/icons8-html.svg'
import css from '../assets/imgs/icons8-css.svg'
import mySql from '../assets/imgs/icons8-mysql.svg'
import java from '../assets/imgs/icons8-java.svg'
import reactNative from '../assets/imgs/icons8-react-native.svg'
import androidStudio from '../assets/imgs/icons8-android-studio.svg'
import firebase from '../assets/imgs/icons8-firebase.svg'
import jest from '../assets/imgs/icons8-jest-96.png'
import './Skills.css'
import { SectionRefsContext } from '../context/SectionRefsContext';
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
    const sectionRefs = useContext(SectionRefsContext);
    return (
        <section
            id="skills" 
            ref={el => sectionRefs.current.push(el)}
        >
            <SectionHeading name="Skills Profile"/>
            <div className="skills-container">
                <motion.div 
                    className="skills-item"  
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{duration: 0.5, delay: 0.2}}
                > 
                    <h3 >Frontend SKills</h3>
                    <div className="skills-row">          
                        <Skillcard src={react} skillName="React" />
                        <Skillcard src={vue} skillName="Vue" />
                        <Skillcard src={javaScript} skillName="JavaScript" />
                        <Skillcard src={html} skillName="HTML" />
                        <Skillcard src={css} skillName="CSS" />
                    </div>
                </motion.div> 
                <motion.div 
                    className="skills-item"  
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{duration: 0.5, delay: 0.2}}
                > 
                    <h3 >Backend Skills</h3>
                    <div className="skills-row">          
                        <Skillcard src={node} skillName="Node" />
                        <Skillcard src={express} skillName="Express" />
                        <Skillcard src={mySql} skillName="MySQL" />
                    </div>
                </motion.div> 
                <motion.div 
                    className="skills-item"  
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{duration: 0.5, delay: 0.2}}
                > 
                    <h3 >Mobile Skills</h3>
                    <div className="skills-row">          
                        <Skillcard src={java} skillName="Java" />
                        <Skillcard src={reactNative} skillName="React Native" />
                        <Skillcard src={androidStudio} skillName="Android Studio" />
                        <Skillcard src={firebase} skillName="Firebase" />
                    </div>
                </motion.div> 
                
                <motion.div 
                    className="skills-item"  
                    initial={{y:200, opacity:0}}
                    whileInView={{y:0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{duration: 0.5, delay: 0.2}}
                > 
                    <h3 >Tests</h3>
                    <div className="skills-row">          
                        <Skillcard src={jest} skillName="Jest" />
                    </div>
                </motion.div> 
                  
                </div>
                
                

        </section>
    )
        
}
