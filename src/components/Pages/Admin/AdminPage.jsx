import React from 'react';
import logo from '../../../assets/Logo/Group 1329.png'
import { Link, Outlet } from 'react-router-dom';
import { FaPlus, FaUserFriends } from "react-icons/fa";


const AdminPage = () => {
    return (
        <div className='my-10'>
            <Link to="/"><img className='w-52 ' src={logo} alt="" /></Link>

            <div className='grid lg:grid-cols-4 my-10 mx-10'>
                <div className='space-y-5'>

                    <Link to = "./list"><p className='text-primary flex items-center'> <FaUserFriends className='mr-2'></FaUserFriends> Volunteer register list</p></Link>
                    <Link to = "./form">   <p className='flex items-center'> <FaPlus className='mr-2'></FaPlus> Add Event </p>
                    </Link>




                </div>

                <div className='col-span-3'>
                
                    <Outlet></Outlet>




                </div>



            </div>
        </div>
    );
};

export default AdminPage;