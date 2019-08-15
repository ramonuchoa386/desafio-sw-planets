import React from 'react';

class PlanetInfo extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Population: {this.props.population}</li>
          <li>Climate: {this.props.climate}</li>
          <li>Terrain: {this.props.terrain}</li>
        </ul>
        <p>Featured in {this.props.featured} films</p>
      </div>
    );
  }
}

export default PlanetInfo;
