/**
 * Created by jane on 3/5/16.
 */
import { isPlainObject, isFunction, isString, isArray } from 'lodash'
import Table  from './Table/'

require('./Table/table.less');
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
        "ID":"899",
        "Name":"ce",
        "OwnerID":"2253",
        "Text":{
            "NumReport.Num1":"ss",
            "NumReport.Num2":"ss3"
        },
        "IsSys":"0",
        "NpDay":"7",
        "IsStop":"0",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 16:11:23",
        "CreatedByID":"2253",
        "CreatedTime":"2016-03-01 14:28:51",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"704",
                "ID":"899",
                "UserID":"42204",
                "CreatedTime":"2016-03-02 21:38:59"
            },
            {
                "Type":"1",
                "DeptID":"704",
                "ID":"899",
                "UserID":"14627",
                "CreatedTime":"2016-03-02 21:38:59"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"899",
                "UserID":"108",
                "CreatedTime":"2016-03-02 21:38:59"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"899",
                "UserID":"152029",
                "CreatedTime":"2016-03-02 21:38:59"
            },
            {
                "Type":"1",
                "DeptID":"324",
                "ID":"899",
                "UserID":"4365",
                "CreatedTime":"2016-03-02 21:38:59"
            },
            {
                "Type":"1",
                "DeptID":"324",
                "ID":"899",
                "UserID":"4364",
                "CreatedTime":"2016-03-02 21:38:59"
            }
        ],
        "NpStopTime":"2016-03-27 08:00:00",
        "name":"ce",
        "user":"\u8881\u5a67",
        "date":"2016-03-01 14:28:51",
        "status":"0"
    },
    {
        "ID":"898",
        "Name":"\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e863",
        "OwnerID":"2253",
        "Text":{
            "NumReport.Num1":"\u91d1\u989d1",
            "NumReport.Num2":"\u91d1\u989d2",
            "NumReport.Num3":"\u91d1\u989d3",
            "NumReport.Num4":"\u91d1\u989d4"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:37:02",
        "CreatedByID":"2253",
        "CreatedTime":"2016-02-29 14:58:42",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"898",
                "UserID":"42349",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"898",
                "UserID":"41376",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"898",
                "UserID":"54024",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"898",
                "UserID":"2543",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"704",
                "ID":"898",
                "UserID":"151964",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"704",
                "ID":"898",
                "UserID":"42204",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"704",
                "ID":"898",
                "UserID":"14627",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"706",
                "ID":"898",
                "UserID":"41789",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"706",
                "ID":"898",
                "UserID":"17513",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"706",
                "ID":"898",
                "UserID":"152043",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"706",
                "ID":"898",
                "UserID":"152086",
                "CreatedTime":"2016-02-29 14:58:43"
            },
            {
                "Type":"1",
                "DeptID":"718",
                "ID":"898",
                "UserID":"54021",
                "CreatedTime":"2016-02-29 14:58:43"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"108",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"152029",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"693",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"21",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"19",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"18",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"898",
                "UserID":"17",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"324",
                "ID":"898",
                "UserID":"4365",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"324",
                "ID":"898",
                "UserID":"81",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"351",
                "ID":"898",
                "UserID":"41631",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"351",
                "ID":"898",
                "UserID":"41152",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"351",
                "ID":"898",
                "UserID":"17643",
                "CreatedTime":"2016-02-29 14:58:42"
            },
            {
                "Type":"1",
                "DeptID":"351",
                "ID":"898",
                "UserID":"17629",
                "CreatedTime":"2016-02-29 14:58:42"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e863",
        "user":"\u8881\u5a67",
        "date":"2016-02-29 14:58:42",
        "status":"1"
    },
    {
        "ID":"882",
        "Name":"\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e862",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u91d1\u989d1",
            "NumReport.Num2":"\u91d1\u989d2",
            "NumReport.Num3":"\u91d1\u989d3",
            "NumReport.Num4":"\u91d1\u989d4"
        },
        "IsSys":"0",
        "NpDay":"5",
        "IsStop":"1",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-29 14:57:45",
        "CreatedByID":"4365",
        "CreatedTime":"2016-02-24 14:49:50",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"882",
                "UserID":"0",
                "CreatedTime":"2016-02-24 14:49:50"
            }
        ],
        "TplUp":[
            {
                "Type":"2",
                "DeptID":"673",
                "ID":"882",
                "UserID":"0",
                "CreatedTime":"2016-02-24 14:49:50"
            }
        ],
        "NpStopTime":"2016-03-25 08:00:00",
        "name":"\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e862",
        "user":"\u7b80\u7389",
        "date":"2016-02-24 14:49:50",
        "status":"1"
    },
    {
        "ID":"881",
        "Name":"\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e86",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u91d1\u989d1",
            "NumReport.Num2":"\u91d1\u989d2",
            "NumReport.Num3":"\u91d1\u989d3",
            "NumReport.Num4":"\u91d1\u989d4"
        },
        "IsSys":"0",
        "NpDay":"5",
        "IsStop":"1",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-29 14:57:44",
        "CreatedByID":"4365",
        "CreatedTime":"2016-02-24 09:19:09",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"881",
                "UserID":"0",
                "CreatedTime":"2016-02-24 14:52:40"
            }
        ],
        "TplUp":[
            {
                "Type":"2",
                "DeptID":"673",
                "ID":"881",
                "UserID":"0",
                "CreatedTime":"2016-02-24 14:52:40"
            }
        ],
        "NpStopTime":"2016-03-25 08:00:00",
        "name":"\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e86",
        "user":"\u7b80\u7389",
        "date":"2016-02-24 09:19:09",
        "status":"1"
    },
    {
        "ID":"880",
        "Name":"\u5143\u5bb5\u8282\u8fc7\u4e86",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u91d1\u989d"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-24 09:14:27",
        "CreatedByID":"4365",
        "CreatedTime":"2016-02-24 09:14:27",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"681",
                "ID":"880",
                "UserID":"41774",
                "CreatedTime":"2016-02-24 09:14:28"
            },
            {
                "Type":"1",
                "DeptID":"682",
                "ID":"880",
                "UserID":"42159",
                "CreatedTime":"2016-02-24 09:14:28"
            },
            {
                "Type":"1",
                "DeptID":"681",
                "ID":"880",
                "UserID":"42301",
                "CreatedTime":"2016-02-24 09:14:28"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"880",
                "UserID":"19",
                "CreatedTime":"2016-02-24 09:14:28"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"880",
                "UserID":"21",
                "CreatedTime":"2016-02-24 09:14:28"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u5143\u5bb5\u8282\u8fc7\u4e86",
        "user":"\u7b80\u7389",
        "date":"2016-02-24 09:14:27",
        "status":"1"
    },
    {
        "ID":"879",
        "Name":"\u590d\u5236---\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u6d4b\u8bd50111"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 15:57:28",
        "CreatedByID":"4365",
        "CreatedTime":"2016-02-23 16:27:45",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"879",
                "UserID":"21",
                "CreatedTime":"2016-02-23 16:27:45"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"879",
                "UserID":"108",
                "CreatedTime":"2016-02-23 16:27:45"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"879",
                "UserID":"19",
                "CreatedTime":"2016-02-23 16:27:45"
            },
            {
                "Type":"1",
                "DeptID":"682",
                "ID":"879",
                "UserID":"42159",
                "CreatedTime":"2016-02-23 16:27:45"
            }
        ],
        "NpStopTime":"2016-03-21 08:00:00",
        "name":"\u590d\u5236---\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "user":"\u7b80\u7389",
        "date":"2016-02-23 16:27:45",
        "status":"1"
    },
    {
        "ID":"878",
        "Name":"\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u6d4b\u8bd50111"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-23 16:27:08",
        "CreatedByID":"4365",
        "CreatedTime":"2016-02-22 10:38:31",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"878",
                "UserID":"21",
                "CreatedTime":"2016-02-23 16:27:09"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"878",
                "UserID":"108",
                "CreatedTime":"2016-02-23 16:27:09"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"878",
                "UserID":"19",
                "CreatedTime":"2016-02-23 16:27:08"
            },
            {
                "Type":"1",
                "DeptID":"682",
                "ID":"878",
                "UserID":"42159",
                "CreatedTime":"2016-02-23 16:27:08"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "user":"\u7b80\u7389",
        "date":"2016-02-22 10:38:31",
        "status":"1"
    },
    {
        "ID":"877",
        "Name":"\u5143\u5bb5\u8282\u6d4b\u8bd51",
        "OwnerID":"4365",
        "Text":{
            "NumReport.Num1":"\u6d4b\u8bd51"
        },
        "IsSys":"0",
        "NpDay":"5",
        "IsStop":"1",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-01 14:59:12",
        "CreatedByID":"4365",
        "CreatedTime":"2016-02-22 10:37:24",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"877",
                "UserID":"0",
                "CreatedTime":"2016-02-22 10:37:24"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"877",
                "UserID":"0",
                "CreatedTime":"2016-02-22 10:37:24"
            }
        ],
        "NpStopTime":"2016-03-25 08:00:00",
        "name":"\u5143\u5bb5\u8282\u6d4b\u8bd51",
        "user":"\u7b80\u7389",
        "date":"2016-02-22 10:37:24",
        "status":"1"
    },
    {
        "ID":"876",
        "Name":"\u6d4b\u8bd5",
        "OwnerID":"2253",
        "Text":{
            "NumReport.Num1":"112"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"week",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-01 14:59:18",
        "CreatedByID":"2253",
        "CreatedTime":"2016-02-21 17:02:43",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"876",
                "UserID":"21",
                "CreatedTime":"2016-02-21 17:02:43"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"876",
                "UserID":"108",
                "CreatedTime":"2016-02-21 17:02:43"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"876",
                "UserID":"19",
                "CreatedTime":"2016-02-21 17:02:43"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"876",
                "UserID":"21",
                "CreatedTime":"2016-02-21 17:02:43"
            }
        ],
        "NpStopTime":"2016-03-21 08:00:00",
        "name":"\u6d4b\u8bd5",
        "user":"\u8881\u5a67",
        "date":"2016-02-21 17:02:43",
        "status":"1"
    },
    {
        "ID":"875",
        "Name":"\u9500\u552e\u65e5\u62a599",
        "OwnerID":"2527",
        "Text":{
            "NumReport.Num1":"\u5e93\u5b58"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"1",
        "NpType":"day",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-26 16:16:04",
        "CreatedByID":"2527",
        "CreatedTime":"2016-02-20 16:46:56",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"875",
                "UserID":"0",
                "CreatedTime":"2016-02-20 16:46:56"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"875",
                "UserID":"0",
                "CreatedTime":"2016-02-20 16:46:56"
            }
        ],
        "NpStopTime":"2016-03-24 08:00:00",
        "name":"\u9500\u552e\u65e5\u62a599",
        "user":"\u5218\u83f2\u83f2z",
        "date":"2016-02-20 16:46:56",
        "status":"1"
    },
    {
        "ID":"874",
        "Name":"\u590d\u5236----\u9500\u552e\u6708\u62a5555",
        "OwnerID":"2253",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d33"
        },
        "IsSys":"0",
        "NpDay":"10",
        "IsStop":"1",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-26 16:16:00",
        "CreatedByID":"2253",
        "CreatedTime":"2016-02-19 15:58:55",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"874",
                "UserID":"0",
                "CreatedTime":"2016-02-19 15:58:55"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"874",
                "UserID":"0",
                "CreatedTime":"2016-02-19 15:58:55"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u590d\u5236----\u9500\u552e\u6708\u62a5555",
        "user":"\u8881\u5a67",
        "date":"2016-02-19 15:58:55",
        "status":"1"
    },
    {
        "ID":"873",
        "Name":"\u9500\u552e\u6708\u62a555566",
        "OwnerID":"2527",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d33"
        },
        "IsSys":"0",
        "NpDay":"19",
        "IsStop":"1",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-02-19 15:50:49",
        "CreatedByID":"2527",
        "CreatedTime":"2016-02-19 15:50:49",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"873",
                "UserID":"0",
                "CreatedTime":"2016-02-19 15:50:49"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"873",
                "UserID":"0",
                "CreatedTime":"2016-02-19 15:50:49"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u9500\u552e\u6708\u62a555566",
        "user":"\u5218\u83f2\u83f2z",
        "date":"2016-02-19 15:50:49",
        "status":"1"
    },
    {
        "ID":"872",
        "Name":"\u9500\u552e\u6708\u62a5555",
        "OwnerID":"2527",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d33"
        },
        "IsSys":"0",
        "NpDay":"19",
        "IsStop":"1",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-10 16:52:18",
        "CreatedByID":"2527",
        "CreatedTime":"2016-02-19 15:49:13",
        "TplView":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"872",
                "UserID":"0",
                "CreatedTime":"2016-02-19 15:49:13"
            }
        ],
        "TplUp":[
            {
                "Type":"0",
                "DeptID":"0",
                "ID":"872",
                "UserID":"0",
                "CreatedTime":"2016-02-19 15:49:13"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u9500\u552e\u6708\u62a5555",
        "user":"\u5218\u83f2\u83f2z",
        "date":"2016-02-19 15:49:13",
        "status":"1"
    },
    {
        "ID":"871",
        "Name":"\u9500\u552e\u6708\u62a533",
        "OwnerID":"2527",
        "Text":{
            "NumReport.Num1":"\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys":"0",
        "NpDay":"1",
        "IsStop":"0",
        "NpType":"month",
        "IsDeleted":"0",
        "ModifiedTime":"2016-03-24 08:44:44",
        "CreatedByID":"2527",
        "CreatedTime":"2016-02-19 15:48:20",
        "TplView":[
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"871",
                "UserID":"42349",
                "CreatedTime":"2016-02-19 15:48:20"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"871",
                "UserID":"54024",
                "CreatedTime":"2016-02-19 15:48:20"
            }
        ],
        "TplUp":[
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"871",
                "UserID":"19",
                "CreatedTime":"2016-02-19 15:48:20"
            },
            {
                "Type":"1",
                "DeptID":"352",
                "ID":"871",
                "UserID":"21",
                "CreatedTime":"2016-02-19 15:48:20"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"871",
                "UserID":"42349",
                "CreatedTime":"2016-02-19 15:48:20"
            },
            {
                "Type":"1",
                "DeptID":"703",
                "ID":"871",
                "UserID":"54024",
                "CreatedTime":"2016-02-19 15:48:20"
            }
        ],
        "NpStopTime":"2016-03-31 08:00:00",
        "name":"\u9500\u552e\u6708\u62a533",
        "user":"\u5218\u83f2\u83f2z",
        "date":"2016-02-19 15:48:20",
        "status":"0"
    }
];
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
];
let columns = [
    {text: '报表名称', datafield: 'name', width: 230},
    {text: '创建人', datafield: 'user', width: 70},
    {text: '创建时间', datafield: 'date', width: 160},
    {text: '状态', datafield: 'IsStop', width: 60, cellsrenderer: function(rowData, column, value){
        return value == 0 ? '启动' : '停止'
    }},
    {text: '操作', datafield: 'ID', width: 265, cellsrenderer: function(rowData, column, value){
        // this -> 所在行<Tr/>
        return (
            <div>
                <button onClick = {(e) => {alert('ID:' + value)}}>详情</button>
                <button onClick = {(e) =>{this.refresh(Object.assign({}, rowData, {IsStop: rowData.IsStop ^ 1 }))} }>{rowData.IsStop == 1 ? '启用' : '停止' }</button>
                <button>复制新建</button>
            </div>

        )
        //return (<EditBtn    deletename = '删除' ondelete = {()=>{this.refresh(Object.assign({}, rowData, {name: 'jdkaljdksa'}));}}  editname = '编辑' onedit = {function(){console.log(rowData)}}/>)
    }
    },
    {text: '系统', datafield: 'IsSys', width: 265, cellsrenderer: function(rowData, column, value){

        return (<div>{ value == '1' ? '是' : '否'}</div>)

    }
    }
];

/*
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
    getInitialState: function() {
        return {
            row: this.props.row
        };
    },
    refresh: function(row, column){
        this.setState({
            row: row
        })
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

                    this.resolveRow(this.state.row, this.props.columns).map(function(item, i){
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


// Jtable
var Jtable = React.createClass({
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
    <Jtable items = {items} columns = {columns} />,
    document.getElementById('jtable')
);

*/

let table = ReactDOM.render(
    <Table
        columns = {columns}
        rows = {items}
    />,
    document.getElementById('table')
);
document.getElementById('refreshTable').onclick = table.refresh;