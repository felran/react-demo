import React,{Component} from 'react';
import {Form, Button, DatePicker, Input, Upload, Icon,message} from 'antd';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const TextArea  = Input.TextArea;

const ActivitiesForm = Form.create({
    onFieldsChange(props, changedFields) {
        // props.onChange(changedFields);
        console.log(props);
    },
    mapPropsToFields(props) {
        console.log(props);
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})((props)=>{
    const {getFieldDecorator} = props.form;
    const image =  props.form.getFieldValue('image');
    const formItemLayout = {
        labelCol: {span: 5},
        wrapperCol: {span: 19},
    };
    const uploadProps = {
        name: 'file',
        // action: '//jsonplaceholder.typicode.com/posts/',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
            <Form>
                <FormItem {...formItemLayout} label="名称">
                    {getFieldDecorator('name', {
                        initialValue: "123",
                        rules: [{ required: true, message: '活动商品名称不能为空' }]
                    })(<Input placeholder='输入活动商品名称'/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="原价格">
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: '商品原价格不能为空' }]
                    })(<Input placeholder="输入活动商品原价"/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="活动价">
                    {getFieldDecorator('salePrice', {
                        rules: [{required: true, message: '商品活动价不能为空'}]
                    })(<Input placeholder="输入活动商品活动价"/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="活动有效时间">
                    {getFieldDecorator('date', {
                        rules: [{required: true, message: '活动有效时间不能为空'}]
                    })(<RangePicker style={{width: '100%'}}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="描述">
                    {getFieldDecorator('description')(<Input placeholder="输入活动商品描述信息"/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="封面">
                    <Upload {...uploadProps}>
                        <Button><Icon type="upload"/>上传封面</Button>
                    </Upload>
                </FormItem>
            </Form>
    );
});
export default ActivitiesForm;