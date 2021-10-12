import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, description, img,time, price} = props.service;
    return (
        <div className="service">
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4><b>Price: ${price}</b></h4>
            <h5> <b>Time: {time} hour </b></h5>
            <p className="px-5"><b>{description}</b></p>

        </div>
    );
};

export default Service;