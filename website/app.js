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

  getTemp(URL, data.zipcode, KEY);
});

const getTemp = async function (URL, zip, key) {
  const response = await fetch(URL + zip + '&appid=' + key);

  try {
    // save fetch result to send it into the POST later
    const temperature = await response.json();
    console.log(temperature);
    return temperature;
  } catch (error) {
    console.log('error', error);
  }
};
