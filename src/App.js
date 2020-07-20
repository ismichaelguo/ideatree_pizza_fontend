import React from "react";
import Homepage from "./pages/home-page/Homepage";
import MenuPage from "./pages/menu-page/MenuPage";
import AboutPage from "./pages/about-page/AboutPage";
import StorePage from "./pages/stores-page/StoresPage";
import AccountPage from "./pages/account-page/AccountPage";
import DetailPage from "./pages/detail-page/DetailPage";
import DeliveryPage from "./pages/delivery-page/DeliveryPage";
import PickUpPage from "./pages/pick-up-page/PickUpPage";
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import ThanksPage from './pages/thanks-page/ThanksPage';
import ReceiptPage from './pages/receipt_page/ReceiptPage';
import { Switch, Route, withRouter } from "react-router-dom";
import DIYPizzaPage from "./pages/diy-pizza-page/DIYPizzaPage"
import SelectOrderType from './pages/order-type-page/SelectOrderType'
import SavedOrderNone from './pages/saved-order-page/SavedOrderNone';
import SavedOrder from './pages/saved-order-page/SavedOrder';
import Footer from './components/footer/Footer';
import SignUp from './pages/sign-up-page/SignUp';
import AdminProducts from "./components/admin-products/AdminProducts";
import AdminUser from "./components/admin-user/AdminUser";
import AdminOrder from "./components/admin-order/AdminOrder";
import AdminAddress from "./components/admin-address/AdminAddress";
import MapsPage from "./pages/maps-page/MapsPage";
import StoreInStatePage from "./pages/store-in-state-page/StoreInStatePage";
import "./App.css";


function App (props) {
  return (
    <>
      <div className="App">
        <Switch>
          {/* Switch: Once find a matched path, will stop finding and only render the matched page. 
        It ensures that only one pages is rendered.*/}
          <Route exact={true} path="/" component={Homepage} />
          {/* exact: match path exactly */}
          <Route exact={true} path='/menu' component={MenuPage} />
          <Route exact={true} path='/about' component={AboutPage} />
          <Route exact={true} path='/stores' component={StorePage} />
          <Route exact={true} path='/account' component={AccountPage} />
          <Route exact={true} path='/menu/detail/:id/order-type/delivery' component={DeliveryPage} />
          <Route exact={true} path='/menu/detail/:id/order-type/pick-up' component={PickUpPage} />
          <Route exact={true} path='/menu/detail' component={DetailPage} />
          <Route exact={true} path='/menu/detail/:id' component={DetailPage} />
          <Route exact={true} path="/menu/detail/:id/diy-pizza" component={DIYPizzaPage} />
          <Route exact={true} path='/menu/detail/:id/order-type' component={SelectOrderType} />
          <Route exact={true} path='/checkout' component={CheckoutPage} />
          <Route exact={true} path='/thanks' component={ThanksPage} />
          <Route exact path='/menu/detail/:id/order-type/saved-order-none' component={SavedOrderNone} />
          <Route exact path='/menu/detail/:id/order-type/saved-order' component={SavedOrder} />
          <Route exact={true} path='/receipt' component={ReceiptPage} />
          <Route exact={true} path='/account/sign-up' component={SignUp} />
          <Route exact={true} path='/maps' component={MapsPage} />
          <Route exact={true} path='/maps/:inMap' component={MapsPage} />
          <Route exact={true} path='/store-in-state/:id/:state' component={StoreInStatePage} />
          {/* TODO: change admin homepage */}
          <Route exact path='/admin' component={AdminUser} />
          <Route path="/admin/product" component={AdminProducts} />
          <Route path="/admin/orders" component={AdminOrder} />
          <Route path="/admin/user" component={AdminUser} />
          <Route path="/admin/address" component={AdminAddress} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(App);
