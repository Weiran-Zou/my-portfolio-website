import "./Footer.css"
import Logo from "../components/Logo"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const theme = useContext(ThemeContext);
    return (
        <footer>
            <Logo theme={theme.theme}/>
            <p>© 2024 Weiran Zou. All rights reserved.</p>
            <div className="credits">
                3D robot model on Home section: <a href="https://sketchfab.com/3d-models/robot-playground-59fc99d8dcb146f3a6c16dbbcc4680da" target="_blank" rel="noreferrer">Robot Playground</a> by <a href="https://sketchfab.com/Hadrien59" target="_blank" rel="noreferrer">Hadrien59</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Creative Commons Attribution</a>.
            </div>
        </footer>
    )
}