import React from 'react';
import '../App.css'; // Ensure this path is correct for your project structure
const NavBar = () => (
  <nav className="navbar navbar-expand-lg h-auto nav">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <i className="fas fa-graduation-cap" style={{ fontSize: '25px' }} ></i> Student Management System
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto menu">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fa fa-home"></i> Home 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/features">
              <i className="fas fa-list"></i> Features 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/abt">
              <i className="fas fa-info"></i> About 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/12Sushree/stdmgmt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ fontSize: '25px' }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;