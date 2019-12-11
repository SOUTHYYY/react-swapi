import React, { useEffect, useState } from "react";
import "./ItemList.css";
import SwapiService from "../../services/SwapiService";
import Preloader from "../preloader/Preloader";

const ItemList = ({onItemSelected}) => {
  const swapiServise = new SwapiService();
  const [peopleList, setPeopleList] = useState(null);
  useEffect(() => {
    swapiServise.getAllPersons().then(peopleList => {
      setPeopleList(peopleList);
    });
  }, []);

  const renderItems = arr => {
    return arr.map(({id, name}) => {
      return <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {name}</li>;
    });
  };

  if (!peopleList) {
    return <Preloader />;
  }
  const items = renderItems(peopleList)

  return (
    <div>
      <ul className="item-list list-group">
        {items}
      </ul>
    </div>
  );
};

export default ItemList;
