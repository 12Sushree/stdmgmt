import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

  const onSubmit = (e) => {
    // Prevents the page from refreshing
    e.preventDefault()

    // axios.post('api/students',student)
    //   .then((res) => {
    //     setStudent({
    //       Name: '',
    //       ID: '',
    //       Honors: '',
    //       Year: '',
    //       DOB: '',
    //       PhnNo: ''
    //     })
    //   })
  }

  return (
    <div className='AddStudent'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/student-list' className='btn btn-outline-warning float-left'>
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
                  // value={Student.Name}
                  // onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Id of the Student'
                  name='id'
                  className='form-control'
                  // value={Student.Name}
                  // onChange={onChange}
                />
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddStudent;