import { Component } from 'react'

export default class SwapiService extends Component {

    _apiBase = 'https://swapi.co/api'
    _imageBase = `https://starwars-visualguide.com/assets/img`
    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, reseived ${res.status}`)
        }
        return res.json()
    }

    getAllPersons = async () => {
        const res = await this.getResourse(`/people/`)
        return res.results.map(this._transformPerson)
    }
    getPerson = async (id) => {
        const person =  await this.getResourse(`/people/${id}/`)
        return this._transformPerson(person)
    }
    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }
    getAllPlanets = async () => {
        const res = await this.getResourse(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }
    getAllStarships = async () => {
        const res = await this.getResourse(`/starships/`)
        return res.results.map(this._transformStarship)
    }
    getStarship = async (id) => {
        const starship =  await this.getResourse(`/starships/${id}/`)
        return this._transformStarship(starship)
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        const id = item.url.match(idRegExp)[1]
        return id
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufactored: starship.manufactored,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

}