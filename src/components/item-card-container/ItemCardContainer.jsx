import React from 'react';
import ItemCard from '../../components/item-card/ItemCard';
import './item-card-container.scss';

const ItemCardContainer = (props) => {

  const { locationID, itemFirstName, itemLastName, items, pathname } = props;
  // console.log("name",itemFirstName)
  return (
    <div className='menu-content'>
      <div>
        <div id={locationID} className="assist-anchor"></div>
        <h3 className='menu-content__title'><span className='menu-content__titleBold'>{itemFirstName}</span>{` ${itemLastName}`}</h3>
        <div className='menu-content__line'></div>
        <section className='menu-content__body'>
          {items.length === 0 ? null :
            items.map((item) => (
              <ItemCard key={item.id} id={item.id} imgAlt={item.imgAlt} imgSrc={item.imgSrc}
                name={item.name} pathname={pathname} description={item.description} price={item.price} calories={item.calories} />
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default ItemCardContainer;