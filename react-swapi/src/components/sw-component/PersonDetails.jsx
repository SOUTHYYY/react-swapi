import React from "react";
import Record from "../Record/Record";
import ItemDetails from "../item-details/ItemDetails";
import WithSwapiService from "../hoc/WithSwapiService";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
const MapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};
export default WithSwapiService(MapMethodsToProps)(PersonDetails);
