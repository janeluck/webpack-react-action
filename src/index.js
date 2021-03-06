/**
 * Created by jane on 3/5/16.
 */
import { isPlainObject, isFunction, isString, isArray } from 'lodash'
import Table  from './Table/'
require('./index.less')
require('./Table/table.less');
// watch index.html
require('../index.html');
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var EditBtn = React.createClass({
    render: function () {
        return (
            <div>
                <button onClick={this.props.onedit}>
                    {this.props.editname}
                </button>
                <button onClick={this.props.ondelete}>
                    {this.props.deletename}
                </button>
            </div>
        )
    }
})

// 模拟rowData
let items = [
    {
        "ID": "58",
        "Name": "\u9500\u552e\u6708\u62a5",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys": "1",
        "NpDay": "31",
        "IsStop": "0",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 16:16:10",
        "CreatedByID": "0",
        "CreatedTime": "2016-01-01 22:00:00",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "112",
                "ID": "528",
                "UserID": "42349",
                "CreatedTime": "2016-03-24 16:16:10"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "528",
                "UserID": "54024",
                "CreatedTime": "2016-03-24 16:16:10"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "528",
                "UserID": "19",
                "CreatedTime": "2016-03-24 16:16:10"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "528",
                "UserID": "21",
                "CreatedTime": "2016-03-24 16:16:10"
            },
            {
                "Type": "1",
                "DeptID": "112",
                "ID": "528",
                "UserID": "42349",
                "CreatedTime": "2016-03-24 16:16:10"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "528",
                "UserID": "54024",
                "CreatedTime": "2016-03-24 16:16:10"
            },
            {
                "Type": "1",
                "DeptID": "112",
                "ID": "528",
                "UserID": "2527",
                "CreatedTime": "2016-03-24 16:16:10"
            },
            {
                "Type": "1",
                "DeptID": "713",
                "ID": "528",
                "UserID": "42390",
                "CreatedTime": "2016-03-24 16:16:10"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "\u9500\u552e\u6708\u62a5",
        "user": "\u7cfb\u7edf",
        "date": "2016-01-01 22:00:00",
        "status": "0"
    },
    {
        "ID": "273",
        "Name": "\u9500\u552e\u5468\u62a5",
        "OwnerID": "2527",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys": "1",
        "NpDay": "7",
        "IsStop": "0",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 16:06:31",
        "CreatedByID": "0",
        "CreatedTime": "2016-01-01 22:00:00",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "273",
                "UserID": "0",
                "CreatedTime": "2016-02-27 00:05:17"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "273",
                "UserID": "0",
                "CreatedTime": "2016-02-27 00:05:17"
            }
        ],
        "NpStopTime": "2016-03-27 08:00:00",
        "name": "\u9500\u552e\u5468\u62a5",
        "user": "\u7cfb\u7edf",
        "date": "2016-01-01 22:00:00",
        "status": "0"
    },
    {
        "ID": "18",
        "Name": "\u9500\u552e\u65e5\u62a5",
        "OwnerID": "2253",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys": "1",
        "NpDay": "1",
        "IsStop": "0",
        "NpType": "day",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 16:33:05",
        "CreatedByID": "0",
        "CreatedTime": "2016-01-01 22:00:00",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "18",
                "UserID": "0",
                "CreatedTime": "2016-03-24 16:33:05"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "18",
                "UserID": "0",
                "CreatedTime": "2016-03-24 16:33:05"
            }
        ],
        "NpStopTime": "2016-03-24 08:00:00",
        "name": "\u9500\u552e\u65e5\u62a5",
        "user": "\u7cfb\u7edf",
        "date": "2016-01-01 22:00:00",
        "status": "0"
    },
    {
        "ID": "923",
        "Name": "ttttt",
        "OwnerID": "108",
        "Text": {
            "NumReport.Num1": "vvvv"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "day",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 15:32:31",
        "CreatedByID": "108",
        "CreatedTime": "2016-03-14 11:06:19",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "923",
                "UserID": "0",
                "CreatedTime": "2016-03-14 11:06:19"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "923",
                "UserID": "0",
                "CreatedTime": "2016-03-14 11:06:19"
            }
        ],
        "NpStopTime": "2016-03-24 08:00:00",
        "name": "ttttt",
        "user": "\u6881\u6bd3\u6770",
        "date": "2016-03-14 11:06:19",
        "status": "1"
    },
    {
        "ID": "908",
        "Name": "00",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "888"
        },
        "IsSys": "0",
        "NpDay": "14",
        "IsStop": "1",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 15:36:24",
        "CreatedByID": "4365",
        "CreatedTime": "2016-03-09 16:01:56",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "908",
                "UserID": "0",
                "CreatedTime": "2016-03-09 16:01:56"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "908",
                "UserID": "0",
                "CreatedTime": "2016-03-09 16:01:56"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "00",
        "user": "\u7b80\u7389",
        "date": "2016-03-09 16:01:56",
        "status": "1"
    },
    {
        "ID": "903",
        "Name": "\u6d4b\u8bd50303",
        "OwnerID": "65683",
        "Text": {
            "NumReport.Num1": "123"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "day",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 15:21:56",
        "CreatedByID": "65683",
        "CreatedTime": "2016-03-03 12:44:38",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "715",
                "ID": "903",
                "UserID": "65683",
                "CreatedTime": "2016-03-03 12:44:38"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "715",
                "ID": "903",
                "UserID": "65683",
                "CreatedTime": "2016-03-03 12:44:38"
            },
            {
                "Type": "1",
                "DeptID": "715",
                "ID": "903",
                "UserID": "152701",
                "CreatedTime": "2016-03-03 12:44:38"
            },
            {
                "Type": "1",
                "DeptID": "717",
                "ID": "903",
                "UserID": "17567",
                "CreatedTime": "2016-03-03 12:44:38"
            },
            {
                "Type": "1",
                "DeptID": "717",
                "ID": "903",
                "UserID": "151943",
                "CreatedTime": "2016-03-03 12:44:38"
            },
            {
                "Type": "1",
                "DeptID": "716",
                "ID": "903",
                "UserID": "14646",
                "CreatedTime": "2016-03-03 12:44:38"
            },
            {
                "Type": "1",
                "DeptID": "716",
                "ID": "903",
                "UserID": "54022",
                "CreatedTime": "2016-03-03 12:44:38"
            }
        ],
        "NpStopTime": "2016-03-24 08:00:00",
        "name": "\u6d4b\u8bd50303",
        "user": "lrb",
        "date": "2016-03-03 12:44:38",
        "status": "1"
    },
    {
        "ID": "899",
        "Name": "ce",
        "OwnerID": "2253",
        "Text": {
            "NumReport.Num1": "ss",
            "NumReport.Num2": "ss3"
        },
        "IsSys": "0",
        "NpDay": "7",
        "IsStop": "0",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 16:11:23",
        "CreatedByID": "2253",
        "CreatedTime": "2016-03-01 14:28:51",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "704",
                "ID": "899",
                "UserID": "42204",
                "CreatedTime": "2016-03-02 21:38:59"
            },
            {
                "Type": "1",
                "DeptID": "704",
                "ID": "899",
                "UserID": "14627",
                "CreatedTime": "2016-03-02 21:38:59"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "899",
                "UserID": "108",
                "CreatedTime": "2016-03-02 21:38:59"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "899",
                "UserID": "152029",
                "CreatedTime": "2016-03-02 21:38:59"
            },
            {
                "Type": "1",
                "DeptID": "324",
                "ID": "899",
                "UserID": "4365",
                "CreatedTime": "2016-03-02 21:38:59"
            },
            {
                "Type": "1",
                "DeptID": "324",
                "ID": "899",
                "UserID": "4364",
                "CreatedTime": "2016-03-02 21:38:59"
            }
        ],
        "NpStopTime": "2016-03-27 08:00:00",
        "name": "ce",
        "user": "\u8881\u5a67",
        "date": "2016-03-01 14:28:51",
        "status": "0"
    },
    {
        "ID": "898",
        "Name": "\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e863",
        "OwnerID": "2253",
        "Text": {
            "NumReport.Num1": "\u91d1\u989d1",
            "NumReport.Num2": "\u91d1\u989d2",
            "NumReport.Num3": "\u91d1\u989d3",
            "NumReport.Num4": "\u91d1\u989d4"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 15:37:02",
        "CreatedByID": "2253",
        "CreatedTime": "2016-02-29 14:58:42",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "898",
                "UserID": "42349",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "898",
                "UserID": "41376",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "898",
                "UserID": "54024",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "898",
                "UserID": "2543",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "704",
                "ID": "898",
                "UserID": "151964",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "704",
                "ID": "898",
                "UserID": "42204",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "704",
                "ID": "898",
                "UserID": "14627",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "706",
                "ID": "898",
                "UserID": "41789",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "706",
                "ID": "898",
                "UserID": "17513",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "706",
                "ID": "898",
                "UserID": "152043",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "706",
                "ID": "898",
                "UserID": "152086",
                "CreatedTime": "2016-02-29 14:58:43"
            },
            {
                "Type": "1",
                "DeptID": "718",
                "ID": "898",
                "UserID": "54021",
                "CreatedTime": "2016-02-29 14:58:43"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "108",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "152029",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "693",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "21",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "19",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "18",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "898",
                "UserID": "17",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "324",
                "ID": "898",
                "UserID": "4365",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "324",
                "ID": "898",
                "UserID": "81",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "351",
                "ID": "898",
                "UserID": "41631",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "351",
                "ID": "898",
                "UserID": "41152",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "351",
                "ID": "898",
                "UserID": "17643",
                "CreatedTime": "2016-02-29 14:58:42"
            },
            {
                "Type": "1",
                "DeptID": "351",
                "ID": "898",
                "UserID": "17629",
                "CreatedTime": "2016-02-29 14:58:42"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e863",
        "user": "\u8881\u5a67",
        "date": "2016-02-29 14:58:42",
        "status": "1"
    },
    {
        "ID": "882",
        "Name": "\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e862",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u91d1\u989d1",
            "NumReport.Num2": "\u91d1\u989d2",
            "NumReport.Num3": "\u91d1\u989d3",
            "NumReport.Num4": "\u91d1\u989d4"
        },
        "IsSys": "0",
        "NpDay": "5",
        "IsStop": "1",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-29 14:57:45",
        "CreatedByID": "4365",
        "CreatedTime": "2016-02-24 14:49:50",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "882",
                "UserID": "0",
                "CreatedTime": "2016-02-24 14:49:50"
            }
        ],
        "TplUp": [
            {
                "Type": "2",
                "DeptID": "673",
                "ID": "882",
                "UserID": "0",
                "CreatedTime": "2016-02-24 14:49:50"
            }
        ],
        "NpStopTime": "2016-03-25 08:00:00",
        "name": "\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e862",
        "user": "\u7b80\u7389",
        "date": "2016-02-24 14:49:50",
        "status": "1"
    },
    {
        "ID": "881",
        "Name": "\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e86",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u91d1\u989d1",
            "NumReport.Num2": "\u91d1\u989d2",
            "NumReport.Num3": "\u91d1\u989d3",
            "NumReport.Num4": "\u91d1\u989d4"
        },
        "IsSys": "0",
        "NpDay": "5",
        "IsStop": "1",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-29 14:57:44",
        "CreatedByID": "4365",
        "CreatedTime": "2016-02-24 09:19:09",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "881",
                "UserID": "0",
                "CreatedTime": "2016-02-24 14:52:40"
            }
        ],
        "TplUp": [
            {
                "Type": "2",
                "DeptID": "673",
                "ID": "881",
                "UserID": "0",
                "CreatedTime": "2016-02-24 14:52:40"
            }
        ],
        "NpStopTime": "2016-03-25 08:00:00",
        "name": "\u590d\u5236\u4e86----\u5143\u5bb5\u8282\u8fc7\u4e86",
        "user": "\u7b80\u7389",
        "date": "2016-02-24 09:19:09",
        "status": "1"
    },
    {
        "ID": "880",
        "Name": "\u5143\u5bb5\u8282\u8fc7\u4e86",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u91d1\u989d"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "day",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-24 09:14:27",
        "CreatedByID": "4365",
        "CreatedTime": "2016-02-24 09:14:27",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "681",
                "ID": "880",
                "UserID": "41774",
                "CreatedTime": "2016-02-24 09:14:28"
            },
            {
                "Type": "1",
                "DeptID": "682",
                "ID": "880",
                "UserID": "42159",
                "CreatedTime": "2016-02-24 09:14:28"
            },
            {
                "Type": "1",
                "DeptID": "681",
                "ID": "880",
                "UserID": "42301",
                "CreatedTime": "2016-02-24 09:14:28"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "880",
                "UserID": "19",
                "CreatedTime": "2016-02-24 09:14:28"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "880",
                "UserID": "21",
                "CreatedTime": "2016-02-24 09:14:28"
            }
        ],
        "NpStopTime": "2016-03-24 08:00:00",
        "name": "\u5143\u5bb5\u8282\u8fc7\u4e86",
        "user": "\u7b80\u7389",
        "date": "2016-02-24 09:14:27",
        "status": "1"
    },
    {
        "ID": "879",
        "Name": "\u590d\u5236---\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u6d4b\u8bd50111"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 15:57:28",
        "CreatedByID": "4365",
        "CreatedTime": "2016-02-23 16:27:45",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "879",
                "UserID": "21",
                "CreatedTime": "2016-02-23 16:27:45"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "879",
                "UserID": "108",
                "CreatedTime": "2016-02-23 16:27:45"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "879",
                "UserID": "19",
                "CreatedTime": "2016-02-23 16:27:45"
            },
            {
                "Type": "1",
                "DeptID": "682",
                "ID": "879",
                "UserID": "42159",
                "CreatedTime": "2016-02-23 16:27:45"
            }
        ],
        "NpStopTime": "2016-03-21 08:00:00",
        "name": "\u590d\u5236---\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "user": "\u7b80\u7389",
        "date": "2016-02-23 16:27:45",
        "status": "1"
    },
    {
        "ID": "878",
        "Name": "\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u6d4b\u8bd50111"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "day",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-23 16:27:08",
        "CreatedByID": "4365",
        "CreatedTime": "2016-02-22 10:38:31",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "878",
                "UserID": "21",
                "CreatedTime": "2016-02-23 16:27:09"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "878",
                "UserID": "108",
                "CreatedTime": "2016-02-23 16:27:09"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "878",
                "UserID": "19",
                "CreatedTime": "2016-02-23 16:27:08"
            },
            {
                "Type": "1",
                "DeptID": "682",
                "ID": "878",
                "UserID": "42159",
                "CreatedTime": "2016-02-23 16:27:08"
            }
        ],
        "NpStopTime": "2016-03-24 08:00:00",
        "name": "\u5143\u5bb5\u8282\u6d4b\u8bd5001",
        "user": "\u7b80\u7389",
        "date": "2016-02-22 10:38:31",
        "status": "1"
    },
    {
        "ID": "877",
        "Name": "\u5143\u5bb5\u8282\u6d4b\u8bd51",
        "OwnerID": "4365",
        "Text": {
            "NumReport.Num1": "\u6d4b\u8bd51"
        },
        "IsSys": "0",
        "NpDay": "5",
        "IsStop": "1",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-01 14:59:12",
        "CreatedByID": "4365",
        "CreatedTime": "2016-02-22 10:37:24",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "877",
                "UserID": "0",
                "CreatedTime": "2016-02-22 10:37:24"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "877",
                "UserID": "0",
                "CreatedTime": "2016-02-22 10:37:24"
            }
        ],
        "NpStopTime": "2016-03-25 08:00:00",
        "name": "\u5143\u5bb5\u8282\u6d4b\u8bd51",
        "user": "\u7b80\u7389",
        "date": "2016-02-22 10:37:24",
        "status": "1"
    },
    {
        "ID": "876",
        "Name": "\u6d4b\u8bd5",
        "OwnerID": "2253",
        "Text": {
            "NumReport.Num1": "112"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "week",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-01 14:59:18",
        "CreatedByID": "2253",
        "CreatedTime": "2016-02-21 17:02:43",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "876",
                "UserID": "21",
                "CreatedTime": "2016-02-21 17:02:43"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "876",
                "UserID": "108",
                "CreatedTime": "2016-02-21 17:02:43"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "876",
                "UserID": "19",
                "CreatedTime": "2016-02-21 17:02:43"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "876",
                "UserID": "21",
                "CreatedTime": "2016-02-21 17:02:43"
            }
        ],
        "NpStopTime": "2016-03-21 08:00:00",
        "name": "\u6d4b\u8bd5",
        "user": "\u8881\u5a67",
        "date": "2016-02-21 17:02:43",
        "status": "1"
    },
    {
        "ID": "875",
        "Name": "\u9500\u552e\u65e5\u62a599",
        "OwnerID": "2527",
        "Text": {
            "NumReport.Num1": "\u5e93\u5b58"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "1",
        "NpType": "day",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-26 16:16:04",
        "CreatedByID": "2527",
        "CreatedTime": "2016-02-20 16:46:56",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "875",
                "UserID": "0",
                "CreatedTime": "2016-02-20 16:46:56"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "875",
                "UserID": "0",
                "CreatedTime": "2016-02-20 16:46:56"
            }
        ],
        "NpStopTime": "2016-03-24 08:00:00",
        "name": "\u9500\u552e\u65e5\u62a599",
        "user": "\u5218\u83f2\u83f2z",
        "date": "2016-02-20 16:46:56",
        "status": "1"
    },
    {
        "ID": "874",
        "Name": "\u590d\u5236----\u9500\u552e\u6708\u62a5555",
        "OwnerID": "2253",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d33"
        },
        "IsSys": "0",
        "NpDay": "10",
        "IsStop": "1",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-26 16:16:00",
        "CreatedByID": "2253",
        "CreatedTime": "2016-02-19 15:58:55",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "874",
                "UserID": "0",
                "CreatedTime": "2016-02-19 15:58:55"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "874",
                "UserID": "0",
                "CreatedTime": "2016-02-19 15:58:55"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "\u590d\u5236----\u9500\u552e\u6708\u62a5555",
        "user": "\u8881\u5a67",
        "date": "2016-02-19 15:58:55",
        "status": "1"
    },
    {
        "ID": "873",
        "Name": "\u9500\u552e\u6708\u62a555566",
        "OwnerID": "2527",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d33"
        },
        "IsSys": "0",
        "NpDay": "19",
        "IsStop": "1",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-02-19 15:50:49",
        "CreatedByID": "2527",
        "CreatedTime": "2016-02-19 15:50:49",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "873",
                "UserID": "0",
                "CreatedTime": "2016-02-19 15:50:49"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "873",
                "UserID": "0",
                "CreatedTime": "2016-02-19 15:50:49"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "\u9500\u552e\u6708\u62a555566",
        "user": "\u5218\u83f2\u83f2z",
        "date": "2016-02-19 15:50:49",
        "status": "1"
    },
    {
        "ID": "872",
        "Name": "\u9500\u552e\u6708\u62a5555",
        "OwnerID": "2527",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d33"
        },
        "IsSys": "0",
        "NpDay": "19",
        "IsStop": "1",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-10 16:52:18",
        "CreatedByID": "2527",
        "CreatedTime": "2016-02-19 15:49:13",
        "TplView": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "872",
                "UserID": "0",
                "CreatedTime": "2016-02-19 15:49:13"
            }
        ],
        "TplUp": [
            {
                "Type": "0",
                "DeptID": "0",
                "ID": "872",
                "UserID": "0",
                "CreatedTime": "2016-02-19 15:49:13"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "\u9500\u552e\u6708\u62a5555",
        "user": "\u5218\u83f2\u83f2z",
        "date": "2016-02-19 15:49:13",
        "status": "1"
    },
    {
        "ID": "871",
        "Name": "\u9500\u552e\u6708\u62a533",
        "OwnerID": "2527",
        "Text": {
            "NumReport.Num1": "\u56de\u6b3e\u91d1\u989d"
        },
        "IsSys": "0",
        "NpDay": "1",
        "IsStop": "0",
        "NpType": "month",
        "IsDeleted": "0",
        "ModifiedTime": "2016-03-24 08:44:44",
        "CreatedByID": "2527",
        "CreatedTime": "2016-02-19 15:48:20",
        "TplView": [
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "871",
                "UserID": "42349",
                "CreatedTime": "2016-02-19 15:48:20"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "871",
                "UserID": "54024",
                "CreatedTime": "2016-02-19 15:48:20"
            }
        ],
        "TplUp": [
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "871",
                "UserID": "19",
                "CreatedTime": "2016-02-19 15:48:20"
            },
            {
                "Type": "1",
                "DeptID": "352",
                "ID": "871",
                "UserID": "21",
                "CreatedTime": "2016-02-19 15:48:20"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "871",
                "UserID": "42349",
                "CreatedTime": "2016-02-19 15:48:20"
            },
            {
                "Type": "1",
                "DeptID": "703",
                "ID": "871",
                "UserID": "54024",
                "CreatedTime": "2016-02-19 15:48:20"
            }
        ],
        "NpStopTime": "2016-03-31 08:00:00",
        "name": "\u9500\u552e\u6708\u62a533",
        "user": "\u5218\u83f2\u83f2z",
        "date": "2016-02-19 15:48:20",
        "status": "0"
    }
];

/** #渲染高级搜索单元格数据格式
 *
 * searchType(待完善)
 *   0: 该字段不支持搜索
 *   1: input类型
 *   2: 时间段选择控件类型
 *   3: select类型
 * renderData里面存放渲染单元格所需要的数据
 *
 **/
let searchColumns = {
    name: {
        searchType: 1
    },
    user: {
        searchType: 1
    },
    IsStop: {
        searchType: 3,
        renderData: {
            options: [
                {
                    text: '全部',
                    // Notes: 该条目0和1被占用,以后类似情况约定0为全部
                    value: -1,
                    default: true
                },
                {
                    text: '启动',
                    value: 1,
                    default: false
                },
                {
                    text: '停止',
                    value: 0,
                    default: false
                }

            ]
        }
    },
    IsSys: {
        searchType: 3,
        renderData: {
            options: [
                {
                    text: '全部',
                    // Notes: 该条目0和1被占用,以后类似情况约定0为全部
                    value: -1,
                    default: true
                },
                {
                    text: '是',
                    value: 1,
                    default: false
                },
                {
                    text: '否',
                    value: 0,
                    default: false
                }

            ]
        }
    },
    date: {
        searchType: 2,
        renderData: {
            startTime: '20160101',
            endTime: '20160301'
        }
    }

}
/*
 * 下面这种数据格式更清晰明了
 * searchColumns的datafield和columns的datafield字段相对应
 * 这种方式会有两层遍历导致的性能问题
 * */
/*let searchColumns = [
 {
 datafield: 'name',
 searchType: 1
 },
 {
 datafield: 'user',
 searchType: 1
 },
 {
 datafield: 'date',
 searchType: 2,
 renderData: {
 startTime: '20160101',
 endTime: '20160301'
 }
 },
 {
 datafield: 'IsStop',
 searchType: 3,
 renderData: {
 options:[
 {
 text: '全部',
 // Notes: 该条目0和1被占用,以后类似情况约定0为全部
 value: -1,
 default: true
 },
 {
 text: '启动',
 value: 1,
 default: false
 },
 {
 text: '停止',
 value: 0,
 default: false
 }

 ]
 }
 },
 // Notes: 没有搜索类型的列也可以不传
 {
 datafield: 'ID',
 searchType: 0
 },
 {
 datafield: 'IsSys',
 searchType: 3,
 renderData: {
 options:[
 {
 text: '全部',
 // Notes: 该条目0和1被占用,以后类似情况约定0为全部
 value: -1,
 default: true
 },
 {
 text: '是',
 value: 1,
 default: false
 },
 {
 text: '否',
 value: 0,
 default: false
 }

 ]
 }
 }

 ];*/

// table所用的列信息
let columns = [
    {text: '报表名称', datafield: 'name', width: 230},
    {text: '创建人', datafield: 'user', width: 70},
    {text: '创建时间', datafield: 'date', width: 160},
    {
        text: '状态', datafield: 'IsStop', width: 60, cellsrenderer: function (rowData, column, value) {
        return value == 0 ? '启动' : '停止'
    }
    },
    {
        text: '操作', datafield: 'ID', width: 265, cellsrenderer: function (rowData, column, value) {
        // this -> 所在行<Tr/>
        return (
            <div>
                <button onClick={(e) => {alert('ID:' + value)}}>详情</button>
                <button
                    onClick={(e) =>{this.refresh(Object.assign({}, rowData, {IsStop: rowData.IsStop ^ 1 }))} }>{rowData.IsStop == 1 ? '启用' : '停止' }</button>
                <button>复制新建</button>
            </div>

        )
        //return (<EditBtn    deletename = '删除' ondelete = {()=>{this.refresh(Object.assign({}, rowData, {name: 'jdkaljdksa'}));}}  editname = '编辑' onedit = {function(){console.log(rowData)}}/>)
    }
    },
    {
        text: '系统', datafield: 'IsSys', width: 265, cellsrenderer: function (rowData, column, value) {

        return (<div>{ value == '1' ? '是' : '否'}</div>)

    }
    }
];


/*


 let table = ReactDOM.render(
 <Table
 columns = {columns}
 rows = {items}
 checkMode = {true}
 searchMode= {true}
 searchColumns = {searchColumns}
 />,
 document.getElementById('table')
 );
 document.getElementById('refreshTable').onclick = table.refreshPage;
 document.getElementById('getCheckedRows').onclick = function(){
 console.log(table.getCheckedRows())
 };
 */


var ProductCategoryRow = React.createClass({
    render: function () {
        return (<tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>);
    }
});

var ProductRow = React.createClass({
    render: function () {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        }.bind(this));
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
    handleInputChange: function () {

        this.props.onUserInput(this.refs.filterInput.value, this.refs.stockInput.checked)
    },

    render: function () {
        return (
            <form>
                <input ref="filterInput" type="text" placeholder="Search..." value={this.props.filterText}
                       onChange={this.handleInputChange}/>
                <p>
                    <input ref="stockInput" type="checkbox" checked={this.props.inStockOnly}
                           onChange={this.handleInputChange}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState: function () {
        return {
            filterText: '',
            inStockOnly: false
        };
    },
    handleUserInput: function (filterText, inStockOnly) {
        this.setState({
            filterText,
            inStockOnly

        })
    },

    render: function () {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                    ref={(searchBar) => {
                       // console.log(ReactDOM.findDOMNode(searchBar))

                    }}
                />
                <ProductTable
                    products={this.props.products}
                    {...this.state}
                />
            </div>
        );
    }
});


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('productTable')
);

var Cards = React.createClass({
    render(){
        //console.log(this.props.children)
        return (
            <div>
                {this.props.children}
                <p>Cards!</p>
            </div>

        )
    }
})
var Card = React.createClass({
    render(){
        return (
            <div>
                <p>one card</p>
            </div>
        )
    }
})
ReactDOM.render(
    <Cards>
        <Card />
        <Card />
    </Cards>,


    document.getElementById('childrenDemo'),
    function(){console.log(arguments)}

);


var CheckLink = React.createClass({
    render: function () {
        // This takes any props passed to CheckLink and copies them to <a>
        return <a {...this.props}>{'√ '}{this.props.children}</a>;
    }
});

/*ReactDOM.render(
    <CheckLink
        ref={(CheckLink) => {console.log(ReactDOM.findDOMNode(CheckLink))}}

        href="/checked.html">
        Click here!
    </CheckLink>,
    document.getElementById('example')
);*/

/*import Script from  './common/Script'
 ReactDOM.render(
 <Script src = "http://front.upesn.com/esn/js/lib/jq/jquery-1.7.1.min.js"/>,
 document.getElementById('example')
 );*/


var MyComponent = React.createClass({
    handleClick: function() {
        // Explicitly focus the text input using the raw DOM API.
        if (this.myTextInput !== null) {
            this.myTextInput.focus();
        }
    },
    render: function() {
        // The ref attribute is a callback that saves a reference to the
        // component to this.myTextInput when the component is mounted.
        return (
            <div>
                <input type="text" ref={(ref) => this.myTextInput = ref} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
});




var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var TodoList = React.createClass({
    componentWillReceiveProps: function(nextProps) {

        console.log(nextProps)
    },
    getInitialState: function() {
        return {items: ['hello', 'world', 'click', 'me'],
            value: ''
            };
    },
    handleAdd: function() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    handleInput: function (e) {

        this.setState({
            value: e.target.value
        })
    },
    handleCopy: function(e){
        console.log(e.target.value)
    },
    render: function() {

        var items = this.state.items.map(function(item, i) {
            return (
                <div key={item}  onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div  >
                <button onClick={this.handleAdd}>Add Item</button>
                <input type="text" value={this.state.value} onChange={this.handleInput} onCopy={this.handleCopy}/>
                <input type="text" value={null}/>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});


ReactDOM.render(
    <TodoList  />,
    document.getElementById('example')
);

function myPrompt(question){
    return prompt('what\'s your name')
}

//let names = ['jane', 'lucy', myPrompt('what\'s your name')]


//console.log(names)


ReactDOM.render(React.createElement('ul', { className: 'my-list', style:{
    color: 'red',
    height: 10,
    border: '1px solid yellow'
} }, 'sds'), document.getElementById('jun'));