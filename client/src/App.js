import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AddStudent from './components/AddStudent';
import ShowStudentList from './components/ShowStudentList';
import ShowStudentDetails from './components/ShowStudentDetails';
import UpdateStudentInfo from './components/UpdateStudentInfo';
import Home from './components/HomePage';
import Feature from './components/Features';
import About from './components/About';
import NavBar from './components/NavBar'; // Make sure this import exists

const App = () => {
  return (
    <Router>
      <NavBar /> {/* This ensures NavBar is always visible */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student-list' element={<ShowStudentList />} />
          <Route path='/add-student' element={<AddStudent />} />
          <Route path='/edit-student/:id' element={<UpdateStudentInfo />} />
          <Route path='/show-student/:id' element={<ShowStudentDetails />} />
          <Route path='/features' element={<Feature />} />
          <Route path='/abt' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
