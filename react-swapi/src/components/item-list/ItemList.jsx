import React from "react";
import "./ItemList.css";

const ItemList = () => {
  return (
    <div>
      <ul className="item-list list-group">
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">Darth Vader</li>
        <li className="list-group-item">R2-D2</li>
      </ul>
    </div>
  );
};

export default ItemList;
