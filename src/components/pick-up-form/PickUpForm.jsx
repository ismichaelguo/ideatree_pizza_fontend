import React from 'react';
import {Link} from 'react-router-dom';
import './pick-up-form.scss';
import { BsClockHistory } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import {changePickUpTime, changeStoresData, changeInputType, changeStore} from '../../redux/actions/index';


class PickUpForm extends React.Component {

    constructor(props){
        super(props);
        const{changeInputType,changePickUpTime}=this.props;
        changeInputType({inputType: 'postcode'});
        changePickUpTime({pickUpTime:''});
    }

    setUp = () => {

        const {storesData}=this.props;
        console.log(storesData);
        if(storesData.length===0){
            console.log('null');
            return null;
           
        }
       else{
        return (
        storesData.map(item => (
                
                    <li key={item.id} ><Link to='/checkout' className="pick-up-form__line2__results__item" id={item.id} onClick={this.handleLink}>
                        <h6>{item.storeName} - {item.suburb}</h6>
                        {item.address} - {item.postcode}
                    </Link></li>
                
        )))

        }
    }

    handleLink=(e)=>{
        const {storesData,pickUpTime,changePickUpTime,changeStore}=this.props;

        for(let i=0;i<storesData.length;i++){
            if(storesData[i].id.toString()===e.target.id){
                changeStore(storesData[i]);
            }
        }   
        if(pickUpTime===''){
            changePickUpTime({ pickUpTime: (new Date()).toLocaleString('English', { hours12: false }) });
        }
    }


    displayInfo = () => {
        const info = document.getElementsByClassName('pick-up-form__collapse')[0];

        if (info.style.display === 'none') {
            info.style.display = 'block';
            info.style.animation = "displayInfo 1s";
        }
        else {
            info.style.animation = "hideInfo 1s";
            setTimeout(() => { info.style.display = 'none'; }, 800);
        }
    }

    handlePickUpTime = (e) => {
        const orderTime = document.getElementsByClassName('pick-up-form__line1')[0];
        const { changePickUpTime } = this.props;

        if (e.target.value === 'later') {
            //const { changeDeliveryNow } = this.props;
            //changeDeliveryNow({ deliverNow: false });
            orderTime.style.display = 'block';
            orderTime.style.animation = "displayOrderTime 1s";

            for (let i = 1; i < 6; i++) {
                const item = document.createElement('option');
                const time = new Date();
                time.setHours(time.getHours() + i);
                item.text = time.toString().slice(0, 21);
                item.value = time.toLocaleString('English', { hours12: false });
                document.form.timeDrapDownList.add(item, undefined);
            }
            changePickUpTime({ pickUpTime: document.form.timeDrapDownList.value });
        }
        else {
            
            document.form.timeDrapDownList.length = 0;
            orderTime.style.animation = "hideOrderTime 1s";
            setTimeout(() => { orderTime.style.display = 'none'; }, 800);
            changePickUpTime({ pickUpTime: (new Date()).toLocaleString('English', { hours12: false }) });
        }
    }

    handleTime = (e) => {
        const {changePickUpTime}=this.props;
        changePickUpTime({ pickUpTime: e.target.value });

    }

    clearSearchResults=()=>{
        const stores=document.getElementsByClassName('pick-up-form__line2__results__item');
            for(let i=0;i<stores.length;i++){
                    stores[i].style.display='none'
            }
       
    }

    handleInput = (e) => {
        const input = document.getElementById('customer-input');
        this.clearSearchResults();
        const {inputType,storesData}=this.props;
        switch (inputType) {
            case 'postcode':
                input.value = input.value.replace(/[^\d]/g, '');
                input.maxLength=4;
                 if(e.target.value.length>2){
                     for(let i=0;i<storesData.length;i++){
                         if(storesData[i].postcode.includes(e.target.value)){
                            
                            document.getElementById(storesData[i].id).style.display='block';  
                            document.getElementById(storesData[i].id).style.animation='showResults 1.5s';
                         }
                     }

                }   
                break;
            case 'suburb':
                input.maxLength=20;
                if(e.target.value.length>2){
                    for(let i=0;i<storesData.length;i++){
                        if(storesData[i].suburb.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                            
                           document.getElementById(storesData[i].id).style.display='block';   
                           document.getElementById(storesData[i].id).style.animation='showResults 1.5s';
                        }
                    }
                }
                break;

            case 'store':
                input.maxLength=20;

                if(e.target.value.length>2){
                    for(let i=0;i<storesData.length;i++){
                        if(storesData[i].storeName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                           document.getElementById(storesData[i].id).style.display='block';   
                           document.getElementById(storesData[i].id).style.animation='showResults 0.8s';
                        }
                    }
                }
                break;
            default:
                break;
        }
        

    }

    handlePickUpType = (e) => {
        const input = document.getElementById('customer-input');
        input.value = '';
        this.clearSearchResults();
        const {changeInputType}=this.props;
        switch (e.target.value) {
            case 'postcode':
                changeInputType({inputType: 'postcode'});
                //this.setState({ inputType: 'postcode' });
                break;
            case 'suburb':
                changeInputType({inputType: 'suburb'});
                break;
            case 'store':
                changeInputType({inputType: 'store'});
                break;
            default:
                break;
        }
    }

    handleBack = (e) => {
        e.preventDefault();
        this.props.props.history.goBack();
    }

    handleSummit=(e)=>{
        e.preventDefault();
    }

    render() {

        return (
            <form className='pick-up-form' name='form' onSubmit={this.handleSummit}>
                <h3 className='pick-up-form__title'>Pick Up Time</h3>
                <section className='pick-up-form__ordertime-button'>
                    <input type="radio" id="btn-now" name="radioBox" value="now" defaultChecked onChange={this.handlePickUpTime}></input>
                    <label className="pick-up-form__ordertime-button__now-label" htmlFor='btn-now'>Now</label>
                    <input type="radio" id="btn-later" name="radioBox" value="later" onChange={this.handlePickUpTime}></input>
                    <label className="pick-up-form__ordertime-button__later-label" htmlFor='btn-later'><BsClockHistory className='pick-up-form__ordertime-button__later-label__icon' />&nbsp;Later</label>
                </section>

                <section className='pick-up-form__line1'>
                    <label className="form-label">Time</label>
                    <div >
                        <select className='form-control' name='timeDrapDownList' onChange={this.handleTime}>
                        </select>
                    </div>
                </section>

                <section className='pick-up-form__inputtype-button'>
                    <input type="radio" id="btn-postcode" name="radioBox1" value="postcode" defaultChecked onChange={this.handlePickUpType}></input>
                    <label className="pick-up-form__inputtype-button__postcode-label" htmlFor='btn-postcode'>Postcode</label>
                    <input type="radio" id="btn-suburb" name="radioBox1" value="suburb" onChange={this.handlePickUpType}></input>
                    <label className="pick-up-form__inputtype-button__suburb-label" htmlFor='btn-suburb'>Suburb</label>
                    <input type="radio" id="btn-store" name="radioBox1" value="store" onChange={this.handlePickUpType}></input>
                    <label className="pick-up-form__inputtype-button__store-label" htmlFor='btn-store'>Store</label>
                </section>

                <section className="pick-up-form__collapse"  >
                    <div className="pick-up-form__collapse__tool-tip" >You can search using suburb, address or postcode. The more information you give, the more precise the results.</div>
                </section>

                <section className='pick-up-form__line2'>
                    <label className="form-label">Postcode, Suburb or Store <span className="pick-up-form__line2__more-information" onClick={this.displayInfo}>
                        <FaQuestionCircle />
                    </span></label>
                    <input id="customer-input" className="form-control" type="text" onChange={this.handleInput}></input>
                    <ul className='pick-up-form__line2__results'> {this.setUp()}</ul>

                </section>

                <section className="pick-up-form__buttons">
                    <Link to='/' className="pick-up-form__buttons__back" onClick={this.handleBack} >Back</Link>
                </section>
                <Link to='/' className="log-in">
                    Registered Member? Log in / Sign up
                </Link>
            </form>
        )
    }
}

function mapStateToProps(state){
    return{
        storesData:state.PickUpForm.storesData,
        inputType:state.PickUpForm.inputType,
        pickUpTime:state.PickUpForm.pickUpTime,
        store:state.PickUpForm.store,
    }
}

const mapActionsToProps={changePickUpTime, changeStoresData, changeInputType, changeStore};

export default connect(mapStateToProps, mapActionsToProps)(PickUpForm);