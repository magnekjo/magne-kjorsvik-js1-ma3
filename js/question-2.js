// Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".gamesContainer");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const gamesInfo = results.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < gamesInfo.length; i++) {
      // console.log(gamesInfo[i].name);
      // console.log(gamesInfo[i].rating);
      // console.log(gamesInfo[i].tags.length);

      gamesContainer.innerHTML += `<div class="game">Name: ${gamesInfo[i].name}<br>Rating: ${gamesInfo[i].rating}<br>Tags: ${gamesInfo[i].tags.length} </div>`;

      if (i === 8) {
        break;
      }
    }
  } catch (error) {
    console.log("An error has occured");
    gamesContainer.innerHTML = "An error has occured.<br>" + error;
  }
}

getGames();
