import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div id='services' className='mx-2 lg:mx-12'>
            <h1 className='text-3xl lg:text-4xl font-bold my-8 lg:my-16'>My Services</h1>
            <div className='lg:grid grid-cols-3 lg:gap-6'>
            {
                services.map(service =>
                <div className='mb-6 border' key={service.id}>
                    <div className='grid grid-cols-3 text-left mt-2'>
                        <img className='pt-12' src={service.img} alt=""/>
                        <div className='col-span-2 px-4'>
                            <h1 className='font-bold text-xl lg:text-2xl mb-4 text-blue-900'>{service.name}</h1>
                            <h2 className='text-sm lg:text-lg mb-4'>{service.description}</h2>
                            <h3 className='font-bold text-blue-900'>Price: {service.price}</h3>
                        </div>
                    </div>
                    <Link className='text-end' to={'/checkout'}><button className='bg-lime-400 py-2 my-4 mx-auto w-48 hover:bg-lime-300'>Buy Now</button></Link>
                </div>)
            }
            </div>
        </div>
    );
};

export default Services;