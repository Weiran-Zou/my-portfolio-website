import { useRef, useState, useEffect } from "react"
import Header from "./components/navigation/Header.js"
import Home from "./sections/Home.js"
import Education from "./sections/Education.js"
import Skills from "./sections/Skills.js"
import Projects from "./sections/Projects.js"
import Contact from "./sections/Contact.js"
import Footer from "./sections/Footer.js"
import { SectionRefsContext } from "./context/SectionRefsContext.js"
import {ThemeContext} from "./context/ThemeContext.js"

function App() {
  const [theme, setTheme] = useState("dark")
  const sectionRefs = useRef([]);
  const toggleTheme = () => {
    setTheme(pre => pre === "dark" ? "light": "dark");
  }
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <SectionRefsContext.Provider value={sectionRefs}>
        <Header />
        <Home />
        <Education /> 
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </SectionRefsContext.Provider> 
    </ThemeContext.Provider>
   
    
  );
}

export default App;
