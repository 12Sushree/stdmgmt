import React from 'react'
import '../App.css'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='Home'>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto web-desc'>
            <h1 className='display-5 text-center heading'>STUDENT MANAGEMENT SYSTEM</h1>
            <h6 className='lead text-center'>Welcome to our Website</h6>
            <p className='lead text-center'>This can help institutes to store Student Details easily</p>
            <Link to='/student-list' className='btn btn-outline-primary float-left'>
              Get Started
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home