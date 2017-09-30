import React,{Component} from 'react';
import {Col, Button} from 'antd';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
class ImageCrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crop: {
                x: 0,
                y: 0,
                aspect: 16/9,
                width: 30,
            },
            maxHeight: 90,
        };
    }
    onImageLoaded = (crop,imageEle) => {
        this.imageEle = imageEle;
    };
    onCropComplete = (crop, pixelCrop) => {
        this.setState({crop});
        this.setState({pixelCrop});
    };
    onCropOk = ()=>{
        let crop = this.state.pixelCrop;
        console.log(crop);
        let ctx=this.canvas.getContext('2d');
        ctx.drawImage( this.imageEle, crop.x, crop.y, crop.width, crop.height, 0, 0, 80, 45);
        let src = this.canvas.toDataURL('image/png');
        this.props.onCropOk(src);
    };
    render() {
        return (
                <div>
                    <ReactCrop
                            {...this.state}
                            src={this.props.src}
                            onImageLoaded={this.onImageLoaded}
                            onComplete={this.onCropComplete}
                    />
                    <div>
                        <Col span={4}>&nbsp;</Col>
                        <Col span={20} style={{textAlign:'right'}}>
                            <Button type="primary" style={{marginRight:'20px'}} onClick={this.onCropOk.bind(this)}>确认</Button>
                            <Button onClick={this.props.cancelCrop}>取消</Button>
                        </Col>
                    </div>
                    <canvas style={{display:'none'}} ref={canvas=>this.canvas=canvas}>

                    </canvas>
                </div>
        );
    }
}
export default ImageCrop;