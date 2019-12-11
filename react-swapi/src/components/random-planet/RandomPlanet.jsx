import React, { useState, useEffect } from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/SwapiService";
import ErrorIndicator from "./error-indicator/ErrorIndicator";
import Preloader from '../preloader/Preloader'

const RandomPlanet = () => {
  const swapiService = new SwapiService();

  const [planet, setPlanet] = useState(null);
  const [isFetching, setIsFetching] = useState(null);
  const [error, setError] = useState(false);

  const onPlanetLoaded = planet => {
    setPlanet(planet);
  };

  const onError = err => {
    setError(true);
    setIsFetching(false);
  };

  const getRandomPlanet = () => {
    setIsFetching(true);
    const id = Math.floor(Math.random() * 17) + 2;
    swapiService
      .getPlanet(id)
      .then(planet => {
        onPlanetLoaded(planet);
        setIsFetching(false);
      })
      .catch(onError);
  };

  useEffect(() => {
    setInterval(getRandomPlanet, 3000);
  }, []);

  const hasData = !(isFetching || error);

  const errorMessage = error ? <ErrorIndicator /> : null;
  const preloader = isFetching ? <Preloader /> : null;
  const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {preloader}
      {content}
    </div>
  );
};

const PlanetView = ({ planet }) => {
  if (planet !== null) {
    var { id, name, population, rotationPeriod, diameter } = planet;
  }

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="random-planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RandomPlanet;
