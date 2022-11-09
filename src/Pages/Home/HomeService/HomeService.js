import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Services/ServiceCard';

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/home/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='lg:grid lg:grid-cols-3 mx-auto w-11/12 mt-5'>
            {
                services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default HomeService;