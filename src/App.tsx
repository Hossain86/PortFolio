import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarPage from "./assets/components/Navbar/NavbarPage";
import FirstComponent from "./assets/components/PageComponents/FirstComponent";
import SecondComponent from "./assets/components/PageComponents/SecondComponent";
import ProjectComponent from "./assets/components/PageComponents/ProjectComponent";

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
      </Routes>
    </Router>
  );
}

export default App;
