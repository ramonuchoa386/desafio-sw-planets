import React from 'react';
import './App.css';
import PlanetName from './components/PlanetName.js';
import PlanetInfo from './components/PlanetInfo.js';
import NewPlanet from './components/NewPlanet.js';

class App extends React.Component {
  state = {
    planetName: 'Planet name',
    population: 'Population',
    climate: 'Climate',
    terrain: 'Terrain',
    featured: 'N'
  }

  getPlanet = async (e) => {
    e.preventDefault();

    let randomPlanet = Math.floor((Math.random() * 61) + 1);
    let apiUrl = 'https://swapi.co/api/planets/' + randomPlanet;

    const api_call = await fetch(apiUrl);
    const data = await api_call.json();

    console.log(data);

    this.setState({
      planetName: data.name,
      population: data.population,
      climate: data.climate,
      terrain: data.terrain,
      featured: data.films.length
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <section id='planetInfoWrapper'>
          <PlanetName planetName={this.state.planetName} />
          <PlanetInfo
            population={this.state.population}
            climate={this.state.climate}
            terrain={this.state.terrain}
            featured={this.state.featured}
          />
        </section>
        <NewPlanet getPlanet={this.getPlanet} />
      </div>
    );
  }
}

export default App;
