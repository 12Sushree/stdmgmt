import React from 'react'
import '../App.css'
import NavBar from './NavBar';

const About = (props) => {
  return (
    <div className='About'>
      <NavBar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-5 text-center'>About Us</h1>
            <p className='lead text-center'>
                Student Result Management System (SRMS) is a website designed to store student results at the institution. The 
                Student Management System Software is a complete multi-user Software. The main objective of this project is to 
                store the student details in an effortless way. The system is intended for the student. The student details 
                can be managed by the website. 
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About