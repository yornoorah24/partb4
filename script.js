
async function getweather() {
    let city = document.getElementById("city").value.trim();

    if (city === "") {
        return alert("Enter a city name.");
    }

    try {
        let res = await fetch("https://wttr.in/" + encodeURIComponent(city) + "?format=j1");
        let data = await res.json();

        let w = data.current_condition[0];

        document.getElementById("result").innerHTML =
            "<h3>" + city + "</h3>" +
            "Temperature: " + w.temp_C + "°C<br>" +
            "Condition: " + w.weatherDesc[0].value + "<br>" +
            "Humidity: " + w.humidity + "%";

    } catch (error) {
        document.getElementById("result").innerHTML =
            "Unable to get weather information.";
    }
}
