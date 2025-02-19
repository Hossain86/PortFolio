import "./ProjectComponent.css";

function ProjectComponent() {
  return (
    <div className="project-container">
      <div className="heading-message">
        <h1>Projects</h1>
        <h4>The best way to learn is to build</h4>

        <div className="single-projects">
          <img
            src="https://thumbs.dreamstime.com/b/upcoming-banner-speech-bubble-sign-186711427.jpg"
            alt="GameZone Preview"
            className="project-heroImage"
            onClick={() => window.open("", "_blank")}
          />
          <p>
            <h4 onClick={() => window.open("", "_blank")}>
              PDF to MCQ Generator [Upcoming]
            </h4>
            PDF to MCQ Generator is a project that automates the extraction of
            text from PDF documents and converts it into multiple-choice
            questions (MCQs). This tool is particularly useful for students,
            teachers, and exam preparers, enabling quick and efficient quiz
            generation from study materials.
            <br />
            <span>Tools: 🟣 Python</span>
          </p>
        </div>

        <div className="single-projects">
          <img
            src="/projects0.png"
            alt="Blog Preview"
            className="project-heroImage"
            onClick={() =>
              window.open("https://motivation-blog.vercel.app/", "_blank")
            }
          />
          <p>
            <h4
              onClick={() =>
                window.open("https://motivation-blog.vercel.app/", "_blank")
              }
            >
             Unleash Your Potential: The Power of Relentless Motivation 🚀 [BLOG] 
            </h4>
            Are You Ready to Break Barriers and Achieve More? We all have
            dreams. Some seem impossible, some feel too distant, and some get
            lost in the noise of everyday life. The decision to keep pushing
            forward, even when motivation fades.Let’s begin this journey
            together! 🚀🔥
            <br />
            <span>Tools: 🔵 React+TypeScript</span>
          </p>
        </div>
        {/* Project 1: GameZone */}
        <div className="single-projects">
          <img
            src="/projects1.png"
            alt="GameZone Preview"
            className="project-heroImage"
            onClick={() =>
              window.open("https://game-zone-rho.vercel.app/", "_blank")
            }
          />
          <p>
            <h4
              onClick={() =>
                window.open("https://game-zone-rho.vercel.app/", "_blank")
              }
            >
              Explore GameZone - Video Games Database
            </h4>
            GameZone is a powerful video game discovery platform that provides
            users with comprehensive game details, ratings, and recommendations.
            It features an intuitive interface for browsing and searching
            through a vast collection of games.
            <br />
            <span>Tools: 🔵 React+TypeScript</span>
          </p>
        </div>

        {/* Project 2: Exam Website */}
        <div className="single-projects">
          <img
            src="/projects3.png"
            alt="Exam Website Preview"
            className="project-heroImage"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/posts/aftab-hossain-mikat-307a05249_hello-everyone-im-excited-to-share-that-activity-7256197784163233792-rUtP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2NK3cBuhS6Yqk_F7lULfZGeir0e3vGUAE",
                "_blank"
              )
            }
          />

          <p>
            <h4
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/posts/aftab-hossain-mikat-307a05249_hello-everyone-im-excited-to-share-that-activity-7256197784163233792-rUtP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2NK3cBuhS6Yqk_F7lULfZGeir0e3vGUAE",
                  "_blank"
                )
              }
            >
              Online Exam Website for Students (No Link Right Now){" "}
            </h4>
            A web-based platform designed to facilitate online exams for
            students and educators. It includes features like secure
            authentication, real-time monitoring, automated grading, and an
            intuitive dashboard for both students and teachers.
            <br />
            <span>Tools: 🟡 JavaScript</span>
          </p>
        </div>

        {/* Project 3: CGPA Calculator */}
        <div className="single-projects">
          <img
            src="/projects2.png"
            alt="CGPA Calculator Preview"
            className="project-heroImage"
            onClick={() =>
              window.open(
                "https://hossain86.github.io/CGPA-Calculator/",
                "_blank"
              )
            }
          />
          <p>
            {" "}
            <h4
              onClick={() =>
                window.open(
                  "https://hossain86.github.io/CGPA-Calculator/",
                  "_blank"
                )
              }
            >
              CGPA Calculator
            </h4>
            A simple and user-friendly web application for students to calculate
            their CGPA. The app allows users to input their grades, view
            semester-wise progress, and get insights on their academic
            performance.
            <br />
            <span>Tools: 🟡 JavaScript</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
