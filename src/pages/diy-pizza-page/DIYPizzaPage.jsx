import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import DIYPizza from "../../components/diy-pizza/DIYPizza";
// import { Link } from "react-router-dom";
import "./diy-pizza.scss";

const DIYPizzaPage = (props) => {
  const pathname = props.location.pathname;
  
  return (
    <>
      <div className="detail-page__nav">
        <MainNav pathname={pathname} />
        <div className="header">
          <button className="menu" onClick={()=>{props.history.goBack()}}>
            MENU
          </button>
        </div>
      </div>
      <div className="diy-pizza-page">
        <DIYPizza DIYPageData={props} />
      </div>
    </>
  );
};

export default DIYPizzaPage;
