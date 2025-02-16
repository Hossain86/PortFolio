import React from "react";
import styles from "./FirstComponent.module.css";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import social icons

const FirstComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.FirstComponentContainer}>
      {/* Landing Page Section */}
      <div className={styles.content}>
        <h1 className={styles.FirstComponentheader}>Hi, I'm Aftab Hossain Mikat</h1>
        <p className={styles.FirstComponentdetails}>
          I am a CSE undergraduate at RUET with a passion for web development,
          problem-solving, and competitive programming. 🚀 I specialize in
          React, TypeScript, and JavaScript and love building interactive and
          efficient web applications. I'm also actively improving my
          algorithmic problem-solving skills to enhance my logical thinking
          and coding efficiency.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => navigate("/about-me")}
        >
          Get Started
        </button>

        {/* Social Links Section */}
        <div className={styles.socialLinks}>
          <p>Feel free to get in touch:</p>
          <div className={styles.icons}>
            <a href="https://github.com/Hossain86" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
            
            <a href="https://linkedin.com/in/aftab-hossain-mikat-307a05249" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="mailto:aftabhossainmikat@gmail.com">
              <FaEnvelope className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className={styles.imageContainer}>
        <img 
          src="/image1.png" 
          alt="Portfolio Preview"
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default FirstComponent;
