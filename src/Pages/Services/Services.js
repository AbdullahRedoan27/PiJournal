import React, { useEffect, useState } from 'react';
import useTitleHook from '../../Hooks/useTitleHook';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitleHook("Services")
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(result => result.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='lg:grid lg:grid-cols-3 mx-auto'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service = {service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;