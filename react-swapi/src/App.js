import React from 'react';
import './App.css';
import Header from './components/header/Header'
import RandomPlanet from './components/random-planet/RandomPlanet'
import { SwapiServiceProvider } from './components/swapi-service-context/SwapiServiceContext'
import SwapiService from './services/SwapiService'
import PersonPage from './components/pages/PersonPage'
import PlanetPage from './components/pages/PlanetPage'
import StarshipPage from './components/pages/StarshipPage';
import {Switch, Route} from 'react-router-dom'

const App = () => {
  const swapiService = new SwapiService()
  return (
    <SwapiServiceProvider value={swapiService}>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <div className='random-planet'>
          <RandomPlanet />
        </div>
        <div>
          <Switch>
            <Route path='/persons' component={PersonPage}/>
            <Route path='/planets' component={PlanetPage}/>
            <Route path='/starships' component={StarshipPage}/>
          </Switch>
        </div>
      </div>
    </SwapiServiceProvider>
  )
}

export default App;
