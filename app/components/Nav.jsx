var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

      if (location.length > 0) {
          this.refs.search.value = '';
          window.location.hash = '#/?location=' + encodedLocation;

      }
    },
    render: function() {
     return (
      <div className="top-bar">
        <div className="top-bar-left">
         <ul className="menu">
           <li claassName="menu-text">React weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
           </li>
           <li>
           <Link to="/WeatherWithName" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>WeatherWithName</Link>

          </li>
          <li>
          <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>

          </li>
        </ul>
      </div>
       <div className='top-bar-right'>
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search"  placeholder="search weather by city name" ref="search"/>
            </li>
            <li>
              <input type="submit" className="button" value="get weather"/>
            </li>
          </ul>
        </form>
       </div>
    </div>
  );
 }
});

module.exports = Nav;
