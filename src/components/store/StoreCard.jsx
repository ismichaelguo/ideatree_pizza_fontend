import React from 'react';
import './store.scss';
import { Link } from 'react-router-dom';
import './Store';
import '../store-in-state/StoreInState'

function StoreCard (props) {
  const inMap = [props.address, props.name, props.phone];
  return (
      <div className='store-card'>
        <div className='left'>
          <span className='name'>{props.name}</span>
          <span className='address'>{props.address}</span>
          <span className='cityInfo'>{props.suburb+' '+props.state+' '+props.postcode}</span>
        </div>
        {/* to to={`/menu/detail/${props.id} */}
        <Link className='right' to={`/maps/${inMap}`}>
            <button className='btn_select'>{props.text}</button>
        </Link>
      </div>
  );
}

export default StoreCard;