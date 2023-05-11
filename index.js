const showButtons = () => document.querySelectorAll("[rate]").forEach(element => element.style.display = "inline-block");

let answer;
const getDadJoke = async () => {
  const randomJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
    Accept: "application/json",
    },
  });
  const random = await randomJoke.json();
  answer = random.joke;
  document.getElementById("jokeText").innerHTML = `"${random.joke}"`;
  showButtons()
}

const getNorrisJoke = async () => {
  const randomJoke1 = await fetch("https://api.chucknorris.io/jokes/random");
  const random1 = await randomJoke1.json();
  answer = random1.value
  document.getElementById("jokeText").innerHTML = `"${answer}"`;
  showButtons()
}

const getJoke = () => {
  const num = parseInt(Math.random()*100)
  if (num % 2) getDadJoke()
  else getNorrisJoke()
}

let reportJokes = [];
const addRating = (score) => {
  let found = reportJokes.find(item => item.joke === answer)
  if (found) {found.score = score}
  else {  
    let report = {
    joke: answer,
    score: score,
    date: new Date().toISOString()
  };
  reportJokes.push(report)
  }
  console.log(reportJokes)
}

const getWeather = async () => {
  const weather = await fetch ("https://api.openweathermap.org/data/2.5/weather?lat=41.3828939&lon=2.1774322&appid=878d505b1bafe0572eb03ee5e3a85481")
  const response = await weather.json()
  const currentWeather = (Math.floor(response.main.temp))-273
  const iconId = response.weather[0].icon
  document.getElementById("weatherAPI").innerHTML = `| ${currentWeather}º`
  document.getElementById("weatherIcon").src = `http://openweathermap.org/img/w/${iconId}.png`
}
getWeather()