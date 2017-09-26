import React,{Component} from 'react';
import {Button,Table} from 'antd';
import HttpService from '../../utils/httpService';
const List=(props)=>{
    const column = [
        {title:'名称',key:'name',dataIndex:'name'},
        {title:'价格',key:'price',dataIndex:'price'},
        {title:'活动价',key:'salePrice',dataIndex:'salePrice'}
    ];
    return(
            <Table columns={column} dataSource={props.list}></Table>
    )
};
class Activities extends Component{
    constructor(props){
        super(props);
    }
    getList(){
        HttpService('activities','getAll','GET').then(data=>{
            this.props.list = data;
        });
    }
    componentDidMount(){
        this.getList();
    }
    render() {
        return (
                <div className="activities-content">
                    <div className="activities-toolbar"><Button>添加</Button></div>
                    <div className="activities-table">
                        <List {...this.props}/>
                    </div>
                </div>
        )
    }
};
export default Activities;