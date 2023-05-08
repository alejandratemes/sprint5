const showButtons = () => document.querySelectorAll("[rate]").forEach(element => element.style.display = "inline-block");
let answer;
const getJoke = async () => {
  const randomJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
    Accept: "application/json",
    },
  });
  const random = await randomJoke.json();
  document.getElementById("jokeText").innerHTML = `"${random.joke}"`;
  answer = random.joke;
  showButtons()
};

let reportJokes = [];
const addRating = score => {
  let report = {
    joke: answer,
    score: score,
    date: new Date().toISOString()
  };
  reportJokes.push(report);
  console.log(reportJokes)
}

const getWeather = async () => {
  const weather = await fetch ("https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=878d505b1bafe0572eb03ee5e3a85481")
  const response = await weather.json()
  const currentWeather = response.weather[0].description
  document.getElementById("weatherAPI").innerHTML = currentWeather
}
getWeather()