var React = require('react');


// Destructuring within function parameters
var WeatherMessage = ({temp, location}) => {

	return(
		<div>
			<p>The temperature in {location} is {temp}.</p>
		</div>
	);
};

module.exports = WeatherMessage;