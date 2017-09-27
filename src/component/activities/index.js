import React,{Component} from 'react';
import {Button,Table,Modal} from 'antd';
import HttpService from '../../utils/httpService';
const List=(props)=>{
    const column = [
        {title:'名称',key:'name',dataIndex:'name'},
        {title:'价格',key:'price',dataIndex:'price'},
        {title:'活动价',key:'salePrice',dataIndex:'salePrice'}
    ];
    return(
            <Table columns={column} dataSource={props.list}/>
    )
};
const AddModal = (props)=>{
    return (

                <form>

                </form>
    );
};
class Activities extends Component{
    constructor(props){
        super(props);
        this.state = {list:[]};
        this.getList();
    }
    getList=()=>{
        let _this = this;
        HttpService('activities','getAll','GET').then(data=>{
            _this.setState({list:data});
        });
    };
    openAddModal=()=>{
        this.setState({showAddModal:true});
    };
    onCancel=()=>{
        this.setState({showAddModal:false});
    };
    onAdd=()=>{

    };
    render() {
        return (
                <div className="activities-content">
                    <div className="activities-toolbar"><Button onClick={this.openAddModal.bind(this)}>添加</Button></div>
                    <div className="activities-table">
                        <List list={this.state.list}/>
                    </div>
                    <Modal
                            onOk={this.onAdd}
                            onCancel={this.onCancel}
                            okText='确定' cancelText='取消'
                            visible={this.state.showAddModal}
                            title='添加'>
                    </Modal>
                </div>
        )
    }
}
export default Activities;