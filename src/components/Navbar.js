import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css'
import { SectionRefsContext } from '../context/SectionRefsContext';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const sectionRefs = useContext(SectionRefsContext);
    const sectionsName = ['home', 'education', 'skills', 'projects', 'contact'];

    useEffect(() => {

        const basicThreshold = 0.5
        // observe each section
        sectionRefs.current.forEach((section) => {
            if (section) {
                const sectionHeight = section.clientHeight;
                let threshold = basicThreshold;
                if (sectionHeight > (window.innerHeight * basicThreshold)) {
                    // threashold: if 50% of the part of section is visibale within the viewpoint
                    threshold = (window.innerHeight/ sectionHeight) * basicThreshold;
                }
                // Setup Intersection Observer
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                        if (entry.isIntersecting) { // set visible section in viewpoint
                            setActiveSection(entry.target.id);
                        }
                        });
                    },
                    {threshold}
                );
                observer.observe(section);
            }
        });
    }, [sectionRefs]);

    return (
        <nav id="nav">
            <ul>
                {sectionsName.map((section) => (
                    <li>
                        <a 
                            href={`#${section}`}
                            className={activeSection === section ? 'active' : ''}
                           
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
  
    )
}