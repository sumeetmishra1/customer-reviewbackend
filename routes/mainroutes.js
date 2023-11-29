const express=require('express');
const router=express.Router();
const routecontroller=require('../controllers/routecontroller');
router.post('/addreview',routecontroller.addreview)
router.get('/getreview/:name',routecontroller.getreview)
module.exports=router;