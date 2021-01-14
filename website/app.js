/* Global Variables */
const generateButton = document.getElementById('generate');
const zipcode = document.getElementById('zip');
const feeling = document.getElementById('feelings');

// Api variables
const URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const KEY = '3de64ad60effb9ba2fb9600ffcd8b833';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

generateButton.addEventListener('click', () => {
  const data = {
    zipcode: zipcode.value,
    feeling: feeling.value,
  };

  getTemp(URL, data.zipcode, KEY).then(function (temp) {
    postData('/add', {
      date: newDate,
      temperature: temp.main.temp,
      feeling: data.feeling,
    });
  });
});

const getTemp = async function (URL, zip, key) {
  const response = await fetch(URL + zip + '&appid=' + key);

  try {
    // save fetch result to send it into the POST later
    const temperature = await response.json();

    return temperature;
  } catch (error) {
    console.log('error', error);
  }
};

// Post Data to the server ( the fake javascript object in server file)

// Example POST method implementation:
const postData = async (url = '', data = {}) => {
  console.log(data);
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log(response.headers);
  return response.json(); // parses JSON response into native JavaScript objects
};

postData((url = '/add'), { pog: 'pog' });
