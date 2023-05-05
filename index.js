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