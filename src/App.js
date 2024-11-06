import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";


//could cause problems later

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
