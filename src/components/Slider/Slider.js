import React, { useEffect, useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic from '../../images/nazmul.jpg';

const Slider = () => {
    const [slides, setSlides] = useState([]);

    useEffect( () => {
        fetch('slides.json')
            .then(res => res.json())
            .then(data => setSlides(data));
    },[])

    return (
        <div>
            <Carousel>
                {
                    slides.map(slide =>
                    <div key={slide.id}>
                        <img src={slide.img} alt='' />
                        <div className='font-bold absolute inset-0 top-1/2 lg:bottom-1/4 lg:bg-gray-400 p-2 lg:w-1/2 lg:left-1/4'>
                            <p className="bg-gray-400 text-blue-900 text-xl lg:text-4xl">{slide.slidHeading}</p>
                            <p className='hidden lg:block mt-4 text-xl text-white'>{slide.slidDescription}</p>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Slider;