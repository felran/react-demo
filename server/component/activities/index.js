import express from 'express';
const router = express.Router();
router.get('getAll',(req,res)=>{
    let result = [{name:"1",price:20.00,salePrice:15.00},{name:"2",price:10.00,salePrice:5.00},{name:"3",price:8.00,salePrice:3.00}];
    res.send(JSON.stringify(result));
});
export default router;