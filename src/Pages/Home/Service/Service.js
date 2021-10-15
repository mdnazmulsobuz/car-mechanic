import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, price, img} = service;
    return (
        <div className='service'>
            <img src={img} alt=''/>
            <h4 className='pt-3'>Title: {name}</h4>
            <h5>Houly Rate: {price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-primary my-3 px-4'>Book {name}</button>
            </Link>
        </div>
    );
};

export default Service;