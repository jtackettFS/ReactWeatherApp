var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

// More concise version using => for static components that only have a render function
var About = (props) => {
    return(
      <h3>About Component</h3>
    );
};

module.exports = About;