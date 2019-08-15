import React from 'react';

class PlanetName extends React.Component {
  render() {
    return (
      <h1>
        {this.props.planetName}
      </h1>
    );
  }
}

export default PlanetName;
