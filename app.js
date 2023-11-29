const express=require('express');
const bodyparser=require('body-parser');
const sequelize=require('./util/database');
const routes=require('./routes/mainroutes');
var cors=require('cors');
const app=express();
app.use(cors());
app.use(bodyparser.json({extented:false}))
app.use(routes)
sequelize.sync().then(res=>{
    app.listen(3000);
}).catch(err=>console.log(err));
