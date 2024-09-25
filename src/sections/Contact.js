import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControl.start("show")
        }
    }, [isInView])
    return (
    <div id="contact">
        <motion.div 
            className="sectionHeading" 
            ref={ref}
            variants={{
                hidden: {y:200, opacity:0},
                show: {y:0, opacity:1, transition:{duration: 0.5, delay: 0.2}
                }
            }}
            initial = "hidden"
            animate = {mainControl}>
            <h1 className="sectionName" id="educationHeading">Contact Me</h1>
            <div className="divider" ></div>
        </motion.div>
         
        <div className="contanct-container">
          <motion.div  
            id="myContact" 
          
            ref={ref}
            variants={{
                hidden: {x:-200, opacity:0},
                show: {x:0, opacity:1, transition:{duration: 0.5, delay: 0.5}
                }
            }}
            initial = "hidden"
            animate = {mainControl}>
              
           
            <div id='contactInfo'>
              <h2>Let's Get in Touch</h2>
              <p>If you are interested in any of my works or are passionate about innovative digital solutions, please contact me...</p>
            </div>
            <div className="social-card-container">
              <div class="social-card-wrapper">
                <FontAwesomeIcon icon={faEnvelope} size="xl" className='social-icon'/>
                <span class="social-card-text">zouweiran9122@gamil.com</span>
              </div>
            </div>
            <div className="social-card-container">
              <div class="social-card-wrapper">
                <FontAwesomeIcon icon={faLocationDot} size="xl" className='social-icon'/>
                <span class="social-card-text">Malvern, VIC, Australia</span>
              </div>
            </div>
            <div className="social-card-container">
              <div class="social-card-wrapper">
                <FontAwesomeIcon icon={faPhone} size="xl" className='social-icon'/>
                <span class="social-card-text">+61 433 965 706</span>
              </div>
            </div>
            <div className="social-card-container">
              <div class="social-card-wrapper">
                <a href="https://www.linkedin.com/in/weiran-zou-239b6419a/" aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin}  size="2xl" className='social-icon'/>
                </a>
                <a href="https://github.com/Weiran-Zou" aria-label="Github" className='social-icon'>
                  <FontAwesomeIcon icon={faGithub} size="2xl" className='social-icon'/>
                </a>
                
              </div>    
            </div>
            
  
          </motion.div>
          
           <motion.div 
            id="contactForm-container"
            ref={ref}
            variants={{
                hidden: {x:200, opacity:0},
                show: {x:0, opacity:1, transition:{duration: 0.5, delay: 0.5}
                }
            }}
            initial = "hidden"
            animate = {mainControl}>
              <form id="contactForm" >                 
                <div class="mb-4" >
                  <label for="inputName" class="form-label">Your Name</label>
                  <input type="text" class="form-control border-0"  style={{backgroundColor:"#0c0c1d", color:"white"}}/>
                </div>
                <div class="mb-4">
                  <label for="inputEmail" class="form-label">Your Email address</label>
                  <input type="email" class="form-control border-0"  style={{backgroundColor:"#0c0c1d", color:"white"}}/>    
                </div>      
                <div class="mb-4">
                  <label for="inputEmail" class="form-label">Topic</label>
                  <input type="email" class="form-control border-0"style={{backgroundColor:"#0c0c1d", color:"white"}}/>    
                </div> 
                <div class="mb-4">
                  <label for="inputMessage" class="form-label">Message</label>
                  <textarea class="form-control border-0" style={{height: "230px",backgroundColor:"#0c0c1d", color:"white"}} />
                </div>
                <div class="mb-4 text-center" style={{marginTop:"2rem"}}>
                  <button type="submit" class="btn btn-primary" style={{fontWeight:"bold", width:"100%", fontSize: "20px", padding:"1rem 0", backgroundColor:"#268077", border:"none"}}>Send</button>
                </div>    
              </form>
          </motion.div>
        </div>  
            
        </div>
    
    
    
    )
 
}