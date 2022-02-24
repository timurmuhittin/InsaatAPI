

const express =require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const contentRoutes = require('./src/routes/ContentRoutes');
const projectRoutes = require('./src/routes/ProjectRoutes');
const customerRoutes = require('./src/routes/CustomerRoutes');


const app = express();
var path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


port="8085";
var server = app.listen(port , function(){
    console.log('Server is running');
    console.log(process.env);
    console.log("API Key Değeri :  ",process.env.API_KEY);
});

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',contentRoutes,projectRoutes,customerRoutes);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl+ 'not found'});
});