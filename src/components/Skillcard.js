import "./Skillcard.css"

export default function Skillcard(props) {
    return (
        <div id="skill-card">
            <img className="skill-card__front" src={props.src} alt="..."></img>
            <div className="skill-card__back"> {props.skillName}</div>
        </div >
    
    )

}