import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skill } from "./components/Skill/Skill";
import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
    </>
  );
}

export default App;
