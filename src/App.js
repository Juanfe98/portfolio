import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skill } from "./components/Skill/Skill";
import { Project } from "./components/Project/Project";
import { Certifications } from "./components/Certifications/Certifications";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <About />
      <Certifications />
      <Skill />
    </>
  );
}

export default App;
