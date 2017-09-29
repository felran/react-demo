import React, {Component} from 'react';
import {Button, Table,Icon} from 'antd';
import ActivitiesForm from './activitiesForm';
import HttpService from '../../utils/httpService';
import './activities.css';

const List = (props) => {
    const column = [
        {title: '名称', key: 'name', dataIndex: 'name'},
        {title: '价格', key: 'price', dataIndex: 'price'},
        {title: '活动价', key: 'salePrice', dataIndex: 'salePrice'}
    ];
    return (
            <Table columns={column} dataSource={props.list}/>
    )
};
class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            fields: {
                price:0,
                salePrice:0,
                startDate:new Date(),
                endDate:new Date(new Date().getTime()+7*24*60*60*1000)
            }
        };
        this.getList();
    }
    getList = () => {
        let _this = this;
        HttpService('activities', 'getAll', 'GET').then(data => {
            _this.setState({list: data});
        });
    };
    openAddModal = () => {
        this.setState({showAddModal: true});
    };
    hideAddModal = ()=>{
        this.setState({showAddModal:false});
    };
    render() {
        if(!this.state.showAddModal) {
            return (<div className="activities-content">
                        <div className="activities-toolbar"><Button onClick={this.openAddModal.bind(this)}>添加</Button></div>
                        <div className="activities-table">
                            <List list={this.state.list}/>
                        </div>
                    </div>);
        }else {
            return (<div className="activities-content">
                        <div className="activities-editor-title">
                            <span className="left" onClick={this.hideAddModal.bind(this)}><Icon type="arrow-left" />返回列表</span>
                            <span>添加活动商品</span>
                        </div>
                        <ActivitiesForm {...this.state.fields} onFieldChange={this.fieldChange}/>
                    </div>);
        }
    }
}

export default Activities;