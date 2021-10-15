import React from 'react';
import './Experts.css';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Ashley Smith',
        expertize: '-Machine Expert-'
    },
    {
        img: mechanic3,
        name: 'John Anderson',
        expertize: '-Automobile Expert-'
    },
    {
        img: mechanic4,
        name: 'William Smith',
        expertize: '-Operetor Expert-'
    },
    {
        img: mechanic5,
        name: 'Jokn kery',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic1,
        name: 'Abul Hasan',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Sakib khan',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic3,
        name: 'Babul Mia',
        expertize: '-Engine Expert-'
    }
   

]

const Experts = () => {
    return (
        <div className='container pb-5' id='experts'>
            <h2 className='pt-5 pb-3'>Our Experts</h2>
            <div className='row g-3'>
                {
                    experts.map(expert =><Expert
                    key={expert.name}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;