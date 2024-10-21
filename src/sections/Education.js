import { useContext } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import unimelbLogo from '../assets/imgs/unimelb-logo.jpg'
import qutLogo from "../assets/imgs/qut-logo.png"
import { color, motion } from "framer-motion"
import "./Education.css"
import { SectionRefsContext } from '../context/SectionRefsContext';
import SectionHeading from "../components/SectionHeading";

export default function Education() {
    const sectionRefs = useContext(SectionRefsContext);
    return (
        <section
            id="education" 
            ref={el => sectionRefs.current.push(el)}>
            <SectionHeading name="Education"/>
            <VerticalTimeline lineColor='var(--text)'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'var(--foreground)', color: 'var(--text)'}}
                    contentArrowStyle={{ borderRight: '7px solid var(--foreground)' }}
                    date="FEB 2022 - JUL 2023"   
                    icon={<img className="edu-icon" src={unimelbLogo} alt="unimelb"/>}   
                >
                    <div className="education-content">
                        <h4 >Master of Information Technology</h4>
                        <h5 >The University of Melbourne</h5>
                        <div className="achievement-wrapper">
                            <p>Achievements</p>
                            <ul className="achievemets-list">
                                <li>Awarded Melbourne Graduate Scholarship - 2022</li>
                            </ul>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'var(--foreground)', color: 'var(--text)'}}
                    contentArrowStyle={{ borderRight: '7px solid var(--foreground)' }}
                    date="JUN 2019 - JAN 2022"
                    icon={<img className="edu-icon" src={qutLogo} alt="qut"/>}
                  
                
                >
                    <div className="education-content">
                        <h4>Bachelor of Information Tehnology (Computer science)</h4>
                        <h5>Queensland University of Technology</h5>
                        
                        <div className="achievement-wrapper">
                            <p>Achievements</p>
                            <ul className="achievemets-list">
                                <li>GPA of 6.792 out of 7</li>
                                <li>Dean’s List Award (2020 & 2021)</li>
                            </ul>
                        </div>
                    </div>
                </VerticalTimelineElement>
        
            </VerticalTimeline>
        </section>
    )
}