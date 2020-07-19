import React from 'react';
import './store.scss';
import { Link } from 'react-router-dom';
import './Store';
import '../store-in-state/StoreInState'

function StoreCard (props) {
  const inMap = [props.address, props.name, props.phone];
  return (
      <div className='storeCard'>
        <div className='storeCard__left'>
          <span className='storeCard__name'>{props.name}</span>
          <span className='storeCard__address'>{props.address}</span>
          <span className='storeCard__cityInfo'>{props.suburb+' '+props.state+' '+props.postcode}</span>
        </div>
        <Link className='storeCard__right' to={`/maps/${inMap}`}>
            <button className='btn_select'>{props.text}</button>
        </Link>
      </div>
  );
}

export default StoreCard;