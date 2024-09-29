import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css'
import { SectionRefsContext } from '../Context/SectionRefsContext';

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');
    const sectionRefs = useContext(SectionRefsContext);
    const sectionsName = ['home', 'education', 'skills', 'projects', 'contact'];
    useEffect(() => {
        // Setup Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) { // set visible section in viewpoint
                    setActiveSection(entry.target.id);
                }
                });
            },
            {threshold: 0.1}
        );

        // observe each section
        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
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