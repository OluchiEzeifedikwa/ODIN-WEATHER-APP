const img = document.querySelector('img');


        async function getWeather() {
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=1fV7xzHM0Gb0M0h6oNaKSUxN0h4It6Q5&s=cloud', {mode: 'cors'});
            const weatherData = await response.json();
            console.log(img.src = weatherData.data.images.original.url);
        }
        getWeather();

        


        