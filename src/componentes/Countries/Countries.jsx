import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handelVisitedCountry = country =>{
        console.log('added this country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }



    const handelVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
           <div>
           <h5>Visited Countries: {visitedCountries.length}
                <ul>
                    {
                    visitedCountries.map(country => 
                    <li key={country.cca3}> {country.name.common}</li>
                    )}
               </ul>                           
            </h5>
           </div>
           <div className="flags-container">
            {
                visitedFlags.map(flag => <img src={flag}></img>)
            }

           </div>
           {/* display countries */}
           <div className="country-container">
           {
                countries.map(country => 
                <Country key={country.cca3}
                handelVisitedCountry={handelVisitedCountry}
                handelVisitedFlags={handelVisitedFlags}
                country={country}></Country>)
            }
           </div>
          
        </div>
    );
};

export default Countries;