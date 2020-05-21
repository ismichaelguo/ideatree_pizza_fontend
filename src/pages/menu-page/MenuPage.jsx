import React, { Fragment } from 'react';
import MainNav from '../../components/main-nav/MainNav';
import MenuNav from '../../components/menu-nav/MenuNav';
import ItemCardContainer from '../../components/item-card-container/ItemCardContainer';
import Footer from '../../components/footer/Footer';

import './menu-page.scss';

const MenuPage = (props) => {
  console.log(props);
  const pathname = props.location.pathname;
  const hashtag = props.location.hash;
  return (
    <div className="menu-page">
      <section className="menu-page__nav">
        <MainNav pathname={pathname} />
        <MenuNav hashtag={hashtag} />
      </section>
      <section className="menu-page__content">
        <ItemCardContainer />
      </section>
      <Footer />
    </div>
  );
}

export default MenuPage;
