import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title, aboutText, mode, togglemode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${mode === "dark" ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {aboutText}
              </a>
            </li>
          </ul>
          
          {/* ✅ Button calls App.js function */}
          <div className="form-check form-switch">
            <input 
              className="form-check-input" 
              type="checkbox" 
              checked={mode === "dark"}
              onChange={togglemode}
              id="darkModeSwitch" 
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              {mode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
  togglemode: PropTypes.func
};
