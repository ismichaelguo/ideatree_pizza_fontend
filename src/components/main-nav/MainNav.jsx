import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './main-nav.scss';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { pathname } = this.props;
    return (
      <Fragment>
        <header className="main-nav">
          <div className="main-nav__left">
            <div className="logo">
              <Link to='/'> Pizza<span className="logo__highlight"> Hub</span> </Link>
            </div>
          </div>
          <div className="main-nav__middle">
            <nav className="main-navbar">
              <Link to='/menu' className={`main-navbar__item ${pathname === '/menu' ? "main-navbar__item--active" : null}`}
              >MENU</Link>
              <Link to='/about' className={`main-navbar__item ${pathname === '/about' ? "main-navbar__item--active" : null}`}
              >ABOUT US</Link>
              <Link to='/stores' className={`main-navbar__item ${pathname === '/stores' ? "main-navbar__item--active" : null}`}
              >STORES</Link>
            </nav>
          </div>
          <div className="main-nav__right">
            <div className="login">
              <Link to='/account' ><i className="fa fa-user-circle"></i> My Account</Link>

            </div>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default MainNav;