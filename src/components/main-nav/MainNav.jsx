import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './main-nav.scss';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideShow: false,
    }
  }

  handleBtnClick = () => {
    this.setState({
      sideShow: !this.state.sideShow,
    })
  }

  render () {
    const { pathname } = this.props;
    return (
      <Fragment>
        <header className="main-nav">
          <div className="main-nav__left">
            <Link to='/' className="logo"> Pizza<span className="logo__highlight"> Hub</span> </Link>
          </div>
          <div className="main-nav__middle">
            <div className="menu-btn">
              <i className="fa fa-bars" onClick={this.handleBtnClick}></i>
            </div>
            <nav className={`main-navbar ${this.state.sideShow ? "side-show" : ""}`}>
              <Link to='/menu' className={`main-navbar__item ${pathname === '/menu' ? "main-navbar__item--active" : ""}`}
              >MENU</Link>
              <Link to='/about' className={`main-navbar__item ${pathname === '/about' ? "main-navbar__item--active" : ""}`}
              >ABOUT US</Link>
              <Link to='/stores' className={`main-navbar__item ${pathname === '/stores' ? "main-navbar__item--active" : ""}`}
              >STORES</Link>
              <Link to='/account'
                className={`main-navbar__item ${pathname === '/stores' ? "main-navbar__item--active" : ""} ${this.state.sideShow ? "side-show" : "side-hide"}`}
              ><i className="fa fa-user-circle"></i><span> My Account</span></Link>

            </nav>
          </div>
          <div className="main-nav__right">
            <Link to='/account' className="login"><i className="fa fa-user-circle"></i><span> My Account</span></Link>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default MainNav;