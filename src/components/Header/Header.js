import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/nazmul.jpg'
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open,setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div className='px-4 bg-gray-100 flex justify-between items-center sticky top-0 z-50'>
            <div className='flex text-xl lg:text-2xl lg:ml-16 items-center font-bold py-4'>
                <h2>Meek</h2>
                <img className='w-16 mx-2 rounded-full rotate-12' src={logo} alt=""/>
                <h2>Master</h2>
            </div>
            <nav>
                <div className='w-6 h-6 lg:hidden' onClick={() => setOpen(!open)}>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`lg:flex ${open ? 'top-9 absolute right-9 bg-gray-50 p-4' : 'top-[-120px] hidden'}`}>
                    <li className='mr-8'><CustomLink to={'/'}>Home</CustomLink></li>
                    <li className='mr-8'><CustomLink to="/services">Services</CustomLink></li>
                    <li className='mr-8'><CustomLink to={'/blogs'}>Blogs</CustomLink></li>
                    <li className='mr-8'><CustomLink to={'/about'}>About Me </CustomLink></li>
                    <li className='mr-8'>{
                        user ? 
                            <button onClick={handleLogout}>Logout</button>
                        :
                        <CustomLink to={'/login'}>Login</CustomLink>
                    }</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;