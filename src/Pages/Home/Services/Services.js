import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className='pt-5'>Our Services</h2>
            </div>
        <div className='services-container container'>
            
            {
                services.map(service=> <Service
                key={service.id}
                service= {service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;