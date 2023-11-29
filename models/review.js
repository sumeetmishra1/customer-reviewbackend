const Sequelize= require('sequelize');
const sequelize=require('../util/database');
const review=sequelize.define('review',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      pros:{
        type:Sequelize.STRING,
        allowNull:false
      },
      cons:{
        type:Sequelize.STRING,
        allowNull:false
      },
      rating:{
        type:Sequelize.STRING,
        allowNull:false
      }
})
module.exports=review;