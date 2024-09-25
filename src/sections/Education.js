import { useRef, useEffect } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import unimelbLogo from '../imgs/unimelb-logo.jpg'
import qutLogo from "../imgs/qut-logo.png"
import SchoolIcon from '@mui/icons-material/School';
import { motion, useInView, useAnimation } from "framer-motion"
import "./Education.css"

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControl.start("show")
        }
    }, [isInView, mainControl])
    return (
        <div id="education" style={{  padding: "2rem"}}>
            <motion.div 
                className="sectionHeading" 
                ref={ref}
                variants={{
                    hidden: {y:200, opacity:0},
                    show: {y:0, opacity:1, transition:{duration: 0.5, delay: 0.5}
                    }
                }}
                initial = "hidden"
                animate = {mainControl}>
                <h1 className="sectionName">Education</h1>
                <div className="divider" ></div>
            </motion.div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#292947", color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid #292947' }}
                    date="FEB 2022 - JULY 2023"
                    dateStyle = {{color:'white'}}
                    iconStyle={{ background: "#292947", color: '#fff' }}
                    icon={
                        <div className="icon-container">
                            <img src={unimelbLogo} alt="unimelb"/>
                        </div>
                    }
                >
                    <h3 >Master of Information Technology</h3>
                    <h4 >The University of Melbourne</h4>
                    <p>Achievements</p>
                    <ul>
                        <li>Awarded Melbourne Graduate Scholarship - 2022</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#292947", color: 'white'}}
                    contentArrowStyle={{ borderRight: '7px solid  #292947' }}
                    date="JUNE 2019 - JAN 2022"
                    dateClassName='education-date'
                    iconStyle={{ background: "#292947", color: '#fff' }}
                    icon={
                        <div className="icon-container">
                            <img src={qutLogo} alt="qut"/>
                        </div>
                    }
                >
                    <h3>Bachelor of Information Tehnology (Computer science)</h3>
                    <h4>Queensland University of Technology</h4>
                    <p>Achievements</p>
                    <ul>
                        <li>GPA of 6.792 out of 7</li>
                        <li>Dean’s List Award (2020 & 2021)</li>
                    </ul>
                </VerticalTimelineElement>
        
            </VerticalTimeline>
        </div>
    )
}