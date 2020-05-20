import React from 'react';
import MainNav from '../../components/main-nav/MainNav';

const StoresPage = (props) => {
  const pathname = props.location.pathname;
  return (
    <div>
      <MainNav pathname={pathname} />
      <h1>Stores PAGE</h1>
    </div>
  );
}

export default StoresPage;
