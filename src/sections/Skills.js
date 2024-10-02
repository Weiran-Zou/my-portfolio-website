import Skillcard from "../components/Skillcard"
import { useContext } from "react"
import { motion } from "framer-motion"
import express from '../imgs/icons8-express-js.svg'
import node from '../imgs/icons8-nodejs.svg'
import react from '../imgs/icons8-react.svg'
import vue from "../imgs/icons8-vue-js.svg"
import javaScript from '../imgs/icons8-javascript.svg'
import html from '../imgs/icons8-html.svg'
import css from '../imgs/icons8-css.svg'
import mySql from '../imgs/icons8-mysql.svg'
import java from '../imgs/icons8-java.svg'
import reactNative from '../imgs/icons8-react-native.svg'
import androidStudio from '../imgs/icons8-android-studio.svg'
import firebase from '../imgs/icons8-firebase.svg'
import jest from '../imgs/icons8-jest-96.png'
import './Skills.css'
import { SectionRefsContext } from '../Context/SectionRefsContext';

export default function Skills() {
    const sectionRefs = useContext(SectionRefsContext);
    return (
        <section
            id="skills" 
            ref={el => sectionRefs.current.push(el)}
        >
            <motion.div 
                className="sectionHeading" 
                initial={{y:200, opacity:0}}
                whileInView={{y:0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <h1 className="sectionName">Skills Profile</h1>
                <div className="divider" ></div>
            </motion.div>
                <div className="skills-container">
                    <div className="skills-item"> 
                        <h2 className="row">Frontend SKills</h2>
                        <div className="skills-row">          
                            <Skillcard src={react} skillName="React" />
                            <Skillcard src={vue} skillName="Vue" />
                            <Skillcard src={javaScript} skillName="JavaScript" />
                            <Skillcard src={html} skillName="HTML" />
                            <Skillcard src={css} skillName="CSS" />
                        </div>
                    </div>    
                    <div className="skills-item">
                        <h2 className="row">Backend Skills</h2>
                        <div className="skills-row">
                            <Skillcard src={node} skillName="Node" />
                            <Skillcard src={express} skillName="Express" />
                            <Skillcard src={mySql} skillName="MySQL" />
                        </div>
                    </div>
                    <div className="skills-item"> 
                        <h2 className="row">Mobile Skills</h2>
                        <div className="skills-row">
                            <Skillcard src={java} skillName="Java" />
                            <Skillcard src={reactNative} skillName="React Native" />
                            <Skillcard src={androidStudio} skillName="Android Studio" />
                            <Skillcard src={firebase} skillName="Firebase" />
                        </div>
                    </div>
                    <div className="skills-item"> 
                        <h2 className="row">Tests</h2>
                        <div className="skills-row">
                            <Skillcard src={jest} skillName="Jest" />
                            
                        </div>
                    </div>
                </div>
                
                

        </section>
    )
        
}
