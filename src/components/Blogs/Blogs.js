import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='mt-8 font-bold text-2xl'>My Blogs</h1>
            <div className='text-left lg:mx-16 mx-4'>
                <div className='mt-12 lg:border-2 lg:p-4'>
                    <h3 className='text-xl lg:text-3xl font-bold text-blue-900'>1. Difference between authorization and authentication</h3>

                    <p className='lg:text-xl mt-8'><span className='font-bold'>Authorization</span> verifies whether access is allowed through policies and rules. It determines what users can and cannot access. For example: After an employee successfully authenticates, the system determines what information the employees are allowed to access</p>

                    <p className='lg:text-xl mt-4'><span className='font-bold'>Authentication</span> challenges the user to validate credentials (for example, through passwords, answers to security questions, or facial recognition). It determines whether users are who they claim to be. For example: Employees in a company are required to authenticate through the network before accessing their company email.</p>
                </div>
                <div className='mt-8 lg:border-2 lg:p-4'>
                    <h3 className='text-xl lg:text-3xl font-bold text-blue-900'>2. Why are you using firebase? What other options do you have to implement authentication?</h3>

                    <p className='lg:text-xl mt-8'>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. The authentication process is very easy with Firebase.</p>

                    <p className='lg:text-xl mt-4'>Some options to implement authentication:</p>

                    <p className='text-xl lg:text-2xl font-bold ml-8 mt-4'>1. Ory<br/> 2. Supabase <br/>3. Okta <br/>4. PingIdentity<br/>5. Keycloak <br/>6. Frontegg <br/>7. Authress <br/>8. Auth0 <br/>9. Amazon Cognito <br/>10. OneLogin</p>
                </div>
                <div className='mt-8 lg:border-2 lg:p-4'>
                    <h3 className='text-xl lg:text-3xl font-bold text-blue-900'>3. What other services does firebase provide other than authentication?</h3>

                    <p className='lg:text-xl mt-8'>Firebase Services:</p>

                    <p className='text-xl lg:text-2xl font-bold ml-8 mt-4'>1. Hosting<br/> 2. Cloud Storage <br/>3. Realtime Database <br/>4. Cloud Firestore<br/>5. Machine Learning <br/>6. Performance Monitoring <br/>7. Google Analytics<br/>8. App Distribution<br/>9. Cloud Messaging <br/>10. Dynamic Links</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;