$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    asyncApiCall();

    (async () => {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[API-KEY-GOES-HERE]`);
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    })();

    const getElements = function(response) {
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