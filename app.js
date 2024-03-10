const express = require('express');
const { sequelize, Product, ProductCategory, ProductInventory, Discount } = require('./schema');

const app = express();


sequelize.sync({force:true})
.then(result=>{
    console.log(result)
    app.listen(4000)
})
.catch(err=>console.log(err))