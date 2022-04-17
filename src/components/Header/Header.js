import React from 'react';
import logo from '../../images/nazmul.jpg'

const Header = () => {
    return (
        <div className='bg-orange-200'>
            <div className='flex text-xl lg:text-2xl ml-4 lg:ml-16 items-center font-bold py-4'>
                <h2>Meek</h2>
                <img className='w-16 mx-2 rounded-full rotate-12' src={logo} alt=""/>
                <h2>Master</h2>
            </div>
            <div></div>
        </div>
    );
};

export default Header;