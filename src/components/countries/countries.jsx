import React from 'react';
import { use, useState } from 'react';
import Country from './country';


const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);

    const HandleVisitedCountries = (country) =>{
        console.log('Handle visited countries clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    
    return (
        <div>
            
            <h1>In the country: {countries.length}</h1>
            <h3>Visited countries: {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country =><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    country={country}
                    HandleVisitedCountries = {HandleVisitedCountries}
                    ></Country> )
            }
        </div>
    );
};

export default Countries;