/**
 * Created by janeluck on 3/26/16.
 */

// todo: 样式的默认值和自定义
var React = require('react');


export default class Td extends React.Component {

    render() {


        return (

            <td></td>
        )
    }
}
export default class Tr extends React.Component {
    constructor(props, context) {
        super(props, context);
        // 监测行数据的每个字段
        this.state = (Object.assign({}, ...props));
    };
    render() {


        return (

            <tr></tr>
        )
    }
}
export default class Thead extends React.Component {

    constructor(props, context) {
        super(props, context);
        // 暂时未用到, 考虑到以后的列数可变
        this.state = {
            columns: props.columns

        };
    };
    resolveColumns(){
        // todo: 判断字段hidden是否存在和其的值
        return this.state.columns.map((col, i) => col['text'])
    }

    render() {


        return (

            <thead>
            <tr>
                {this.resolveColumns().map((colName, i)=><th key = {i}>{colName}</th>)}
            </tr>
            </thead>
        )
    }
}
export default class Tbody extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            columns: props.columns,
            rows: props.rows
        };
    };
    // 解析需要展示的列, 并从row中取出字段对应值
    resolveRow() {

    }
    render() {


        return (

            <tbody>



            </tbody>
        )
    }
}
export default class Table extends React.Component {



    constructor(props, context) {
        super(props, context);
        // 暂时未用到, 考虑到以后的列数, 行数据可变
        this.state = {

            columns: props.columns,
            rows: props.rows
        };
    }
    //
    refresh() {

    }
    render() {


        return (

            <div>
                <table>
                    <Thead columns = {this.state.columns}/>
                    <Tbody rows = {this.state.rows} columns = {this.state.columns}/>
                </table>
            </div>
        )
    }
}


Table.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
}