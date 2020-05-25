import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import Detail from '../../components/detail/Detail';
import Footer from '../../components/footer/Footer';

import './detail-page.scss';

const DetailPage = (props) => {
  console.log(props);
  const pathname = props.location.pathname;
  const footerColor = "#ffffff";
  return (
    <div className="detail-page">
      <section className="detail-page__nav">
        <MainNav pathname={pathname} />
      </section>
      <section className="detail-page__content">
        <Detail />
      </section>
      <Footer color={footerColor} />
    </div>
  );
};

export default DetailPage;
