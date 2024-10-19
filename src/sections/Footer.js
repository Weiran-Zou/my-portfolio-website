import "./Footer.css"
import logo from '../assets/imgs/logo-footer.png'

export default function Footer() {
    return (
        <footer>
            <a href="#home" className="logo" ><img src={logo} alt="..."></img></a>
            <p>© 2024 Weiran Zou. All rights reserved.</p>
            <div className="credits">
                <a href="https://sketchfab.com/3d-models/robot-playground-59fc99d8dcb146f3a6c16dbbcc4680da" target="_blank" rel="noreferrer">Robot Playground</a> by <a href="https://sketchfab.com/Hadrien59" target="_blank" rel="noreferrer">Hadrien59</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution</a>.
            </div>
        </footer>
    )
}