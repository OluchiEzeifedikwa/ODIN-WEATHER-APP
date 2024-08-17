// const img = document.querySelector('img');


//         async function getWeather() {
//             const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=SHUJ7P2SYCBV4RCAJGRYF26YD', {mode: 'cors'});
//             const weatherData = await response.json();
//             console.log(img.src = weatherData.data.images.original.url);
//         }
//         getWeather();



const img = document.querySelector('img');

async function getWeather() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=1fV7xzHM0Gb0M0h6oNaKSUxN0h4It6Q5&s=cloud', {mode: 'cors'});
  const weatherData = await response.json();
  console.log(img.src = weatherData.data.images.original.url);
}
getWeather();
        

const apiKey = 'SHUJ7P2SYCBV4RCAJGRYF26YD';
const apiUrl = '(https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city})'






// async function getWeatherByCity(city) {
//   const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
//   const btn = document.getElementById("btn");
//   const form = document.getElementById('form1');


//   try {
//     const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=SHUJ7P2SYCBV4RCAJGRYF26YD`, {mode: 'cors'});
//     const data = await response.json();
//     return data;
// 	} catch (error) {
// 		throw error;
// 	}
// }
//     console.log(data);
//     console.log(`Weather in ${city}:`);
//     console.log(`Temperature: ${data}°C`);
//     console.log(`Description: ${data.description}`);
//   } catch (error) {
//     console.error(`Error fetching weather for ${city}:`, error);
//   }


//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     getWeatherByCity();
//     });
// }

// getWeatherByCity();



const form = document.getElementById('form');
const input = document.getElementById('input');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const city = input.value.trim();
	if (city) {
		getWeatherByCity(city)
			.then((data) => {
				displayResult(data, city);
			})
			.catch((error) => console.error('Error fetching weather:', error));
	} else {
		alert('Please enter a city');
	}
});


async function getWeatherByCity(city) {
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=SHUJ7P2SYCBV4RCAJGRYF26YD`, {mode: 'cors'});
    const data = await response.json();
    return data;
	} catch (error) {
		throw error;
	}
}

// function displayResult(data, city) {
// 	const resultHTML = `
// 		<h2>Weather in ${city}</h2>
// 		<p>Temperature: ${data.currentConditions.temp}°C</p>
// 		<p>Description: ${data.currentConditions.conditions}</p>
// 	`;
// 	resultDiv.innerHTML = resultHTML;

// }


function displayResult(data, city) {
  const resultDiv = document.getElementById('result');

  const heading = document.createElement('h2');
  heading.textContent = `Weather in ${city}`;

  // Create temperature paragraph element
  const tempPara = document.createElement('p');
  tempPara.textContent = `Temperature: ${data.currentConditions.temp}°C`;

  // Create description paragraph element
  const descPara = document.createElement('p');
  descPara.textContent = `Description: ${data.currentConditions.conditions}`;

  // Append elements to result div
  resultDiv.appendChild(heading);
  resultDiv.appendChild(tempPara);
  resultDiv.appendChild(descPara);
}
