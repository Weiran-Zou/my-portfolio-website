
import React from "react";
import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Project.css"
import MyModal from "../components/MyModal";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;



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
        // <Link to="..." className="card-link">
        <>
            <MyModal
                show={isModalOpen}
                onCancel={closeModal}
                header={item.title}
                className="project-details-modal"
              
            >
               
                <img src={item.img}  alt="..." />
                <div className="card-body" >
                    <ul className="techList">
                        { item.tech.map(tech =>
                            <li>{tech}</li>
                        )}
                        
                    </ul>
                    <p className="card-text">{item.description}</p>
                </div>
                
               
            </MyModal>
            <div className="project-card">
                <img src={item.img}  alt="..." />
                <div className="card-body"  >
                    <h5 className="card-title">{item.title}</h5>
                    <ul className="techList">
                        { item.tech.map(tech =>
                            <li>{tech}</li>
                        )}
                        
                    </ul>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="overlay">
                    <button type="button" class="btn btn-primary" onClick={openModal}>Show More</button>
                </div>
            </div>
        </>
        // </Link>
       
    )
}

export default Project;