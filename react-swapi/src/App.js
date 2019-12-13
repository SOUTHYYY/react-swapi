import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import RandomPlanet from './components/random-planet/RandomPlanet'
import PeoplePage from './components/people-page/PeoplePage';
import SwapiService from './services/SwapiService'

const App = () => {

  const swapiServise = new SwapiService();
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <div className='random-planet'>
        <RandomPlanet />
      </div>
      <div>
        <PeoplePage />
      </div>
    </div>
  )
}

export default App;
