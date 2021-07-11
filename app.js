
const https = require('https');
const app = require('express');
const controller = require('./utils/geocode')

const PORT = 3000;

app.post("/getWeather",controller.getWeather)

https.createServer(app).listen(PORT,()=>{
    console.log("==================================EXPRESS CONNECTED========================================")
})
