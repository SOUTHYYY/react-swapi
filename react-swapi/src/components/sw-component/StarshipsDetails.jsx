import React from "react";
import Record from "../Record/Record";
import ItemDetails from "../item-details/ItemDetails";
import WithSwapiService from "../hoc/WithSwapiService";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const MapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};
export default WithSwapiService(MapMethodsToProps)(StarshipDetails);
