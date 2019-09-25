// Import
import React from 'react';

// Local import
import './filterEvent.css';

function FilterEvent(props){
    return (
      <div>
        <button className="filterEvent__button" onClick={() => props.action(props.type)}>{props.type}</button>
      </div>
    );
}

export default FilterEvent;
