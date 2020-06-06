import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from "../../asset/Images/Build-Own-Pizza/Circle.png";
import "./DIYPizza.scss";

import { addTopping } from "../../redux/actions/index";

export default function Combination({ selection }) {
  const [expand, setExpand] = useState(false);
  const expandBox = useRef();
  const expandDetail = () => {
    setExpand(!expand);
    expandBox.current.classList.toggle("active");
  };

  const dispatch = useDispatch();

  return (
    <div
      className="toppingsBuilder"
      ref={expandBox}
      key={selection.selectionId}
    >
      <div>
        <h3>{selection.header}</h3>
        <div className="circle" onClick={expandDetail}>
          <img src={circle} alt="" />
          <FontAwesomeIcon icon={expand ? faMinus : faPlus} />
        </div>
      </div>
      <div className="selectionDetail">
        {get_context(selection.selectionId)}
      </div>
    </div>
  );

  function get_context(id) {
    if (id === 1) {
      return (
        <div className="expandDetail">
          {selection.crust.map((crust, index) => (
            <div className="imgBox">
              <img
                key={index}
                src={crust.imgSrc}
                alt={crust.imgAlt}
                onClick={() => dispatch(addTopping(crust))}
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
            <div className="imgBox">
              <img
                key={index}
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
            <div className="imgBox">
              <img
                key={index}
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
            <div className="imgBox">
              <img
                key={index}
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
