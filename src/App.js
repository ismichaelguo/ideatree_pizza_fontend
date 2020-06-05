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
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SelectOrderType from './pages/order-type-page/SelectOrderType'
import SavedOrderNone from './pages/save-order-page/SavedOrderNone';
import "./App.css";


function App () {
  return (
    <BrowserRouter>
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
          <Route exact={true} path='/menu/detail/:id/order-type' component={SelectOrderType} />
          <Route exact={true} path='/checkout' component={CheckoutPage} />
          <Route exact={true} path='/thanks' component={ThanksPage} />
          <Route exact path='/menu/detail/:id/order-type/saved-order-none' component={SavedOrderNone} />



          <Route exact={true} path='/receipt' component={ReceiptPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
