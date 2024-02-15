import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import NavBar from './NavBar';
import Footer from './Footer';

const Home = (props) => {
    return (
      <div className='Home'>
        <NavBar />
        <div className='container'>
          <div className='row'>
             
          </div>
        </div>

        <Footer />
      </div>  
    )
  }
  
  export default Home