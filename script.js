function refreshWeather() {
    // Simulate fetching weather data (replace with actual API call)
    const fakeData = {
        location: "New York, USA",
        temperature: "25°C",
        weather: "Sunny",
        icon: "sun.png",
    };

    // Update UI with new data
    document.querySelector('.location').textContent = fakeData.location;
    document.querySelector('.temperature').textContent = fakeData.temperature;
    document.querySelector('.weather').textContent = fakeData.weather;
    document.querySelector('.icon img').src = fakeData.icon;
}
