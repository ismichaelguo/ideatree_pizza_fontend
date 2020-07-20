import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import StoreInState from '../../components/store-in-state/StoreInState';
import './store-in-state-page.scss';

const StoreInStatePage = (props) => {
  const pathname = props.location.pathname;
  const stateId = props.match.params.id;
  const state = props.match.params.state;
  return (
    <div className="storeInStatePage">
      <section className="storeInStatePage__nav">
        <MainNav pathname={pathname} />
      </section>
      <section className="storeInStatePage__content">
        <StoreInState stateId={stateId} state={state}/>
      </section>
    </div>
  );
}

export default StoreInStatePage;