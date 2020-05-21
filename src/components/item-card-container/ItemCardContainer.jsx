import React from 'react';
import ItemCard from '../../components/item-card/ItemCard';
import imgPizza from '../../asset/Images/pizzaCard.jpeg';
import './item-card-container.scss';

const ItemCardContainer = (props) => {
  return (
    <div className='menu-content'>
      <div>
        <div id="PIZZAS#NEW_PRODUCTS" className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>NEW</span> PRODUCT</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
          <ItemCard
            imgAlt='The Big Cheese'
            imgSrc={imgPizza}
            name='The Big Cheese'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped wit...'
            price={18.20}
            calories={9520}
            id={1}
          />
          <ItemCard
            imgAlt='The Big Pepperoni, Sausage & Mushroom'
            imgSrc={imgPizza}
            name='The Big Pepperoni, Sausage & Mushroom'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic'
            price={19.20}
            calories={10320}
            id={2}
          />
          <ItemCard
            imgAlt='The Big Pepperoni, Sausage & Mushroom'
            imgSrc={imgPizza}
            name='The Big Pepperoni, Sausage & Mushroom'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic '
            price={19.20}
            calories={10320}
            id={3}
          />
          <ItemCard
            imgAlt='The Big Pepperoni, Sausage & Mushroom'
            imgSrc={imgPizza}
            name='The Big Pepperoni, Sausage & Mushroom'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic '
            price={19.20}
            calories={10320}
            id={4}
          />
          <ItemCard
            imgAlt='The Big Pepperoni, Sausage & Mushroom'
            imgSrc={imgPizza}
            name='The Big Pepperoni, Sausage & Mushroom'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic '
            price={19.20}
            calories={10320}
            id={5}
          />
          <ItemCard
            imgAlt='The Big Pepperoni, Sausage & Mushroom'
            imgSrc={imgPizza}
            name='The Big Pepperoni, Sausage & Mushroom'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic soft and foldable New York style dough topped...'
            price={19.20}
            calories={10320}
            id={6}
          />
          <ItemCard
            imgAlt='The Big Pepperoni, Sausage & Mushroom'
            imgSrc={imgPizza}
            name='The Big Pepperoni, Sausage & Mushroom'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped Authentic soft and foldable New York style dough topped...'
            price={19.20}
            calories={10320}
            id={7}
          />
        </section>
      </div>
      <div>
        <div id="PIZZAS#PREMIUM_PIZZAS" className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>PREMIUM</span> PIZZAS</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
          <ItemCard
            imgAlt='The Big Cheese'
            imgSrc={imgPizza}
            name='The Big Cheese'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped wit...'
            price={18.20}
            calories={9520}
            id={1}
          />
        </section>
      </div>
      <div>
        <div id="PIZZAS#TRADITIONAL_PIZZAS" className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>TRADITIONAL</span> PIZZAS</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
          <ItemCard
            imgAlt='The Big Cheese'
            imgSrc={imgPizza}
            name='The Big Cheese'
            description='Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped wit...'
            price={18.20}
            calories={9520}
            id={1}
          />
        </section>
      </div>
    </div>
  )
}

export default ItemCardContainer;