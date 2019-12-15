import React from "react";
import "./ItemList.css";

const ItemList = ({ data, onItemSelected, children: RenderLable }) => {
  const items = data.map(item => {
    const { id } = item;
    const label = RenderLable(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <div>
      <ul className="item-list list-group">{items}</ul>
    </div>
  );
};

export default ItemList
