import React from 'react';
import MainNav from '../../components/main-nav/MainNav';
import MenuNav from '../../components/menu-nav/MenuNav';

const MenuPage = (props) => {
  console.log(props);
  const pathname = props.location.pathname;
  const hashtag = props.location.hash;
  return (
    <div>
      <MainNav pathname={pathname} />
      <MenuNav hashtag={hashtag} />
      <h1>Menu PAGE</h1>
    </div>
  );
}

export default MenuPage;
