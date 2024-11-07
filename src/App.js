import "./App.css";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Splash from "./pages/splash";
import Projects from "./pages/projects";
import Home from './pages/Home'
import Resume from "./pages/resume";
import ContactMe from "./pages/ContactMe";
import Hobbies from './pages/hobbies'

function App() {
  const location = useLocation();
  return (
    <div className="container">
      <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;