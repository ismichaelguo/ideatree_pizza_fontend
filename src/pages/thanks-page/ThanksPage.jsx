import React from 'react';
import { Link } from 'react-router-dom';
import './thanks-page.scss';

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
        <div className="thanks-page__content">
          <p>Thanks for your ordering!</p>
        </div>
      </div>
    </>
  );
}

export default ThanksPage;