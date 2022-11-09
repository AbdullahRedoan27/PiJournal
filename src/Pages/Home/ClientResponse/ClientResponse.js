import React from 'react';

const ClientResponse = () => {
    return (
        <div className='mx-auto my-4 text-center'>
            <p className='text-xl mb-3'>Our clients response about our service</p>
            <div className='border mx-auto w-3/6 border-base-200 bg-base-200 p-4 rounded-xl '>
                <p>Service Quality: <progress className="progress progress-info w-56" value="90" max="100"></progress>90%</p>
                <p>Language: <progress className=" ml-9 progress progress-info w-56" value="95" max="100"></progress>95%</p>
                <p>Price: <progress className="ml-16 progress progress-info w-56" value="85" max="100"></progress>85%</p>
                <p>Fast Delivery: <progress className=" ml-6 progress progress-info w-56" value="90" max="100"></progress>90%</p>
            </div>
        </div>
    );
};

export default ClientResponse;