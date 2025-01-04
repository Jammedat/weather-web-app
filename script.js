function fetchByGeo(lat, lon){
    const apiKey = "d09228b6ffc5a7c6018d80caf37b2b8d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('city not found')
            }
            return response.json()
        })
        .then(data => {
            document.getElementById('location').innerText = data.name + ', ' + data.sys.country
            document.getElementById('temperature').innerText = data.main.temp + ' °C'
            // document.getElementById('date').innerText = new Date().toLocaleDateString()
            document.getElementById('time').innerText = new Date().toLocaleTimeString()
            
            document.getElementById('humidity').innerText = `HUMIDITY  ${data.main.humidity}%`
            document.getElementById('visibility').innerText = `VISIBILITY ${data.visibility / 1000} km`
            document.getElementById('airPressure').innerText = `AIR PRESSURE  ${data.main.pressure} hPa`
            document.getElementById('wind').innerText = `WIND ${data.wind.speed} m/s`
            
            const weather = data.weather[0].main.toLowerCase()
            const body = document.body
            switch (weather) {
                case 'clear':
                    body.style.backgroundImage = "url('img/backgrounds/sunny.jpeg')";
                    break;
                case 'rain':
                case 'drizzle':
                    body.style.backgroundImage = "url('img/backgrounds/rainy.jpg')";
                    break;
                case 'clouds':
                    body.style.backgroundImage = "url('img/backgrounds/cloudy.jpeg')";
                    break;
                case 'snow':
                    body.style.backgroundImage = "url('img/backgrounds/snowy.jpg')";
                    break;
                case 'thunderstorm':
                    body.style.backgroundImage = "url('img/backgrounds/thunder.jpg')";
                    break;
                default:
                    body.style.backgroundImage = "url('img/backgrounds/default.jpg')";
                    break;
            }
            body.style.backgroundSize = 'cover'
            body.style.backgroundPosition = 'center'

           
        })

        .catch(error => { 
            alert(error.message)
        })
    }


document.getElementById('search-button').addEventListener('click', ()=>{
    const city = document.querySelector('.search-bar input').value
    const apiKey = "d09228b6ffc5a7c6018d80caf37b2b8d"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    

    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('city not found')
            }
            return response.json()
        })
        .then(data => {
            document.getElementById('location').innerText = data.name + ', ' + data.sys.country
            document.getElementById('temperature').innerText = data.main.temp + ' °C'
            // document.getElementById('date').innerText = new Date().toLocaleDateString()
            document.getElementById('time').innerText = new Date().toLocaleTimeString()
            
            document.getElementById('humidity').innerText = `HUMIDITY:  ${data.main.humidity}%`
            document.getElementById('visibility').innerText = `VISIBILITY: ${data.visibility / 1000} km`
            document.getElementById('airPressure').innerText = `AIR PRESSURE:  ${data.main.pressure} hPa`
            document.getElementById('wind').innerText = `WIND: ${data.wind.speed} m/s`
            
            const weather = data.weather[0].main.toLowerCase()
            const body = document.body
            switch (weather) {
                case 'clear':
                    body.style.backgroundImage = "url('img/backgrounds/sunny.jpeg')";
                    break;
                case 'rain':
                case 'drizzle':
                    body.style.backgroundImage = "url('img/backgrounds/rainy.jpg')";
                    break;
                case 'clouds':
                    body.style.backgroundImage = "url('img/backgrounds/cloudy.jpeg')";
                    break;
                case 'snow':
                    body.style.backgroundImage = "url('img/backgrounds/snowy.jpg')";
                    break;
                case 'thunderstorm':
                    body.style.backgroundImage = "url('img/backgrounds/thunder.jpg')";
                    break;
                default:
                    body.style.backgroundImage = "url('img/backgrounds/default.jpg')";
                    break;
            }
            body.style.backgroundSize = 'cover'
            body.style.backgroundPosition = 'center'

           
        })

        .catch(error => { 
            alert(error.message)
        })
})

document.addEventListener("DOMContentLoaded", ()  =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            position =>{
                const {latitude, longitude} = position.coords
                fetchByGeo(latitude, longitude)
            },
            error =>{
                alert("Geolocation not available")
            }
        )
    } else{
        alert('geolocation not suported by the browser')
    }
})

