// Import
import React from 'react';

// Local import
import './event.css';

function Event(props){

  let favButton;
  props.data.fav ? favButton = "" : favButton = <button className="event__button button--fav" onClick={() => props.saveToFav(props.data)}>Добавить в избранное</button>;

    return (
      <div className="event">
        <div className="event__name">{props.data.title}</div>
        <div className="event__price">Цена: {props.data.price}</div>

        {favButton}

        <button className="event__button button--more" onClick={() => props.action('SingleEvent', props.data)}>Подробнее</button>
      </div>
    );
}

export default Event;
