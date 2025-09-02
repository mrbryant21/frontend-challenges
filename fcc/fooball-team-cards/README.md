Build a Set of Football Team Cards
Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

In this lab, you will build a set of football team cards. The user should be able to use the dropdown menu and filter between the different players based on their positions.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a footballTeam object with the following properties: team, year, headCoach, players.

The team property should contain the name of the team as a string.

The year property should contain the year as a number.

The headCoach property should contain the name of the head coach as a string.

The players property should be an array containing at least four elements.

Each element in the players array should be an object with properties name, position, isCaptain.

The name property should contain the name of the player as a string.

The position property should have one of the following values: "forward", "midfielder", "defender", or "goalkeeper".

The isCaptain property should have value of a boolean. One of the players should have their isCaptain property set to true.

You should display the coach, team and year values on the page. These values should be displayed in the HTML elements with the id values of head-coach, team and year.

You should display the players data on the page inside the #player-cards element, each player should be displayed in a div with class of player-card, and nested in it, an h2 containing the name of the player, and (Captain) in case of the player being captain, and a p containing Position: and the position of the player.

<div class="player-card">
  <h2>Sergio Batista</h2>
  <p>Position: midfielder</p>
</div>
<div class="player-card">
  <h2>(Captain) Diego Maradona</h2>
  <p>Position: midfielder</p>
</div>
When the dropdown menu is used to select one of the positions, only the .player-card elements for players of that position should be present. If the "All Players" option is selected, then all of the players should display on the page.