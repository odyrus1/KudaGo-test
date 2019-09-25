// Import
import React from 'react';

// Local import
import './singleEvent.css';

function SingleEvent(props){
    return (
      <div className="singleEvent">
        <div className="singleEvent__name">{props.data.title}</div>
        <div className="singleEvent__desc">{props.data.description}</div>
        <div className="singleEvent__price">Цена: {props.data.price}</div>
        <button className="singleEvent__button" onClick={() => props.action('Events')}>Все события</button>
      </div>
    );
}

export default SingleEvent;
