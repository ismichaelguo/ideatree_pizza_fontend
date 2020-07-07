import React from 'react';
import { Link } from 'react-router-dom';
import './delivery-form.scss';
import { BsClockHistory } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { changeUnit, changeStreetNum, changeStreetName, changeSuburb, changePostcode, changeRememberAddress, changeDeliveryNow, changeTime } from '../../redux/actions/index';
import axiosInstance from "../../api/axiosInstance";

class DeliveryForm extends React.Component {


  componentDidMount() {
    const { userName, changeUnit, changeStreetNum, changeStreetName, changeSuburb, changePostcode } = this.props;
    const userId = sessionStorage.getItem(userName);
    const unit = document.getElementById('customer-unit');
    const streetNum = document.getElementById('customer-street-num');
    const streetName = document.getElementById('customer-street-name');
    const suburb = document.getElementById('customer-suburb');
    const postcode = document.getElementById('customer-postcode');

    if (userId != null) {
      axiosInstance({
        url: `/address/${userId}`,
        method: "GET",
      }).then(res => {
        console.log(res.data);
        if (res.data[res.data.length - 1].unit) {
          unit.value = res.data[res.data.length - 1].unit;
          changeUnit({ unit: res.data[res.data.length - 1].unit });
        }
        if (res.data[res.data.length - 1].streetNum) {
          streetNum.value = res.data[res.data.length - 1].streetNum;
          changeStreetNum({ streetNum: res.data[res.data.length - 1].streetNum });
        }
        if (res.data[res.data.length - 1].streetName) {
          streetName.value = res.data[res.data.length - 1].streetName;
          changeStreetName({ streetName: res.data[res.data.length - 1].streetName });
        }
        if (res.data[res.data.length - 1].suburb) {
          suburb.value = res.data[res.data.length - 1].suburb;
          changeSuburb({ suburb: res.data[res.data.length - 1].suburb });
        }
        if (res.data[res.data.length - 1].postcode) {
          postcode.value = res.data[res.data.length - 1].postcode;
          changePostcode({ postcode: res.data[res.data.length - 1].postcode });
        }

      }).catch(err => console.log('err', err));
    }

  }
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
    const { streetNum, streetName, suburb, time, rememberAddress, userName } = this.props;
    const userId = sessionStorage.getItem(userName);
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
      if (rememberAddress && userId) {

        axiosInstance({
          url: `/address`,
          method: "POST",
          header: { 'Content-type': 'application/json' },
          data: {
            "userId": userId,
            "unit": parseInt(this.props.unit, 10),
            "streetNum": parseInt(this.props.streetNum, 10),
            "streetName": this.props.streetName,
            "suburb": this.props.suburb,
            "postcode": parseInt(this.props.postcode, 10),
          },
        }).then(res => {
          console.log(res.data);
        }).catch(err => console.log('err', err));

      }

    }

  }

  render() {
    return (
      <form className='delivery-form' name='form' >
        <h3 className='delivery-form__title'>Delivery Time</h3>
        <section className='delivery-form__ordertime-button'>
          <input type="radio" id="btn-now" name="radioBox" value="now" defaultChecked onChange={this.handleDeliveryTime}></input>
          <label className="delivery-form__ordertime-button__now-label" htmlFor='btn-now'>Now</label>
          <input type="radio" id="btn-later" name="radioBox" value="later" onChange={this.handleDeliveryTime}></input>
          <label className="delivery-form__ordertime-button__later-label" htmlFor='btn-later'><BsClockHistory className='delivery-form__ordertime-button__later-label__icon' />&nbsp;Later</label>
        </section>

        <section className='delivery-form__line4'>
          <label className="form-label">Time</label>
          <div >
            <select className='deliveryForm-control' name='timeDrapDownList' onChange={this.handleTime}>
            </select>
          </div>
        </section>

        <section className='delivery-form__line1'>
          <div className='delivery-form__line1__unit'>
            <label className="deliveryForm-label" >Unit Number</label>
            <input id="customer-unit" className="deliveryForm-control" type="text" placeholder="Optional" onChange={this.handleUnitChange}></input>
          </div>
          <div className='delivery-form__line1__street-num'>
            <label className="deliveryForm-label">Street Number</label>
            <input id="customer-street-num" className="deliveryForm-control" type="text" onChange={this.handleStreetNumChange}></input>
            <div className="deliveryForm-inline-error" id='customer-street-num-error'>Please enter your street number</div>
          </div>
        </section>

        <section className='delivery-form__line2'>
          <label className="deliveryForm-label">Street</label>
          <input id="customer-street-name" type="text" className="deliveryForm-control" maxLength='40' onChange={this.handleStreetNameChange}></input>
          <div className="deliveryForm-inline-error" id='customer-street-name-error'>Please enter your street name</div>
        </section>

        <section className='delivery-form__line3'>
          <div className='delivery-form__line3__suburb'>
            <label className="deliveryForm-label">Suburb</label>
            <input id="customer-suburb" type="text" className="deliveryForm-control" maxLength='20' onChange={this.handleSuburbChange}></input>
            <div className="deliveryForm-inline-error" id='customer-suburb-error'>Please enter your suburb</div>
          </div>
          <div className='delivery-form__line3__postcode'>
            <label className="deliveryForm-label">Postcode</label>
            <input id="customer-postcode" type="text" className="deliveryForm-control" placeholder="Optional" onChange={this.handlePostcodeChange}></input>
          </div>
        </section>



        <section className="delivery-form__collapse"  >
          <div className="delivery-form__collapse__tool-tip" >By checking 'Remember My Delivery Details' you are agreeing to the storage that contains personal details for the best experience on our site if you have already login</div>
        </section>

        <section className="delivery-form__remember-me">
          <input type="checkbox" onChange={this.handleRememberMe} ></input>
          <label className="deliveryForm-label">Remember My Delivery Details</label>
          <span className="delivery-form__remember-me__more-information" onClick={this.displayInfo}>
            <FaQuestionCircle />
          </span>
        </section>

        <section className="delivery-form__buttons">
          <Link to='/' className="delivery-form__buttons__back" onClick={this.handleBack} >Back</Link>
          <Link to='/receipt' className="delivery-form__buttons__next" onClick={this.handleSubmit}>Next</Link>
        </section>

        <Link to='/' className="deliveryForm-log-in">
          Registered Member? Log in / Sign up
        </Link>
      </form>
    )
  }
}
function mapStateToProps(state) {
  return {
    unit: state.DeliveryForm.unit,
    streetNum: state.DeliveryForm.streetNum,
    streetName: state.DeliveryForm.streetName,
    suburb: state.DeliveryForm.suburb,
    postcode: state.DeliveryForm.postcode,
    deliverNow: state.DeliveryForm.deliverNow,
    rememberAddress: state.DeliveryForm.rememberAddress,
    time: state.DeliveryForm.time,
    userName: state.loginInf.userName,
  }
}
const mapActionsToProps = {
  changeUnit, changeStreetNum, changeStreetName, changeSuburb, changePostcode, changeRememberAddress, changeDeliveryNow, changeTime
}

export default connect(mapStateToProps, mapActionsToProps)(DeliveryForm);