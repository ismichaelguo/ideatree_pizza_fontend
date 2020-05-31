import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import MenuNav from "../../components/menu-nav/MenuNav";
import ItemCardContainer from "../../components/item-card-container/ItemCardContainer";
import Footer from "../../components/footer/Footer";
import FOOD_ITEM_DATA from "./food-item-data";

import "./menu-page.scss";

const MenuPage = (props) => {
  console.log(props);
  const foodItemArr = FOOD_ITEM_DATA;
  const pathname = props.location.pathname;
  const hashtag = props.location.hash || "#PIZZAS"; // if hash is empty, initialize with '#PIZZAS'

  let filteredFoodArr = foodItemArr.filter((food) =>
    food.locationID.startsWith(hashtag.split("#")[1])
   
  );

  return (
    <div className="menu-page">
      <section className="menu-page__nav">
        <MainNav pathname={pathname} />
        <MenuNav hashtag={hashtag} />
      </section>
      <section className="menu-page__content">
        {filteredFoodArr.length === 0
          ? null
          : filteredFoodArr.map((item) => (
            <ItemCardContainer
              key={item.itemID}
              locationID={item.locationID}
              itemFirstName={item.itemFirstName}
              itemLastName={item.itemLastName}
              items={item.items}
            />
          ))}
      </section>
      <Footer />
    </div>
  );
};

export default MenuPage;
