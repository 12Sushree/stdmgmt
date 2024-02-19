// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AddStudent from './components/AddStudent'
import ShowStudentList from './components/ShowStudentList'
import ShowStudentDetails from './components/ShowStudentDetails'
import UpdateStudentInfo from './components/UpdateStudentInfo'
import Home from './components/HomePage'
import Feature from './components/Features'
import AllRoutes from './components/Routes'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/student-list' element={<ShowStudentList />} />
          <Route path='/add-student' element={<AddStudent />} />
          <Route path='/edit-student/:id' element={<UpdateStudentInfo />} />
          <Route path='/show-student/:id' element={<ShowStudentDetails />} />
          <Route path='/features' element={<Feature />} />
          <Route path='/routes' element={<AllRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
