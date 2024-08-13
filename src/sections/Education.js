import { useRef, useEffect } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import unimelb from '../imgs/unimelb-logo.png'
import SchoolIcon from '@mui/icons-material/School';
import { motion, useInView, useAnimation } from "framer-motion"

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControl = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControl.start("show")
        }
    }, [isInView])
    return (
        <div id="education" class="container" >
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
                <h1 className="sectionName" id="educationHeading">Education</h1>
                <div className="divider" ></div>
            </motion.div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#292947", color: 'white' , width:"45%" }}
                    contentArrowStyle={{ borderRight: '7px solid #292947' }}
                    date="FEB 2022 - JULY 2023"
                    dateStyle = {{color:'white'}}
                    iconStyle={{ background: "#292947", color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">The University of Melbourne</h3>
                    <h4 className="vertical-timeline-element-subtitle">Master of Information Technology</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: "#292947", color: 'white', width:"45%" }}
                    contentArrowStyle={{ borderRight: '7px solid  #292947' }}
                    date="JUNE 2019 - JAN 2022"
                    dateClassName='education-date'
                    iconStyle={{ background: "#292947", color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Queensland University of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor of Information Tehnology (Computer science)</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </VerticalTimelineElement>
        
            </VerticalTimeline>
        </div>
    )
}