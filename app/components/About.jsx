var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
      <h1 className="text-center page-title">About Component</h1>
      <p>This is a Weather application build on React. I(NITISH KUMAR) have built this for the complete react web App Developer cource</p>
      <p>
        Here are some tools I used:
      </p>
      <ul>
        <li>
          <a href="https://faccebook.github.io/react">React</a> - I was a the java script frame work used.
        </li>
        <li>
         <a href="http://openweathermap.org">Open weather map</a> - I used Open weather map to search for weather data by city name.
        </li>
      </ul>
      </div>
    )
  }
});

module.exports = About;
