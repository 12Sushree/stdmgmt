import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const AddStudent = (props) => {

  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    id: '',
    honors: '',
    join_year: '',
    dob: '',
    phno: '',
  });
  const [showToast, setShowToast] = useState(false);

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // Prevents the page from refreshing
    e.preventDefault()

    axios.post('api/students',student)
      .then((res) => {
        setStudent({
          name: '',
          id: '',
          honors: '',
          join_year: '',
          dob: '',
          phno: '',
        })

      // Show the success alert
      toast.success('Student added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
        });

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        },  5000); // Adjust the timeout as needed

      })

      .catch((err) => {
        console.log('Error in Adding Student!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
      });
  }

  return (
    <div className='AddStudent'>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/student-list' className='btn btn-outline-info float-left'>
              Show Student List
            </Link>
          </div>

          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Student</h1>
            <p className='lead text-center'>Add new Student</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Student'
                  name='name'
                  className='form-control'
                  value={student.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Id of the Student'
                  name='id'
                  className='form-control'
                  value={student.id}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Honors of the Student'
                  name='honors'
                  className='form-control'
                  value={student.honors}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Joining Year of the Student'
                  name='join_year'
                  className='form-control'
                  value={student.join_year}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='DOB of the Student'
                  name='dob'
                  className='form-control'
                  value={student.dob}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Phone No. of the Student'
                  name='phno'
                  className='form-control'
                  value={student.phno}
                  onChange={onChange}
                />
              </div>
  
              <input
                type='submit'
                className='btn btn-outline-info btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
      <br />
      
      <Footer />
    </div>
  );
};

export default AddStudent;