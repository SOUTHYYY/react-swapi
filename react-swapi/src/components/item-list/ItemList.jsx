import React, { useEffect, useState } from "react";
import "./ItemList.css";
import SwapiService from "../../services/SwapiService";
import Preloader from "../preloader/Preloader";

const ItemList = ({ onItemSelected, getData }) => {
  debugger
  const [itemList, setItemList] = useState(null);
  useEffect(() => {
    getData()
      .then(itemList => {
        setItemList(itemList);
    });
  }, []);

  const renderItems = arr => {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  if (!itemList) {
    return <Preloader />;
  }
  const items = renderItems(itemList);

  return (
    <div>
      <ul className="item-list list-group">{items}</ul>
    </div>
  );
};

export default ItemList;
