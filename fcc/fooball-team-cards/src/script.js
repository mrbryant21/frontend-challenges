const footballTeam = {
  team: "Brazil",
  year: 2025,
  headCoach: "Carlo Ancelloti",
  players: [
    {
      name: "Vinicius Junior",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Lucas Paqueta",
      position:"midfielder",
      isCaptain: false
    },
    {
      name: "Ederson",
      position:"goalkeeper",
      isCaptain: false
    },
    {
      name: "Alex Sandro",
      position:  "defender",
      isCaptain: true
    },
    {
      name: "Rodrygo Goes",
      position: "forward",
      isCaptain: false
    },
  ],
};

const headCoach = document.getElementById('head-coach');
const team = document.getElementById('team');
const year = document.getElementById('year');

headCoach.innerHTML = `${footballTeam.headCoach}`;
team.innerHTML = `${footballTeam.team}`;
year.innerHTML = `${footballTeam.year}`;

const players = footballTeam.players;
const playersContainer = document.querySelector("#player-cards");
const selectPosition = document.getElementById('players');

function showPlayers(playersArray) {

  playersContainer.innerHTML = "";

  playersArray.forEach((player) => {
    
    const card = document.createElement("div");
    card.className = "player-card";

    const heading = document.createElement("h2");
    
    heading.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const positionPara = document.createElement("p");
    positionPara.textContent = `Position: ${player.position}`;

    
    card.appendChild(heading);
    card.appendChild(positionPara);

    
    playersContainer.appendChild(card);
  });
}

function filterPlayers() {
    const selectedPosition = selectPosition.value;

    let filteredPlayers;

    if(selectedPosition === "all"){
        filteredPlayers = players;
    }else {
        filteredPlayers = players.filter(player => 
            player.position === selectedPosition
        );
    }
    showPlayers(filteredPlayers);
}
selectPosition.addEventListener("change", filterPlayers);
showPlayers(players);