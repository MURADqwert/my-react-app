
import React, { use } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = ({countriesPromis}) => {
    const countriesData = use(countriesPromis);
    const countries = countriesData.countries;


    
    return (
        <>
            <h3>World Tour..</h3>
            <p>Visited Country:</p>
         <div className='Countries'>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country} ></Country>)
                
            }
        </div>
        </>
    )      
}

export default Countries;