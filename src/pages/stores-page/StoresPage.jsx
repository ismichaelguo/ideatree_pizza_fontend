import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import Store from '../../components/store/Store';
import './store-page.scss';

const StorePage = (props) => {
  // console.log(props.location.pathname);
  const pathname = props.location.pathname;
  return (
    <div className="store-page">
      <section className="store-page__nav">
        <MainNav pathname={pathname} />
      </section>
      <section className="store-page__content">
        <Store />
      </section>
    </div>
  );
}

export default StorePage;
