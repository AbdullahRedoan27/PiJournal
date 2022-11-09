import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard';

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/home/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className=''>
            <h2 className='text-center text-xl mt-5 mb-2'>Some of my popular services</h2>
            <div className='lg:grid lg:grid-cols-3 mx-auto w-11/12'>
            {
                services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
        <div className='flex justify-center mb-5'>
        <Link to='/services' className='btn btn-primary'>View All</Link>
        </div>
        </div>
    );
};

export default HomeService;