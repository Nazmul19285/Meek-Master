import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube  } from 'react-icons/fa';
import React from 'react';
import picture from '../../images/nazmulAbout.jpg'

const About = () => {
    return (
        <div>
            <div className='flex justify-center items-center lg:mx-auto mx-4 my-8 border-b-2 pb-12'>
                <div className='lg:w-5/12 lg:mr-12'>
                    <h1 className='lg:text-6xl text-xl font-bold text-blue-900'>MD NAZMUL HOSSAIN</h1>
                    <p className='lg:text-2xl text-sm mt-4 '>Reliable, hard-working with strong attention to detail and eager to learn about new technologies.</p>
                    <div className='flex justify-center'>
                        <div className='mt-8 flex justify-between w-56'>
                            <a href="https://www.facebook.com/profile.php?id=100009025605636"><FaFacebook className='text-4xl text-lime-500 hover:scale-125'></FaFacebook></a>
                            <a href="https://github.com/Nazmul19285"><FaGithub className='text-4xl text-lime-500 hover:scale-125'></FaGithub></a>
                            <a href="https://www.linkedin.com/in/nazmul19285/"><FaLinkedinIn className='text-4xl text-lime-500 hover:scale-125'></FaLinkedinIn></a>
                            <a href=" https://www.youtube.com/channel/UCgxNfKb3Mh-gfzG7N8jmZNA"><FaYoutube className='text-4xl text-lime-500 hover:scale-125'></FaYoutube></a>
                        </div>
                    </div>
                </div>
                <img className='rounded-full w-1/3' src={picture} alt="" />
            </div>
            <h1 className='lg:text-5xl font-bold text-2xl mt-8'>My Goals</h1>
            <p className='lg:text-xl text-left lg:mx-auto mx-4 mt-6 lg:w-1/2'>Well, I completed my Bachelor degree from CSE department. I love to solve problems. I love to know about technologies. I want to be a software engineer. I want to work with very large and complex applications.<br/><br/>

            I have a lot to learn. And I believe that the best way of learning is to learn by doing. So I have to start working in the industry with experienced team. I think web development is a great way to start my career.<br/><br/>

            I will start my career as a web developer. And while doing web development I will keep learning other technologies like android development, ios development, AI, Machine learning etc. That is the goal I am working day and night. I will definitely succeed by the grace of Almighty.
            </p>
        </div>
    );
};

export default About;