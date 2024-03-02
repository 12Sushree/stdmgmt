import React from 'react'
import '../App.css'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className='Home'>
      <NavBar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 m-auto web-desc'>
            <div className='txt'>
              <h1 className='display-5 text-center heading'>STUDENT MANAGEMENT SYSTEM</h1>
              <h6 className='lead text-center'>Welcome to our Website</h6>
              <p className='lead text-center'>This can help institutes to store Student Details easily</p>
              <Link to='/student-list' className='btn btn-outline-primary float-left'>
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className='row'>
          <h1 className='display-5 text-center heading'>Available Courses</h1>
          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Computer Science</h2>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://plus.unsplash.com/premium_photo-1661722534401-18d918a7a898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF0aHxlbnwwfHwwfHx8MA%3D%3D'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Mathematics</h2>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1633493702341-4d04841df53b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Physics</h2>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Chemistry</h2>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1603961721490-0182084756d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90YW55fGVufDB8fDB8fHww'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Botany</h2>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8em9vbG9neSUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Zoology</h2>
            </div>
          </div>

          <div className='card-container'>
            <img
              src='https://images.unsplash.com/photo-1567962443865-54d86d79e090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdlb2xvZ3l8ZW58MHx8MHx8fDA%3D'
              alt='Students'
              height={200}
              width={200}
            />
            <div className='desc'>
              <h2>Geology</h2>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  )
}

export default Home