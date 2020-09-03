import React from "react";
import { Link } from "react-router-dom";

const CURDHeader = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a
              href="https://www.avaneesa.me/"
              className="navbar-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avaneesa's Portfolio
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a
                href="https://www.avaneesa.me/"
                className="navbar-brand"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Main Page
              </a>
            </li>
            <li>
              <Link to="/CRUD/" className="nav-link">
                <i></i>CRUD Home Page
              </Link>
            </li>
            <li>
              <Link to="/CRUD/NewPorject" className="nav-link">
                <i></i>Create New Project
              </Link>
            </li>
            <li>
              <Link to="/CRUD/NewWorkExperince" className="nav-link">
                <i></i>Create New WorkExperince
              </Link>
            </li>
            <li>
              <button onClick={props.logout} className="nav-link">
                <i></i>Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default CURDHeader;
