import mongoose from '../../connect/mongoose';

const Schema = mongoose.Schema;
const Activities = new Schema({
    name:{type:String},
    price:{type:Number},
    salePrice:{type:Number},
    date:{type:Date}
});
module.exports = mongoose.model('Activities', Activities);
