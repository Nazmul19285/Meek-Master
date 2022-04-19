import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleRegistert = async(event) =>{
        event.preventDefault();
        if(email){
           await createUserWithEmailAndPassword(email, password);
        }
    }
    if (error) {
        alert(error.message);
        window.location.reload(false);
    }
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        alert(error);
       
    }
    if(user){
        navigate('/home');
    }
    return (
        <div className='lg:w-1/3 mx-auto'>
            <h1 className='text-2xl lg:text-4xl mt-8'>Please register</h1>
            <form onSubmit={handleRegistert}>
                <div>
                    <input onChange={handleEmail} className='lg:w-96 border py-2 px-4 mt-8' type="email" name="email" placeholder='Enter Your Email' required />
                </div>
                <div>
                    <input onChange={handlePassword} className='lg:w-96 border py-2 px-4 mt-4' type="password" name="password" placeholder='Enter Your Password' required />
                </div>
                <button className='bg-lime-400 my-4 w-64 lg:w-96 py-2 hover:bg-lime-300'>Submit</button>
            </form>
        </div>
    );
};

export default Register;