import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function ShowDiyPizzaItems(item) {
  const [expand, setExpand] = useState(false);
  const expandBox = useRef();
  const expandDetail = () => {
    setExpand(!expand);
    expandBox.current.classList.toggle("active");
  };
  return (
    <>
      <div className="receipt-table__DIYToppings">
        <span>Show Your Toppings:</span>
        <span className="activeTrigger" onClick={expandDetail}>
          <FontAwesomeIcon icon={expand ? faCaretDown : faCaretRight} />
        </span>
        <div className="showToppings" ref={expandBox}>
          {item.item.toppingDes.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}
