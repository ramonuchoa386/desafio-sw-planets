import React from 'react';
import './App.css';
import PlanetName from './components/PlanetName.js';
import PlanetInfo from './components/PlanetInfo.js';
import NewPlanet from './components/NewPlanet.js';

const API_URL = 'https://swapi.dev/api/planets/';

class App extends React.Component {
	constructor(props) {
		super(props);
 
		this.state = {
			length: 0,
			planetName: 'Planet name',
			population: 'Population',
			climate: 'Climate',
			terrain: 'Terrain',
			featured: 'N'
		}

		this.getPlanet = this.getPlanet.bind(this);
		this.getLength = this.getLength.bind(this);
	}

	getLength = () => {
		fetch(API_URL).then(res => res.json()).then(data => {
			this.setState({
				length: data.count
			});
		});
	}

	componentDidMount() {
		this.getLength();
	}

	getPlanet = async (e) => {
		e.preventDefault();

		let randomPlanet = Math.floor((Math.random() * this.state.length) + 1);

		await fetch(API_URL + randomPlanet).then(res => res.json()).then(data => {
			this.setState({
				planetName: data.name,
				population: data.population,
				climate: data.climate,
				terrain: data.terrain,
				featured: data.films.length
			});
		});

	}

	render() {
		return (
			<div className='wrapper'>
				<section id='planetInfoWrapper'>
					<PlanetName planetName={this.state.planetName} />

					<PlanetInfo population={this.state.population}
								climate={this.state.climate}
								terrain={this.state.terrain}
								featured={this.state.featured} />
				</section>

				<NewPlanet getPlanet={this.getPlanet} />
			</div>
		);
	}
}

export default App;
