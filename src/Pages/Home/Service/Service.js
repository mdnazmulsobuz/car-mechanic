import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, description, price, img} = service;
    return (
        <div className='service'>
            <img src={img} alt=''/>
            <h4 className='pt-3'>Title: {name}</h4>
            <h5>Houly Rate: {price}</h5>
            <p>{description}</p>
            <button className='btn btn-primary my-3 px-4'>Details</button>
        </div>
    );
};

export default Service;