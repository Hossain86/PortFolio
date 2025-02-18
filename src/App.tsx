import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarPage from "./assets/components/Navbar/NavbarPage";
import FirstComponent from "./assets/components/PageComponents/FirstComponent";
import SecondComponent from "./assets/components/PageComponents/SecondComponent";
import ProjectComponent from "./assets/components/PageComponents/ProjectComponent";
import EducationComponent from "./assets/components/PageComponents/EducationComponent";
import ContactMe from "./assets/components/PageComponents/ContactMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <NavbarPage />
              <FirstComponent />
            </div>
          }
        />
        <Route  path="/about-me" element={
          <div className="app-container">
          <NavbarPage />
          <SecondComponent/>
        </div>
        }/>
        <Route  path="/projects" element={
          <div className="app-container">
          <NavbarPage />
          <ProjectComponent/>
        </div>
        }/>
        <Route  path="/education" element={
          <div className="app-container">
          <NavbarPage />
          <EducationComponent/>
        </div>
        }/>
        <Route  path="/contact" element={
          <div className="app-container">
          <NavbarPage />
          <ContactMe/>
        </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
