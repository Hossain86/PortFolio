import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarPage.module.css";

const NavbarPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true"
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={menuRef}>
      {/* Hamburger Menu for Small Screens */}
      <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about-me" onClick={() => setIsMenuOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/education" onClick={() => setIsMenuOpen(false)}>Education</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        className={styles.darkModeToggle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default NavbarPage;
