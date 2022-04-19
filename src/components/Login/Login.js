import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleLogin = async (event) =>{
        event.preventDefault();
        await signInWithEmailAndPassword(email,password);
    }

    if(loading){
        return <h1>Loading...</h1>
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
    }
    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div className='lg:w-1/3 mx-auto'>
            <h1 className='text-2xl lg:text-4xl mt-8'>Please login</h1>
            <p className='text-sm mt-2'>New member? <button className='text-blue-500'><Link to={'/register'}>Register here.</Link></button></p>
            <form onSubmit={handleLogin}>
                <div>
                    <input onChange={handleEmail} className='lg:w-96 border py-2 px-4 mt-8' type="email" name="email" placeholder='Enter Your Email' required />
                </div>
                <div>
                    <input onChange={handlePassword} className='lg:w-96 border py-2 px-4 mt-4' type="password" name="password" placeholder='Enter Your Password' required />
                </div>
                <div className='mt-2 text-right mr-14 lg:mr-28'>
                    <Link className='text-xs text-blue-400' to={'/forgetpassword'}>Forgot Password?</Link>
                </div>
                <button className='bg-lime-400 my-4 lg:w-96 w-64 py-2 hover:bg-lime-300'>Login</button>
            </form>

            <p className='text-xs text-gray-600'>Or, login with</p>
            <div>
                <button className='bg-blue-900 text-white my-4 w-64 lg:w-96 py-2 hover:bg-blue-700'>Facebook</button>
            </div>
            <div>
                <button className='bg-orange-800 text-white w-64 lg:w-96 py-2 hover:bg-orange-500'>Google</button>
            </div>
        </div>
    );
};

export default Login;