import React, { useState, useEffect } from "react";
import "./PersonDetails.css";
import SwapiService from "../../services/SwapiService";
import Preloader from "../preloader/Preloader";

const PersonDetails = ({ selectedPerson }) => {
  const swapiService = new SwapiService();

  const [person, setPerson] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const updatePerson = () => {
    if (!selectedPerson) {
      return;
    }
    setIsFetching(true);
    swapiService.getPerson(selectedPerson).then(person => {
      setIsFetching(false);
      setPerson(person);
    });
  };
  useEffect(() => {
    console.log('rerendered')
    updatePerson();
  }, [selectedPerson]);

  if (!person) {
    return <span>Выберете персонаджа из списка</span>;
  }

  const hasData = !(isFetching || !person);

  const data = hasData ? <ViewPersonDetails person={person} /> : null;
  const loading = isFetching ? <Preloader /> : null;
  return (
    <div className="person-details card">
      {loading}
      {data}
    </div>
  );
};

const ViewPersonDetails = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default PersonDetails;
