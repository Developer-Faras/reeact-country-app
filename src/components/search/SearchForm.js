import React from 'react';

// import Css
import './searchform.css';

const SearchForm = (props) => {
    return (
        <div className="search">
            <form action="">
                <div className="input-box">
                    <input type="text" onChange={(e) => { props.onSearch(e.target.value); }} name="search" id="seaarch" placeholder='Enter Search keyword...' />
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
