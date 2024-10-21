import { Stars, OrbitControls,  Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useContext, Suspense, useRef } from "react";
import "./Home.css"
import { SectionRefsContext } from '../context/SectionRefsContext';
import { motion } from "framer-motion";
import Robot from "../models/Robot"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Typed from 'typed.js';
import { ThemeContext } from "../context/ThemeContext";

const resume_link = "https://drive.google.com/file/d/1jvlK5EDJkPZZHWLm_RPqbcUirTKgHxRm/view?usp=sharing"
function Loader() {
    const { progress } = useProgress()
    return <Html center style={{fontFamily:'inherit', fontsize:'1.25rem', color:'#e3a0b8'}}>{progress.toFixed(2)} % loaded</Html>
}

export default function Home() {
    const theme = useContext(ThemeContext);
    const sectionRefs = useContext(SectionRefsContext);
    const typeEleRef = useRef(null);

    const hireMeBtnHandler = () => {
        const contactRef = sectionRefs.current.filter((section) => section.id === "contact")[0];
        contactRef.scrollIntoView({ behavior: 'smooth' }); 
    }

    useEffect(() => {
        const typed = new Typed(typeEleRef.current, {
        strings: ['Full Stack Development', 'Android App Development'],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);
    
    return (
        <motion.section
            id="home" 
            ref={el => sectionRefs.current.push(el)}
            // style={{backgroundImage}}
        >
        
            <motion.div id="intro-text"  initial={{x:0, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay: 0.8}}>
                <div className='intro-main'>
                    <h1>Hi, I'm <br/>Weiran (Peter) Zou</h1>
                    <h3 className='typing-text'><span ref={typeEleRef}/></h3>
                
                    <p className="intro-descp">I am an enthusiastic software developer passionate about building innovative digital solutions.</p>   
                
                    <div className="cta-wrapper">
                        <motion.a
                           
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.985,
                            }}
                            className='hire-me-btn'
                            href="#contact"
                            >
                            Hire Me
                          
                        
                        </motion.a>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.985,
                            }}
                            className='resume-btn'
                            onClick={e => window.open(resume_link, "_blank")}
                            >
                            Download CV
                            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                        
                        </motion.button>
                       
                    </div> 
                </div>

               
             
            </motion.div>
            <motion.div  id='model-robot' initial={{x:0, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay: 0.8}}>
                <Canvas  camera={{ position: [0, 0, 8], fov: 75 }}>
                    <directionalLight position={[-5, -5, 5]} intensity={4} />
                    
                    <Suspense fallback={<Loader/>}>
                        <Robot />
                        
                    </Suspense>
                    <OrbitControls enableZoom={false}/> 
                    
                </Canvas>
                
            </motion.div>
       
            {theme.theme === "dark" && <div style={{position:"fixed", zIndex: "0px", inset: "0px"}}>
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>}
        </motion.section>
    )
}