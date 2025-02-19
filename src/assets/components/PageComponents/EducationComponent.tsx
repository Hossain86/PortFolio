import { useEffect } from "react";
import  "./EducationComponent.css"
import { useNavigate } from "react-router-dom";
function EducationComponent(){
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className="education-container">
      <h2>ACADEMIC BACKGROUND</h2>
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
      <button
          className="ctaButton"
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
    </div>
  );
}
export default EducationComponent;