import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";
import Footer from "./Footer";

function ShowStudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`https://stdmgmt.vercel.app/api/students`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setStudents(res.data);
        } else {
          setStudents([]);
          console.error("API response is not an array:", res.data);
        }
      })
      .catch((err) => {
        console.log("Error from ShowStudentList ->");
        console.log(err);
      });
  }, []);

  // studentList finds if there any student details present or not, if present then map the student details using map()
  const studentList =
    students.length === 0 ? (
      <div className="alert alert-info text-center">
        There is no student record!
      </div>
    ) : (
      students.map((student, k) => <StudentCard student={student} key={k} />)
    );

  return (
    <div className="ShowStudentList">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Students List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/add-student"
              className="btn btn-outline-primary float-right"
            >
              + Add New Student
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{studentList}</div>
      </div>
      <br />

      <Footer />
    </div>
  );
}

export default ShowStudentList;
