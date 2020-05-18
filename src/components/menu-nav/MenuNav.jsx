import React, { Fragment } from 'react';
import './menu-nav.scss';
import FOOD_DATA from './food-data';

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: FOOD_DATA
    }
  }

  render () {
    let { hashtag } = this.props;
    if (hashtag.length === 0) {
      hashtag = '#PIZZAS';
    }
    // filter food type according to hashtag to determine whether or not showing the sub-menu
    let filteredFood = this.state.foods.filter((food) => (food.routeName === hashtag));

    return (
      <Fragment>
        <header className="menu-nav">
          <nav className="menu-navbar">
            <a href="#PIZZAS" className={`menu-navbar__item ${hashtag === '#PIZZAS' ? "menu-navbar__item--active" : null}`}
            >PIZZAS</a>
            <a href="#DRINKS" className={`menu-navbar__item ${hashtag === '#DRINKS' ? "menu-navbar__item--active" : null}`}
            >DRINKS</a>
            <a href="#DESSERTS" className={`menu-navbar__item ${hashtag === '#DESSERTS' ? "menu-navbar__item--active" : null}`}
            >DESSERTS</a>
          </nav>
          {filteredFood.length === 0 ? null : // if filteredFood has no items, return null
            <nav className="menu-sub-navbar">
              {filteredFood[0].items.map((item, idx) => (
                // iterate over the items in the filteredFood
                (<a href={item.href} className="menu-sub-navbar__item">{item.name}</a>)
              ))}
            </nav>}
        </header>
      </Fragment>
    )
  }
}

export default MenuNav;