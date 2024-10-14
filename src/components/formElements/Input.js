import React from "react";
import { useField, ErrorMessage } from 'formik';
import './Input.css'

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const element = props.element === "input" ? (
        <input 
            {...field} {...props}
        /> 
        ) : (
        <textarea 
            rows={props.rows || 3}  
            {...field} {...props}
        />
    );
    
    return (
        <div className="input-container">
            <label htmlFor={props.id || props.name}>{label}</label>
            {element}
            {meta.touched && meta.error ? (
                <div style={{color:"#FF4D4D", fontSize:"0.8rem"}}>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default Input;