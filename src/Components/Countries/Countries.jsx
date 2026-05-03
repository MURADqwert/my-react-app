
import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css'

const Countries = ({countriesPromis}) => {
    const countriesData = use(countriesPromis);
    const countries = countriesData.countries;

        const [visitedCountry, setVisitedCountry] = useState([]);

        const handleVisitedCountry = (country)=>
        {
            console.log('i have visited', {country});
            const newVisitedCountries = [...visitedCountry, country];
            setVisitedCountry(newVisitedCountries);
        }

        const [visitedFlags, setVisitedFlags] = useState([]);
        const flagsVisited = (flag) =>
        {
            const newFlag = [...visitedFlags,flag];
            setVisitedFlags(newFlag);
        }
        
    return (
        <>
            <h3>World Tour..</h3>
            <p>Visited Country: {visitedCountry.length} </p>
        
            <ol>
                {
                    visitedCountry.map(visitCountry=><li> {visitCountry.name.common} </li>)
                }
            </ol>
                <p>flags: {visitedFlags.length} </p>
             <div className='flag-design'>
            {
                visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
            }
        </div>
         <div className='Countries'>
            {
                countries.map(country => <Country key={country.cca3.cca3}
                 country={country} handleVisitedCountry= {handleVisitedCountry}
                 flagsVisited= {flagsVisited} >

                 </Country>)
                
            }
        </div>
       
        </>
    )      
}

export default Countries;