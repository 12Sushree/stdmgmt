import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const StudentCard = (props) => {
  const student = props.student



  return (
    <div className='card-container'>
      <img
        src='https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707868800&semt=sph'
        alt='Students'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-student/${student._id}` }>
            {student.name}  
          </Link> 
        </h2>
        <h3>{student.id}</h3>
        <h4>{student.honors}</h4>
        <h4>{student.join_year}</h4>
      </div>
    </div>  
  )
}

export default StudentCard