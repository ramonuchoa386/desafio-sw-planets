import React from 'react';

class NewPlanet extends React.Component {
  render() {
    return (
      <button type='button' id='newPlanet' name='button' onClick={this.props.getPlanet}>Next</button>
    );
  }
}

export default NewPlanet;
