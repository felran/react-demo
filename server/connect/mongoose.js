// 引入 mongoose 模块
// 端口号省略则默认连接 27017；jiaolandb 是数据库的名称
// mongodb 中不需要建立数据库，当你需要连接的数据库不存在时，会自动创建一个出来。
import mongoose from 'mongoose';

const DB_CONN = 'mongodb://localhost/test';
mongoose.connect(DB_CONN);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('MongoDB Opened!');
});
module.exports = mongoose;
