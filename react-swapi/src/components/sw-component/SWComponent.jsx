import React from "react";
import WithSwapiService from "../hoc/WithSwapiService";
import WithData from "../hoc/WithData";
import ItemList from "../item-list/ItemList";
import WithChildFunction from "../hoc/WithChildFunction";
import compose from "../hoc/Compose";

const renderName = ({ name }) => <span>{name}</span>;
const MapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPersons
  };
};

const MapPlanetsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const MapStarshipsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};
const PersonList = compose(
  WithSwapiService(MapPersonMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);
const PlanetList = compose(
  WithSwapiService(MapPlanetsMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);
const StarshipList = compose(
  WithSwapiService(MapStarshipsMethodsToProps),
  WithData,
  WithChildFunction(renderName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
