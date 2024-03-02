import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const AllRoutes = () =>(
    <div className='AllRoutes'>
        <NavBar />
        <div className='container-fluid'>
            <h3 className='display-4'>Backend Routes</h3>
            <ul>
                <li>Create: api/student/ </li>
                <li>Read: api/students/ </li>
                <li>FindById: api/student/:id</li>
                <li>Update: api/student/:id</li>
                <li>Delete: api/student/:id</li>
            </ul>
        </div>
        <div className='container'>
            <h3 className='display-4'>Frontend Routes</h3>
            <ul>
                <li>Create: /add-student </li>
                <li>Read: /student-list </li>
                <li>FindById: /show-student/:id</li>
                <li>Update: /edit-student/:id</li>
            </ul>
        </div>
        <Footer />
    </div>
)

export default AllRoutes