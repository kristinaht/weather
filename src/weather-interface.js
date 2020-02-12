$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val(""); 

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElement(response);
     }
    }

    request.open("GET", url, true);
    request.send();

    const getElement = function(response) {
      $('.showHumidity').text('The humidity in ${city} is ${response.main.humidity}%');
      $('.showTEmp').text('The temperature in Kelvins is ${response.main.temp} degrees.');
    }
  });
});


// fetch('api string w/ API_KEY').then((responce) => {responce.json()}).then((obj) => {
//   let questions = obj.results[0].question;
// });

// async function bears() {
//   let apiCall = await fetch('api string w/ API_KEY');
//   let obj = await apiCall.json();

//   return obj;
// }