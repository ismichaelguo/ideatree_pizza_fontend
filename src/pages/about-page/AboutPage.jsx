import React from 'react';
import MainNav from '../../components/main-nav/MainNav';

const AboutPage = (props) => {
  // console.log(props.location.pathname);
  const pathname = props.location.pathname;
  return (
    <div>
      <MainNav pathname={pathname} />
      <h1>About US PAGE</h1>
    </div>
  );
}

export default AboutPage;
