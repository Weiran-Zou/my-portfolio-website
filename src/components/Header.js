import React, {useState} from "react";
import "./Header.css";
import NavBar from "./Navbar";
import {Link} from "react-router-dom"
import logo from '../imgs/logo2.png'
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

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
                <Link smooth={true} spy to="home" id="logo" duration={50}><img src={logo} ></img></Link>
                <div className="main-nav">
                    <NavBar/>
                </div>
                
            </header>
        </>
        
    )
}

export default Header