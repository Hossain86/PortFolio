import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./ContactMe.css"
function ContactMe(){
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you have any questions, need assistance, or just want to say hi 😀.</p>
      <a href="mailto:aftabhossainmikat@gmail.com">
              Click to mail me
            </a>
      {/* <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <input type="submit" value="Submit" style={{ backgroundColor: "#1e90ff", color:"white", padding: "0.75rem 1.5rem", borderRadius: "4px", cursor: "pointer" }} />
        </form> */}
      {/* Social Links Section */}
      <div className="socialLinks">
          <p>Feel free to get in touch:</p>
          <div className="icons">
            <a href="https://github.com/Hossain86" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            
            <a href="https://linkedin.com/in/aftab-hossain-mikat-307a05249" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:aftabhossainmikat@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
    </div>
  );
}
export default ContactMe;