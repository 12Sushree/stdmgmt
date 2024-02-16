import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import NavBar from './NavBar';
import Footer from './Footer';

function UpdateStudentInfo(props) {
    const [student, setStudent] = useState({
        name: '',
        id: '',
        honors: '',
        join_year: '',
        dob: '',
        phno: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/api/students/${id}`)
            .then((res) => {
                setStudent({
                    name: res.data.name,
                    id: res.data.id,
                    honors: res.data.honors,
                    join_year: res.data.join_year,
                    dob: res.data.dob,
                    phno: res.data.phno,
                });
            })
            .catch((err) => {
                console.log('Error from UpdateStudentInfo GET request');
                console.log(err)
            });
    }, [id]);

    const onChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: student.name,
            id: student.id,
            honors: student.honors,
            join_year: student.join_year,
            dob: student.dob,
            phno: student.phno,
        };

        axios
            .put(`/api/students/${id}`, data)
            .then((res) => {
                navigate(`/show-student/${id}`);
            })
            .catch((err) => {
                console.log('Error in UpdateStudentInfo PUT request ->');
                console.log(err)
            });
    };

    return (
        <div className='UpdateStudentInfo'>
            <NavBar />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/student-list' className='btn btn-outline-primary float-left'>
                            Show Student List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Edit Student Info</h1>
                        <p className='lead text-center'>Update Student's Info</p>
                    </div>
                </div>

                <div className='col-md-8 m-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
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
                            <label htmlFor='id'>ID</label>
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
                            <label htmlFor='honors'>Honors</label>
                            <input
                                type='text'
                                placeholder='Honors'
                                name='honors'
                                className='form-control'
                                value={student.honors}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='join_year'>Joining Year</label>
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
                            <label htmlFor='dob'>Date of Birth</label>
                            <input
                                type='date'
                                placeholder='Date of Birth'
                                name='dob'
                                className='form-control'
                                value={student.dob}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='phno'>Phone No.</label>
                            <input
                                type='number'
                                placeholder='Phone No.'
                                name='phno'
                                className='form-control'
                                value={student.phno}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <button
                            type='submit'
                            className='btn btn-outline-primary btn-lg btn-block'
                        >
                            Update Student
                        </button>
                        <br /> <br />
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default UpdateStudentInfo;