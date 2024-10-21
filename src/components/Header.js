import React, {useState} from "react";
import "./Header.css";
import NavBar from "./Navbar";
import logo from '../assets/imgs/logo.png'
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";

const Header = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const openDrawer  = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }
    return (
        <>
            {drawerIsOpen && <BackDrop onClick={closeDrawer}/>}
            {drawerIsOpen 
            && (<SideDrawer>
                <nav className="drawer-nav">
                    <NavBar />
                </nav>
            </SideDrawer>)}
            <header className="header">
                <button className="nav-menu-btn" onClick={openDrawer} >
                    <span />
                    <span />
                    <span />
                </button>
                <a href="#home" className="logo" ><img src={logo} alt="..."></img></a>
                <div className="main-nav">
                    <NavBar/>
                </div>
                <div className="nav-social-wrapper">
    
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
            </header>
        </>
        
    )
}

export default Header