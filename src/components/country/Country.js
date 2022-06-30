import React from 'react';

import './country.css';

const Country = (props) => {
    const { id, country, onRemove } = props;

    const { name, capital, population, flags, maps, region, timezones, area } = country;


    return (
        <div className='country' unick-id={id}>
            <div className="img-box">
                <img src={flags.png} alt={capital} />
            </div>
            <div className="text-box">
                <h3 className="name">Name: {name.common}</h3>
                <h5 className="lang">Region: {region}</h5>
                <h5 className="timezone">Timezone: {timezones}</h5>
                <h5 className="lat-lng">Population: {population}</h5>
                <h5 className="area">Area: {area}</h5>
                <div className="btn-box">
                    <a href={maps.googleMaps} className="btn primary" target="_blank">Google Maps</a>
                    <button href="#" className="btn danger" onClick={() => {
                        onRemove(name.common.toLowerCase());
                    }}>Remove</button>
                </div>

            </div>
        </div>
    );
}

export default Country;
