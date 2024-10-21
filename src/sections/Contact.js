import { useContext } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { Formik, Form } from 'formik';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SectionRefsContext } from '../context/SectionRefsContext';
import Input from "../components/formElements/Input"
import * as Yup from "yup";
import SectionHeading from "../components/SectionHeading"

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  subject: Yup.string()
    .required('Required'),
  message: Yup.string()
    .min(6, 'Must be 6 characters or more')
});

const onSubmit = (values, actions) => {
  console.log('hi')
  console.log(values)
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
  const response = emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

  toast.promise(
    response,
    {
      pending: "Sending your message...",
      success: {
        render() {
          actions.setSubmitting(false);
          actions.resetForm(); 
          return '🦄 Submission successful!'; 
        },
      },
      error: {
        render({ data }) {
          actions.setSubmitting(false);
          return `FAILED... ${data.text}`; 
        },
      },
    },
    {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    }
  );
}

export default function Contact() {
  const sectionRefs = useContext(SectionRefsContext);
    return (
      <section 
        id="contact" 
        ref={el => sectionRefs.current.push(el)}>
          <SectionHeading name="Contact Me"/>
          <div className="contanct-container">
            <motion.div  
              id="myContact" 
              initial={{x:-100, opacity:0}}
              whileInView={{x:0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.5, delay: 0.5}}
            >
           
              <div id='contactInfo'>
                <h2>Let's Get in Touch</h2>
                <p>If you are interested in any of my works or are passionate about innovative digital solutions, please contact me...</p>
              </div>
              
            
              <div class="social-card-wrapper">
                <FontAwesomeIcon icon={faEnvelope} size="2xl" className="contact-icon"/>
                <span class="social-card-text">zouweiran9122@gamil.com</span>
              </div>
            
            
              <div class="social-card-wrapper">
                <FontAwesomeIcon icon={faLocationDot} size="2xl" className="contact-icon"/>
                <span class="social-card-text">Malvern, VIC, Australia</span>
              </div>
          
            
              <div class="social-card-wrapper">
                <FontAwesomeIcon icon={faPhone} size="2xl" className="contact-icon"/>
                <span class="social-card-text">+61 433 965 706</span>
              </div>
          
            </motion.div>
            
            <motion.div 
              id="contactForm-container"
              initial={{x:100, opacity:0}}
              whileInView={{x:0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.5, delay: 0.5}}
            >
              
             <Formik initialValues={{
                name: '',
                email: '',
                subject: '',
                message: ''
              }}
              validationSchema = {validationSchema}
              onSubmit={onSubmit}>
               
                <Form id="contactForm">        
                  <h5>Send Me a Message</h5> 
                  <Input 
                    label="Full Name" 
                    name="name" 
                    type="text" 
                    placeholder="What's your full name?"
                    element="input"
                  /> 
                   <Input 
                    label="Email" 
                    name="email" 
                    type="email" 
                    placeholder="email@example.com"
                    element="input"
                  /> 
                   <Input 
                    label="Subject" 
                    name="subject" 
                    type="text" 
                    placeholder="What's your topic?"
                    element="input"
                  /> 
                   <Input 
                    label="Message" 
                    name="message" 
                    placeholder="Enter your message"
                    type="text"
                    rows="6"
                  /> 
                
                 
                    <button type="submit" className="contact-btn">Send</button>
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
                   
                </Form>
               
              </Formik>
            </motion.div>
          </div>  
              
        </section>
  
    
    
    )
 
}