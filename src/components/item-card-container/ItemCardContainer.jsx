import React from 'react';
import ItemCard from '../../components/item-card/ItemCard';
import imgPizza from '../../asset/Images/pizzaCard.jpeg';
import './item-card-container.scss';
import FOOD_ITEM_DATA from './food-item-data';

const ItemCardContainer = (props) => {

    const foodItemDataArray=FOOD_ITEM_DATA;
   
  return (
    <div className='menu-content'>
      <div>
        <div id="PIZZAS#NEW_PRODUCTS" className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>NEW</span> PRODUCT</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
        {foodItemDataArray.length===0 ? null: 
            foodItemDataArray.map((item)=>(
              <ItemCard key={item.id} id={item.id} imgAlt={item.imgAlt} imgSrc={item.imgsrc} name={item.name} description={item.description}  price={item.price} calories={item.calories}/>
            ))
          }
        </section>
      </div>
      <div>
        <div id="PIZZAS#PREMIUM_PIZZAS" className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>PREMIUM</span> PIZZAS</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
        {foodItemDataArray.length===0 ? null: 
            foodItemDataArray.map((item)=>(
              <ItemCard key={item.id} id={item.id} imgAlt={item.imgAlt} imgSrc={item.imgsrc} name={item.name} description={item.description}  price={item.price} calories={item.calories}/>
            ))
          }
        </section>
      </div>
      <div>
        <div id="PIZZAS#TRADITIONAL_PIZZAS" className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>TRADITIONAL</span> PIZZAS</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
          {foodItemDataArray.length===0 ? null: 
            foodItemDataArray.map((item)=>(
              <ItemCard key={item.id} id={item.id} imgAlt={item.imgAlt} imgSrc={item.imgsrc} name={item.name} description={item.description}  price={item.price} calories={item.calories}/>
            ))
          }
         
        </section>
      </div>
    </div>
  )
}

export default ItemCardContainer;