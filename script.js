async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'fa9569cc48444bb1abf83612241906';  // Replace 'your_api_key' with your actual WeatherAPI.com key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (true) {
            const ResultBox = document.getElementById('weather-result');
            ResultBox.innerHTML = ''; // Clear previous results
            
            const icon = document.createElement('img');
            icon.src = data.current.condition.icon;
            icon.alt = data.current.condition.text;

            const Cityname = document.createElement('div');
            Cityname.className = 'city-name';
            Cityname.innerText = `${data.location.name}`;

            const Temperature = document.createElement('div');
            Temperature.className = 'temperature';
            Temperature.innerHTML = `<strong>Temperature:</strong> ${data.current.temp_c} °C (${data.current.temp_f} °F)`;

            const FeelsLike = document.createElement('div');
            FeelsLike.className = 'feels-like';
            FeelsLike.innerHTML = `<strong>Feels like:</strong> ${data.current.feelslike_c} °C (${data.current.feelslike_f} °F)`;

            const Description = document.createElement('div');
            Description.className = 'description';
            Description.innerHTML = `<strong>Description:</strong> ${data.current.condition.text}`;

            const Wind = document.createElement('div');
            Wind.className = 'wind';
            Wind.innerHTML = `<strong>Wind:</strong> ${data.current.wind_mph} mph (${data.current.wind_kph} kph), ${data.current.wind_dir}`;

            const Humidity = document.createElement('div');
            Humidity.className = 'humidity';
            Humidity.innerHTML = `<strong>Humidity:</strong> ${data.current.humidity}%`;

            const Pressure = document.createElement('div');
            Pressure.className = 'pressure';
            Pressure.innerHTML = `<strong>Pressure:</strong> ${data.current.pressure_mb} mb (${data.current.pressure_in} in)`;

            const Visibility = document.createElement('div');
            Visibility.className = 'visibility';
            Visibility.innerHTML = `<strong>Visibility:</strong> ${data.current.vis_km} km (${data.current.vis_miles} miles)`;

            const UV = document.createElement('div');
            UV.className = 'uv';
            UV.innerHTML = `<strong>UV Index:</strong> ${data.current.uv}`;

            const AirQuality = document.createElement('div');
            AirQuality.className = 'air-quality';
            AirQuality.innerHTML = `
                <strong>Air Quality:</strong>
                <ul>
                    <li>CO: ${data.current.air_quality.co}</li>
                    <li>NO2: ${data.current.air_quality.no2}</li>
                    <li>O3: ${data.current.air_quality.o3}</li>
                    <li>SO2: ${data.current.air_quality.so2}</li>
                    <li>PM2.5: ${data.current.air_quality.pm2_5}</li>
                    <li>PM10: ${data.current.air_quality.pm10}</li>
                    <li>US EPA Index: ${data.current.air_quality['us-epa-index']}</li>
                    <li>GB DEFRA Index: ${data.current.air_quality['gb-defra-index']}</li>
                </ul>
            `;

            ResultBox.style.display = 'block';
            ResultBox.appendChild(Cityname);
            ResultBox.appendChild(icon);
            ResultBox.appendChild(Temperature);
            ResultBox.appendChild(FeelsLike);
            ResultBox.appendChild(Description);
            ResultBox.appendChild(Wind);
            ResultBox.appendChild(Humidity);
            ResultBox.appendChild(Pressure);
            ResultBox.appendChild(Visibility);
            ResultBox.appendChild(UV);
            ResultBox.appendChild(AirQuality);
        } else {
            alert(data.error.message);
        }
    } catch (error) {
        alert('Error fetching data');
        console.error(error);
    }
}
