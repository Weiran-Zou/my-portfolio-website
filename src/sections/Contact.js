import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

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
    <div id="contact" class="container text-center" >
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
         
        <div className="row" style={{marginTop: "2rem"}}>
          <motion.div  
            id="myContact" 
            className='col' 
            ref={ref}
            variants={{
                hidden: {x:-200, opacity:0},
                show: {x:0, opacity:1, transition:{duration: 0.5, delay: 0.5}
                }
            }}
            initial = "hidden"
            animate = {mainControl}>
              
           <div style={{width: "100%"}}>
              <div id='contactInfo'>
                <h2>Let's Get in Touch</h2>
                <p>If you are interested in any of my works or are passionate about innovative digital solutions, please contact me...</p>
              </div>
            <div class="card card-contact row" style={{backgroundColor:"#292947", marginBottom: "2rem", color:"white"}}>
                <div class="card-body row" >
                  <div class="col-3" > <FontAwesomeIcon icon={faEnvelope} size="xl" className='social-icon'/></div>
                  <div class="col-9" ><p class="card-text">zouweiran9122@gamil.com</p></div>            
                </div>
            </div>

            <div class="card card-contact row" style={{backgroundColor:"#292947", marginBottom: "2rem", color:"white"}}>
                <div class="card-body row" >
                  <div class="col-3" >  <FontAwesomeIcon icon={faLocationDot} size="xl" className='social-icon'/></div>
                  <div class="col-9" ><p class="card-text">Malvern, VIC, Australia</p></div> 
                </div>
              </div>      
             
            
           
            <div class="card card-contact row " style={{ backgroundColor:"#292947", marginBottom: "2rem", color:"white"}}>
              <div class="card-body row" >
                <div class="col-3" > <FontAwesomeIcon icon={faPhone} size="xl" className='social-icon'/></div>
                <div class="col-9" ><p class="card-text">+61 433 965 706</p></div> 
              </div>
            </div>
            <div class="card card-contact row " style={{border:"none", backgroundColor:"#292947"}}>
                <div class="card-body row">                  
                  <div class="col-4" > <a href="..." ><FontAwesomeIcon icon={faLinkedin} size="2xl" className='social-icon'/></a></div>
                  <div class="col-4" ><a href="..." ><FontAwesomeIcon icon={faGithub} size="2xl" className='social-icon'/></a></div> 
                  <div class="col-4" > <a href="..." ><FontAwesomeIcon icon={faFacebook} size="2xl" className='social-icon'/></a></div>
                </div>
            </div>

          </div>
  
          </motion.div>
          
           <motion.div 
            style={{alignItems:"center", zIndex:"999"}} 
            className='justify-content-center col'
            ref={ref}
            variants={{
                hidden: {x:200, opacity:0},
                show: {x:0, opacity:1, transition:{duration: 0.5, delay: 0.5}
                }
            }}
            initial = "hidden"
            animate = {mainControl}>
            <form  id="contactForm" >                 
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