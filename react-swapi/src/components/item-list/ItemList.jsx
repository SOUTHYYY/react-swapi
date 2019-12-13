import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Preloader from "../preloader/Preloader";
import WithData from "../hoc/WithData";
import SwapiService from '../../services/SwapiService'

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

const {getAllPersons} = new SwapiService()

export default WithData(ItemList, getAllPersons);
