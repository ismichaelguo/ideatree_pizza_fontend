import React from 'react';
import MainNav from '../../components/main-nav/MainNav';

const AccountPage = (props) => {
  const pathname = props.location.pathname;
  return (
    <div>
      <MainNav pathname={pathname} />
      <h1>ACCOUNT PAGE</h1>
    </div>
  );
}

export default AccountPage;
