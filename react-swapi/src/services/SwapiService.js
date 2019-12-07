import React, { Component } from 'react'

export default class SwapiService extends Component {

    _apiBase = 'https://swapi.co/api'
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, reseived ${res.status}`)
        }
        return res.json()
    }

    async getAllPeople() {
        const res = await this.getResourse(`/people/`)
        return res
    }
    getPerson(id) {
        return this.getResourse(`/people/${id}/`)
    }
    async getAllPlanets() {
        const res = await this.getResourse(`/planets/`)
        return res
    }
    getPlanet(id) {
        return this.getResourse(`/planets/${id}/`)
    }
    async getAllStarships() {
        const res = await this.getResourse(`/starships/`)
        return res
    }
    getStarship(id) {
        return this.getResourse(`/starships/${id}/`)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

const swapi = new SwapiService()
swapi.getStarship(3)
    .then(el => {
        console.log('Current starship is:', el.name)
    });