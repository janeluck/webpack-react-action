
/*
* text: 列名称
*
* */
var columns = [
    {text: '报表名称', datafield: 'name', width: 230},
    {text: '创建人', datafield: 'user', width: 70},
    {text: '创建时间', datafield: 'date', width: 160},
    {text: '状态', datafield: 'status', width: 60},
    {text: '操作', datafield: 'action', width: 265, cellsrenderer: function(rowData, column, value){
        // this -> 所在行<Tr/>
        return (<EditBtn    deletename = '删除' ondelete = {()=>{this.refresh(Object.assign({}, rowData, {name: 'jdkaljdksa'}));console.log(rowData); console.log(value)}}  editname = '编辑' onedit = {function(){console.log(rowData)}}/>)
    }
    },
    {text: '系统', datafield: 'IsSys', width: 265, cellsrenderer: function(rowData, column, value){

        return (<div>{ value == '1' ? '是' : '否'}</div>)

    }
    }
];