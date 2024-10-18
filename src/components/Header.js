import React, {useState} from "react";
import "./Header.css";
import NavBar from "./Navbar";
import logo from '../assets/imgs/logo.png'
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
                <a href="#home" className="logo" ><img src={logo} alt="..."></img></a>
                <div className="main-nav">
                    <NavBar/>
                </div>
                
            </header>
        </>
        
    )
}

export default Header