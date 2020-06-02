import React from 'react';
import MainNav from "../../components/main-nav/MainNav";

import './thanks-page.scss';

const ThanksPage = (props) => {
  return (
    <>
      <MainNav />
      <div className='thanks-page'>
        Thanks for your ordering!
      </div>
    </>
  );
}

export default ThanksPage;