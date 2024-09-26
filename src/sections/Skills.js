import Skillcard from "../components/Skillcard"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
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
import agile from '../imgs/icons8-agile-64.png'
import jest from '../imgs/icons8-jest-96.png'
import './Skills.css'

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControl.start("show")
        }
    }, [isInView])
    return <div id="skills">
       
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
                
                

        </div>
        
}