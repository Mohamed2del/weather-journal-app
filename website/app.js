const Key = '91cf054104816692d42d1269a11ed750';
const BaseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// small functions to make it readable

// getDate
function getCurrentDate() {
  let d = new Date();
  return d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
}

// get zipcode
function getZipCode() {
  const zipCodeElement = document.getElementById('zip');
  return zipCodeElement.value;
}

// get the feeling
function getUserResponse() {
  const textInputElement = document.getElementById('feelings');
  //TODO: Check if value is missing
  return textInputElement.value;
}

const getWeather = async (url = '', key, zipCode = '') => {
  // concante the link for the api request
  const weather_query_url = url + zipCode + '&appid=' + key;

  // fetch  weather
  const request = await fetch(weather_query_url);
  try {
    const weatherData = await request.json();
    return weatherData;
  } catch (error) {
    console.log('error', error);
    alert(error);
  }
};

function updateUI(date, temperature, content) {
  document.getElementById('date').innerText = date;
  document.getElementById('temp').innerText = temperature;
  document.getElementById('content').innerText = content;
}
