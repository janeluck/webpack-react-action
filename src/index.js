/**
 * Created by jane on 3/5/16.
 */
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var names = ['jane', 'joe', 'crystal'];
var titles = [
    'It\'s Work!',
    'awesome'
];
ReactDOM.render(
    <div>
        {titles}
    </div>,

    document.getElementById('example')
);

// component
// make sure first letter of class name be uppercase
// prop validation  http://facebook.github.io/react/docs/reusable-components.html
// getDefaultProps
var HelloMsg = React.createClass({
    getDefaultProps: function(){
        return {
            phone: '13512345678'
        }
    },
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    render: function(){
        return <h1 className= {this.props.class}>hello, {this.props.name}, {this.props.phone}</h1>
    }
});

ReactDOM.render(
    <HelloMsg name = "lucy" class = "component-a" />,
    document.getElementById('classDemo')
);



// this.props.children
// having no child: undefined
// having only one child: object
// having two or more children: array
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
      {
          React.Children.map(this.props.children, function (child) {
              return <li>{child}</li>;
          })
          }
            </ol>
        );
    }
});

ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.getElementById('listDemo')
);

