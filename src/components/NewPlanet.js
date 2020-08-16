import React from 'react';

const NewPlanet = (props) => {
	return (
		<button type='button' id='newPlanet' name='button' onClick={props.getPlanet}>Next</button>
	);
}

export default NewPlanet;
