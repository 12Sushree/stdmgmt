import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateStudentInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    id: "",
    honors: "",
    join_year: "",
    dob: "",
    phno: "",
  });

  useEffect(() => {
    axios
      .get(`/api/students/${id}`)
      .then((_res) => {
        const dob = _res.data.dob ? _res.data.dob.substring(0, 10) : "";
        setStudent({ ..._res.data, dob });
      })
      .catch((_err) => {
        toast.error("Failed to fetch student data");
      });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://stdmgmt.vercel.app/api/students/${id}`, student)
      .then((_res) => {
        toast.success("Student updated successfully");
        navigate("/student-list");
      })
      .catch((_err) => {
        toast.error("Failed to update student");
      });
  };

  return (
    <div className="UpdateStudentInfo container mt-4">
      <h2>Update Student Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Student ID</label>
          <input
            type="number"
            className="form-control"
            name="id"
            value={student.id}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Honors</label>
          <input
            type="text"
            className="form-control"
            name="honors"
            value={student.honors}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Join Year</label>
          <input
            type="number"
            className="form-control"
            name="join_year"
            value={student.join_year}
            onChange={handleChange}
            required
            min="1900"
            max="2100"
          />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={student.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phno"
            value={student.phno}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateStudentInfo;
