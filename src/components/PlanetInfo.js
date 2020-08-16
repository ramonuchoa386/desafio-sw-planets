import React from 'react';

const PlanetInfo = (props) => {
	return (
		<div>
			<ul>
				<li>Population: {props.population}</li>
				<li>Climate: {props.climate}</li>
				<li>Terrain: {props.terrain}</li>
			</ul>
			<p>Featured in {props.featured} films</p>
		</div>
	);
}

export default PlanetInfo;
