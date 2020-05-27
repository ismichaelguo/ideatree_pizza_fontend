import React from 'react';
import { Link } from 'react-router-dom';
import './delivery-form.scss';
import { BsClockHistory } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { changeUnit,changeStreetNum,changeStreetName,changeSuburb,changePostcode,changeRememberAddress,changeDeliveryNow } from '../../state/actions/ActionsIndex';

class DeliveryForm extends React.Component {

    constructor() {
        super();
        // this.state = {
        //     unit:'',
        //     streetNum:'',
        //     streetName:'',
        //     suburb:'',
        //     postcode:'',
        //     deliverNow:true,
        //     rememberAddress:false,        
        // }
    }
    displayInfo = () => {


        const info = document.getElementById('tooltipCollapse');
        const questionMark = document.getElementById('questionMark');

        if (info.style.display === 'none') {
            info.style.display = 'block';
            info.style.visibility = 'visible';
            questionMark.classList.replace('delivery-form__remember-me__more-information','delivery-form__remember-me__more-informationV2');
           
        } else {
            info.style.display = 'none';
            info.style.visibility = 'hidden';
            questionMark.classList.replace('delivery-form__remember-me__more-informationV2','delivery-form__remember-me__more-information');
        }

    }

    handleDeliveryTime=(e)=>{
        if(e.target.value==='later'){
            this.setState({deliverNow:false});
        }else{
            this.setState({deliverNow:true});
        }
    }

    handleUnitChange = (e) => {
        if (e.target.value.length > 5) {
            const unit = document.getElementById('customer-unit');
            unit.value = unit.value.slice(0, 5);
            this.setState({unit:unit.value});
        }else{
            this.setState({unit:e.target.value});
        }
        
    }

    handleStreetNumChange = (e) => {
        if (e.target.value.length > 5) {
            const streetNum = document.getElementById('customer-street-num');
            streetNum.value = streetNum.value.slice(0, 5);
            this.setState({streetNum:streetNum.value});
        }else{
            this.setState({streetNum:e.target.value});
        }
            

    }

    handleStreetNameChange = (e) => {
        this.setState({streetName:e.target.value});

    }

    handleSuburbChange = (e) => {
        this.setState({suburb:e.target.value});

    }

    handlePostcodeChange = (e) => {
        if (e.target.value.length > 4) {
            const postcode = document.getElementById('customer-postcode');
            postcode.value = postcode.value.slice(0, 4);
            this.setState({postcode:postcode.value});
        }else{
            this.setState({postcode:e.target.value});
        }

    }

    handleRememberMe=(e)=>{
       this.setState({rememberAddress:e.target.checked});
    }

    handleSubmit=(e)=>{

        const streetNumError=document.getElementById('customer-street-num-error');
        const streetNameError=document.getElementById('customer-street-name-error');
        const streetSurburbError=document.getElementById('customer-suburb-error');

         

        
        if(this.state.streetNum===''){
            streetNumError.style.display="block";
            e.preventDefault();
        }

        if(this.state.streetName===''){
            streetNameError.style.display="block";
            e.preventDefault();
        }

        if(this.state.suburb===''){
            streetSurburbError.style.display="block";
            e.preventDefault();
        }

        if(this.state.streetNum&&this.state.streetName&&this.state.suburb){
            streetNumError.style.display="none";
            streetNameError.style.display="none";
            streetSurburbError.style.display="none";
            console.log(this.state); 
            
           

        }

           
    }



    render() {
        return (


            <form className='delivery-form' >

                <h3 className='delivery-form__title'>Delivery Time</h3>

                <section className='delivery-form__ordertime-button'>
                    <input type="radio" id="btn-now" name="radioBox" value="now" className="delivery-form__ordertime-button__now-button" defaultChecked onChange={this.handleDeliveryTime}></input>
                    <label className="delivery-form__ordertime-button__now-label" htmlFor='btn-now'>Now</label>
                    <input type="radio" id="btn-later" name="radioBox" value="later" onChange={this.handleDeliveryTime}></input>
                    <label className="delivery-form__ordertime-button__later-label" htmlFor='btn-later'><BsClockHistory className='delivery-form__ordertime-button__later-label__icon' />&nbsp;Later</label>
                </section>

                <section className='delivery-form__line1'>
                    <div className='delivery-form__line1__unit'>
                        <label className="form-label" >Unit Number</label>
                        <input id="customer-unit" name='unit' className="form-control" type="number" autoFocus="autoFocus" onChange={this.handleUnitChange}></input>
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
                        <input id="customer-postcode" type="number" className="form-control" placeholder="Optional" onChange={this.handlePostcodeChange}></input>
                    </div>
                </section>

                <section id="tooltipCollapse" className="delivery-form__collapse" aria-expanded="false" >
                    <div className="delivery-form__collapse__tool-tip" >By checking 'Remember My Delivery Details' you are agreeing to the storage that contains personal details for the best experience on our site</div>
                </section>

                <section className="delivery-form__remember-me">
                    <input type="checkbox" onChange={this.handleRememberMe} ></input>
                    <label className="form-label">Remember My Delivery Details</label>
                    <span id='questionMark' data-toggle="collapse" className="delivery-form__remember-me__more-information" onClick={this.displayInfo}>
                        <FaQuestionCircle />
                    </span>
                </section>

                <section className="delivery-form__buttons">
                    <Link to='/menu/detail/order-type' className="delivery-form__buttons__back" >Back</Link>
                    <Link to='/menu/detail/order-type' className="delivery-form__buttons__next" onClick={this.handleSubmit}>Next</Link>
                </section>

                <Link to='/' className="log-in">
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
    }
  }
  const mapActionsToProps = {
    changeUnit,changeStreetNum,changeStreetName,changeSuburb,changePostcode,changeRememberAddress,changeDeliveryNow 
  }

export default connect (mapStateToProps, mapActionsToProps)(DeliveryForm);