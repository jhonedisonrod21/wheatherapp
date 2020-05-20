const {getInfo} = require('./lugar');
const {getWheather} = require('./clima')
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        description:'la direccion de la ciudad que se quiere buscar',
        demand:true
    }
}).argv;

getInfo(argv.direccion).then((res)=>{
    getWheather(res.lat,res.log).then((response)=>{
        console.log(`el clima en ${res.direccion} es de ${response} grados celcius`);
    }).catch(console.log);
}).catch(console.log);

