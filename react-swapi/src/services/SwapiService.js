import { Component } from 'react'

export default class SwapiService extends Component {

    _apiBase = 'https://swapi.co/api'
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, reseived ${res.status}`)
        }
        return res.json()
    }

    async getAllPersons() {
        const res = await this.getResourse(`/people/`)
        return res.results.map(this._transformPerson)
    }
    async getPerson(id) {
        const person =  await this.getResourse(`/people/${id}/`)
        return this._transformPerson(person)
    }
    async getAllPlanets() {
        const res = await this.getResourse(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }
    async getAllStarships() {
        const res = await this.getResourse(`/starships/`)
        return res.results.map(this._transformStarship)
    }
    async getStarship(id) {
        const starship =  this.getResourse(`/starships/${id}/`)
        return this._transformStarship(starship)
    }

    _extractId(item) {
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
            nodel: starship.nodel,
            manufactored: starship.manufactored,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

}