import express from 'express';
import ActivitiesService from './activitiesService';
const router = express.Router();
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/',(req,res)=>{
    res.send('activities home page');
});
router.get('/getAll',(req,res)=>{
    ActivitiesService.findAll(result=>{
        console.log(result);
        res.status(200).send(result);
    });
});
export default router;