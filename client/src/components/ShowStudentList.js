import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';
import NavBar from './NavBar';
import Footer from './Footer';

function ShowStudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/students`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowStudentList ->');
        console.log(err)
      });
  }, []);

  // studentList finds if there any student details present or not, if present then map the student details using map()
  const studentList =
    students.length === 0
      ? 'there is no student record!'
      : students.map((student, k) => <StudentCard student={student} key={k} />);

  return (
    <div className='ShowStudentList'>
      <NavBar />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Students List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/add-student'
              className='btn btn-outline-primary float-right'
            >
              + Add New Student
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{studentList}</div>
      </div>
      <br />

      <Footer />
    </div>
  );
}

export default ShowStudentList;