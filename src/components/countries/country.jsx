import React, { useState } from 'react';
import './Country.css';

const Country = ({country, HandleVisitedCountries}) => {
    // console.log(country.population)

    const [visited, setvisited] = useState(false);
    

    const handleVisited = () =>{
        
        // if(visited){
        //     setvisited(false);
        // }
        // else{
        //     setvisited(true);
        // }
        setvisited(!visited);
        HandleVisitedCountries(country);
        
    }
        

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited? 'visited' : 'Not visited'}
            </button>
        </div>
    );
};

export default Country;

