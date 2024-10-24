import React, {useState} from "react";
import "./Header.css";
import NavBar from "./Navbar";
import Logo from "../Logo";
import SideDrawer from "../SideDrawer";
import BackDrop from "../BackDrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const theme = useContext(ThemeContext);
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
                <div className="left-nav">
                    <button className="nav-menu-btn" onClick={openDrawer} >
                        <span />
                        <span />
                        <span />
                    </button>
                    <Logo theme={theme.theme} />
                </div>
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
                        <FontAwesomeIcon icon={faLinkedin}  className='social-icon'/>
                    </motion.a>
                    <motion.a 
                        whileHover={{
                            scale: 1.15,
                        }} 
                        href="https://github.com/Weiran-Zou" 
                        aria-label="Github" 
                    
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} className='social-icon'/>
                    </motion.a>
                    <motion.a 
                        whileHover={{
                            scale: 1.15,
                        }} 
                        onClick={() => {theme.toggleTheme()}}
                        >
                        {theme.theme === "dark" ? 
                            <FontAwesomeIcon icon={faSun} className='social-icon'/>:
                            <FontAwesomeIcon icon={faMoon} className='social-icon'/>}
                    </motion.a>
                
                </div> 
            </header>
        </>
        
    )
}

export default Header