import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    const [slides, setSlides] = useState([]);

    useEffect( () => {
        fetch('slides.json')
            .then(res => res.json())
            .then(data => setSlides(data));
    },[])

    return (
        <div className='z-auto'>
            <Carousel>
                {
                    slides.map(slide =>
                    <div key={slide.id}>
                        <img src={slide.img} alt='' />
                        <div className='font-bold absolute inset-0 top-1/2 lg:bottom-1/4 p-2 lg:w-1/2 lg:left-1/4'>
                            <p className="text-blue-900 text-xl lg:text-4xl">{slide.slidHeading}</p>
                            <p className='hidden lg:block mt-4 text-xl text-white'>{slide.slidDescription}</p>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Slider;