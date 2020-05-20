const axios = require('axios');

let getWheather = async(lat,long)=>{
    const petition = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=810e86a813c81727e9db21679cb0d25c&lon=${long}&lat=${lat}&units=metric`).catch((err) => {
        throw new Error('Tubimos un problema identificando el clima para este lugar');
    });    
    return petition.data.main.temp;
}

module.exports = {
    getWheather
}