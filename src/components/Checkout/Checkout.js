import React from 'react';

const Checkout = () => {

    return (
        <div>
            <h1 className='text-2xl mt-8'>Your Contact</h1>
            <form className='mt-8' action='/'>
                <div>
                    <input className='border-2 p-2 mb-4 lg:w-96' type="text" placeholder='Enter your Name' required/>
                </div>
                <div>
                    <input className='border-2 p-2 mb-4 lg:w-96' type="text" placeholder='Address' required/>
                </div>
                <div>
                    <input className='border-2 p-2 mb-4 lg:w-96' type="phone" placeholder='Mobile Number' required/>
                </div>
                <button className='bg-lime-400 my-4 lg:w-96 w-64 py-2 hover:bg-lime-300'>Submit</button>
            </form>
        </div>
    );
};

export default Checkout;