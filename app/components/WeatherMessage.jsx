var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location, name} = this.props;

    return (
      <h3 className="text_center">It's {temp} Celsius! in {location} {name}.</h3>
    )
  }
});

module.exports = WeatherMessage;
