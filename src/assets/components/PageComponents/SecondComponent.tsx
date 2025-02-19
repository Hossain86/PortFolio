import { useNavigate } from "react-router-dom";
import "./SecondComponent.css";

function SecondComponent() {
  const navigate = useNavigate();
  return (
    <div className="second-container">
      <div className="heading-message">
        <h1>About Me</h1>
        <h4>Be Humble | Be Kind | Be Strong</h4>
        <div className="imageContainer1">
          <img
            src="/image1.png"
            alt="Portfolio Preview"
            className="heroImage1"
          />
          <p>
            <h4>Aftab Hossain Mikat</h4>I am a CSE undergraduate at RUET with a
            passion for web development, problem-solving, and competitive
            programming. 🚀 I specialize in React, TypeScript, and JavaScript
            and love building interactive and efficient web applications.
            <br />
            <button className="view-cv">View My Resume</button>
          </p>
        </div>
      </div>
      <div className="smallheadline-message">
        <h4>Skills</h4>
        <p>
          <b>Languages: </b>
          C++ | Python | JavaScript | React | Typescript <br />
          <b>Frontend: </b> HTML | CSS | JavaScript | React | Typescript
          <br />
          <b>Backend: </b> Node.js | Firebase | MongoDB
          <br />
          <b>Others:</b> Git | Github | Vercel
          <br />
          <b>Proficient in:</b>
          <br />
          <div className="proficient-list">
            <li>⚡ C++</li>
            <li>⚡ Python</li>
            <li>⚡ Javascript And React+Typescript</li>
            <li>
              ⚡ Algorithmic Problem Solving (solved 250+ problems on various
              online platforms)
            </li>
            <li>⚡ Data Structures and Algorithms</li>
            <li>⚡ Competitive Programming</li>
          </div>
        </p>
        <button
          className="ctaButton"
          onClick={() => navigate("/projects")}
        >
          See Projects
        </button>
      </div>
      <h4>ACADEMIC BACKGROUND</h4>
      <div className="education">
        <img
          className="institution-img"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/RUET_logo.svg/1200px-RUET_logo.svg.png"
          alt="RUET"
        />
        <div className="instituion-info">
          <h3>Rajshahi University of Engineering & Technology (RUET)</h3>
          <h4>B.Sc. in Computer Science & Engineering </h4>
          CGPA: __/4.00 (First 3 semester)<br></br>
          December 2022 - June 2027*<br></br>
          Rajshahi, Bangladesh
        </div>
      </div>
      <div className="education">
        <img
          className="institution-img"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/St._Joseph_Higher_Secondary_School_Monogram.svg/1200px-St._Joseph_Higher_Secondary_School_Monogram.svg.png"
          alt="RUET"
        />
        <div className="instituion-info">
          <h3>St. Joseph Higher Secondary School (SJHSC)</h3>
          <h4>Higher Secondary </h4>
          GPA: 5.00 / 5.00 <br></br>
          July, 2019 - June, 2022<br></br>
          Dhaka, Bangladesh
        </div>
      </div>
    </div>
  );
}

export default SecondComponent;
