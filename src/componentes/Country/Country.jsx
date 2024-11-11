import { useState } from 'react';
import './Conutry.css'
const Country = ({ country, handelVisitedCountry, handelVisitedFlags }) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handelVisited = () => {
        setVisited(!visited);
    }
    
    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple':  'gray'}}>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handelVisitedCountry(country)}>Mark Visited</button> 
            <br />
            <button onClick={() => handelVisitedFlags(country.flags.png)}>Add Flags</button>
            <br />
            <button onClick={handelVisited}>{ visited ? 'Visited.' : 'going'}</button>
            { visited ?'I have Visited this Country.' : 'I want to visit.'}
        </div>
    );
};

export default Country;