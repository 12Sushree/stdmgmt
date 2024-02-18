import React from 'react'
import '../App.css'
import NavBar from './NavBar';

const Home = (props) => {
  return (
    <div className='Home'>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='bg'></div>
          <div className='col-md-8 m-auto web-desc'>
            <h1 className='display-5 text-center heading'>STUDENT MANAGEMENT SYSTEM</h1>
            <h6 className='lead text-center'>Welcome to our Website</h6>
            <p className='lead text-center'>This can help institutes to store Student Details easily</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home