import React from "react";
import Record from "../Record/Record";
import ItemDetails from "../item-details/ItemDetails";
import WithSwapiService from "../hoc/WithSwapiService";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const MapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default WithSwapiService(MapMethodsToProps)(PlanetDetails);
