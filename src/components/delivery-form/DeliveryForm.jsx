import React from 'react';
import { Link } from 'react-router-dom';
import './delivery-form.scss';
import { BsClockHistory } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';

class DeliveryForm extends React.Component {

    constructor() {
        super();
        this.state = {
            flag: 'display',

        }
    }
    displayInfo = () => {

        const info = document.getElementById('tooltipCollapse');
        const questionMark = document.getElementById('questionMark');

        if (this.state.flag ==='display') {
            info.style.display = 'block';
            info.style.visibility = 'visible';
            questionMark.classList.toggle('delivery-form_remember-me_more-informationV2');
            this.setState({flag:'hide'});
        }else{
            info.style.display = 'none';
            info.style.visibility = 'hidden';
            questionMark.classList.toggle('delivery-form_remember-me_more-informationV2');
            this.setState({flag:'display'});
        }

    }

    render() {
        return (


            <form className='delivery-form'>

                <h3 className='delivery-form_title'>Delivery Time</h3>

                <section className='delivery-form_ordertime-button'>
                    <input type="radio" id="btn-now" name="ordertimenowlater" value="now" className="delivery-form_ordertime-button_now-button" checked></input>
                    <label  className="delivery-form_ordertime-button_now-label" for='btn-now'>Now</label>
                    <input type="radio" id="btn-later" name="ordertimenowlater" value="later"></input>
                    <label  className="delivery-form_ordertime-button_later-label" for='btn-later'><BsClockHistory className='delivery-form_ordertime-button_later-label_icon' />&nbsp;Later</label>
                </section>

                <section className='delivery-form_line1'>
                    <div className='delivery-form_line1_unit'>
                        <label className="form-label">Unit Number</label>
                        <input id="customer-unit" className="form-control" type="text" spellcheck="false" maxlength="9"></input>
                    </div>
                    <div className='delivery-form_line1_street-num'>
                        <label className="form-label">Street Number</label>
                        <input id="customer-street-num" className="form-control" type="text" spellcheck="false" maxlength="9"></input>
                        <div class="inline-error" id='customer-street-num-error'>Please enter your street number</div>
                    </div>
                </section>

                <section className='delivery-form_line2'>
                    <label className="form-label">Street</label>
                    <input id="customer-street-name" type="text" className="form-control" spellcheck="false" ></input>
                    <div class="inline-error" id='customer-street-name-error'>Please enter your street name</div>
                </section>

                <section className='delivery-form_line3'>
                    <div className='delivery-form_line3_suburb'>
                        <label className="form-label">Suburb</label>
                        <input id="customer-suburb" type="text" className="form-control" ></input>
                        <div class="inline-error" id='customer-suburb-error'>Please enter your suburb</div>
                    </div>
                    <div className='delivery-form_line3_postcode'>
                        <label className="form-label">Postcode</label>
                        <input id="customer-postcode" type="tel" pattern="[0-9]*" novalidate="" className="form-control" placeholder="Optional"></input>
                    </div>
                </section>

                <section id="tooltipCollapse" className="delivery-form_collapse" aria-expanded="false" >
                    <div className="delivery-form_collapse_tool-tip" id="remember-me-tooltip">By checking 'Remember My Delivery Details' you are agreeing to the storage that contains personal details for the best experience on our site</div>
                </section>

                <section className="delivery-form_remember-me">
                    <input type="checkbox" id="remember-me" value="true" ></input>
                    <label className="form-label">Remember My Delivery Details</label>
                    <span id="questionMark" data-toggle="collapse" className="delivery-form_remember-me_more-information" data-target="#tooltipCollapse" aria-expanded="false" data-attr='delivery-form_remember-me_more-information' onClick={this.displayInfo}>
                        <FaQuestionCircle />
                    </span>
                </section>

                <section className="delivery-form_buttons">
                    <Link id="btn-back" to='/menu/detail/order-type' className="delivery-form_buttons_back">Back</Link>
                   <button id="btn-next" className="delivery-form_buttons_next">Next</button>
                </section>

                <Link to='/' className="log-in">
                    Registered Member? Log in / Sign up
            </Link>
            </form>
        )
    }
}

export default DeliveryForm;