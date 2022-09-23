import React, { useEffect, useState } from 'react';
import Scountry from '../singleCountry/Scountry';
import './countries.css'

const Country = () => {

const [countries, setCountries]=useState([]);

useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
},[])

    return (
        <div >
            <h2>Countries in other file: {countries.length}</h2>
            <div className='countries-container'>
            {countries.map(country => <Scountry 
            country= {country}
            key={country.cca3}
            name={country.name.common}
             population={country.population}
            //  area={country.area}
            //  region= {country.region}
             ></Scountry> )}

            </div>
           
          
        </div>
    );
};

export default Country;