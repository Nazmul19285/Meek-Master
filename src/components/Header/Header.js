import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/nazmul.jpg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div className='bg-gray-100 flex justify-between items-center'>
            <div className='flex text-xl lg:text-2xl ml-4 lg:ml-16 items-center font-bold py-4'>
                <h2>Meek</h2>
                <img className='w-16 mx-2 rounded-full rotate-12' src={logo} alt=""/>
                <h2>Master</h2>
            </div>
            <div className='lg:flex lg:mr-16 space-x-8'>
                <CustomLink to={'/'}>Home</CustomLink>
                <a href="home#services">Services</a>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
                {
                    user ? 
                        <button onClick={handleLogout}>Logout</button>
                    :
                    <CustomLink to={'/login'}>Login</CustomLink>
                }
            </div>
        </div>
    );
};

export default Header;