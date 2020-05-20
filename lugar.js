const axios = require('axios');


const getInfo = async(direccion) => {
    const encodedDireccion = encodeURI(direccion);
    const petition = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedDireccion}`,
        headers: { 'x-rapidapi-key': 'c1b0c5e67amshbd1abc24b715c3dp1dceb5jsnf5b3bb882e04' }
    });
    let results = await petition.get();
    if (results.data.Results.length === 0) {
        throw new Error(`el lugar ${direccion} no se encontro en la base de datos`)
    }else{
        const finalRes = results.data.Results[0];
        return {
            direccion:finalRes.name,
            lat:finalRes.lat,
            log:finalRes.lon
        }
    }
}



module.exports = {
    getInfo
}

