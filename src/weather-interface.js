import { WeatherService } from './../src/weather-service.js';

$(document).ready(function() {

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }

  });
});


//Tips from Dusty:

//Tip #1
// fetch('api string w/ API_KEY').then((responce) => {responce.json()}).then((obj) => {
//   let questions = obj.results[0].question;
// });

//Tip #2
// async function bears() {
//   let apiCall = await fetch('api string w/ API_KEY');
//   let obj = await apiCall.json();

//   return obj;
// }