const sequelize=require('../util/database');
const review=require('../models/review');
const { where } = require('sequelize');
exports.addreview=async(req,res,next)=>{
    const name=req.body.name;
    const pros=req.body.pros;
    const cons=req.body.cons;
    const rating=req.body.rating;
    const data= await review.create({
        name:name,
        pros:pros,
        cons:cons,
        rating:rating
    })
    res.status(201).json({newExpense:data});
}
exports.getreview=async(req,res,next)=>{
    const name=req.params.name;
    const data=await review.findAll( {where:{name:name}});
    res.status(200).json({allReviews:data});
    
}