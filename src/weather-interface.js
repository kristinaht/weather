$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[[API-KEY-GOES-HERE]]`)
      .then(function(response) {
        return response.json();
        // We use the then() method on the promise that fetch() returns. Then we take the response from the resolve promise and call json() on it. This is because the body of a fetch response is a stream that our code must read and convert to JSON.
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
        //The json() method reads a stream and then returns a promise that resolves when once the stream is complete and fully converted to JSON. Our first promise (created with fetch()) makes the API call while our second promise (created with json()) converts the response into JSON.
      });
  
    //Once that is complete, we can use then() once again and use our getElements() callback.
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