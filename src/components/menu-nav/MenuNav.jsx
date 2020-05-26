import React, { Fragment } from "react";
import "./menu-nav.scss";
import FOOD_TYPE_DATA from "./food-type-data";

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: FOOD_TYPE_DATA,
      browserWidth: document.body.clientWidth,
      hide: (() => (document.body.clientWidth <= 768 ? false : true))(),
      extended: false,
    };
  }

  componentDidMount () {
    // monitor the browser size change, 
    // and then trigger handleSize
    window.addEventListener('resize', this.handleSize);
  }

  componentWillUnmount () {
    // remove listener
    window.removeEventListener('resize', this.handleSize);
  }

  handleSize = () => {
    // once size changed, update the browserWidth and 
    // then update the hide state
    this.setState({
      browserWidth: document.body.clientWidth,
    });
    this.setState({
      hide: (() => (document.body.clientWidth <= 768 ? false : true))(),
    });
  }

  handleAfterClick = () => {
    // handle pseudo-elements(after) click
    this.setState({
      extended: !this.state.extended,
    })
    console.log('after click', this.state.extended)
  }

  handleDishClick = () => {
    // handle sub-menu dishes click
    this.setState({
      extended: false,
    })
  }

  render () {
    let { hashtag } = this.props;
    if (hashtag.length === 0) {
      hashtag = "#PIZZAS";
    }
    // filter food type according to hashtag to determine whether or not showing the sub-menu
    // console.log("hashtag", hashtag);
    let filteredFood = this.state.foods.filter((food) =>
      hashtag.startsWith(food.routeName)
    );
    // console.log("filteredFood", filteredFood);
    // console.log('hide', this.state.hide);

    return (
      <Fragment>
        <header className="menu-nav">
          <nav className="menu-navbar">
            <a
              href="#PIZZAS"
              className={`menu-navbar__item ${
                hashtag.startsWith("#PIZZAS")
                  ? "menu-navbar__item--active"
                  : null
                }`}
            >
              PIZZAS
            </a>
            <a
              href="#DRINKS"
              className={`menu-navbar__item ${
                hashtag === "#DRINKS" ? "menu-navbar__item--active" : null
                }`}
            >
              DRINKS
            </a>
            <a
              href="#DESSERTS"
              className={`menu-navbar__item ${
                hashtag.startsWith("#DESSERTS")
                  ? "menu-navbar__item--active"
                  : null
                }`}
            >
              DESSERTS
            </a>
          </nav>
          {filteredFood.length === 0 ? null : ( // if filteredFood has no items, return null
            <nav className="menu-sub-navbar">
              {/* set the first element visible during dropdown*/}
              <a
                href={`#${hashtag.split("#")[1]}${filteredFood[0].items[0].href}`}
                // we might need to comment out this href, otherwise it will
                // always route to the first item anchor when click the `after` element
                className={`menu-sub-navbar__dropdown ${this.state.hide ? 'hide' : ''} ${this.state.extended ? 'extended' : ''}`}
                onClick={this.handleAfterClick}
              >
                {filteredFood[0].items[0].name}
              </a>
              {filteredFood[0].items.map((item, idx) => (
                // iterate over the items in the filteredFood
                <a
                  key={idx}
                  href={`#${hashtag.split("#")[1]}${item.href}`}
                  className={`menu-sub-navbar__item ${this.state.hide ? '' : 'hide'} ${this.state.extended ? 'extended' : ''}`}
                  onClick={this.handleDishClick}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}
        </header>
      </Fragment>
    );
  }
}

export default MenuNav;
