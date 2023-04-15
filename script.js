const apiKey = 'b2e427a221msh408b7a9f483aadep1713f4jsn8791af05449f'; // replace with your actual API key
const form = document.querySelector('#car-model-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting

  const userInput = document.querySelector('#car-model-input').value;

  fetch(`https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467`)
    .then(response => response.json())
    .then(data => {
      // display the data on the webpage
      const resultContainer = document.querySelector('#car-model-result');
      resultContainer.innerHTML = `
        <h2>${data.model}</h2>
        <p>Make: ${data.make}</p>
        <p>Year: ${data.year}</p>
        <p>Price: $${data.price}</p>
      `;
    })
    .catch(error => {
      // handle error
      console.error(error);
    });
});
