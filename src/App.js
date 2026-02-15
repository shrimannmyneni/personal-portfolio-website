import React from 'react'
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Education from './components/Education/education';
import WorkExperience from './components/WorkExperience/workExperience';
import Projects from './components/Projects/projects';
import Certifications from './components/Certifications/certifications';
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Intro/>
      <hr/>
      <WorkExperience/>
      <hr/>
      <Education/>
      <hr/>
      {/* <Projects/>
      <hr/> */}
      <Certifications/>
      <hr/>
      <Contact/>

      <Footer/>
      
    </div>
  );
}

export default App;
