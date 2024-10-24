import React from "react";
import { createPortal } from "react-dom";
import "./BackDrop.css"


const BackDrop = (props) => {
    return createPortal(
        <div className="backdrop" onClick={props.onClick}></div>, document.getElementById("backdrop-hook")
    )
}

export default BackDrop;