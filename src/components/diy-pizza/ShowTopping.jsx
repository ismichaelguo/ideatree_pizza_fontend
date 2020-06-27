import React from "react";
import { useDispatch } from "react-redux";

import { addTopping } from "../../redux/actions/index";
import "./DIYPizza.scss";

export default function ShowTopping(props) {
  let { selection } = props;
  let id = selection.selectionId;
  const dispatch = useDispatch();

  return <div className="selectionDetail">{get_context(id)}</div>;

  function get_context(id) {
    if (id === 1) {
      return (
        <div className="expandDetail">
          {selection.crust.map((crust) => (
            <div className="imgBox" key={crust.id}>
              <img
                src={crust.imgSrc}
                alt={crust.imgAlt}
                onClick={() => dispatch(addTopping(crust, crust.id))}
              />
              <p>{crust.name}</p>
              <p>${crust.price}</p>
            </div>
          ))}
        </div>
      );
    } else if (id === 2) {
      return (
        <div className="expandDetail">
          {selection.sauce.map((sauce, index) => (
            <div className="imgBox" key={index}>
              <img
                src={sauce.imgSrc}
                alt={sauce.imgAlt}
                onClick={() => dispatch(addTopping(sauce))}
              />
              <p>{sauce.name}</p>
              <p>${sauce.price}</p>
            </div>
          ))}
        </div>
      );
    } else if (id === 3) {
      return (
        <div className="expandDetail">
          {selection.cheese.map((cheese, index) => (
            <div className="imgBox" key={index}>
              <img
                src={cheese.imgSrc}
                alt={cheese.imgAlt}
                onClick={() => dispatch(addTopping(cheese))}
              />
              <p>{cheese.name}</p>
              <p>${cheese.price}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="expandDetail">
          {selection.toppings.map((toppings, index) => (
            <div className="imgBox" key={index}>
              <img
                src={toppings.imgSrc}
                alt={toppings.imgAlt}
                onClick={() => dispatch(addTopping(toppings))}
              />
              <p>{toppings.name}</p>
              <p>${toppings.price}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
