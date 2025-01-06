import React, {useState} from "react";
import "./Project.css"
import MyModal from "../components/MyModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";

const Project = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
      console.log("hi")
  }
  
  const closeModal = () => {
      setIsModalOpen(false);
  }
  
  return (
    <>
      <MyModal
        show={isModalOpen}
        onCancel={closeModal}
        header={item.title}
        className="project-details-modal"
        
      >
        <img src={item.img} alt="..." />
        <div className="card-body" >
          <ul className="techList">
            { item.tech.map(tech =>
                <li>{tech}</li>
            )}
              
          </ul>
          <p className="card-text">{item.description}</p>
          {item.github && <a
            href={item.github}
            aria-label="Github" 
            target="_blank">
            <FontAwesomeIcon icon={faGithub} className='project-github'/>
          </a> }
        </div>
       
          
      </MyModal>
      <div 
        className="project-card" 
        onClick={openModal}
      >
        <div className="card-body"  >
          <motion.img 
            src={item.img} alt="..." 
            whileHover={{
              scale:1.05
            }}
          />
            <h5 >{item.title}</h5>
            <ul className="techList">
              { item.tech.slice(0, 5).map(tech =>
                  <li>{tech}</li>
              )}
              
            </ul>
            <p className="card-text">{item.description}</p>  
        </div>
      
        {item.github && <a    
          onClick={(e) => e.stopPropagation()}
          href={item.github}
          aria-label="Github" 
          target="_blank">
          <FontAwesomeIcon icon={faGithub} className='project-github'/>
        </a> }
       
        
      </div>
    </>
      
  )
}

export default Project;