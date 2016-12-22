var React = require('react');

var WeatherMessage = ({temp,location}) => {
    return (
      <h2>Its it {temp} in {location}</h2>
    );
}

module.exports = WeatherMessage;
