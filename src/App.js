import { useRef } from "react"
import Header from "./components/Header.js"
import Home from "./sections/Home.js"
import Education from "./sections/Education.js"
import Skills from "./sections/Skills.js"
import Projects from "./sections/Projects.js"
import Contact from "./sections/Contact.js"
// import Footer from "./components/Footer.js"
import './App.css';
import { SectionRefsContext } from "./Context/SectionRefsContext.js"

function App() {
  const sectionRefs = useRef([]);
  return (
    
    <div id="body" >
      <SectionRefsContext.Provider value={sectionRefs}>
        <Header />
        <Home />
        <Education /> 
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer/> */}
      </SectionRefsContext.Provider>
    </div>
   
    
  );
}

export default App;
