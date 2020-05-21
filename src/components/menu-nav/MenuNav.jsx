import React, { Fragment } from 'react';
import './menu-nav.scss';
import FOOD_TYPE_DATA from './food-type-data';

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: FOOD_TYPE_DATA
    }
  }

  render () {
    let { hashtag } = this.props;
    if (hashtag.length === 0) {
      hashtag = '#PIZZAS';
    }
    // filter food type according to hashtag to determine whether or not showing the sub-menu
    console.log('hashtag', hashtag)
    let filteredFood = this.state.foods.filter((food) => (hashtag.startsWith(food.routeName)));
    console.log('filteredFood', filteredFood);

    return (
      <Fragment>
        <header className="menu-nav">
          <nav className="menu-navbar">
            <a href="#PIZZAS" className={`menu-navbar__item ${hashtag.startsWith('#PIZZAS') ? "menu-navbar__item--active" : null}`}
            >PIZZAS</a>
            <a href="#DRINKS" className={`menu-navbar__item ${hashtag === '#DRINKS' ? "menu-navbar__item--active" : null}`}
            >DRINKS</a>
            <a href="#DESSERTS" className={`menu-navbar__item ${hashtag.startsWith('#DESSERTS') ? "menu-navbar__item--active" : null}`}
            >DESSERTS</a>
          </nav>
          {filteredFood.length === 0 ? null : // if filteredFood has no items, return null
            <nav className="menu-sub-navbar">
              {filteredFood[0].items.map((item, idx) => (
                // iterate over the items in the filteredFood
                (<a href={`#${hashtag.split("#")[1]}${item.href}`} className="menu-sub-navbar__item">{item.name}</a>)
              ))}
            </nav>}
        </header>
      </Fragment>
    )
  }
}

export default MenuNav;