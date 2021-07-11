const axios = require('axios')
const weather = require('./weather')

module.exports.getWeather = getWeather;

async function getWeather(req,res){
    const opts = req.body;
    try{
        if(opts == null){
            throw new Error("Invalid request");
        }else{
            result = await getGeocode(opts.address);
            return result;
        }
    }catch(err){
        console.log("Spmething went wrong!! Unable to fetch weather")
    }
} 

function getGeocode(address){
    return new Promise((resolve,reject)=>{
        let encodedAddress = encodeURIComponent(address);
        let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
        axios.get(geocodeUrl).then((response)=>{
            if(response.body.status === 'ZERO_RESULTS'){
                throw new Error('snap! something went wrong!!!')
            }else{
                var lng = response.data.results[0].geometry.location.lng;
                var lat = response.data.results[0].geometry.location.lng;
                weather.getWeather(lat,lng).then((result)=>{
                    resolve(result);
                })
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    })
}