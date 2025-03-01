import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarPage from "./assets/components/Navbar/NavbarPage";
import FirstComponent from "./assets/components/PageComponents/FirstComponent";
import SecondComponent from "./assets/components/PageComponents/SecondComponent";
import ProjectComponent from "./assets/components/PageComponents/ProjectComponent";
import EducationComponent from "./assets/components/PageComponents/EducationComponent";
import ContactMe from "./assets/components/PageComponents/ContactMe";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavbarPage />
        <Routes>
          <Route path="/" element={<FirstComponent />} />
          <Route path="/about-me" element={<SecondComponent />} />
          <Route path="/projects" element={<ProjectComponent />} />
          <Route path="/education" element={<EducationComponent />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
