import '../App.css'
import { TypeAnimation } from 'react-type-animation';
import profile from '../imgs/programmer2.jpeg'
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import "./Home.css"

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
    const color = useMotionValue(COLORS_TOP[0]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.div id="home"  style={{
            backgroundImage,
            padding:"5rem"
          }} >
            
                <div id="intro-text">
                    <div id="intro-type">
                        <TypeAnimation
                            preRenderFirstString={true}
                            sequence={[
                                "Hi, I'm Weiran (Peter) Zou. \n",
                                1000,
                                "Hi, I'm Weiran (Peter) Zou. \n Full Stack Development",
                                1000,
                                "Hi, I'm Weiran (Peter) Zou. \n Android App Development",
                                1000
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{whiteSpace: 'pre-line', fontWeight:"bold" }}
                            repeat={Infinity}
                        />
                    
                    </div>
                    <div id="intro-descp">  
                        <motion.p 
                            initial={{x:-100, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration: 0.5, delay: 0.5}}
                            
                        >
                            I am an enthusiastic and self-motivated young professional with a passion for software development and creating innovative digital solutions. I am eager to join collaborative environment where I can leverage my skills and contribute to impactful projects.
                        </motion.p>   
                        
                    </div>
                </div>
                
                <div id="intro-img">
                    <motion.img 
                        style={{width:"100%",height:"auto"}}
                        initial={{x:200, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration: 0.5, delay: 0.5}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dgdq8br-09cc7ad6-a021-47a5-b0e0-917b12b0f7a7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGdkcThici0wOWNjN2FkNi1hMDIxLTQ3YTUtYjBlMC05MTdiMTJiMGY3YTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tqRMtE-b2QiI2nnefNxSDMJvZCcYqFmq2ccg_Xfzqb8" alt='profile'
                    />  
                </div>
               
        
                {/* <ReactTyped 
                    className='typing'              
                    strings={["Hi, I'm Weiran Zou. <br/> Aspiring software developer"]} 
                    typeSpeed={40}
                />                           */}
              
           
                
              
            <div style={{position:"fixed", zIndex: "0px", inset: "0px"}}>
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div>
        </motion.div>
    )
}