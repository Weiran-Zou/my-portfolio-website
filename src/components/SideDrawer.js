import React from 'react';
import { createPortal } from "react-dom";
import './SideDrawer.css';

const SideDrawer = props => {
  
    return createPortal(
        <aside className="side-drawer">{props.children}</aside>, document.getElementById("backdrop-hook")
    )
};

export default SideDrawer;