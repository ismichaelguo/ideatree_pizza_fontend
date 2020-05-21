import React from 'react';
import './item-card.scss';

function ItemCard (props) {
  return (
    <div className='productContainer'>
      <div className='product'>
        <a className='productSelect' href='https://www.baidu.com'>
          <div className='product_imageContainer'>
            <img alt={props.imgAlt} src={props.imgSrc} className='image'></img>
          </div>
          <div className='product_details'>
            <div className='product_details_nameContainer' >
              <span className='name'> {props.name}</span>
            </div>
            <span className='description'>{props.description}</span>
            <div className='product_details_priceCaloriesContainer'>
              <span className='price'>From ${props.price}*</span>
              <span className='calories'>{props.calories}kJ^</span>
            </div>
          </div>
          <div className='product_button'>
            <button className='btn_select'>SELECT</button>
          </div>

        </a>
      </div>
    </div>


  );
}

export default ItemCard;