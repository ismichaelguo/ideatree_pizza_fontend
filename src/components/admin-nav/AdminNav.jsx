import React from 'react';
import {
  Link,
  NavLink,
} from "react-router-dom";
import "./admin-nav.scss";

function AdminNav () {
  return (
    <div className="admin-page-nav">
      <div className="admin-page-nav__container">
        <header className="banner">
          <Link to="" className="banner__logo-image"></Link>
          <div className="banner__description">Admin</div>
        </header>
        <nav>
          <NavLink
            to="/admin/user"
            className="menu-link"
            activeClassName="user--active"
          >
            User
              </NavLink>
          <NavLink
            to="/admin/product"
            className="menu-link"
            activeClassName="products--active"
          >
            Products
              </NavLink>
          <NavLink
            to="/admin/orders"
            className="menu-link"
            activeClassName="order--active"
          >
            Order
              </NavLink>
              <NavLink
            to="/admin/address"
            className="menu-link"
            activeClassName="address--active"
          >
            Address
              </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default AdminNav;