import React from "react";
import { useField } from 'formik';
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
                <div className="input-error">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default Input;