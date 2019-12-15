import React, { useState, useEffect } from "react";
import "./ItemDetails.css";
import Preloader from "../preloader/Preloader";
import search_image from "./search_img.png";
import ViewPersonDetails from "./view-details/WievDetails";

const ItemDetails = ({ selectedItem, getImageUrl, getData, ...props }) => {
  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const updateItem = () => {
    if (!selectedItem) {
      return;
    }
    setIsFetching(true);
    getData(selectedItem).then(item => {
      setIsFetching(false);
      setItem(item);
      setImage(getImageUrl(item));
    });
  };

  useEffect(() => {
    updateItem();
  }, [selectedItem]);

  if (!item) {
    return (
      <div className="nothing-at-all">
        <span>Выберите персонажа из списка слева</span>
        <img src={search_image} alt="search" />
      </div>
    );
  }

  const hasData = !(isFetching || !item);

  const data = hasData ? (
    <ViewPersonDetails item={item} {...props} image={image} />
  ) : null;
  const loading = isFetching ? <Preloader /> : null;
  return (
    <div className="person-details card">
      {loading}
      {data}
    </div>
  );
};

export default ItemDetails;
