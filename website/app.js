/* Global Variables */
const generateButton = document.getElementById('generate');
const zipcode = document.getElementById('zip');
const feeling = document.getElementById('feelings');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

generateButton.addEventListener('click', () => {
  const data = {
    zipcode: zipcode.value,
    feeling: feeling.value,
  };
  console.log(data);
});
