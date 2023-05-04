const getJoke = async () => {
    try {
      const randomJoke = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const json = await randomJoke.json();
      document.getElementById("jokeText").innerHTML = `"${json.joke}"`;
    } catch (err) {
      console.log(err.message);
    }
  };