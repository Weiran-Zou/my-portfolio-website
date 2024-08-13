import React from "react"
// import {NavLink} from "react-router-dom"
// import { NavHashLink } from 'react-router-hash-link';
import { Link } from "react-scroll";
import logo from '../imgs/logo2.png'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
export default function NavBar() {
    return (
        <nav id="nav">
            <Link smooth={true} spy to="home" id="logo" duration={50}><img src={logo} ></img></Link>
            <ul>
                <li><Link smooth={true} spy={true} to="home" duration={50} activeClass="active">Home</Link></li>
                <li><Link smooth={true} spy={true}  to="education" duration={50} activeClass="active" >Education</Link></li>
                <li><Link smooth={true} spy={true} to="skills" duration={50} activeClass="active">Skills Profile</Link></li>
                <li><Link smooth={true} spy={true}  to="works" duration={50} activeClass="active">My Works</Link></li>
                <li><Link smooth={true} spy={true}  to="contact" duration={50} activeClass="active">Contact</Link></li>
            </ul>
        </nav>
  
    )
}