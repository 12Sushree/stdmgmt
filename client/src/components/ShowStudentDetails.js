import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './Footer';
import NavBar from './NavBar';

function ShowStudentDetails(props) {
    const [student, setStudent] = useState({});
    const [showToast, setShowToast] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/api/students/${id}`)
            .then((res) => {
                setStudent(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowStudentDetails');
            });
    }, [id]);

    const onDeleteClick = (id) => {
        axios
            .delete(`/api/students/${id}`)
            .then((res) => {

                // Show the success alert
                toast.success('Student Details deleted!', {
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
                    // setShowToast(false); // Hide the toast
                    navigate('/'); // Navigate to homepage
                }, 5000); // Adjust the timeout as needed
            })

            .catch((err) => {
                console.log('Error in DeleteStudent!');
                console.log('The error is -> ')
                console.log(err)
                // Show the success alert
                toast.error('Error while deleting the student, please try again!', {
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
    };

    return (
        <div className='ShowStudentDetails'>
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
                theme="dark"
                transition={Slide}
            />

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <h1 className='display-4 text-center'>Student's Record</h1>
                        <p className='lead text-center'>View Student's Info</p>
                        <hr /> <br />

                        <div className='row justify-content-center'>
                            <div className='col-md-12'>
                                <table className='table table-striped table-bordered table-dark'>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>Id</th>
                                            <td>{student.id}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Name</th>
                                            <td>{student.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Honors</th>
                                            <td>{student.honors}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Join Year</th>
                                            <td>{student.join_year}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Date of Birth</th>
                                            <td>{student.dob}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Phone No.</th>
                                            <td>{student.phno}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='row justify-content-around mt-3'>
                            <div className='col-md-4'>
                                <button
                                    type='button'
                                    className='btn btn-outline-danger btn-lg btn-block'
                                    onClick={() => {
                                        onDeleteClick(student._id);
                                    }}
                                >
                                    Delete Student
                                </button>
                            </div>


                            <div className='col-md-4'>
                                <Link
                                    to={`/edit-student/${student._id}`}
                                    className='btn btn-outline-warning btn-lg btn-block'
                                >
                                    Edit Student
                                </Link>
                            </div>

                            <div className='col-md-4'>
                                <Link to='/student-list' className='btn btn-outline-primary btn-lg btn-block'>
                                    Show Student List
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

export default ShowStudentDetails