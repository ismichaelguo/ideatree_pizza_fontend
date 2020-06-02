import React from 'react';
import { Link } from 'react-router-dom';
import './pick-up-form.scss';
import { BsClockHistory } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';

class PickUpForm extends React.Component {

    handlePickUpTime() {

    }

    handleInput(){

    }

    render() {

        return (
            <form className='pick-up-form' name='form' >
                <h3 className='pick-up-form__title'>Delivery Time</h3>
                <section className='pick-up-form__ordertime-button'>
                    <input type="radio" id="btn-now" name="radioBox" value="now" className="pick-up-form__ordertime-button__now-button" defaultChecked onChange={this.handlePickUpTime}></input>
                    <label className="pick-up-form__ordertime-button__now-label" htmlFor='btn-now'>Now</label>
                    <input type="radio" id="btn-later" name="radioBox" value="later" onChange={this.handlePickUpTime}></input>
                    <label className="pick-up-form__ordertime-button__later-label" htmlFor='btn-later'><BsClockHistory className='pick-up-form__ordertime-button__later-label__icon' />&nbsp;Later</label>
                </section>

                <section className='pick-up-form___input'>
                <label className="form-label">POSTCODE, SUBURB OR STREET </label>
                <input id="customer-input" className="form-control" type="text" onChange={this.handleInput}></input>
               
                </section>

                <section className='pick-up-form__inputtype-button'>
                    <input type="radio" id="btn-postcode" name="radioBox" value="postcode" className="pick-up-form__inputtype-button__postcode-button" defaultChecked onChange={this.handlePickUpTime}></input>
                    <label className="pick-up-form__inputtype-button__postcode-label" htmlFor='btn-postcode'>Postcode</label>
                    <input type="radio" id="btn-later" name="radioBox" value="later" onChange={this.handlePickUpTime}></input>
                    <label className="pick-up-form__inputtype-button__later-label" htmlFor='btn-later'>Suburb</label>
                </section>

            </form>
        )
    }
}

export default PickUpForm;