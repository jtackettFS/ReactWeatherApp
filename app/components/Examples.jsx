var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function() {
//         return(
//             <h3>Example Component</h3>
//         );
//     }
// });

var Examples = (props) => {
        return(
            <div>
                <h1 className={"text-center page-title"}>Examples</h1>
                <p>Here are a few example locations to try out:</p>
	            <ol>
		            <li>
			            <Link to={"/?location=Sanford"}>Orlando, FL</Link>
		            </li>
		            <li>
			            <Link to={"/?location=Stockholm"}>Stockholm, Sweden</Link>
		            </li>
	            </ol>
            </div>

        );
};

module.exports = Examples;