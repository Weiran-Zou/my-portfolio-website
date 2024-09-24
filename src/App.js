// import NavBar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Home from "./sections/Home.js"
import Education from "./sections/Education.js"
import Skills from "./sections/Skills.js"
import Works from "./sections/Works.js"
import Contact from "./sections/Contact.js"
import Footer from "./components/Footer.js"
import './App.css';



function App() {
  return (
    
    <div id="body" >
      
      {/* <NavBar />   */}
      <Header />
      <Home />
      <Education /> 
      <Skills />
      <Works />
      <Contact />
      {/* <Footer/> */}
    </div>
   
    
  );
}

export default App;
