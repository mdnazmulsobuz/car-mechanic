import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='container pt-5'>
            <div className="row">
            <img className='img-fluid' src={notFound} alt='' />
        </div>
        <Link to='/'>
             <button className='btn btn-success my-5'>Go Back</button>
        </Link>
        </div>
    );
};

export default NotFound;