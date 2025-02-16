import "./SecondComponent.css";

function ProjectComponent() {

  return (
    <div className="second-container">
      <div className="heading-message">
        <h1>Projects</h1>
        <h4>Kill the boy and let the man be born</h4>

        {/* Project 1: GameZone */}
        <div className="imageContainer">
          <img
            src="/projects1.png"
            alt="GameZone Preview"
            className="heroImage"
            onClick={() => window.open("https://game-zone-rho.vercel.app/", "_blank")}
          />
         <p> <h4 onClick={() => window.open("https://game-zone-rho.vercel.app/", "_blank")}>Explore GameZone - Video Games Database</h4>
          
            GameZone is a powerful video game discovery platform that provides users with comprehensive game details, ratings, and recommendations. 
            It features an intuitive interface for browsing and searching through a vast collection of games.
          </p>
        </div>

        {/* Project 2: Exam Website */}
        <div className="imageContainer">
          <img
            src="/projects3.png"
            alt="Exam Website Preview"
            className="heroImage"
          />
          
          <p><h4>Online Exam Website for Students (No Link Right Now) </h4>
            A web-based platform designed to facilitate online exams for students and educators. 
            It includes features like secure authentication, real-time monitoring, automated grading, and an intuitive dashboard for both students and teachers.
          </p>
        </div>

        {/* Project 3: CGPA Calculator */}
        <div className="imageContainer">
          <img
            src="/projects2.png"
            alt="CGPA Calculator Preview"
            className="heroImage"
            onClick={() => window.open("https://hossain86.github.io/CGPA-Calculator/", "_blank")}
          />
         <p> <h4 onClick={() => window.open("https://hossain86.github.io/CGPA-Calculator/", "_blank")}>CGPA Calculator</h4>
          
            A simple and user-friendly web application for students to calculate their CGPA. 
            The app allows users to input their grades, view semester-wise progress, and get insights on their academic performance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
