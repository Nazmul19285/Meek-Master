import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
    }
    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div>
            <h1 className='text-4xl my-8'>Reset Password</h1>
            <div>
                <input className='border-2 p-2 mb-4 lg:w-96' placeholder='Enter your Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <button className='bg-lime-400 my-4 lg:w-96 w-64 py-2 hover:bg-lime-300' onClick={async () => { await sendPasswordResetEmail(email);
                alert('Sent email');
                }}> Reset password </button>
            </div>
        </div>
    );
};

export default PasswordReset;