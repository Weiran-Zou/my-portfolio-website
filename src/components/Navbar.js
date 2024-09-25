import React from "react"
import { Link } from "react-scroll";
import './Navbar.css'

export default function NavBar() {
    return (
        <nav id="nav">
            
            <ul>
                <li><Link smooth={true} spy={true} to="home" duration={50} activeClass="active">Home</Link></li>
                <li><Link smooth={true} spy={true}  to="education" duration={50} activeClass="active" >Education</Link></li>
                <li><Link smooth={true} spy={true} to="skills" duration={50} activeClass="active">Skills Profile</Link></li>
                <li><Link smooth={true} spy={true}  to="projects" duration={50} activeClass="active">My Projects</Link></li>
                <li><Link smooth={true} spy={true}  to="contact" duration={50} activeClass="active">Contact</Link></li>
            </ul>
        </nav>
  
    )
}