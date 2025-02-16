import "./SecondComponent.css"

// interface Props {
//   data: {
//     heading: string;
//     message: string;
//     smallheadline1: string;
//     smallDetails1: string;
//     smallheadline2: string;
//     smallDetails2: string;
//   }[];
// }

function SecondComponent() {
  // const { heading, message, smallheadline1, smallDetails1, smallheadline2, smallDetails2 } = data[0];

  return (
    <div className="second-container">
      <div className="heading-message">
        <h1>About Me</h1>
        <h4>Be Humble | Be Kind | Be Strong</h4>
        <div className="imageContainer">
        <img 
          src="/image2.png" 
          alt="Portfolio Preview"
          className="heroImage"
        />
          <p><h4>Aftab Hossain Mikat</h4>I am a CSE undergraduate at RUET with a passion for web development,
          problem-solving, and competitive programming. 🚀 I specialize in
          React, TypeScript, and JavaScript and love building interactive and
          efficient web applications.</p>
        
      </div>
        
      </div>
      <div className="smallheadline-message">
        <h4>Job experience</h4>
        <p>Position: Website Developer <br></br>Organization: ------------------------- </p>
      </div>
      <div className="smallheadline-message">
        <h4>ACADEMIC BACKGROUND</h4>
        <p>December 2023  - <br></br>
      B.Sc. in Computer Science & Engineering | CGPA: 3.25/4.00 (First 3 semester)<br></br>
      Rajshahi University of Engineering & Technology (RUET), Rajshahi, Bangladesh.<br></br>
      Thesis: ---------------------<br></br>
      Supervisor: ---------------<br></br><br></br>
      July, 2019  - June, 2022<br></br>
      Higher Secondary Certificate Examination | GPA: 5.00/5.00 | Science<br></br>
      St. Joseph Higher Secondary School, Dhaka, Bangladesh.<br></br><br></br>
      January, 2014  - January, 2019<br></br>
      Secondary School Certificate Examination | GPA: 5.00/5.00 | Science<br></br>
      Rokan Pur High School, Laxmipur, Bangladesh.</p>
      </div>
    </div>
  );
}

export default SecondComponent;
