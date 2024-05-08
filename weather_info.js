
const city = 'Auckland'
const apiKey ="8ec66af874d74cd79c7235805240705";
const apiUrl =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

/* const requestOptions = {
    headers: {
        'Authorization': 'Bearer ' + apiKey,
    }
} */

function fetchInfo() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not working!');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const weatherIconUrl = data.current.condition.icon;
            console.log(weatherIconUrl);

            //Assuming you have a specific element with id="weather-details"
            const weatherDetailsElement = document.getElementById('weather-details');
            
            // Modify this part based on the structure of your fetched data
            const weatherDescription = data.current.condition.text;
            const temperature = data.current.temp_c;

            // Update weather icon here:
            const weatherIcon = document.getElementById('weather-icon');
            weatherIcon.innerHTML = `
                <img src=http:${weatherIconUrl}>
            `;

            // Update the weather-details div with the fetched weather information
            weatherDetailsElement.innerHTML = `
                <h2>Auckland</h2>
                <p>Description: ${weatherDescription} </p>
                <p>Temperature: ${temperature}°C</p>
                <!-- Add more weather details as needed -->
            `;
        })
        .catch(error => {
            console.error('Error', error);
        });
}

fetchInfo();

