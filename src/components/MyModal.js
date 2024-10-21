import React from "react";
import {createPortal} from "react-dom"
import "./MyModal.css"
import BackDrop from "./BackDrop"

const ModalOverlay = (props) => {
    const content = (
        <div className={`my-modal ${props.className}`} style={props.style}>
            <header className={`my-modal__header ${props.headerClass}`}>
                <h3>{props.header}</h3>
                <button class="my-modal__close-btn" onClick={props.onCancel}>×</button>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault}>
                <div className={`my-modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <div className={`my-modal__footer ${props.footerClass}`}>
                    {props.footer}
                </div>
            </form>

        </div>
    )
    return createPortal(content ,document.getElementById("modal-hook"));
}

const MyModal = (props) => {
    return (
        <>
        {props.show && (
          <>
            <BackDrop onClick={props.onCancel} />
            <ModalOverlay {...props} />
          </>
        )}
      </>
      
    )
}

export default MyModal;