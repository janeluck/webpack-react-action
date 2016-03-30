/**
 * Created by janeluck on 3/26/16.
 */
import Immutable from 'immutable'
import { isPlainObject, isFunction, isString, isArray } from 'lodash'


// todo: 样式的默认值和自定义
var React = require('react');
let arr = [
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

function getRowData(){
    return arr.reverse()
}


export default class Td extends React.Component {

    render() {

        return (
            <td>
                {this.props.text}
            </td>
        )
    }
}

export default class Tr extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isChecked: this.props.isOnChecked
        };
        this.refresh = this.refresh.bind(this)
        this.renderCheckbox = this.renderCheckbox.bind(this)
        this.checkedToggle = this.checkedToggle.bind(this)

    }


    checkedToggle(index){

        // 可换成dispatch

        this.props.onRowChecked(index, !this.props.isOnChecked)
    }

    renderCheckbox(checkMode){

        if (checkMode) {
            return (
                <td>
                    <input   onChange = {this.checkedToggle.bind(this,this.props.index)} type="checkbox" checked = {this.props.isOnChecked}/>

                </td>
            )
        }


        return  null

    }

    refresh(rowData){
        // 子->父组件通信 todo: 把上下文换成Table
        this.props.onRowChange(rowData, this.props.index)
    }
    // 解析需要展示的列, 并从row中取出字段对应内容(文本或者虚拟dom)
    resolveRow(row){

        return this.props.columns.map((col, i) => col['datafield'])
            .map((keyName, i) =>  ({
                    keyName: keyName,
                    // 判断该列是否为自定义渲染
                    text: isFunction(this.props.columns[i]['cellsrenderer']) ?  this.props.columns[i]['cellsrenderer'].call(this, row, this.props.columns[i], row[keyName]) : row[keyName]
                })
            )

    }
    render() {


        return (

            <tr>
                
                {   this.renderCheckbox(this.props.checkMode)}
                

                {
                    this.resolveRow(this.props.row).map(function (item, i) {
                        return (<Td text={item.text} key={i}/>)
                    })
                }
            </tr>

        )
    }
}
export default class Thead extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isChecked: this.props.isAllchecked
        };
        this.renderCheckbox = this.renderCheckbox.bind(this)
        this.checkedToggle = this.checkedToggle.bind(this)

    };

    checkedToggle(){

        // 可换成dispatch

        this.props.onAllChecked(!this.props.isAllchecked)
    }

    renderCheckbox(checkMode){


        if (checkMode) {
            return (<th><input onChange = {this.checkedToggle.bind(this)} type="checkbox" checked = {this.props.isAllchecked}/></th>)
        }
        return null
    }

    resolveColumnsTitle(){
        //todo: 判断字段hidden是否存在和其的值
        /* 返回表头文本数组
           ['姓名', '年龄']
         */
        return this.props.columns.map((col, i) => col['text'])
    }

    render() {


        return (

            <thead>
                
            <tr>

                {this.renderCheckbox(this.props.checkMode)}
                {this.resolveColumnsTitle().map((colName, i)=><th key = {i}>{colName}</th>)}

            </tr>
            <tr>
                <th></th>
                {this.resolveColumnsTitle().map((colName, i)=><th key={i}><nput type="text"/></th>)}

            </tr>
            </thead>
        )
    }
}
export default class Table extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            columns: this.props.columns,
            rows: this.props.rows,
            checkedRows: new Set()
        };
        this.refreshPage = this.refreshPage.bind(this)
        this.getCheckedRows = this.getCheckedRows.bind(this)
        this.onRowChange = this.onRowChange.bind(this)
        this.onRowChecked = this.onRowChecked.bind(this)
        this.renderSearch = this.renderSearch.bind(this)

    }


    // 页面数据刷新接口，可用于翻页等
    refreshPage() {
        this.setState({
            rows: getRowData(),
            checkedRows: new Set()
        })

    }

    // 全选按钮
    onAllChecked(isChecked){
        let newState = this.state.checkedRows

        if (isChecked) {
            for(let i = 0; i< this.state.rows.length; i++){
                newState.add(i);
            }
        } else {
            newState.clear()

        }

        this.setState({
            checkedRows: newState
        })

    }

    onRowChecked(i, isChecked){

        let newState = this.state.checkedRows


        isChecked ? newState.add(i) : newState.delete(i)



        this.setState({
            checkedRows: newState
        })


    }
    onRowChange(row, i){
        // setState是异步的
        this.setState(
            {rows: [
            ...(this.state.rows.slice(0, i)),
            row,
            ...(this.state.rows.slice(i+1))
        ]});

    }

    // 获取已选中的行， 返回行索引和行数据
    getCheckedRows() {

        let obj = []
        for ( let i of this.state.checkedRows.values() ){

            obj.push({
                index: i,
                rowData: this.state.rows[i]
            })
        }

        return obj
    }

    renderSearch(searchType) {
        switch (searchType || 0) {
            case 1:
                return (<input type="text"/>)
            case 2:
                return (<select>
                    <option>0</option>
                    <option>1</option>
                </select>)

        }
        return ''
    }
    render() {

        return (
            <div>
                <button>高级搜索</button>
                <button>确定</button>
                <table>

                    <Thead columns = {this.state.columns}
                           checkMode = {this.props.checkMode}
                           onAllChecked = {this.onAllChecked.bind(this)}
                           isAllchecked = {this.state.checkedRows.size === this.state.rows.length}
                    />
                    <tbody>
                    <tr>
                        {/*判断checkMode*/}
                        <td></td>


                        {this.state.columns.map((item, i) => (<th key = {i}>{this.renderSearch(item.searchType)}</th>))}

                    </tr>

                </tbody>

               </table>

                <table>

                    <tbody>
                    {this.state.rows.map((row, i) => (
                        <Tr
                            checkMode = {this.props.checkMode}
                            index = {i}
                            onRowChange = {this.onRowChange.bind(this)}
                            onRowChecked = {this.onRowChecked.bind(this)}
                            columns = {this.state.columns}
                            row = {row}
                            key = {i}
                            isOnChecked = {this.state.checkedRows.has(i)}
                        />
                    ))}
                    </tbody>

                </table>




            </div>
        )
    }
}


Table.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    checkMode: React.PropTypes.bool
}
Table.defaultProps = {
    checkMode: false
}