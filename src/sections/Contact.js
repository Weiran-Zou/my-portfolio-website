import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.subject) {
    errors.subject = 'Required';
  } 

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 6) {
    errors.message= 'Must be 6 characters or more';
  }

  return errors;
};

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validate,
    onSubmit: (values, actions) => {
      // alert(JSON.stringify(values, null, 2));
      
      const PUBLIC_KEY = "-n3IBVtNIP66TwZyo";
      const SERVICE_ID = "service_ryrm1vf";
      const TEMPLATE_ID = "template_x5ugo5c"
      const templateParams = {
        to_name: "Weiran Zou",
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        subject: values.subject
      }
      // console.log(templateParams)
      emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('🦄 Submission successful!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          actions.setSubmitting(false);
          actions.resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(`FAILED... ${error.text}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
          });
          actions.setSubmitting(false);
        },
      );
    },
  });
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControl.start("show")
        }
    }, [isInView])
    return (
    <div id="contact" >
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
            <h1 className="sectionName" >Contact Me</h1>
            <div className="divider" ></div>
        </motion.div>
      
          {/* Same as */}
        <div className="contanct-container">
          <motion.div  
            id="myContact" 
          
            
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
              <form 
                id="contactForm" 
                onSubmit={formik.handleSubmit}
                >                 
                <div class="mb-4" >
                  <label htmlFor="name" class="form-label">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    class="form-control border-0"  
                    style={{backgroundColor:"#0c0c1d", color:"white"}}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    />
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{color:"red", marginTop:"1rem"}}>{formik.errors.name}</div>
                  ) : null}
                </div>
                <div class="mb-4">
                  <label htmlFor="email" class="form-label">Your Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    class="form-control border-0"  
                    style={{backgroundColor:"#0c0c1d", color:"white"}}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    />   
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{color:"red", marginTop:"1rem"}}>{formik.errors.email}</div>
                  ) : null} 
                </div>      
                <div class="mb-4">
                  <label htmlFor="subject" class="form-label">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    class="form-control border-0" 
                    style={{backgroundColor:"#0c0c1d", color:"white"}}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    />    
                  {formik.touched.subject && formik.errors.subject ? (
                    <div style={{color:"red", marginTop:"1rem"}}>{formik.errors.subject}</div>
                  ) : null} 
                </div> 
                <div class="mb-4">
                  <label htmlFor="message" class="form-label">Message</label>
                  <textarea 
                    type="text" 
                    name="message"
                    class="form-control border-0" 
                    style={{height: "230px",backgroundColor:"#0c0c1d", color:"white"}} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message? (
                    <div style={{color:"red", marginTop:"1rem"}}>{formik.errors.message}</div>
                  ) : null} 
                </div>
                <div class="mb-4 text-center" style={{marginTop:"2rem"}}>
                  <button type="submit" class="btn btn-primary" style={{fontWeight:"bold", width:"100%", fontSize: "20px", padding:"1rem 0", backgroundColor:"#268077", border:"none"}}>Send</button>
                  <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition= {Bounce}
                  />
                </div>    
              </form>
          </motion.div>
        </div>  
            
        </div>
    
    
    
    )
 
}