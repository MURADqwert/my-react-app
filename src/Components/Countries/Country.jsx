import React, { useState } from 'react';

const Country = ({country, handleVisitedCountry, flagsVisited}) => {
    const [Visited, setVisited] = useState(null)
    // console.log(country);
    
    const handleVisited=()=>{
        setVisited(true);
        handleVisitedCountry(country);
    }
    const handleNoVisited=()=>{
        setVisited(false)
    }
    const textStyle = {
        color: Visited === null
        ? "blue"
        : Visited
        ? "green"
        : "red"
    }
    return (
        <div className='design-border'>
            <img src= {country.flags.flags.png} alt= {country.flags.flags.alt} />
            <p>Name : {country.name.common} </p>
            <p>Official Name : {country.name.official} </p>
            <p>Capital: {country.capital.capital} </p>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area >= 300000 ?"large country" : "small country"} </p>
            <p style={textStyle}>
                {
                    Visited === null? "Visited ?": Visited ? "I have visited" : "Never been there"

                }
            </p>
            <button onClick={handleVisited}>Yes</button>
            <button onClick={handleNoVisited}>No</button>
            <button onClick={()=>flagsVisited(country.flags.flags.png)}>Visited Flag</button>
        </div>
    );
};

export default Country;