import React from 'react';
import './Scountry.css'

const Scountry = (props) => {
    console.log(props.country)

    const {area, region, name, flags} = props.country;
    return (
        <div className='Scountry'>
            <h2>Country name: {name.common}</h2>  {/* Use normal system */}
            {/* <h2>Country name: {props.name}</h2>  Use normal system */}
            {/* <h4>Population: {props.population}</h4> */}
            {/* <h5>Region: {props.country.region}</h5> */}
            {/* <h5>Area: {props.country.area}</h5> send country and use from them */}
            <h5>region2: {region}</h5>  {/* Use distructiring object */}
            <h5>Area2: {area}</h5>  {/* Use distructiring object */}
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Scountry;