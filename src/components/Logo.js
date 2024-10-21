import logoDark from '../assets/imgs/logo-dark.png'
import logoLight from '../assets/imgs/logo-light.png'
import "./Logo.css"
export default function Logo(props) {
    return (
        <a href="#home" className="logo" >
            {props.theme === "dark"? <img src={logoDark} alt="..."/> : <img src={logoLight} alt="..."/>}
        </a>
    )
}