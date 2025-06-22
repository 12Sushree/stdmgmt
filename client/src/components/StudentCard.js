import { Link } from 'react-router-dom'
import '../App.css'

const StudentCard = (props) => {
  const student = props.student



  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D'
        alt='Students'
        height={200}
        width={200}
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