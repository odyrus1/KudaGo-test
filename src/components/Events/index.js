// Import
import React, {Component} from 'react';

//Local import
import {allEvents} from './data/events.js';
import Event from './Event';
import SingleEvent from './SingleEvent';
import FilterEvent from './FilterEvent';
import FilterPrice from './FilterPrice';
import './events.css';

class Events extends Component {

  state = {
    filteredEvents: allEvents,
    eventsType: [],
    currentEvent: 'all',
    priceMin: '',
    priceMax: '',
    favEvent: [],
    currentView: 'Events',
    singleData: []
  };

  componentDidMount(){
    // Сохраняем все типы событий + добавляем событие "Все" в начало и "Избранное" в конец
    let eventsType = [...new Set(allEvents.map(event => event.type))];
    eventsType.unshift('all');
    eventsType.push('Избранное');
    // Сохраняем минимальную и максимальную цену нынешних событий
    let priceMin = Math.min(...allEvents.map(event => event.price));
    let priceMax = Math.max(...allEvents.map(event => event.price));
    // Сохраняем типы событий и цены в стейт
    this.setState({ eventsType, priceMin, priceMax }, () => {console.log(this.state.filteredEvents)});
  };

  // Филбтрация по типу события
  filterEventsType = (currentEvent) => {
    // Фильтрация событий по типу + по минимальной и максимальной цене сохраненной в стейте а так же по избранному
    let filteredEvents = allEvents.filter((event) => {
      return currentEvent === 'all' ?
        event.type && event.price >= this.state.priceMin && event.price <= this.state.priceMax
      :
        event.fav === true && currentEvent === "Избранное" ?
          event
        :
          event.type === currentEvent && event.price >= this.state.priceMin && event.price <= this.state.priceMax;
    })
    // Сохранение отфильтрованных событий + тип выбранного события в стейт
    this.setState({ filteredEvents, currentEvent});
  };

  // Фильтрация по цене
  filterEventsPrice = (priceMin, priceMax) => {
    // Фильтрация событий по мин/макс цене + показываем только события нынешнего типа сохраненого в стейте
    let filteredEvents = allEvents.filter((event) => {
      return event.price >= priceMin && event.price <= priceMax && (this.state.currentEvent === 'all' ? event.type : event.type === this.state.currentEvent);
    })
    // Сохранение отфильтрованных событий + мин/макс цена в стейт
    this.setState({ filteredEvents, priceMin, priceMax });
  };

  // Сохранение в избранное. Добавляем евент в стейт
  saveToFav = (favEvent) => {
    favEvent.fav = true;
    this.setState({ favEvent: [...this.state.favEvent, favEvent] }, () => {console.log(favEvent)});
  };

  // Изменение current view = показать все события или одно
  changeView = (currentView, singleData) => {
    this.setState({ currentView, singleData });
  }

  render(){
    if(this.state.currentView === 'Events') {

      return (
        <div>
          <div className="filterEvent">
            {this.state.eventsType.map((type, index) => {
                return <FilterEvent type={type} action={this.filterEventsType} key={index} />;
              }
            )}
          </div>

          <FilterPrice action={this.filterEventsPrice} min={this.state.priceMin} max={this.state.priceMax} />

          {this.state.filteredEvents.map((event, index) => {
              return <Event data={event} key={index} saveToFav={this.saveToFav} action={this.changeView}  />;
            }
          )}
        </div>
      );

    } else if(this.state.currentView === 'SingleEvent') {

      return (
        <div>
          <SingleEvent data={this.state.singleData} action={this.changeView} />
        </div>
      );

    }

  }
}

export default Events;
