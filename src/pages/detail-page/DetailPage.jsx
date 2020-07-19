import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import Detail from '../../components/detail/Detail';

import './detail-page.scss';

const DetailPage = (props) => {
  console.log(props);

  // const {id} = props.match.params;
  // console.log("id",id);
  const pathname = props.location.pathname;
  
  return (
    <div className="detailPage">
      <section className="detailPage__nav">
        <MainNav pathname={pathname} />
      </section>
      <section className="detailPage__content">
        <Detail props={props} />
      </section>
    </div>
  );
};

export default DetailPage;
