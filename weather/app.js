Vue.createApp({
    data() {
        return {
            weatherData: {
                latitude: 36.5323,
                longitude: -116.9325,
                current_weather: true,
                temperature_unit: 'fahrenheit',
                daily: "temperature_2m_min,temperature_2m_max",
                timezone: "America/Boise"
            },
            forecast: {}
        }
    },
    methods : {
        getWeather: function() {
            var queryString = Object.keys(this.weatherData)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.weatherData[key])}`)
            .join('&');

            fetch("https://api.open-meteo.com/v1/forecast?" + queryString)
            .then(response => response.json())
            .then(result => {
                this.forecast = result;
                console.log(this.forecast);
            })
            .catch(error => console.log('error', error));
        }
    },
    created : function() {
        this.getWeather();
    }
}).mount("#app");