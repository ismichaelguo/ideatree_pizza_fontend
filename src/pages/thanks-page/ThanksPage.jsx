import React from 'react';
import { Link } from 'react-router-dom';
import './thanks-page.scss';
import Footer from '../../components/footer/Footer';

const ThanksPage = (props) => {
  return (
    <>
      <div className='thanks-page'>
        <header className="banner">
          <Link to='/' className="banner_logo-image">
          </Link>
          <div className="banner_description">
            Thanks
        </div>
        </header>
        <p>Thanks for your ordering!</p>
        <Footer />
      </div>
    </>
  );
}

export default ThanksPage;