/**
 * Created by jane on 3/5/16.
 */

// watch index.html
require('../index.html');
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var names = ['jane', 'joe', 'crystal', ['01', '02']];
var titles = [
    'It\'s Work!',
    'jane',
    names
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


// ref: get real dom

var MyComponent = React.createClass({
    handleClick: function() {
        this.refs.myTextInput.focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent />,
    document.getElementById('realDom')
);


// state: state machine
var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('stateMachine')
);


// forms
var FormEl0 = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        return (
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
});
ReactDOM.render(
   <FormEl0 />,
    document.getElementById('formEl0')

);




var FormEl1 = React.createClass({
    getInitialState: function() {
        return {value: 'C'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function(){
        return   <select value="B" onChange={this.handleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
        </select>
    }
});
ReactDOM.render(
    <FormEl1 />,
    document.getElementById('formEl1')

);



var Notices = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },

    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },

    render: function () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Notices name="awesome"/>,
    document.getElementById('lifeCycle')

);


var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});

ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('ajaxDemo')
);

var TodoList = React.createClass({
    getItems: function(items){

        return items.map(function(item, i){
            return <li key = {i}>{item}</li>;
        })
    },
    render: function(){
        return (<ul>
            {this.getItems(this.props.items)}
        </ul>)
    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            value: '',
            items: []
        };
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    handleClick: function(){

        this.setState({
            items: this.state.items.concat(this.state.value),
            value: ''
        });

    },
    render: function() {
        return (
            <div>
                <TodoList items = {this.state.items} />
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick = {this.handleClick}>Add {this.state.items.length + 1} </button>
            </div>
        );
    }
});
ReactDOM.render(
    <TodoApp/>,
    document.getElementById('todoList')
);




// todo list with remove
var TodoRemove = React.createClass({
    getInitialState: function() {
        return {
            value: '',
            items: []
        };
    },
    remove: function(el){
        this.setState({
            items: this.state.items.filter(function(item){
                return item != el;
            })

        });
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    handleClick: function(){

        this.setState({
            items: this.state.items.concat(this.state.value),
            value: ''
        });

    },
    render: function() {
        return (
            <div>
                <ol>
                    {
                        this.state.items.map(
                            function(item, i) {
                                return (<li key = {i}>
                                    <span>{item}</span>
                                    <a onClick = {this.remove.bind(this, item)}> x </a>
                                </li>)
                            }
                            .bind(this)
                        )
                    }
                </ol>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick = {this.handleClick}>Add {this.state.items.length + 1} </button>
            </div>
        );
    }
});
ReactDOM.render(
    <TodoRemove/>,
    document.getElementById('todoRemove')
);