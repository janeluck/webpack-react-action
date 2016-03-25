/**
 * Created by jane on 3/5/16.
 */
import { isPlainObject, isFunction, isString, isArray } from 'lodash'

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
];/*
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




// todo list app with remove
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
*/


let items = [
    {
        "ID":"528",
        "Name":"\u9500\u552e\u6708\u62a5",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys":"1",
        "NpDay":"31",
        "IsStop":"0",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 16:16:10",
        "CreatedByID":"0",
        "CreatedTime":"2016-01-01 22:00:00",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"112",
                "ID":"528",
                "UserID":"42349",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"528",
                "UserID":"54024",
                "CreatedTime":"2016-03-24 16:16:10"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"528",
                "UserID":"19",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"528",
                "UserID":"21",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"112",
                "ID":"528",
                "UserID":"42349",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"528",
                "UserID":"54024",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"112",
                "ID":"528",
                "UserID":"2527",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"713",
                "ID":"528",
                "UserID":"42390",
                "CreatedTime":"2016-03-24 16:16:10"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u9500\u552e\u6708\u62a5",
        "user":"\u7cfb\u7edf",
        "date":"2016-01-01 22:00:00",
        "status":"0"
    },
    {
        "ID":"528",
        "Name":"\u9500\u552e\u6708\u62a5",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys":"1",
        "NpDay":"31",
        "IsStop":"0",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 16:16:10",
        "CreatedByID":"0",
        "CreatedTime":"2016-01-01 22:00:00",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"112",
                "ID":"528",
                "UserID":"42349",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"528",
                "UserID":"54024",
                "CreatedTime":"2016-03-24 16:16:10"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"528",
                "UserID":"19",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"528",
                "UserID":"21",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"112",
                "ID":"528",
                "UserID":"42349",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"528",
                "UserID":"54024",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"112",
                "ID":"528",
                "UserID":"2527",
                "CreatedTime":"2016-03-24 16:16:10"
            },
            {
                "Type":"1",
                "DeptID":"713",
                "ID":"528",
                "UserID":"42390",
                "CreatedTime":"2016-03-24 16:16:10"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u9500\u552e\u6708\u62a5",
        "user":"\u7cfb\u7edf",
        "date":"2016-01-01 22:00:00",
        "status":"0"
    },
    {
        "ID":"273",
        "Name":"\u9500\u552e\u5468\u62a5",
        "OwnerID":"2527",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys":"1",
        "NpDay":"7",
        "IsStop":"0",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 16:06:31",
        "CreatedByID":"0",
        "CreatedTime":"2016-01-01 22:00:00",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"273",
                "UserID":"0",
                "CreatedTime":"2016-02-27 00:05:17"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"273",
                "UserID":"0",
                "CreatedTime":"2016-02-27 00:05:17"
            }
        ],
        "NpStopTime":"2016-03-27 08:00:00",
        "name":"\u9500\u552e\u5468\u62a5",
        "user":"\u7cfb\u7edf",
        "date":"2016-01-01 22:00:00",
        "status":"0"
    },
    {
        "ID":"18",
        "Name":"\u9500\u552e\u65e5\u62a5",
        "OwnerID":"2253",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys":"1",
        "NpDay":"1",
        "IsStop":"0",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 16:33:05",
        "CreatedByID":"0",
        "CreatedTime":"2016-01-01 22:00:00",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"18",
                "UserID":"0",
                "CreatedTime":"2016-03-24 16:33:05"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"18",
                "UserID":"0",
                "CreatedTime":"2016-03-24 16:33:05"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u9500\u552e\u65e5\u62a5",
        "user":"\u7cfb\u7edf",
        "date":"2016-01-01 22:00:00",
        "status":"0"
    },
    {
        "ID":"923",
        "Name":"ttttt",
        "OwnerID":"108",
        "Text":{
            "NumReport.Num1":"vvvv"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:32:31",
        "CreatedByID":"108",
        "CreatedTime":"2016-03-14 11:06:19",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"923",
                "UserID":"0",
                "CreatedTime":"2016-03-14 11:06:19"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"923",
                "UserID":"0",
                "CreatedTime":"2016-03-14 11:06:19"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"ttttt",
        "user":"\u6881\u6bd3\u6770",
        "date":"2016-03-14 11:06:19",
        "status":"1"
    },
    {
        "ID":"908",
        "Name":"00",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"888"
        },
        "IsSys":"0",
        "NpDay":"14",
        "IsStop":"1",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:36:24",
        "CreatedByID":"4365",
        "CreatedTime":"2016-03-09 16:01:56",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"908",
                "UserID":"0",
                "CreatedTime":"2016-03-09 16:01:56"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"908",
                "UserID":"0",
                "CreatedTime":"2016-03-09 16:01:56"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"00",
        "user":"\u7b80\u7389",
        "date":"2016-03-09 16:01:56",
        "status":"1"
    },
    {
        "ID":"903",
        "Name":"\u6d4b\u8bd50303",
        "OwnerID":"65683",
        "Text":{
            "NumReport.Num1":"123"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:21:56",
        "CreatedByID":"65683",
        "CreatedTime":"2016-03-03 12:44:38",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"152701",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"17567",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"151943",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"14646",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"54022",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u6d4b\u8bd50303",
        "user":"lrb",
        "date":"2016-03-03 12:44:38",
        "status":"1"
    },
    {
        "ID":"903",
        "Name":"\u6d4b\u8bd50303",
        "OwnerID":"65683",
        "Text":{
            "NumReport.Num1":"123"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:21:56",
        "CreatedByID":"65683",
        "CreatedTime":"2016-03-03 12:44:38",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"152701",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"17567",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"151943",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"14646",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"54022",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u6d4b\u8bd50303",
        "user":"lrb",
        "date":"2016-03-03 12:44:38",
        "status":"1"
    }
]
let items0 = [

    {
        "ID":"923",
        "Name":"ttttt",
        "OwnerID":"108",
        "Text":{
            "NumReport.Num1":"vvvv"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:32:31",
        "CreatedByID":"108",
        "CreatedTime":"2016-03-14 11:06:19",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"923",
                "UserID":"0",
                "CreatedTime":"2016-03-14 11:06:19"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"923",
                "UserID":"0",
                "CreatedTime":"2016-03-14 11:06:19"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"ttttt",
        "user":"\u6881\u6bd3\u6770",
        "date":"2016-03-14 11:06:19",
        "status":"1"
    },
    {
        "ID":"908",
        "Name":"00",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"888"
        },
        "IsSys":"0",
        "NpDay":"14",
        "IsStop":"1",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:36:24",
        "CreatedByID":"4365",
        "CreatedTime":"2016-03-09 16:01:56",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"908",
                "UserID":"0",
                "CreatedTime":"2016-03-09 16:01:56"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"908",
                "UserID":"0",
                "CreatedTime":"2016-03-09 16:01:56"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"00",
        "user":"\u7b80\u7389",
        "date":"2016-03-09 16:01:56",
        "status":"1"
    },
    {
        "ID":"903",
        "Name":"\u6d4b\u8bd50303",
        "OwnerID":"65683",
        "Text":{
            "NumReport.Num1":"123"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:21:56",
        "CreatedByID":"65683",
        "CreatedTime":"2016-03-03 12:44:38",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"152701",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"17567",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"151943",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"14646",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"54022",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u6d4b\u8bd50303",
        "user":"lrb",
        "date":"2016-03-03 12:44:38",
        "status":"1"
    },
    {
        "ID":"903",
        "Name":"\u6d4b\u8bd50303",
        "OwnerID":"65683",
        "Text":{
            "NumReport.Num1":"123"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:21:56",
        "CreatedByID":"65683",
        "CreatedTime":"2016-03-03 12:44:38",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"65683",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"715",
                "ID":"903",
                "UserID":"152701",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"17567",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"717",
                "ID":"903",
                "UserID":"151943",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"14646",
                "CreatedTime":"2016-03-03 12:44:38"
            },
            {
                "Type":"1",
                "DeptID":"716",
                "ID":"903",
                "UserID":"54022",
                "CreatedTime":"2016-03-03 12:44:38"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u6d4b\u8bd50303",
        "user":"lrb",
        "date":"2016-03-03 12:44:38",
        "status":"1"
    }
]
let columns = [
    {text: '报表名称', datafield: 'name', width: 230},
    {text: '创建人', datafield: 'user', width: 70},
    {text: '创建时间', datafield: 'date', width: 160},
    {text: '状态', datafield: 'status', width: 60},
    {text: '操作', datafield: 'action', width: 265, cellsrenderer: function(rowData, column, value){
        return (<EditBtn    deletename = '删除' ondelete = {function(){console.log(rowData); console.log(value)}}  editname = '编辑' onedit = {function(){console.log(rowData)}}/>)
        }
    },
    {text: '系统', datafield: 'IsSys', width: 265, cellsrenderer: function(rowData, column, value){
        console.log(!!value);
        return (<div>{ value == '1' ? '是' : '否'}</div>)

        }
    }
];
var EditBtn = React.createClass({
    render: function(){
        return (
            <div>
            <button onClick = {this.props.onedit}>
                {this.props.editname}
            </button>
            <button onClick = {this.props.ondelete}>
                {this.props.deletename}
            </button>
            </div>
        )
    }
})
var Td = React.createClass({
    render: function(){
        return (
            <td>
                {this.props.text}
            </td>
        )
    }
})
var Tr = React.createClass({

    refresh: function(row, column){

    },
    resolveRow: function(row, columns){

        return columns.map((col, i) => col['datafield'])
            .map((keyName, i) =>  ({
                keyName: keyName,
                // 判断该列是否为自定义渲染
                text: columns[i]['cellsrenderer'] ?  columns[i]['cellsrenderer'].call(this, row, columns[i], row[keyName]) : row[keyName]
            })
        )

    },

    render: function() {

        return (
            <tr >
                {

                    this.resolveRow(this.props.row, this.props.columns).map(function(item, i){
                        return (<Td text = {item.text}  key = {i} />)
                    })
                }
            </tr>
        )
    }
})
var Thead = React.createClass({
    render: function() {

        return (
            <thead>
                <tr>
            {
                this.props.columns.map((col, i) => col['text'])
                    .map((item, i) =>  (<th key = {i}>{item}</th>))
            }
                    </tr>
            </thead>

        )
    }
})


// Table
var Table = React.createClass({
    getInitialState: function() {
        return {
            items: this.props.items
        };
    },
    refresh: function(items){
        this.setState({
            items: items
        })
    },
    render: function() {
        return (
            <div>
                <table>
                    <Thead columns = {this.props.columns}/>
                    <tbody>
                        {
                            this.state.items.map((item, i) => (<Tr key = {i} row =  {item}  columns = {this.props.columns} />))
                        }
                    </tbody>
                </table>
                <button onClick = {this.refresh.bind(this, items0)} >刷新</button>

            </div>
        );
    }
});
ReactDOM.render(
    <Table items = {items} columns = {columns} />,
    document.getElementById('table')
);
