import React, { useState, useEffect } from "react";
import "./ItemDetails.css";
import SwapiService from "../../services/SwapiService";
import Preloader from "../preloader/Preloader";
import search_image from "./search_img.png";
import ViewPersonDetails from './view-details/WievDetails'

const ItemDetails = ({ selectedItem, getData, ...props }) => {
  const swapiService = new SwapiService();
  const [item, setItem] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const updatePerson = () => {
    if (!selectedItem) {
      return;
    }
    setIsFetching(true);
    swapiService.getPerson(selectedItem).then(item => {
      setIsFetching(false);
      setItem(item);
    });
  };
  useEffect(() => {
    updatePerson();
  }, [selectedItem]);

  if (!item) {
    return (
      <div className="nothing-at-all">
        <span>Выберите персонажа из списка слева</span>
        <img src={search_image} alt="search image" />
      </div>
    );
  }

  const hasData = !(isFetching || !item);

  const data = hasData ? <ViewPersonDetails item={item} {...props} /> : null;
  const loading = isFetching ? <Preloader /> : null;
  return (
    <div className="person-details card">
      {loading}
      {data}
    </div>
  );
};

export default ItemDetails;
