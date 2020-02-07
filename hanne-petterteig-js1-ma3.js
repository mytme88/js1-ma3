// Question 1
const sum = (a, b) => a - b;
console.log(sum(10, 5));

// Question 2
fetch("https://api.rawg.io/api/games?genres=sports")
  .then(response => {
    return response.json();
  })
  .then(gamesJSON => {
    const games = gamesJSON.results;
    games.forEach(game => console.log(game.name));
  })
  .catch(() => {
    document.location.href = "/error.html";
  });

// Question 3
const p = "These cats are outrageous.";
console.log(p.replace("cats", "giraffes"));

// Question 4
// Assuming our location is https://my.site.com?userId=7
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let userId = params.get("userId");

if (!userId) {
  document.location.href = "/third.html";
} else {
  userId = parseInt(userId, 10);
  if (userId < 10) {
    document.location.href = "/first.html";
  } else if (userId >= 10) {
    document.location.href = "/second.html";
  }
}

// Question 5
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
container.removeChild(btn);

// Question 6
const parrots = document.createElement("li");
const textnode = document.createTextNode("Parrots");
parrots.className = "parrots";
parrots.appendChild(textnode);
const animalList = document.querySelector(".animals");
animalList.insertBefore(parrots, animalList.childNodes[2]);

// Question 7
const ratingDiv = document.querySelector(".rating");
fetch("https://api.rawg.iso/api/games/3801")
  .then(response => {
    return response.json();
  })
  .then(gamesJSON => {
    const rating = gamesJSON.rating;
    ratingDiv.innerText = `Rating: ${rating}`;
  })
  .catch(error => {
    console.error("Encountered error:", error);
  });
