import React from 'react'
import './search-icon.styles.scss';



const SearchIcon = () => {
    
    
    return (
        <div class="search-icon-container">
            <input type="text" placeholder="Search..." />
            <div class="search"></div>
        </div>
    );
}

export default SearchIcon;