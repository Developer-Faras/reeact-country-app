import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Import Components
import Country from '../country/Country';

// Import Styles
import './countrys.css';


const Countrys = (props) => {
    return (
        <div className='countrys-container'>
            {props.data.map((country, i) => {
                const newCountry = { country, id: uuidv4() }

                return <Country key={i} {...newCountry} onRemove={props.onRemove} />
            })}
        </div>
    );
}

export default Countrys;
