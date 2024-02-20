import React from 'react'

const NavBar = () => (
  <nav class="navbar navbar-expand-lg h-auto nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <i class="fas fa-graduation-cap" style={{ fontSize: '25px' }} ></i> Student Management System
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto menu">
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="fa fa-home"></i> Home 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/routes">
              <i class="fas fa-route"></i> Routes 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://drive.google.com/file/d/1zjWhGPEhueW7B2enQ_wADj5xhrRxBMKr/view" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-file"></i> Document 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/features">
              <i class="fas fa-list"></i> Features 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              <i class="fas fa-info"></i> About 
            </a>
          </li>
          <li class="nav-item">
            <a className="nav-link" href="https://github.com/12Sushree/stdmgmt" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ fontSize: '25px' }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar