import React from 'react';
import './item-card.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart/cartActions';
import { Link } from 'react-router-dom';

function ItemCard (props) {
  // console.log('itemcard props', props);
  let curItem = {
    // format obj of current item, the same way in Detail.jsx
    id: props.id,
    foodName: props.name,
    foodPrice: props.price,
    imgDetail: props.imgSrc,
    imgAlt: props.imgAlt,
  };
  return (
    <div className='productContainer'>
      <div className='product'>
        <Link className='productSelect' to={props.pathname.startsWith('/receipt') ? `/receipt` : `/menu/detail/${props.id}`}>
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
            <button className='btn_select' onClick={() => props.addItem({ item: curItem })}>{props.pathname.startsWith('/receipt') ? `ADD` : `SELECT`}</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapAction = {
  addItem,
}

export default connect(null, mapAction)(ItemCard);