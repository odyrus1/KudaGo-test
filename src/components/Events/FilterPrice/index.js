// Import
import React from 'react';

// Local import
import './filterPrice.css';

function FilterPrice(props){
    return (
      <div className="filterPrice">
        <div className="filterPrice__input">Min: <input type="number" id="priceMin" defaultValue={props.min}/></div>
        <div className="filterPrice__input">Max: <input type="number" id="priceMax" defaultValue={props.max}/></div>
        <button className="filterPrice__button" onClick={() => props.action(document.getElementById('priceMin').value, document.getElementById('priceMax').value)}>Цена</button>
      </div>
    );
}

export default FilterPrice;
