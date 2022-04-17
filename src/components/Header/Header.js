import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/nazmul.jpg'

const Header = () => {
    return (
        <div className='bg-gray-50'>
            <div className='flex text-xl lg:text-2xl ml-4 lg:ml-16 items-center font-bold pt-4'>
                <h2>Meek</h2>
                <img className='w-16 mx-2 rounded-full rotate-12' src={logo} alt=""/>
                <h2>Master</h2>
            </div>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/blogs'}>Blogs</Link>
            </div>
        </div>
    );
};

export default Header;