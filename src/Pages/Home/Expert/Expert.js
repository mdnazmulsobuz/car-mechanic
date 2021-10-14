import React from 'react';

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='card'>
                <img src={img} alt='' />
                <h4>{name}</h4>
                <h5 className='text-danger'>{expertize}</h5>
                <button className='btn btn-primary'>Details</button>
            </div>
        </div>
    );
};

export default Expert;