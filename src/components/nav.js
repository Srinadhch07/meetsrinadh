import { useState  } from "react";
import { Link } from "react-router-dom";
import "./nav.css"; // optional external styles

function Nav({ darkMode, setDarkMode,name,fade }) {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="https://srinadhch07.github.io/PortfolioV3/">
        <span style={{
        color:"red",
        textAlign: "center",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}>  
          {'{'} {'/} '} 
        </span>{name} 
        </a>
        </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/hub">HUB</Link>
        <Link to="/achivements">Achivements</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/contact">Contact</Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle-btn"
          aria-label="Toggle Dark Mode"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        ☰
      </div>
    </nav>
  );
}

export default Nav;

