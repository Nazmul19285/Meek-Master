import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-blue-900 text-gray-200 pt-8 pb-4 mt-16'>
            <div className='flex justify-center'>
                <div className='lg:flex justify-between lg:w-1/2 text-left'>
                    <div className='mb-8'>
                        <h1 className='font-bold text-xl mb-2'>Company</h1>
                        <p>Refund policy</p>
                        <p>Career</p>
                        <p>Privacy policy</p>
                    </div>
                    <div className='mb-8'>
                        <h1 className='font-bold text-xl mb-2'>Others</h1>
                        <p>Blog</p>
                        <p>Become an Affiliate</p>
                        <p>Crash Courses</p>
                    </div>
                    <div className='mb-8'>
                        <h1 className='font-bold text-xl mb-2'>Keep up with us at</h1>
                        <p>Contact: 01628965394 (8AM - 11PM)</p>
                        <p>SMS: 01628965394 (24X7)</p>
                        <p>Email: nazmulhossain19285@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-8 flex justify-between w-56'>
                    <a href="https://www.facebook.com/profile.php?id=100009025605636"><FaFacebook className='text-4xl text-lime-500 hover:scale-125'></FaFacebook></a>
                    <a href="https://github.com/Nazmul19285"><FaGithub className='text-4xl text-lime-500 hover:scale-125'></FaGithub></a>
                    <a href="https://www.linkedin.com/in/nazmul19285/"><FaLinkedinIn className='text-4xl text-lime-500 hover:scale-125'></FaLinkedinIn></a>
                    <a href=" https://www.youtube.com/channel/UCgxNfKb3Mh-gfzG7N8jmZNA"><FaYoutube className='text-4xl text-lime-500 hover:scale-125'></FaYoutube></a>
                </div>
            </div>
            <div>
                <p className='text-xs mt-8'>2020 - {new Date().getFullYear()} Copyright © Meek Master. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;