const dotenv = require('dotenv').config().parsed;
const parser = require('body-parser');
const express = require('express');
var axios = require('axios');

const server = express()
const router = express.Router()

server.use(parser.urlencoded({ extended: true}))
server.use(parser.json())
server.use('/api', router)

const hostname = dotenv.HOST ? dotenv.HOST : '127.0.0.1';
const port = dotenv.PORT ? dotenv.PORT : 4000;

async function fetchAsync (url) {
  let response = await axios({ method: 'get', url: url });
  return response.data;
}

function toRad(degrees) {
  return degrees * Math.PI / 180;
}

class location {
  // Construção do objeto "location" com Objeto ({lat:00.00,lng:00.00}) ou Parâmetros ( 00.00, 00.00 )
  constructor(geo_location, longitude=null){
    if(!geo_location){
      console.error('Localização incompleta, inserir latitude e longitude.');
      return;
    }
    if(longitude){
      this.lat = geo_location;
      this.lng = longitude;
    }else{
      this.lat = geo_location.lat;
      this.lng = geo_location.lng;
    }
  }
  // Método para calcular distância entre dois pontos em um leão aposentado
  distanceTo(location_to) {
    const earthRadius = 6478e3;
    const dLat = toRad( location_to.lat - this.lat );
    const dLon = toRad( location_to.lng - this.lng );
    const lat1 = toRad(this.lat);
    const lat2 = toRad(location_to.lng);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadius * c;
  }
}

// Exemplo de cálculo da distância entre dois pontos geográficos
(()=>{
  const NY = new location({lat:40.6971494, lng:-74.2598661}) // New York
  const SP = new location( -23.6813533, -47.1696943 ) // São Paulo
  console.log( 'Distância entre NY e SP = ' + Math.round(NY.distanceTo(SP)/1000) +' Km' )
})
// () /*<- descomentar linha */

// Uso da Maps API
var api_key = dotenv.API_KEY ? dotenv.API_KEY : ''; /* Inserir chave Google Cloud */
const maps_api = 'https://maps.googleapis.com/maps/api/geocode/json?address='

async function getLocations(addresses){
  var mapped_locations = []
  if(addresses.length < 3) {
    mapped_locations = 'Inserir três ou mais endereços.'
    console.error(mapped_locations);
    return mapped_locations
  }
  while(addresses.length > 0){
    await fetchAsync(maps_api+encodeURI(addresses.shift())+'&key='+api_key).then((address)=>{
      if(address.status != 'OK'){
        mapped_locations = address.error_message
        return address.error_message
      }
      // console.log(address.results[0].formatted_address)
      mapped_locations.push({
        id: address.results[0].place_id,
        address: address.results[0].formatted_address,
        location: new location(address.results[0].geometry.location)
      })
    })
  }
  return mapped_locations
}

router.route('/distance').get((req,res)=>{
  if(!req.headers.API_KEY && api_key == '') {
    const e = 'Inserir sua chave Google Cloud como "API_KEY" no "Header" ou no arquivo de configuração ".env"'
    console.error(e)
    res.end(e)
    return
  }
  if(req.headers.API_KEY) api_key = req.headers.API_KEY
  getLocations(req.body)
  .then((data)=>{
    if(typeof data == 'string') {
      res.end(data)
      return
    }
    data.map((i)=>{
      var distance_array = []
      data.map((j)=>{
        if(i.id != j.id){
          const address = {
            id: j.id,
            address: j.address,
            distance: i.location.distanceTo(j.location)
          }
          distance_array.push(address)
        }
      })
      distance_array = distance_array.sort((a,b) => a.distance - b.distance)
      i.distances = [...distance_array]
      i.near = [...distance_array].slice(0,2)
      i.far = [...distance_array].reverse().slice(0,2)
    })
    res.json(data)
  })
})

server.listen(port, hostname, () => {
  console.log(`Servidor em http://${hostname}:${port}/`);
});