import React from 'react';

const ClientResponse = () => {
    return (
        <div className='mx-auto my-4 text-center'>
            <p className='text-xl mb-3'>My clients response about my service</p>
            <div className='border mx-auto lg:w-3/5 border-base-200 bg-base-200 p-4 rounded-xl '>
                <p>Service Quality: <progress className="progress progress-info w-48" value="90" max="100"></progress>90%</p>
                <p>Language: <progress className=" progress progress-info w-48" value="95" max="100"></progress>95%</p>
                <p>Price: <progress className=" progress progress-info w-48" value="85" max="100"></progress>85%</p>
                <p>Fast Delivery: <progress className=" progress progress-info w-48" value="90" max="100"></progress>90%</p>
            </div>
        </div>
    );
};

export default ClientResponse;