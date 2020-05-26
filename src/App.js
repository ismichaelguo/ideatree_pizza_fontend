import React from "react";

import Homepage from "./pages/home-page/Homepage";
import MenuPage from "./pages/menu-page/MenuPage";
import AboutPage from "./pages/about-page/AboutPage";
import StorePage from "./pages/stores-page/StoresPage";
import AccountPage from "./pages/account-page/AccountPage";
import DetailPage from "./pages/detail-page/DetailPage";
import DeliveryPage from "./pages/delivery-page/DeliveryPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SelectOrderType from './pages/order-type-page/SelectOrderType'
import "./App.css";


function App() {
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
          <Route exact={true} path='/menu/detail' component={DetailPage} />
          <Route exact={true} path='/menu/detail/order-type' component={SelectOrderType} />
          <Route exact={true} path='/menu/detail/order-type/delivery' component={DeliveryPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
