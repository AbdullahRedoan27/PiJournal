import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen'>
            <div>
                <p className='text-xl text-center'>Page not found. Please check your URL.</p>
                <Link to='/' className='btn btn-primary flex justify-center mx-auto w-3/12'>Go back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;