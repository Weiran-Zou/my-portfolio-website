import '../App.css'
import { Stars, OrbitControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useContext, Suspense, useRef } from "react";
import "./Home.css"
import { SectionRefsContext } from '../context/SectionRefsContext';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Robot from "../models/Robot"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Typed from 'typed.js';

// const MOTION_COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const MOTION_COLORS = ["#281e66", "#372a8d", "#661e38", "#782443"];
const resume_link = "https://drive.google.com/file/d/1jvlK5EDJkPZZHWLm_RPqbcUirTKgHxRm/view?usp=sharing"

export default function Home() {
    const sectionRefs = useContext(SectionRefsContext);
    const color = useMotionValue(MOTION_COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #131122 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    const typeEleRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeEleRef.current, {
        strings: ['Full Stack Development.', 'Android App Development.'],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true
    });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);
    
    useEffect(() => {
        animate(color, MOTION_COLORS, {
          ease: "easeInOut",
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        });
      }, [color]);
    return (
        <motion.section
            id="home" 
            ref={el => sectionRefs.current.push(el)}
            style={{backgroundImage}}
        >
        
            <motion.div id="intro-text"  initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay: 0.8}}>
                <div className='intro-main'>
                    <h1>Hi, I'm</h1>
                    <h1>Weiran (Peter) Zou.</h1>
                    <h3 className='typing-text'><span ref={typeEleRef}/></h3>
                
                    <p id="intro-descp">I am an enthusiastic software developer passionate about building innovative digital solutions.</p>   
                
                    <div class="social-wrapper">
                        <motion.button
                            style={{
                                border,
                                boxShadow,
                            }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.985,
                            }}
                            className='resume-btn'
                            onClick={e => window.open(resume_link, "_blank")}
                            >
                            Download Resume
                            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'/>
                        
                        </motion.button>
                        
                        <motion.a  
                            whileHover={{
                                scale: 1.15,
                            }} 
                            href="https://www.linkedin.com/in/weiran-zou-239b6419a/" 
                            aria-label="Linkedin" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin}  size="2xl" className='social-icon'/>
                        </motion.a>
                        <motion.a 
                            whileHover={{
                                scale: 1.15,
                            }} 
                            href="https://github.com/Weiran-Zou" 
                            aria-label="Github" 
                        
                            target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="2xl" className='social-icon'/>
                        </motion.a>
                    
                    </div> 
                </div>

               
             
            </motion.div>
            <motion.div  id='model-robot' initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay: 0.8}}>
                <Canvas  camera={{ position: [0, 0, 8], fov: 75 }}>
                    <directionalLight position={[-5, -5, 5]} intensity={4} />
                    
                    <Suspense fallback={null}>
                        <Robot />
                        
                    </Suspense>
                    <OrbitControls enableZoom={false}/> 
                    
                </Canvas>
                
            </motion.div>
            <Loader/>
            <div style={{position:"fixed", zIndex: "0px", inset: "0px"}}>
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>
        </motion.section>
    )
}