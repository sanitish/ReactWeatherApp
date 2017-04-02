var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location, name} = this.props;

    return (
      <h3>It's {temp} Celsius! in {location} Samzhi SURUCHI Maidam .</h3>
    )
  }
});

module.exports = WeatherMessage;
