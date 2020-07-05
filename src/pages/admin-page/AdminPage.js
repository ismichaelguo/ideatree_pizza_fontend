import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import "./admin-page.scss";
import AdminProducts from "../../components/admin-products/AdminProducts";
import AdminUser from "../../components/admin-user/AdminUser";
import AdminOrder from "../../components/admin-order/AdminOrder";

class AdminPage extends React.Component {
  render() {
    return (
      <div className="admin-page">
        <div className="admin-page__container">
          <header className="banner">
            <Link to="" className="banner__logo-image"></Link>
            <div className="banner__description">Admin</div>
          </header>
          <Router>
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
            </nav>
            <div className="admin-option">
              <Switch>
                <Route  path="/admin/product" component={AdminProducts} />
                <Route  path="/admin/orders" component={AdminOrder} />
                <Route  path="/admin/user" component={AdminUser} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default AdminPage;
