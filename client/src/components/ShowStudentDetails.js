import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import axios from 'axios';
import Footer from './Footer';

function ShowStudentDetails() {
    const [student, setStudent] = useState({});
    const { id } = useParams(); // Use 'id' to match your route
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/api/students/${id}`)
            .then((res) => {
                setStudent(res.data);
            })
            .catch((_err) => {
                toast.error('Error fetching student details');
            });
    }, [id]);

    const onDeleteClick = () => {
        axios
            .delete(`/api/students/${id}`)
            .then((_res) => {
                toast.success('Student Details deleted!', {
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                setTimeout(() => {
                    navigate('/student-list');
                }, 2000);
            })
            .catch((_err) => {
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

    // Format date of birth
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString();
    };

    return (
        <div className='ShowStudentDetails'>
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

            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <h1 className='display-4 text-center'>Student's Record</h1>
                        <p className='lead text-center'>View Student's Info</p>
                        <hr /> <br />

                        <div className='row justify-content-center'>
                            <div className='col-md-12'>
                                <table className='table table-striped table-bordered table-light'>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>Student ID</th>
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
                                            <td>{formatDate(student.dob)}</td>
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
                                    onClick={onDeleteClick}
                                >
                                    Delete Student
                                </button>
                            </div>

                            <div className='col-md-4'>
                                <Link
                                    to={`/edit-student/${id}`}
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
    );
}

export default ShowStudentDetails;