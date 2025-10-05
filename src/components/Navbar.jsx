import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="#home"
          style={{
            color: "rgb(247, 243, 243)",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          CHANDU :)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                EDUCATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
