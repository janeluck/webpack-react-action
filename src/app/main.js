/**
 * Created by janeluck on 8/4/16.
 */
var ReactDOM = require('react-dom');
var React = require('react');

ReactDOM.render(React.createElement('ul', { className: 'my-list', style:{
    color: 'red',
    height: 10,
    border: '1px solid yellow'
} }, 'awesome'), document.getElementById('root'));