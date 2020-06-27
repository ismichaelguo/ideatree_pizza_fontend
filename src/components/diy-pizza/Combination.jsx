import React, { useState, useRef } from "react";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from "../../asset/Images/Build-Own-Pizza/Circle.png";
import "./DIYPizza.scss";

import ShowTopping from "./ShowTopping";

export default function Combination({ selection }) {
  const [expand, setExpand] = useState(false);
  const expandBox = useRef();
  const expandDetail = () => {
    setExpand(!expand);
    expandBox.current.classList.toggle("active");
  };
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
      <ShowTopping selection={selection} />
    </div>
  );
}
