import { useEffect, useState } from 'react';

// Import Components
import Countrys from '../countrys/Countrys';
import SearchForm from '../search/SearchForm';

// Import Styles
import './home.css';

// Deaclare All Default Value As Variables
const url = 'https://restcountries.com/v3.1/all';


const Home = () => {
    // Deaclare All States
    const [countrys, setCountrys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredCountrys, setFilteredCountrys] = useState(countrys);

    // Fecth Data Methods
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            setCountrys(data);
            setFilteredCountrys(data);
            setIsLoading(false);
            setError(null);

        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }


    // Remove Country Function
    const removeCountry = (name) => {
        const filteredArr = countrys.filter((country) => country.name.common.toLowerCase() !== name);
        setFilteredCountrys(filteredArr);
    }

    // Search Country
    const searchCountry = (text) => {
        const filteredArr = countrys.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            const searchText = text.toLowerCase();

            const newCountrys = countryName.startsWith(searchText);

            return newCountrys;
        });

        console.log(filteredCountrys.length);

        setFilteredCountrys(filteredArr);
    }

    // Use Effect Methods
    useEffect(() => {
        // setInterval(() => {
        fetchData(url);
        // }, 2000);
    }, []);


    return (
        <div className='home-container'>
            <h1 className="title">React Country App</h1>

            <SearchForm onSearch={searchCountry} />

            {isLoading && <h3 className='loading-message'>Loading...</h3>}
            {error && <h3 className='error-message'>{error.message}</h3>}

            {countrys && <Countrys data={filteredCountrys} onRemove={removeCountry} />}
        </div>
    );
}

export default Home;
