$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val(""); 

    // We are passing in two parameters; resolve will determine what happens when the promise is resolved while reject will handle the promise if it's rejected.
    let promise = new Promise(function(resolve, reject) {
      // We create a new XMLHttpRequest object along with a new XMLHttpRequest method: onload(). onload() is called once the request is complete.
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      //Since onload() waits until the request is complete, it works perfectly with a promise. If the response has a 200 status, we’ll resolve the promise, which will return the response from the request. If the API call doesn't have a 200 status, the promise will be rejected. We'll call a new instance of JavaScript's built-in Error class. The specific error will be the statusText of our request. (A quick reminder: statusText is a built-in prototype that can be called on a XMLHttpRequest object.)
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      //Our promise also handles opening and sending the request. We now have an async API call wrapped inside a promise, waiting to be called.
      request.open("GET", url, true);
      request.send();
    });
    
    //We've built a promise from scratch. Promises have a number of prototypes, including the then() method. While it works in a similar fashion to jQuery's then() method, note the differences in syntax. If the promise is resolved, we'll parse the JSON and return the temperature and humidity.
    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $(`showTemp`).text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    //If it's rejected, we'll take advantage of the Error object's message prototype to return the error. For instance, if we submit a request without inputting a city, we'll get the following: There was an error processing your request: Bad Request.
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
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