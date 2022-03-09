// Define a function named broadCast. It should define a single parameter, whose value will be a function.
const broadCast = (msgInstruct) => {
    msgInstruct();
}

// Define a function named announceRain that should log this message to the console: "Grab an umbrella. It's going to rain today."

const announceRain = () => {
    console.log("Grab an umbrella. It's going to rain today.");
}

// Define a function named announceClear that should log this message to the console: "Grab your shades and sunscreen. It's going to be sunny and hot today."
const announceClear = () => {
    console.log("Grabs your shades and suncreen. It's going to be sunny and hot today.");
}

// Define a function named weatherStation. It should define a single parameter, whose value will be the day's humidity reading. If the humidity is over 95, then the console should display the rainy weather message. If it is below 95, then the sunny weather message should appear.
const weatherStation = (humidityReading) => {
    if (humidity > 95) {
        adviseWeather(itsRaining);
    }
    else {
        adviseWeather(itsSunny);
    }

}

weatherStation(97);
weatherStation(14);