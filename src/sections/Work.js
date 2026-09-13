import { useContext } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import enervaroLogo from '../assets/imgs/logo/enervaro_logo.jpg'
import "./Work.css"
import { SectionRefsContext } from '../context/SectionRefsContext';
import SectionHeading from "../components/SectionHeading";

const jobs = [
    {
        title: 'Junior React Developer',
        company: 'Enervaro',
        type: 'Full-time',
        location: 'Hawthorn, Victoria, Australia · On-site',
        date: 'APR 2025 - PRESENT',
        logo: enervaroLogo,
        highlights: [
            'Implemented a full UI and data visualization redesign for the Energy Manager App using React Native, TypeScript, and Redux.',
            'Developed white-labelling functionality for the Energy Manager App, enabling customizable branding across clients.',
            'Developed the Pulse Connect App, implementing job, gateway, and device management using React Native, TypeScript, and Redux.',
            'Contributed to the development of a React-based Dashboard, enhancing functionality and UI.',
            'Deployed React Native apps to iOS and Android using Bitbucket CI/CD and Expo (EAS), managing test builds and production releases.',
            'Contributed to multiple serverless full-stack projects using AWS Lambda and Python.',
        ],
        tech: ['React Native', 'TypeScript', 'Redux', 'React', 'Expo (EAS)', 'Bitbucket CI/CD', 'AWS Lambda', 'Python'],
    },
    {
        title: 'Intern React Native Developer',
        company: 'Enervaro',
        type: 'Internship',
        location: 'Hawthorn, Victoria, Australia · On-site',
        date: 'JAN 2025 - APR 2025',
        logo: enervaroLogo,
        highlights: [
            'Contributed to the development of the Energy Manager App using React Native, TypeScript, and Redux.',
            'Contributed to the development of the dashboard website using React.',
            'Identified, troubleshot, and resolved bugs across web and mobile platforms.',
            'Participated in daily Agile stand-up meetings to align with the development team.',
            'Used Git, Bitbucket, and Jira to manage tasks, track progress, and collaborate on code in a shared repository.',
        ],
        tech: ['React Native', 'TypeScript', 'Redux', 'React', 'Git', 'Bitbucket', 'Jira', 'Agile'],
    },
]

export default function Work() {
    const sectionRefs = useContext(SectionRefsContext);
    return (
        <section
            id="work"
            ref={el => sectionRefs.current.push(el)}>
            <SectionHeading name="Work"/>
            <VerticalTimeline lineColor='var(--text)'>
                {jobs.map((job) => (
                    <VerticalTimelineElement
                        key={`${job.company}-${job.title}`}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--foreground)', color: 'var(--text)'}}
                        contentArrowStyle={{ borderRight: '7px solid var(--foreground)' }}
                        date={job.date}
                        icon={<img className="work-icon" src={job.logo} alt={job.company}/>}
                    >
                        <div className="work-content">
                            <h4>{job.title}</h4>
                            <h5>{job.company} · {job.type}</h5>
                            <p className="work-location">{job.location}</p>
                            <ul className="work-highlights">
                                {job.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                            <ul className="work-tech">
                                {job.tech.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    )
}
