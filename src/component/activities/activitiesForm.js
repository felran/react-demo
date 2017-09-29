import React,{Component} from 'react';
import {Form, Button, DatePicker, Input, Icon} from 'antd';
import ImageCrop from './imageCrop';
import moment from 'moment';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const TextArea  = Input.TextArea;

const canvasCover=()=>{

};
class Cover extends Component{
    constructor(props){
        super(props);
        this.state = {
            cover:props.cover
        }
    }
    inputClick=()=>{
        this.inputElement.click();
    };
    onChangeCover = (e) =>{
        const imageType = /^image\//;
        const file = e.target.files.item(0);
        if (!file || !imageType.test(file.type)) {
            return;
        }
        const reader = new FileReader();
        reader.onload = (ev) => {
            this.setState({file2Crop:ev.target.result});
        };
        reader.readAsDataURL(file);
    };
    onCropOk=(crop)=>{
        // let canvas=$('<canvas width="'+width+'" height="'+height+'"></canvas>')[0],
        //         ctx=canvas.getContext('2d');
        //
        // ctx.drawImage(image,x,y,width,height,0,0,width,height);//重绘
    };
    cancelCrop = ()=> {
        this.setState({cover: false});
    };
    render() {
        if (this.state.cover) {
            return (
                    <img src={this.state.cover}/>
            );
        }else if(this.state.file2Crop){
            return (
                    <ImageCrop src={this.state.cover} onCropOk={this.onCropOk} cancelCrop={this.cancelCrop}/>
            );
        }
        else {
            return (
                    <div>
                        <input ref={input => this.inputElement = input} onChange={this.onChangeCover.bind(this)} type="file"
                               id="upload-cover" style={{display: 'none'}}/>
                        <Button onClick={this.inputClick.bind(this)}><Icon type="upload"/>上传封面</Button>
                    </div>
            )
        }
    }
};
class ActivitiesForm extends Component{
    constructor(props){
        super(props);
        this.state  = {fields:{}};
    }
    formItemLayout = {
        labelCol: {span: 2},
        wrapperCol: {span: 10},
    };
    onFieldChange = (e)=>{
        let values = {};
        let key = e.target.name;
        values[key] = e.target.value;
        this.setState({'fields':Object.assign(this.state.fields,values)});
    };
    onDateChange = (dates,dateString)=>{
        let date = {'startDate':dateString[0],'endDate':dateString[1]};
        this.setState({'fields':Object.assign(this.state.fields,date)});
    };
    render() {
        const dateFormat = 'YYYY/MM/DD';
        return (
                <Form style={{'marginLeft':'25%'}}>
                    <FormItem {...this.formItemLayout} label="名称">
                        <Input name="name" defaultValue={this.props.name} onChange={this.onFieldChange.bind(this)}
                               placeholder='输入活动商品名称'/>
                    </FormItem>
                    <FormItem {...this.formItemLayout} label="原价格">
                        <Input name="price" defaultValue={this.props.price} onChange={this.onFieldChange.bind(this)}
                               placeholder="输入活动商品原价"/>
                    </FormItem>
                    <FormItem {...this.formItemLayout} label="活动价">
                        <Input name="salePrice" defaultValue={this.props.salePrice} onChange={this.onFieldChange.bind(this)}
                               placeholder="输入活动商品活动价"/>
                    </FormItem>
                    <FormItem {...this.formItemLayout} label="活动有效时间">
                        <RangePicker defaultValue={[moment(this.props.startDate, dateFormat), moment(this.props.endDate, dateFormat)]} onChange={this.onDateChange.bind(this)}
                                     style={{width: '100%'}}/>
                    </FormItem>
                    <FormItem {...this.formItemLayout} label="描述">
                        <TextArea name="description" defaultValue={this.props.description} onChange={this.onFieldChange.bind(this)}
                                  style={{height:80}} placeholder="输入活动商品描述信息"/>
                    </FormItem>
                    <FormItem {...this.formItemLayout} label="封面">
                        <Cover cover = {this.props.cover} onChangeCover={this.onChangeCover}/>
                    </FormItem>
                    {/*<FormItem style={{'marginTop':'30px'}}>*/}
                        {/*<Col span={2}>&nbsp;</Col>*/}
                        {/*<Col span={10} style={{textAlign:'right'}}>*/}
                            {/*<Button type="primary" style={{marginRight:'20px'}}>确认</Button>*/}
                            {/*<Button>取消</Button>*/}
                        {/*</Col>*/}
                    {/*</FormItem>*/}
                </Form>
        );
    }
}
export default ActivitiesForm;