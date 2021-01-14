const Key = '91cf054104816692d42d1269a11ed750';
const BaseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// small functions to make it readable

const generateButton = document.getElementById('generate');
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

// Post Data =>  string url / data object
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log('error', error);
  }
};

// update ui through DOM
function updateUI(date, temperature, content) {
  document.getElementById('date').innerText = date;
  document.getElementById('temp').innerText = temperature;
  document.getElementById('content').innerText = content;
}

generateButton.addEventListener('click', () => {
  url = BaseURL;

  getWeather(url, Key, getZipCode())
    .then((weatherData = {}) => {
      const data = {
        temperature: weatherData.main.temp,
        date: getCurrentDate(),
        user_response: getUserResponse(),
      };
      return data;
    })
    .then((data = {}) => {
      console.log(data);
      postData('/add', data);
      return data;
    })
    .then((data = {}) => {
      updateUI(data.date, data.temperature, data.user_response);
    });
});
