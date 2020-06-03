import React from 'react';
import { Link } from 'react-router-dom';
import './delivery-form.scss';
import { BsClockHistory } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { changeUnit, changeStreetNum, changeStreetName, changeSuburb, changePostcode, changeRememberAddress, changeDeliveryNow, changeTime } from '../../redux/actions/index';


class DeliveryForm extends React.Component {
  displayInfo = () => {
    const info = document.getElementsByClassName('delivery-form__collapse')[0];

    if (info.style.display === 'none') {
      info.style.display = 'block';
      info.style.animation = "displayInfo 1.5s";
    }
    else {
      info.style.animation = "hideInfo 1s";
      setTimeout(() => { info.style.display = 'none'; }, 800);
    }
  }


  handleDeliveryTime = (e) => {
    const orderTime = document.getElementsByClassName('delivery-form__line4')[0];
    const { changeTime } = this.props;
   
    if (e.target.value === 'later') {
      const { changeDeliveryNow } = this.props;
      changeDeliveryNow({ deliverNow: false });
      orderTime.style.display = 'block';
      orderTime.style.animation = "displayOrderTime 1.5s";

      for (let i = 1; i < 6; i++) {
        const item = document.createElement('option');
        const time = new Date();
        time.setHours(time.getHours() + i);
        item.text = time.toString().slice(0, 21);
        item.value = time.toLocaleString('English', { hours12: false });
        document.form.timeDrapDownList.add(item, undefined);
      }
      changeTime({ time: document.form.timeDrapDownList.value });
    }
    else {
      changeDeliveryNow({ deliverNow: true });
      document.form.timeDrapDownList.length = 0;
      orderTime.style.animation = "hideOrderTime 1s";
      setTimeout(() => { orderTime.style.display = 'none'; }, 800);
      changeTime({ time: (new Date()).toLocaleString('English', { hours12: false }) });
    }
  }

  handleUnitChange = (e) => {
    const unit = document.getElementById('customer-unit');
    unit.value = unit.value.replace(/[^\d]/g, '');
    unit.value = unit.value.slice(0, 4);
    const { changeUnit } = this.props;
    changeUnit({ unit: e.target.value });
  }

  handleStreetNumChange = (e) => {

    const streetNum = document.getElementById('customer-street-num');
    streetNum.value = streetNum.value.replace(/[^\d]/g, '');
    streetNum.value = streetNum.value.slice(0, 4);
    const { changeStreetNum } = this.props;
    changeStreetNum({ streetNum: e.target.value });
  }

  handleStreetNameChange = (e) => {
    const { changeStreetName } = this.props;
    changeStreetName({ streetName: e.target.value });
  }

  handleSuburbChange = (e) => {
    const { changeSuburb } = this.props;
    changeSuburb({ suburb: e.target.value });
  }

  handlePostcodeChange = (e) => {
    const postcode = document.getElementById('customer-postcode');
    postcode.value = postcode.value.replace(/[^\d]/g, '');
    postcode.value = postcode.value.slice(0, 4);

    const { changePostcode } = this.props;
    changePostcode({ postcode: e.target.value });
  }

  handleTime = (e) => {
    const { changeTime } = this.props;
    changeTime({ time: e.target.value });
  }

  handleRememberMe = (e) => {
    const { changeRememberAddress } = this.props;
    changeRememberAddress({ rememberAddress: e.target.checked });
  }

  handleBack = (e) => {
    e.preventDefault();
    this.props.props.history.goBack();
  }

  handleSubmit = (e) => {

    const streetNumError = document.getElementById('customer-street-num-error');
    const streetNameError = document.getElementById('customer-street-name-error');
    const streetSurburbError = document.getElementById('customer-suburb-error');
    const { streetNum, streetName, suburb, time } = this.props;
    if (streetNum === '') {
      streetNumError.style.display = "block";
      e.preventDefault();
    }

    if (streetName === '') {
      streetNameError.style.display = "block";
      e.preventDefault();
    }

    if (suburb === '') {
      streetSurburbError.style.display = "block";
      e.preventDefault();
    }

    if (time === '') {
      this.props.changeTime({ time: (new Date()).toLocaleString('English', { hours12: false }) });
    }

    if (streetNum && streetName && suburb) {
      streetNumError.style.display = "none";
      streetNameError.style.display = "none";
      streetSurburbError.style.display = "none";
      console.log(this.props);
    }
  }

  render () {
    return (
      <form className='delivery-form' name='form' >
        <h3 className='delivery-form__title'>Delivery Time</h3>
        <section className='delivery-form__ordertime-button'>
          <input type="radio" id="btn-now" name="radioBox" value="now"  defaultChecked onChange={this.handleDeliveryTime}></input>
          <label className="delivery-form__ordertime-button__now-label" htmlFor='btn-now'>Now</label>
          <input type="radio" id="btn-later" name="radioBox" value="later" onChange={this.handleDeliveryTime}></input>
          <label className="delivery-form__ordertime-button__later-label" htmlFor='btn-later'><BsClockHistory className='delivery-form__ordertime-button__later-label__icon' />&nbsp;Later</label>
        </section>

        <section className='delivery-form__line4'>
          <label className="form-label">Time</label>
          <div >
            <select className='form-control' name='timeDrapDownList' onChange={this.handleTime}>
            </select>
          </div>
        </section>
        
        <section className='delivery-form__line1'>
          <div className='delivery-form__line1__unit'>
            <label className="form-label" >Unit Number</label>
            <input id="customer-unit" className="form-control" type="text" placeholder="Optional" onChange={this.handleUnitChange}></input>
          </div>
          <div className='delivery-form__line1__street-num'>
            <label className="form-label">Street Number</label>
            <input id="customer-street-num" className="form-control" type="number" onChange={this.handleStreetNumChange}></input>
            <div className="inline-error" id='customer-street-num-error'>Please enter your street number</div>
          </div>
        </section>

        <section className='delivery-form__line2'>
          <label className="form-label">Street</label>
          <input id="customer-street-name" type="text" className="form-control" maxLength='40' onChange={this.handleStreetNameChange}></input>
          <div className="inline-error" id='customer-street-name-error'>Please enter your street name</div>
        </section>

        <section className='delivery-form__line3'>
          <div className='delivery-form__line3__suburb'>
            <label className="form-label">Suburb</label>
            <input id="customer-suburb" type="text" className="form-control" maxLength='20' onChange={this.handleSuburbChange}></input>
            <div className="inline-error" id='customer-suburb-error'>Please enter your suburb</div>
          </div>
          <div className='delivery-form__line3__postcode'>
            <label className="form-label">Postcode</label>
            <input id="customer-postcode" type="text" className="form-control" placeholder="Optional" onChange={this.handlePostcodeChange}></input>
          </div>
        </section>

       

        <section className="delivery-form__collapse"  >
          <div className="delivery-form__collapse__tool-tip" >By checking 'Remember My Delivery Details' you are agreeing to the storage that contains personal details for the best experience on our site</div>
        </section>

        <section className="delivery-form__remember-me">
          <input type="checkbox" onChange={this.handleRememberMe} ></input>
          <label className="form-label">Remember My Delivery Details</label>
          <span className="delivery-form__remember-me__more-information" onClick={this.displayInfo}>
            <FaQuestionCircle />
          </span>
        </section>

        <section className="delivery-form__buttons">
          <Link to='/' className="delivery-form__buttons__back" onClick={this.handleBack} >Back</Link>
          <Link to='/checkout' className="delivery-form__buttons__next" onClick={this.handleSubmit}>Next</Link>
        </section>

        <Link to='/' className="log-in">
          Registered Member? Log in / Sign up
        </Link>
      </form>
    )
  }
}
function mapStateToProps (state) {
  return {
    unit: state.DeliveryForm.unit,
    streetNum: state.DeliveryForm.streetNum,
    streetName: state.DeliveryForm.streetName,
    suburb: state.DeliveryForm.suburb,
    postcode: state.DeliveryForm.postcode,
    deliverNow: state.DeliveryForm.deliverNow,
    rememberAddress: state.DeliveryForm.rememberAddress,
    time: state.DeliveryForm.time,
  }
}
const mapActionsToProps = {
  changeUnit, changeStreetNum, changeStreetName, changeSuburb, changePostcode, changeRememberAddress, changeDeliveryNow, changeTime
}

export default connect(mapStateToProps, mapActionsToProps)(DeliveryForm);