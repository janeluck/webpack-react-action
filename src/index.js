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
        <h1>{titles}</h1>
        {
            names.map(function (name) {
                return <div>Hello, {name}!</div>
            })
            }
    </div>,

    document.getElementById('example')
);
