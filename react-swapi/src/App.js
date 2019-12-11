import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import RandomPlanet from './components/random-planet/RandomPlanet'
import { Switch, Route } from "react-router-dom";
import PersonDetails from './components/person-details/PersonDetails'
import PlanetDetails from './components/planet-details/PlanetDetails'
import StarshipDetails from './components/starship-details/StarshipDetails'
import NotFound from './components/not-found/NotFound'
import ItemList from './components/item-list/ItemList'

const App = () => {
  const [selectedPerson, setSlectedPerson] = useState(null)

  const onPersonSelected = (id) => {
    setSlectedPerson(id)
  }
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <div className='random-planet'>
        <RandomPlanet />
      </div>
      <div className="items row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPerson={selectedPerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
