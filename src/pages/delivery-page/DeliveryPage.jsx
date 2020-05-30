import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './delivery-page.scss';
import DeliveryForm from '../../components/delivery-form/DeliveryForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../state/reducers/ReducersIndex';

const DeliveryPage = (props) => {
    
    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return (
        <section className='delivery-container'>
            <header className='banner'>
                <Link to='/' className="banner__logo-image">
                </Link>
                <div className="banner__description">
                    Delivery Details
                </div>
            </header>
            <section id='body'>
                <Provider store={store}>
                    <DeliveryForm />
                </Provider>
            </section>
            <footer className="page-footer">
                <Footer  />
            </footer>
        </section>
    );
}

export default DeliveryPage;