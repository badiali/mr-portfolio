import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialIcons from "./components/SocialIcons";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialIcons/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Register />
    </div>
  );
}

export default App;