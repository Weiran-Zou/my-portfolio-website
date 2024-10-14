import { useContext } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import unimelbLogo from '../assets/imgs/unimelb-logo.jpg'
import qutLogo from "../assets/imgs/qut-logo.png"
import { motion } from "framer-motion"
import "./Education.css"
import { SectionRefsContext } from '../context/SectionRefsContext';

export default function Education() {
    const sectionRefs = useContext(SectionRefsContext);
    return (
        <section
            id="education" 
            ref={el => sectionRefs.current.push(el)}>
            <motion.div 
              className="sectionHeading" 
              initial={{y:200, opacity:0}}
              whileInView={{y:0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.5, delay: 0.2}}
            >
                <h1 className="sectionName">Education</h1>
                <div className="divider" ></div>
            </motion.div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#292947", color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid #292947' }}
                    date="FEB 2022 - JUL 2023"
                    dateStyle = {{color:'white'}}
                    iconStyle={{ background: "#292947", color: '#fff' }}
                    icon={
                        <div className="icon-container">
                            <img src={unimelbLogo} alt="unimelb"/>
                        </div>
                    }
                >
                    <h4 >Master of Information Technology</h4>
                    <h5 >The University of Melbourne</h5>
                    <p>Achievements</p>
                    <ul className="achievemets-list">
                        <li>Awarded Melbourne Graduate Scholarship - 2022</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#292947", color: 'white'}}
                    contentArrowStyle={{ borderRight: '7px solid  #292947' }}
                    date="JUN 2019 - JAN 2022"
                    dateClassName='education-date'
                    iconStyle={{ background: "#292947", color: '#fff' }}
                    icon={
                        <div className="icon-container">
                            <img src={qutLogo} alt="qut"/>
                        </div>
                    }
                >
                    <h4>Bachelor of Information Tehnology (Computer science)</h4>
                    <h5>Queensland University of Technology</h5>
                    <p>Achievements</p>
                    <ul className="achievemets-list">
                        <li>GPA of 6.792 out of 7</li>
                        <li>Dean’s List Award (2020 & 2021)</li>
                    </ul>
                </VerticalTimelineElement>
        
            </VerticalTimeline>
        </section>
    )
}