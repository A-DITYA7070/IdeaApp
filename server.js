const express=require('express');
const config = require('./config/configs.js');
const app=express();

app.listen(config.PORT,()=>{
    console.log(`server is running on port http://localhost:${config.PORT}`);
});